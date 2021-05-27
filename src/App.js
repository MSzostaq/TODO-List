import React from "react";
import styled from "styled-components";
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

function App() {
  return (
    <StyledApp>
      <GlobalProvider>
        <ModalsProvider>
          <Routes />
          <Modals />
          <AppNotifications />
        </ModalsProvider>
      </GlobalProvider>
    </StyledApp>
  );
}

export default App;
