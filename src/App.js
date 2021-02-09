import React from "react";
import ContextProvider from "./ContextProvider";
import ThemeComponent from "./ThemeComponent";

export default function App() {
  return (
    <ContextProvider>
      <ThemeComponent />
    </ContextProvider>
  );
}
