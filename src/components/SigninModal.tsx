import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { AuthContext } from "context/auth";
import { useContext } from "react";

export const SignInModal = (): JSX.Element => {
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
        open={signinOpen}
        onClose={() => setSigninOpen(false)}
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
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            error={signinError.error}
          />
          {/* {signinError.message &&
            signinError.message.map((error, i) => (
              <p key={i}> {error?.extensions?.exception.data.message[0].messages[0].message} </p>
            ))} */}
          {signinError && signinError.message}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSigninOpen(false)}>Cancel</Button>
          <Button onClick={signIn}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
