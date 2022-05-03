import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import app layout
import Layout from "../components/Layout";

// import routes
import Home from "./home";
import Mynotes from "./mynotes";
import Faves from "./faves";
import NoteID from "./note";
import SignUp from "./signup";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mynotes" element={<Mynotes />} />
          <Route path="/faves" element={<Faves />} />
          <Route path="/note/:id" element={<NoteID />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Pages;
