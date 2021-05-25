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

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 12px;
  box-shadow: 0 0 2px 0 ${({ theme }) => theme.colors.darkPurple};
  margin-top: 128px;
  overflow-y: auto;
  width: 80vw;
  height: 80vh;

  @media (min-width: 800px) {
    width: 50vw;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-family: sans-serif;
  font-weight: bold;
  margin: 12px 24px 24px;
`;

const StyledCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ItemWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: space-between;
  padding: 12px;
  width: 80%;
`;

const ItemNumber = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Item = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const DoneButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.succes};
  width: 52px;
  height: 24px;
`;

const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.error};
  width: 52px;
  height: 24px;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <ViewWrapper>
        <CardWrapper>
          <Title>Things to do:</Title>
          <StyledCard>
            <ItemWrapper>
              <ItemNumber>1</ItemNumber>
              <Item>Wash the dishes</Item>
              <ButtonWrapper>
                <DoneButton whileTap={{ scale: 0.95 }}>Done</DoneButton>
                <DeleteButton whileTap={{ scale: 0.95 }}>Delete</DeleteButton>
              </ButtonWrapper>
            </ItemWrapper>
          </StyledCard>
          <StyledCard>
            <ItemWrapper>
              <ItemNumber>2</ItemNumber>
              <Item>Take a dog for a walk</Item>
              <ButtonWrapper>
                <DoneButton whileTap={{ scale: 0.95 }}>Done</DoneButton>
                <DeleteButton whileTap={{ scale: 0.95 }}>Delete</DeleteButton>
              </ButtonWrapper>
            </ItemWrapper>
          </StyledCard>
          <StyledCard>
            <ItemWrapper>
              <ItemNumber>3</ItemNumber>
              <Item>Make a bed</Item>
              <ButtonWrapper>
                <DoneButton whileTap={{ scale: 0.95 }}>Done</DoneButton>
                <DeleteButton whileTap={{ scale: 0.95 }}>Delete</DeleteButton>
              </ButtonWrapper>
            </ItemWrapper>
          </StyledCard>
        </CardWrapper>
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
