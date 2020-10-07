import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  credentials: "same-origin",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export const ApolloContextProvider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
