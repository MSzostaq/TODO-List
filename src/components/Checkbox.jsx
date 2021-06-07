import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const Box = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.buttonGrey};
  border-radius: 4px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const Tick = styled(Icon)``;

const Checkbox = ({ className, value, onChange }) => {
  function onBoxClick() {
    onChange(!value);
  }

  return <Box onClick={onBoxClick}>{value && <Tick icon="approved" />}</Box>;
};

export default Checkbox;
