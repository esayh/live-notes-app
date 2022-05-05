import React from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import StatusButton from "./StatusButton";
import { DELETE_NOTE } from "../gql/mutation";
import { GET_MY_NOTES, GET_ALL_NOTES } from "../gql/query";

const DeleteNote = (props) => {
  const navigate = useNavigate();
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId,
    },
    refetchQueries: [{ query: GET_MY_NOTES, GET_ALL_NOTES }],
    onCompleted: (data) => {
      navigate("/mynotes");
    },
  });

  return <StatusButton onClick={deleteNote}>Delete</StatusButton>;
};

export default DeleteNote;
