import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTodoListById } from "selectors";
import Icon from "components/Icon";
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
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 4px;
  position: absolute;
  top: 16px;
  left: 16px;
`;

const BackIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  transform: rotate(90deg);
  width: 24px;
  height: 24px;
`;

const ListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.darkPurple};
  overflow-y: hidden;
  position: relative;
  width: 100%;

  @media (min-width: 700px) {
    border-radius: 12px;
    width: 60%;
  }

  @media (min-width: 1250px) {
    width: 30%;
  }
`;

const List = ({ todoList }) => {
  return (
    <View>
      <BackButton to="/">
        <BackIcon icon="caretDown" />
      </BackButton>
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
