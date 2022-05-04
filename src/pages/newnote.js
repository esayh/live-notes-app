import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import NewNoteForm from "../components/NewNoteForm";
import { NEW_NOTE } from "../gql/mutation";
import { GET_NOTE } from "../gql/query";

const NewNote = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "New Note - Live Notes";
  });

  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTE }],
    onCompleted: (data) => {
      navigate(`note/${data.newNote.id}`);
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
