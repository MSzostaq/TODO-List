import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

export default Button;
