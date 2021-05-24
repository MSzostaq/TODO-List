import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import Dashboard from "views/Dashboard";
import Other from "views/Other";
import Sidebar from "components/Sidebar";

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
      <ThemeProvider theme={theme}>
        <Wrapper>
          <View>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/other">
                <Other />
              </Route>
              <Redirect to="/dashboard" />
            </Switch>
            <Sidebar />
          </View>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Main;
