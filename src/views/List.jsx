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
  max-height: 600px;
  overflow-y: auto;
  position: relative;
  width: 60%;
  height: auto;

  @media (min-width: 800px) {
    max-height: 560px;
    width: 40%;
  }

  @media (min-width: 1250px) {
    max-height: 500px;
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
