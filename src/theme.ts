import { createMuiTheme, Theme } from "@material-ui/core";

function myTheme(
  mainPrimaryColor: string,
  mainSecondaryColor: string,
  palletType: "dark" | "light" | undefined
): Theme {
  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
    overrides: {
      MuiCard: {
        root: {
          margin: 4,
        },
      },
    },
  });

  return theme;
}

export default myTheme;
