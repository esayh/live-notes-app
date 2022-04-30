import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #3e5356;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #65b4e2;
  }
`;

const Navi = () => {
  return (
    <Nav>
      <NavLinks>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mynotes">My Notes</Link>
        </li>
        <li>
          <Link to="/faves">Favorites</Link>
        </li>
      </NavLinks>
    </Nav>
  );
};

export default Navi;
