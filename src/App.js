import React from "react";

// import CSS
import GlobalCSS from "./components/GlobalCSS";

// import Routes
import Pages from "./pages";

const App = () => {
  return (
    <div>
      <GlobalCSS />
      <Pages />
    </div>
  );
};

export default App;
