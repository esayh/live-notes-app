import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "../img/bluenote.png";
import { isLoggedInVar } from "../cache";
import { IS_LOGGED_IN } from "../gql/query";
import StatusButton from "./StatusButton";

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

const UserStatus = styled.div`
  margin-left: auto;
`;

const Heading = () => {
  const navigate = useNavigate();
  const { data, client } = useQuery(IS_LOGGED_IN);

  const handleLogin = () => {
    localStorage.removeItem("token");

    client.resetStore("token");

    isLoggedInVar(false);
    // if logout is successful redirect to signin page
    navigate("/signIn");
  };

  return (
    <Header>
      <img src={logo} alt="Live Notes Logo" height="50" />
      <AppName>Live Notes</AppName>
      <UserStatus>
        {data.isLoggedIn ? (
          <StatusButton onClick={handleLogin}>
            <p>Log out</p>
          </StatusButton>
        ) : (
          <p>
            <Link to="/signin">Sign In</Link> or{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        )}
      </UserStatus>
    </Header>
  );
};

export default Heading;
