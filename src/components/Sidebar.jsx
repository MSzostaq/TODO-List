import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "components/Button";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 128px;
  height: 100%;
`;

const StyledLink = styled(NavLink)`
  width: 128px;
  height: 100px;
`;

const StyledButton = styled(Button)`
  width: 128px;
  height: 100px;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <StyledButton>
        <p>Dashboard</p>
        <StyledLink to="/dashboard" />
      </StyledButton>
      <StyledButton>
        <p>Dashboard</p>
        <StyledLink to="/other" />
      </StyledButton>
    </Wrapper>
  );
};

export default Sidebar;
