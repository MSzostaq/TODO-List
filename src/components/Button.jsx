import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  padding: 4px;
`;

export default Button;
