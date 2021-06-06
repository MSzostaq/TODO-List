import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTodo, REMOVE_TODO, UPDATE_TODO_STATUS } from "actions/todosActions";
import { ENTER } from "constants/keys";
import { getTodosById } from "selectors";
import Todo from "components/Todo";

const Wrapper = styled.div``;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 4px;
  margin: 8px;
`;

const Items = styled.div``;

const TodoList = ({ className, dispatch, todosById, todoList }) => {
  const [inputValue, setInputValue] = useState("");

  function onKeyDown(event) {
    console.log(event);
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
      <Input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={onKeyDown}
      />
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
    </Wrapper>
  );
};

const mapStateToProps = (state, props) => ({
  todosById: getTodosById(state),
});

export default connect(mapStateToProps)(TodoList);
