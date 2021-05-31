import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { REMOVE_TODO } from "actions/todosActions";

import { getTodosById } from "selectors";
import Todo from "components/Todo";

const Wrapper = styled.div``;

const TodoList = ({ className, dispatch, todosById, todoList }) => {
  console.log(todosById);
  function onTodoRemove(id) {
    dispatch({ type: REMOVE_TODO, payload: { id } });
  }
  // function onTodoStatusChange, onTodoRename
  return (
    <Wrapper>
      {todoList.items.length > 0 &&
        todoList.items.map((id) => (
          <Todo key={id} todo={todosById[id]} onRemove={onTodoRemove} />
        ))}
    </Wrapper>
  );
};

const mapStateToProps = (state, props) => ({
  todosById: getTodosById(state),
});

export default connect(mapStateToProps)(TodoList);
