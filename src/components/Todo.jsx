import React from "react";
import styled from "styled-components";
import Checkbox from "components/Checkbox";
import Icon from "components/Icon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;

const DragIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const DragIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
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
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

const CloseButton = styled.button`
  background-color: transparent;
  display: flex;
  width: 26px;
  height: 26px;
`;

const CloseIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  width: 24px;
  height: 24px;
`;

const Todo = ({ className, onRemove, onRename, onStatusChange, todo }) => {
  return (
    <Wrapper>
      <DragIconWrapper>
        <DragIcon icon="drag" />
        <Checkbox value={todo.isDone} onChange={onStatusChange} />
      </DragIconWrapper>
      <Name isDone={todo.isDone}>{todo.name}</Name>
      <CloseButton onClick={() => onRemove(todo.id)}>
        <CloseIcon icon="close" />
      </CloseButton>
    </Wrapper>
  );
};

export default Todo;
// <NameInput value={todo.name} onChange={onRename} />
