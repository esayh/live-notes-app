import React from "react";
import logo from "../img/bluenote.png";

const Heading = () => {
  return (
    <header>
      <img src={logo} alt="Live Notes Logo" height="50" />
      <h1>Welcome to Live Notes App</h1>
    </header>
  );
};

export default Heading;
