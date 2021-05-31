import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 5px solid #aaa;
  color: ${({ theme }) => theme.colors.error};
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 20px;
  height: 20px;

  &:focus {
    box-shadow: 0 0 0 1px rgba(103, 128, 159, 0.5);
  }
`;

const Checkbox = () => {
  return <Input type="checkbox" />;
};

export default Checkbox;
