import { Button } from "@material-ui/core";

export const LoginButton = ({ token, setSigninOpen, signOut }) => (
  <div style={{ marginLeft: 6 }}>
    {!token ? (
      <Button onClick={() => setSigninOpen(true)} variant="contained">
        Sign In
      </Button>
    ) : (
      <Button onClick={signOut} variant="contained">
        Sign Out
      </Button>
    )}
  </div>
);
