import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";

const Wrapper = styled.div`
  border: 1px solid lightgray;
  max-width: 450px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

const NewUserForm = (props) => {
  const [values, setValues] = useState();

  const handleTextChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({
      variables: {
        ...values,
      },
    });
  };

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        {props.formType === "signup" && (
          <React.Fragment>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleTextChange}
            />
          </React.Fragment>
        )}
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleTextChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleTextChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default NewUserForm;
