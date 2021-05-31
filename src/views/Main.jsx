import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import Lists from "views/Lists";
import ListModal from "views/ListModal";

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
            <Route path="/">
              <Lists />
            </Route>
            <Route path="/list">
              <ListModal />
            </Route>
          </View>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Main;
