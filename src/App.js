import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import { cache } from "./cache";

// import CSS
import GlobalCSS from "./components/GlobalCSS";

// import Routes
import Pages from "./pages";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

const uri = process.env.REACT_APP_KEY;
const httpLink = createHttpLink({ uri });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs,
  resolvers: {},
  connectToDevTools: true,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalCSS />
      <Pages />
    </ApolloProvider>
  );
};

export default App;
