import React from "react";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import { cache } from "./cache";

// import CSS
import GlobalCSS from "./components/GlobalCSS";

// import Routes
import Pages from "./pages";

const uri = process.env.API_URI;

const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <GlobalCSS />
        <Pages />
      </ApolloProvider>
    </div>
  );
};

export default App;
