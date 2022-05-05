import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

import NewNoteForm from "../components/NewNoteForm";
import { GET_NOTE, GET_MY_NOTES } from "../gql/query";

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

const NewNote = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "New Note - Live Notes";
  });

  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTE }, { GET_MY_NOTES }],
    onCompleted: (data) => {
      navigate(`/note/${data.newNote.id}`);
    },
  });
  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>Error, failed to save.</p>}
      <NewNoteForm action={data} />
    </React.Fragment>
  );
};

export default NewNote;
