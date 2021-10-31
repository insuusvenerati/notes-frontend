import {
  AppBar,
  Button,
  ButtonGroup,
  CircularProgress,
  createStyles,
  Fab,
  alpha,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import ChatIcon from "@material-ui/icons/Chat";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import { AuthContext } from "context/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { NotesContext } from "../context/notes";
import { ThemeContext } from "../context/theme";
import { LoginButton } from "./LoginButton";
import {
  AddNoteButton,
  ShowArhivedNotesButton,
  ShowYourNotesButton,
} from "./ToolbarButtons";

const useStyles = makeStyles((theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    root: {
      justifyContent: "flex-end",
    },
    header: {
      display: "flex",
    },
    secondaryToolbar: {
      display: "flex",
      height: 80,
      marginLeft: 50,
      [theme.breakpoints.up("xs")]: {
        marginLeft: 0,
      },
    },
    search: {
      position: "relative",
      justifySelf: "flex-end",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      // width: "100%",
      // [theme.breakpoints.up("sm")]: {
      //   marginLeft: theme.spacing(3),
      //   width: "auto",
      // },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: "100%",
    },
  }),
);

const Navbar = () => {
  const classes = useStyles();

  const { loading, searchInput, setSearchInput } = useContext(NotesContext);
  const { darkState, setDarkState } = useContext(ThemeContext);
  const { signOut, cookies, setSigninOpen } = useContext(AuthContext);
  const router = useRouter();

  const token = cookies.token;
  const user = cookies.user;

  function handleSearch(event) {
    setSearchInput(event.target.value);
  }

  return (
    <Grid container>
      <AppBar
        className="border-b-4 border-orange-600"
        elevation={0}
        position="static"
      >
        <Grid item xs={12}>
          <Toolbar variant="dense">
            <Typography variant="h6">
              <Link href="/">Notes</Link>
            </Typography>
            <ListItem style={{ justifyContent: "flex-end" }}>
              <Fab
                onClick={() =>
                  setDarkState(darkState === "dark" ? "light" : "dark")
                }
                size="medium"
                color="secondary"
              >
                {darkState === "dark" ? (
                  <BrightnessHighIcon />
                ) : (
                  <Brightness4Icon />
                )}
              </Fab>
              <LoginButton
                setSigninOpen={() =>
                  setSigninOpen({ open: true, loading: false })
                }
                signOut={signOut}
                token={token}
              />
            </ListItem>
          </Toolbar>
        </Grid>
        <Grid item xs={12}>
          <Toolbar classes={{ root: classes.secondaryToolbar }}>
            <Typography variant="h4">
              Hello {user ? user : "User"}, welcome to Notes!
            </Typography>
          </Toolbar>
        </Grid>

        <Grid item md={3} xs={11}>
          <Toolbar>
            <ButtonGroup style={{ maxHeight: 40 }} variant="contained">
              <AddNoteButton>
                <Link href="add">Add Note</Link>
              </AddNoteButton>
              <ShowYourNotesButton>
                <Link href="mynotes">My Notes</Link>
              </ShowYourNotesButton>
              <ShowArhivedNotesButton>
                <Link href="notes">Notes</Link>
              </ShowArhivedNotesButton>
              <Button
                color="primary"
                onClick={() => {
                  router.push("/chat");
                }}
              >
                <ChatIcon />
              </Button>
            </ButtonGroup>
          </Toolbar>

          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  router.push("/search").catch((err) => console.error(err));
                }}
              >
                <InputBase
                  onChange={handleSearch}
                  value={searchInput}
                  placeholder="Search a note"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setSearchInput("")}
                        size="small"
                      >
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </form>
            </div>
            <Button
              onClick={() => router.reload()}
              style={{ marginLeft: 8 }}
              variant="contained"
              color="secondary"
            >
              Refresh
            </Button>
            {loading && <CircularProgress color="inherit" size={20} />}
          </Toolbar>
        </Grid>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
