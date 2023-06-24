import "./App.css";
import React from "react";
import Main from "./components/Main";
import { CarsProvider } from "./hooks/useCars";
import { StepsProvider } from "./hooks/useSteps";

function App() {
  return (
    <StepsProvider>
      <CarsProvider>
        <Main />
      </CarsProvider>
    </StepsProvider>
  );
}

export default App;
