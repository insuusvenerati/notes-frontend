import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";
import { useRouter } from "next/router";
import { LOGIN } from "queries/notes";
import { Login, LoginVariables } from "queries/__generated__/Login";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useCookies } from "react-cookie";

type AuthContextType = {
  userNameToLocalStorage: string;
  setUserNameToLocalStorage: (value: string) => void;
  signOut: () => void;
  signIn: () => void;
  token: string;
  signinOpen: boolean;
  setSigninOpen: Dispatch<SetStateAction<boolean>>;
  signinError: {
    statusCode: number;
    message: GraphQLError[];
    error: boolean;
  };
  signinDetails: {
    email: string;
    password: string;
  };
  setSigninDetails: Dispatch<
    SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  cookies: any;
  setCookie: (name: string, value: any) => void;
  removeCookie: (name: string, value: any) => void;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [signinOpen, setSigninOpen] = useState(false);
  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });
  const [signinError, setSigninError] = useState({
    statusCode: 200,
    message: [],
    error: false,
  });
  const [login, { error: loginError, data: loginData }] = useMutation<Login, LoginVariables>(LOGIN);

  const router = useRouter();

  function signOut() {
    removeCookie("token");
    removeCookie("user");
    removeCookie("id");
    router.push("/");
  }

  function signIn() {
    signinDetails.email &&
      signinDetails.password &&
      login({
        variables: { identifier: signinDetails.email, password: signinDetails.password },
      });

    if (loginError) {
      setSigninError({ message: loginError.graphQLErrors, statusCode: 400, error: true });
    }

    loginData?.login.jwt &&
      loginData?.login.user.username &&
      loginData?.login.user.id &&
      setCookie("user", loginData?.login.user.username);
    setCookie("token", loginData?.login.jwt);
    setCookie("id", loginData?.login.user.id);
    setSigninOpen(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signOut,
        signIn,
        signinOpen,
        setSigninOpen,
        signinDetails,
        setSigninDetails,
        cookies,
        setCookie,
        removeCookie,
        signinError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
