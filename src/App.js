import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import GlobalProvider from "components/GlobalProvider";
import ModalsProvider from "components/ModalsProvider";
import Modals from "components/Modals";
import Notifications from "components/Notifications";
import Routes from "components/Routes";

const AppNotifications = styled(Notifications)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const StyledApp = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <ModalsProvider>
            <Routes />
            <Modals />
            <AppNotifications />
          </ModalsProvider>
        </GlobalProvider>
      </ThemeProvider>
    </StyledApp>
  );
};

export default App;
