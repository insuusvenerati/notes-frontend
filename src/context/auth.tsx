import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { LOGIN } from "queries/notes";
import { Login, LoginVariables } from "queries/__generated__/Login";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useCookies } from "react-cookie";

type AuthContextType = {
  signOut: () => void;
  signIn: () => void;
  signinOpen: boolean;
  setSigninOpen: Dispatch<SetStateAction<boolean>>;
  signinError: {
    statusCode: number;
    message: string;
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
    message: "",
    error: false,
  });
  const [login, { error: loginError }] = useMutation<Login, LoginVariables>(LOGIN);

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
      }).then((res) => {
        setCookie("token", res.data?.login.jwt);
        setCookie("id", res.data?.login.user.id);
        setCookie("user", res.data?.login.user.username);
        setSigninOpen(false);
      });

    if (loginError) {
      setSigninError({
        message:
          loginError?.graphQLErrors[0]?.extensions?.exception?.data?.message[0]?.messages[0]
            ?.message,
        statusCode: 400,
        error: true,
      });
    }
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
