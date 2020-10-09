import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

// const link = createHttpLink({
//   uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
//   credentials: "same-origin",
// });

// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
// });
const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const authClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ApolloContextProvider: React.FC = ({ children }) => (
  <ApolloProvider client={authClient}>{children}</ApolloProvider>
);
