import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const Box = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.buttonGrey};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  width: 24px;
  height: 24px;
`;

const Tick = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  width: 16px;
  height: 16px;
`;

const Checkbox = ({ className, value, onChange }) => {
  function onBoxClick() {
    onChange(!value);
  }

  return <Box onClick={onBoxClick}>{value && <Tick icon="approved_16" />}</Box>;
};

export default Checkbox;
