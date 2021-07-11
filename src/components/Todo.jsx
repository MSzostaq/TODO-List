import React from "react";
import styled from "styled-components";
import Checkbox from "components/Checkbox";
import Icon from "components/Icon";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 0;
`;

const DragHandle = styled.div`
  display: flex;
  justify-content: center;
`;

const DragIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

// const NameInput = styled.input`
//   color: ${({ theme }) => theme.colors.darkGrey};
//   font-size: ${({ theme }) => theme.fontSize.m};
// `;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.icons};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 20px;
  margin: 2px 12px;
  text-align: left;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  width: 70%;
`;

const CloseButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 24px;
  height: 24px;
`;

const CloseIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.grey};
  width: 16px;
  height: 16px;
`;

const Todo = ({ className, onRemove, onRename, onStatusChange, todo }) => {
  return (
    <Wrapper>
      <DragHandle>
        <DragIcon icon="drag" />
      </DragHandle>
      <Checkbox value={todo.isDone} onChange={onStatusChange} />
      <Name isDone={todo.isDone}>{todo.name}</Name>
      <CloseButton onClick={() => onRemove(todo.id)}>
        <CloseIcon icon="cancel_16" />
      </CloseButton>
    </Wrapper>
  );
};

export default Todo;
// <NameInput value={todo.name} onChange={onRename} />
