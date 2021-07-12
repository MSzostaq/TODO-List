import React, { useRef, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import clamp from "lodash/clamp";
import { addTodo, REMOVE_TODO, UPDATE_TODO_STATUS } from "actions/todosActions";
import { UPDATE_LIST_ITEMS_ORDER } from "actions/todoListsActions";
import { ENTER } from "constants/keys";
import { getTodosById } from "selectors";
import Todo from "components/Todo";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 96px;
  position: relative;
  height: 100%;
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 8px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 96px;
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.icons};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  line-height: 32px;
  padding-left: 4px;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 8px;
  padding: 0 8px;
  height: 40px;
  width: 100%;

  &:focus {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
      0 0 0 2px rgba(103, 128, 159, 0.5);
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
  const [inputValue, setInputValue] = useState("");
  const positions = useRef([]).current;

  function onKeyDown(event) {
    if (event.keyCode === ENTER) {
      event.preventDefault();
      onTodoAdd(inputValue);
      setInputValue("");
    }
  }

  function onTodoAdd(name) {
    dispatch(addTodo({ name, todoListId: todoList.id }));
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

  return (
    <Wrapper>
      <Header>
        <Name>{todoList.name}</Name>
        <Input
          autoFocus
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="What are you up to?"
        />
      </Header>
      <ItemsWrapper>
        <Items>
          {todoList.items.length > 0 &&
            todoList.items.map((id, i) => (
              <Todo
                key={id}
                index={i}
                todo={todosById[id]}
                onItemDrag={onItemDrag}
                onRemove={onTodoRemove}
                onStatusChange={(value) => onTodoStatusChange(id, value)}
                setPosition={setPosition}
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
