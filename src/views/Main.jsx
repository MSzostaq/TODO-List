import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import styled from "styled-components";
import Lists from "views/Lists";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const View = styled.div`
  height: 100%;
`;

const Main = () => {
  return (
    <Router>
      <Wrapper>
        <View>
          <Route path="/">
            <Lists />
          </Route>
          <Redirect to="/" />
        </View>
      </Wrapper>
    </Router>
  );
};

export default Main;
