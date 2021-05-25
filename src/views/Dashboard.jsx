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

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 12px;
  box-shadow: 0 0 2px 0 ${({ theme }) => theme.colors.darkPurple};
  margin-top: 128px;
  width: 80vw;
  height: 80vh;

  @media (min-width: 800px) {
    width: 60vw;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: sans-serif;
  font-weight: bold;
  margin: 12px;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <ViewWrapper>
        <Card>
          <Title>TODO</Title>
        </Card>
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
