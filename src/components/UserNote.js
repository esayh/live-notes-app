import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_USER_DATA } from "../gql/query";

import DeleteNote from "./DeleteNote";
import FaveNote from "./FaveNote";

const UserNote = (props) => {
  const { loading, error, data } = useQuery(GET_USER_DATA);

  if (loading) return <p>Loading, Please wait...</p>;

  if (error) return <p>Error</p>;

  return (
    <React.Fragment>
      <FaveNote
        me={data.me}
        noteId={props.note.id}
        favoriteCount={props.note.favoriteCount}
      />
      <br />
      {data.me.id === props.note.author.id && (
        <React.Fragment>
          <Link to={`/editnote/${props.note.id}`}>Edit</Link>{" "}
          <DeleteNote noteId={props.note.id} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default UserNote;
