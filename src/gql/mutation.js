import { gql } from "@apollo/client";

const SIGN_UP = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export { SIGN_UP };
