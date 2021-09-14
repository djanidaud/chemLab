import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Main from "./main/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
