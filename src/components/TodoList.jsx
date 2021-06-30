import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTodo, REMOVE_TODO, UPDATE_TODO_STATUS } from "actions/todosActions";
import { ENTER } from "constants/keys";
import { getTodosById } from "selectors";
import Todo from "components/Todo";

const Wrapper = styled.div`
  padding-top: 56px;
  position: relative;
  height: 100%;
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 8px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 56px;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 0 8px;
  height: 40px;
  width: 100%;

  &:focus {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
      0 0 0 2px rgba(103, 128, 159, 0.5);
`;

const ItemsWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
`;

const Items = styled.div`
  padding: 8px;
`;

const TodoList = ({ className, dispatch, todosById, todoList }) => {
  const [inputValue, setInputValue] = useState("");

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

  return (
    <Wrapper>
      <Header>
        <Input
          autoFocus
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="What are You up to?"
        />
      </Header>
      <ItemsWrapper>
        <Items>
          {todoList.items.length > 0 &&
            todoList.items.map((id) => (
              <Todo
                key={id}
                todo={todosById[id]}
                onRemove={onTodoRemove}
                onStatusChange={(value) => onTodoStatusChange(id, value)}
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
