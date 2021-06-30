import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTodoListById } from "selectors";
import TodoList from "components/TodoList";

const View = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;

const ListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.darkPurple};
  height: 80vh;
  overflow: hidden;
  position: relative;
  width: 30%;
`;

const ListModal = ({ todoList }) => {
  return (
    <View>
      <ListWrapper>
        <TodoList todoList={todoList} />
      </ListWrapper>
    </View>
  );
};

const mapStateToProps = (state) => ({
  todoList: getTodoListById(state, 1),
});

export default connect(mapStateToProps)(ListModal);