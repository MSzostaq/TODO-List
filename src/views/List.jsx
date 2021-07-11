import React from "react";
import { NavLink } from "react-router-dom";
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

const BackButton = styled(NavLink)`
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0 8px 8px 0;
  padding: 8px;
  position: absolute;
  top: 16px;
  left: 16px;
`;

const ListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.darkPurple};
  overflow-y: hidden;
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
      <BackButton to="/">Back</BackButton>
      <ListWrapper>
        <TodoList todoList={todoList} />
      </ListWrapper>
    </View>
  );
};

const mapStateToProps = (state, props) => ({
  todoList: getTodoListById(state, props.match.params.id),
});

export default connect(mapStateToProps)(List);
