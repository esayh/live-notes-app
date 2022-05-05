import { gql } from "@apollo/client";

const EDIT_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
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

const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;

const TOGGLE_FAVES = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFaves(id: $id) {
      id
      favoriteCount
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

export { SIGN_UP, SIGN_IN, EDIT_NOTE, TOGGLE_FAVES, DELETE_NOTE };
