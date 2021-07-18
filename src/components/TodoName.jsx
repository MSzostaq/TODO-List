import React, { forwardRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  text-align: left;
  width: 100%;
`;

const Resizer = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  grid-area: 1 / 1 / 2 / 2;
  line-height: 20px;
  white-space: pre-wrap;
  visibility: hidden;
  width: 100%;
  height: auto;
`;

const StyledTextArea = styled.textarea`
  color: ${({ theme }) => theme.colors.icons};
  font-size: ${({ theme }) => theme.fontSize.m};
  grid-area: 1 / 1 / 2 / 2;
  line-height: 20px;
  overflow: hidden;
  resize: none;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  width: 100%;
  height: auto;
`;

const TodoName = forwardRef(
  ({ className, isDone, value, onChange, onKeyDown }, ref) => {
    function onValueChange(event) {
      onChange(event.target.value);
    }

    return (
      <Wrapper className={className}>
        <Resizer>{value}</Resizer>
        <StyledTextArea
          ref={ref}
          isDone={isDone}
          value={value}
          rows={1}
          onChange={onValueChange}
          onKeyDown={onKeyDown}
        />
      </Wrapper>
    );
  }
);

export default TodoName;
