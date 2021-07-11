import React, { Children } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import Lists from "views/Lists";
import List from "views/List";

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
              <Route
                path="/list/:id"
                render={(routeProps) => <List {...routeProps} />}
              />
              <Route path="/">
                <Lists />
              </Route>
              <Redirect to="/" />
            </Switch>
          </View>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Main;
