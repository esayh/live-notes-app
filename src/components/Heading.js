import React from "react";
import styled from "styled-components";
import logo from "../img/bluenote.png";

const Header = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const AppName = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const Heading = () => {
  return (
    <Header>
      <img src={logo} alt="Live Notes Logo" height="50" />
      <AppName>Live Notes</AppName>
    </Header>
  );
};

export default Heading;
