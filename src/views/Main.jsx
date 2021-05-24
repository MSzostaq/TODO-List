import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import Dashboard from "views/Dashboard";

const Wrapper = styled.div`
  background-color: #000;
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
          <Switch>
            <Route path="dashboard">
              <Dashboard />
            </Route>
            <Redirect to="dashboard" />
          </Switch>
        </View>
      </Wrapper>
    </Router>
  );
};

export default Main;
