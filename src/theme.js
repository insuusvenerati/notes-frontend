import { createMuiTheme } from "@material-ui/core";

/**
 * Generates a Material UI theme given two colors and a pallete type.
 * @param {string} mainPrimaryColor Hex formatted color used as the primary color
 * @param {string} mainSecondaryColor Hex formatted color used as the secondary color
 * @param {string} palletType "dark" | "light"
 */

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
