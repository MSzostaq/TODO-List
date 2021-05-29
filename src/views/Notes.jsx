import React from "react";
import styled from "styled-components";
import Button from "components/Button";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  height: 100%;
`;

const ViewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Notes = () => {
  return (
    <Wrapper>
      <ViewWrapper>
        <Button>Dashboard</Button>
      </ViewWrapper>
    </Wrapper>
  );
};

export default Notes;
