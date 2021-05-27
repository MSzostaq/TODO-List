import styled from "styled-components";

const StyledAsterisk = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

const Asterisk = () => {
  return <StyledAsterisk>*</StyledAsterisk>;
};

export default Asterisk;
