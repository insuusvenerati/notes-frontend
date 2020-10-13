import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { AuthContext } from "context/auth";
import { useContext } from "react";

export const SignInModal = () => {
  const {
    signinDetails,
    signinOpen,
    setSigninOpen,
    setSigninDetails,
    signIn,
    signinError,
  } = useContext(AuthContext);

  return (
    <>
      <Dialog
        open={!!signinOpen.open}
        onClose={() => setSigninOpen({ open: false, loading: false })}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>Please sign in to add notes</DialogContentText>
          <TextField
            onChange={(e) => setSigninDetails({ ...signinDetails, email: e.target.value })}
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            error={signinError.error}
          />
          <TextField
            onChange={(e) => setSigninDetails({ ...signinDetails, password: e.target.value })}
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            error={signinError.error}
          />

          {signinError && signinError.message}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSigninOpen({ open: false, loading: false })}>Cancel</Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={signinOpen.loading}
            onClick={signIn}
          >
            Submit
          </Button>
          {signinOpen.loading && (
            <CircularProgress
              style={{ position: "absolute", right: "8%" }}
              color="inherit"
              size={24}
            />
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
