import React from "react";

import Heading from "../components/Heading";
import Navi from "../components/Navi";

const Layout = ({ children }) => {
  return (
    <>
      <Heading />
      <div className="wrap">
        <Navi />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
