import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getTodoListById } from "selectors";
import { ESC } from "constants/keys";
import TodoList from "components/TodoList";

const View = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.colors.darkGrey};
  overflow-y: hidden;
  position: absolute;
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
  const history = useHistory();

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function onOverlayClick() {
    history.push("/");
  }

  function onKeyDown(event) {
    if (event.keyCode === ESC) {
      event.preventDefault();
      history.push("/");
    }
  }

  function onListClick(event) {
    event.stopPropagation();
  }

  return (
    <View onClick={onOverlayClick}>
      <ListWrapper onClick={onListClick}>
        <TodoList todoList={todoList} />
      </ListWrapper>
    </View>
  );
};

const mapStateToProps = (state, props) => ({
  todoList: getTodoListById(state, props.match.params.id),
});

export default connect(mapStateToProps)(List);
