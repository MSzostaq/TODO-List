import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { getTodoListById } from "selectors";
import Icon from "components/Icon";
import TodoList from "components/TodoList";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Popup = styled(motion.div)`
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0 0.3);
  color: #000;
  padding: 56px 0;
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  width: 420px;
`;

const ListModal = ({ todoList }) => {
  return (
    <Overlay>
      <Popup>
        <TodoList todoList={todoList} />
      </Popup>
    </Overlay>
  );
};

const mapStateToProps = (state) => ({
  todoList: getTodoListById(state, 1),
});

export default connect(mapStateToProps)(ListModal);
