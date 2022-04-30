import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import routes
import Home from "./home";
import Mynotes from "./mynotes";
import Faves from "./faves";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mynotes" element={<Mynotes />} />
        <Route path="/faves" element={<Faves />} />
      </Routes>
    </Router>
  );
};

export default Pages;
