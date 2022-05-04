import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../cache";

import CheckForm from "../components/CheckForm";
import { SIGN_UP } from "../gql/mutation";

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign Up - Live Notes";
  });

  const [signUp, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      // store token in localStorage
      localStorage.setItem("token", data.signUp);

      isLoggedInVar(true);
      // if signup is successful redirect to homepage
      navigate("/");
    },
  });

  return (
    <React.Fragment>
      <CheckForm action={signUp} formType="signup" />
      {loading && <p>Loading...</p>}
      {error && <p>Error creating account!</p>}
    </React.Fragment>
  );
};

export default SignUp;
