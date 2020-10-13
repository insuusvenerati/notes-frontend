import { ApolloProvider } from "@apollo/client";
import { authClient } from "../apollo";

export const ApolloContextProvider = ({ children }) => (
  <ApolloProvider client={authClient}>{children}</ApolloProvider>
);
