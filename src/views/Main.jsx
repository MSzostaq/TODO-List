import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import Notes from "views/Notes";
import Reminders from "views/Reminders";
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
              <Route path="/reminders">
                <Reminders />
              </Route>
              <Route path="/notes">
                <Notes />
              </Route>
              <Redirect to="/reminders" />
            </Switch>
            <Sidebar />
          </View>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Main;
