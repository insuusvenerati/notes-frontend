import { ThemeProvider } from "@material-ui/core";
import { blue, deepOrange, deepPurple, purple } from "@material-ui/core/colors";
import { useSsrLocalStorage } from "hooks/useLocalStorage";
import React from "react";
import myTheme from "../theme";

export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [darkState, setDarkState] = useSsrLocalStorage("theme", "dark");
  const palletType = darkState === "dark" ? "dark" : "light";
  const mainPrimaryColor = darkState ? purple[500] : blue[500];
  const mainSecondaryColor = darkState ? deepPurple[900] : deepOrange[500];

  const theme = myTheme(mainPrimaryColor, mainSecondaryColor, palletType);

  return (
    <ThemeContext.Provider value={{ darkState, setDarkState }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
