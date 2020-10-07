import { Button } from "@material-ui/core";
import { Dispatch, SetStateAction } from "react";

type LoginButtonTypes = {
  token: string;
  setSigninOpen: Dispatch<SetStateAction<boolean>>;
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
