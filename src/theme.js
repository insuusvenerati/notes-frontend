import { createMuiTheme } from "@material-ui/core";

function myTheme(mainPrimaryColor, mainSecondaryColor, palletType) {
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
