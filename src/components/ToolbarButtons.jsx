import { Button } from "@material-ui/core";
import { blue, deepOrange, green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";

export const AddNoteButton = withStyles((theme) => ({
  root: {
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: deepOrange[700],
    },
    color: theme.palette.getContrastText(deepOrange[500]),
  },
}))(Button);

export const ShowYourNotesButton = withStyles((theme) => ({
  root: {
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
    color: theme.palette.getContrastText(deepOrange[500]),
  },
}))(Button);

export const ShowArhivedNotesButton = withStyles((theme) => ({
  root: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
    color: theme.palette.getContrastText(deepOrange[500]),
  },
}))(Button);
