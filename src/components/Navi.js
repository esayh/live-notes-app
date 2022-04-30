import React from "react";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mynotes">My Notes</Link>
        </li>
        <li>
          <Link to="/faves">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;
