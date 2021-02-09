import React from "react";
import { useTheme, useThemeUpdate } from "./ContextProvider";

export default function ThemeComponent() {
  const darkTheme = useTheme();
  const setDarkTheme = useThemeUpdate();
  const theme = {
    color: darkTheme ? "#CCC" : "#333",
    backgroundColor: darkTheme ? "#333" : "#CCC",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={setDarkTheme}>Change Theme</button>
      <div style={theme}>Theme Window</div>
    </>
  );
}
