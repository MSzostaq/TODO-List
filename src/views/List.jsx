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
  max-height: 300px;
  overflow: hidden;
  position: relative;
  width: 60%;

  @media (min-width: 800px) {
    width: 40%;
  }

  @media (min-width: 1250px) {
    width: 30%;
  }
`;

const List = ({ todoList }) => {
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

export default connect(mapStateToProps)(List);
