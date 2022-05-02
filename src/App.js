import React from "react";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import { cache } from "./cache";

// import CSS
import GlobalCSS from "./components/GlobalCSS";

// import Routes
import Pages from "./pages";

const uri = process.env.REACT_APP_KEY;

const client = new ApolloClient({
  uri,
  cache,
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
