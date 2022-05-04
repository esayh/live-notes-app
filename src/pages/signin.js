import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import CheckForm from "../components/CheckForm";
import { SIGN_IN } from "../gql/mutation";
import { isLoggedInVar } from "../cache";

const SignIn = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign In - Live Notes";
  });

  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      // store the token
      localStorage.setItem("token", data.signIn);

      isLoggedInVar(true);
      // if signIn is successful redirect to homepage
      navigate("/");
    },
  });

  return (
    <React.Fragment>
      <CheckForm action={signIn} formType="signIn" />
      {loading && <p>Loading...</p>}
      {error && <p>Error signin in!</p>}
    </React.Fragment>
  );
};

export default SignIn;
