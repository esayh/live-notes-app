import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import NewNoteForm from "../components/NewNoteForm";
import { GET_NOTE, GET_USER_DATA } from "../gql/query";
import { EDIT_NOTE } from "../gql/mutation";

const Editnote = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  const { data: userdata } = useQuery(GET_USER_DATA);

  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id,
    },
    onCompleted: (data) => {
      navigate(`/note/${id}`);
    },
  });

  if (loading) return "Loading, Please wait...";

  if (error) return "Error, Note not found";

  if (userdata.me.id !== data.note.author.id) {
    return <p>Unauthorized User</p>;
  }

  return <NewNoteForm content={data.note.content} action={editNote} />;
};

export default Editnote;
