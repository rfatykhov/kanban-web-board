import React from "react";
import { AppContainer, CardContainer } from "./styles";

import { Column } from "./components/Column";
import { Card } from "./components/Card";

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Build Kanban Board" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Learn React" />
      </Column>
    </AppContainer>
  );
};

export default App;
