import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { LOGIN } from "queries/notes";
import { createContext, useState } from "react";
import { useCookies } from "react-cookie";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [signinOpen, setSigninOpen] = useState({
    loading: false,
    open: false,
  });
  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });

  //TODO Handle status code?
  const [signinError, setSigninError] = useState({
    statusCode: 200,
    message: "",
    error: false,
  });
  const [login, { error: loginError }] = useMutation(LOGIN);

  const router = useRouter();

  function signOut() {
    removeCookie("token");
    removeCookie("user");
    removeCookie("id");
    router.push("/");
  }

  function signIn() {
    setSigninOpen({ loading: true, open: true });
    signinDetails.email &&
      signinDetails.password &&
      login({
        variables: { identifier: signinDetails.email, password: signinDetails.password },
      }).then((res) => {
        setCookie("token", res.data?.login.jwt);
        setCookie("id", res.data?.login.user.id);
        setCookie("user", res.data?.login.user.username);
        setSigninOpen({ loading: false, open: false });
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
