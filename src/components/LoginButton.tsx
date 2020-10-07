import { Button } from "@material-ui/core";

type LoginButtonTypes = {
  token: string;
  setSigninOpen: () => void;
  signOut: () => void;
};

export const LoginButton = ({ token, setSigninOpen, signOut }: LoginButtonTypes): JSX.Element => (
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
