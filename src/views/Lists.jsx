import React from "react";
import styled from "styled-components";
import { BrowserRouter as Route } from "react-router-dom";
import ListModal from "views/ListModal";

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

const Lists = () => {
  return (
    <Wrapper>
      <ViewWrapper>
        <p>hello</p>
        <Route path="/list/:id">
          <ListModal />
        </Route>
      </ViewWrapper>
    </Wrapper>
  );
};

export default Lists;
