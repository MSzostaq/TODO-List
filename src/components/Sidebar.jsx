import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.icons};
  cursor: pointer;
  font-weight: bold;
  margin: 16px;
  text-decoration: none;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <StyledLink to="/reminders">Reminders</StyledLink>
      <StyledLink to="/notes">Notes</StyledLink>
    </Wrapper>
  );
};

export default Sidebar;
