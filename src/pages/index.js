import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../gql/query";

// import app layout
import Layout from "../components/Layout";

// import routes
import Home from "./home";
import Mynotes from "./mynotes";
import NewNote from "./newnote";
import EditNote from "./editnote";
import Faves from "./faves";
import NoteID from "./note";
import SignUp from "./signup";
import SignIn from "./signin";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/mynotes"
            element={
              <PrivateRoute>
                <Mynotes />
              </PrivateRoute>
            }
          />
          <Route
            path="/faves"
            element={
              <PrivateRoute>
                <Faves />
              </PrivateRoute>
            }
          />
          <Route
            path="/newnote"
            element={
              <PrivateRoute>
                <NewNote />
              </PrivateRoute>
            }
          />
          <Route
            path="/editnote/:id"
            element={
              <PrivateRoute>
                <EditNote />
              </PrivateRoute>
            }
          />
          <Route path="/note/:id" element={<NoteID />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ children }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Error!</p>;

  return (
    <React.Fragment>
      {data.isLoggedIn === true ? children : <Navigate to="/signin" />}
    </React.Fragment>
  );
};

export default Pages;
