import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import Button from "components/Button";
import Modal from "components/Modal";
import NewRequestPopup from "popups/NewRequestPopup";

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

const AddNewButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttonGrey};
  color: ${({ theme }) => theme.colors.icons};
  width: 48px;
  height: 32px;
`;

const Sidebar = () => {
  const [modal, setModal] = useState(null);

  function onCreate() {
    setModal(null);
  }

  function onNewRequestButtonClick() {
    setModal({ title: "New request", onCreate });
  }

  return (
    <Wrapper>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
      <StyledLink to="/other">Other</StyledLink>
      <AddNewButton onClick={onNewRequestButtonClick}>Create</AddNewButton>
    </Wrapper>
  );
};

export default Sidebar;
