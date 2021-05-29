import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "components/Icon";
import Input from "components/Input";

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

const StyledInput = styled(Input)`
  position: absolute;
  top: 80px;
  color: #333;
  width: 300px;
  height: 32px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 12px;
  box-shadow: 0 0 2px 0 ${({ theme }) => theme.colors.darkPurple};
  overflow-y: auto;
  position: absolute;
  bottom: 4%;
  width: 80vw;
  height: 80vh;

  @media (min-width: 800px) {
    width: 44vw;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-family: sans-serif;
  font-weight: bold;
  margin: 12px 24px 24px;
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  width: 80%;
`;

const ItemNumber = styled.h1`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Item = styled.h1`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledButton = styled(motion.button)`
  background-color: transparent;
  display: flex;
  width: 26px;
  height: 26px;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  width: 24px;
  height: 24px;
`;

const Reminders = () => {
  return (
    <Wrapper>
      <ViewWrapper>
        <StyledInput />
        <Card>
          <Title>Things to do:</Title>
          <CardItem>
            <ItemWrapper>
              <ItemNumber>1</ItemNumber>
              <Item>Wash the dishes</Item>
              <StyledButton whileTap={{ scale: 0.95 }}>
                <StyledIcon icon="close" />
              </StyledButton>
            </ItemWrapper>
          </CardItem>
          <CardItem>
            <ItemWrapper>
              <ItemNumber>2</ItemNumber>
              <Item>Take a dog for a walk</Item>
              <StyledButton whileTap={{ scale: 0.95 }}>
                <StyledIcon icon="close" />
              </StyledButton>
            </ItemWrapper>
          </CardItem>
          <CardItem>
            <ItemWrapper>
              <ItemNumber>3</ItemNumber>
              <Item>Make a bed</Item>
              <StyledButton whileTap={{ scale: 0.95 }}>
                <StyledIcon icon="close" />
              </StyledButton>
            </ItemWrapper>
          </CardItem>
        </Card>
      </ViewWrapper>
    </Wrapper>
  );
};

export default Reminders;
