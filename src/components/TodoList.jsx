import React, { createRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import clamp from "lodash/clamp";
import {
  addTodo,
  REMOVE_TODO,
  UPDATE_TODO_NAME,
  UPDATE_TODO_STATUS,
} from "actions/todosActions";
import {
  UPDATE_LIST_ITEMS_ORDER,
  UPDATE_LIST_NAME,
} from "actions/todoListsActions";
import { ENTER } from "constants/keys";
import { getTodosById } from "selectors";
import Icon from "components/Icon";
import Todo from "components/Todo";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 48px;
  position: relative;
  height: 100%;
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  padding: 8px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 48px;
`;

const Name = styled.input`
  color: ${({ theme }) => theme.colors.icons};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  line-height: 32px;
  padding-left: 4px;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 32px;
  heigth: 32px;
`;

const AddIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  width: 24px;
  height: 24px;
`;

const ItemsWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;
  height: auto;
`;

const Items = styled.div`
  padding: 8px;
`;

const TodoList = ({ className, dispatch, todosById, todoList }) => {
  const positions = useRef([]).current;

  function getRefs(items) {
    return items.reduce((acc, item) => {
      acc[item.id] = createRef();
      return acc;
    }, {});
  }
  const [refs, setRefs] = useState(() => getRefs(todoList.items));

  useEffect(() => {
    setRefs(getRefs(todoList.items));
    const lastItem = todoList.items[todoList.items.length - 1];
    const itemToFocus = refs[lastItem.id].current;
    if (itemToFocus) {
      itemToFocus.focus();
    }
  }, [todoList.items]);

  function getTargetIndex(index, yOffset) {
    let target = index;
    const buffer = 5;
    const { top, height } = positions[index];
    const bottom = top + height;

    // moving down
    if (yOffset > 0) {
      const nextItem = positions[index + 1];
      if (nextItem === undefined) {
        return index;
      }
      const swapOffset =
        Math.abs(bottom - (nextItem.top + nextItem.height / 2)) + buffer;
      if (yOffset > swapOffset) {
        target = index + 1;
      }

      // moving up
    } else if (yOffset < 0) {
      const prevItem = positions[index - 1];
      if (prevItem === undefined) {
        return index;
      }
      const prevBottom = prevItem.top + prevItem.height;
      const swapOffset =
        Math.abs(top - (prevBottom - prevItem.height / 2)) + buffer;
      if (yOffset < -swapOffset) {
        target = index - 1;
      }
    }
    return clamp(target, 0, positions.length);
  }

  function setPosition(index, offset) {
    positions[index] = offset;
  }

  function swapItems(arr, index, targetIndex) {
    const swapped = [...arr];
    const item = swapped[index];
    swapped[index] = swapped[targetIndex];
    swapped[targetIndex] = item;
    return swapped;
  }

  function onItemDrag(index, dragOffset) {
    const targetIndex = getTargetIndex(index, dragOffset);
    if (targetIndex !== index) {
      dispatch({
        type: UPDATE_LIST_ITEMS_ORDER,
        payload: {
          id: todoList.id,
          order: swapItems(todoList.items, index, targetIndex),
        },
      });
    }
  }

  function onAddButtonClick() {
    dispatch(addTodo({ todoListId: todoList.id }));
  }

  function onTodoRemove(id) {
    dispatch({ type: REMOVE_TODO, payload: { id, todoListId: todoList.id } });
  }

  function onTodoStatusChange(id, isDone) {
    dispatch({
      type: UPDATE_TODO_STATUS,
      payload: { id, isDone },
    });
  }

  function onNameChange(event) {
    dispatch({
      type: UPDATE_LIST_NAME,
      payload: {
        id: todoList.id,
        name: event.target.value,
      },
    });
  }

  function onTodoNameChange(id, name) {
    dispatch({
      type: UPDATE_TODO_NAME,
      payload: { id, name },
    });
  }

  function onTodoNameKeyDown(event) {
    if (event.keyCode === ENTER) {
      event.preventDefault();
      dispatch(addTodo({ todoListId: todoList.id }));
    }
  }

  return (
    <Wrapper>
      <Header>
        <Name
          type="text"
          value={todoList.name}
          onChange={onNameChange}
          placeholder="Name"
        />
        <AddButton onClick={onAddButtonClick}>
          <AddIcon icon="add" />
        </AddButton>
      </Header>
      <ItemsWrapper>
        <Items>
          {todoList.items.length > 0 &&
            todoList.items.map((id, i) => (
              <Todo
                ref={refs[id]}
                key={id}
                index={i}
                onItemDrag={onItemDrag}
                onRemove={onTodoRemove}
                onNameChange={(value) => onTodoNameChange(id, value)}
                onNameKeyDown={onTodoNameKeyDown}
                onStatusChange={(value) => onTodoStatusChange(id, value)}
                setPosition={setPosition}
                todo={todosById[id]}
              />
            ))}
        </Items>
      </ItemsWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state, props) => ({
  todosById: getTodosById(state),
});

export default connect(mapStateToProps)(TodoList);
