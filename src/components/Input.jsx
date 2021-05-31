import styled from "styled-components";

const Input = styled.input`
  background-color: #fff;
  border: 1px solid ${({ invalid }) => (invalid ? "#ce5a5a" : "#bdbdbd")};
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;

  &:focus {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
      0 0 0 4px rgba(103, 128, 159, 0.5);

    ${({ invalid }) =>
      invalid &&
      `
  &:focus {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
      0 0 0 4px rgba(206, 90, 90, 0.3);
  `};
  }
`;

export default Input;
