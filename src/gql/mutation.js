import { gql } from "@apollo/client";

const NEW_NOTE = gql`
  mutation newNote($content: String!) {
    newNote(content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

const SIGN_UP = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const SIGN_IN = gql`
  mutation signIn($username: String, $password: String!) {
    signIn(username: $username, password: $password)
  }
`;

export { SIGN_UP, SIGN_IN, NEW_NOTE };
