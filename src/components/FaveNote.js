import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import StatusButton from "./StatusButton";
import { TOGGLE_FAVES } from "../gql/mutation";
import { GET_MY_FAVES } from "../gql/query";

const FaveNote = (props) => {
  const [count, setCount] = useState(props.favoriteCount);

  const [favorited, setFavorited] = useState(
    props.me.favorites.filter((note) => note.id === props.noteId).length > 0
  );

  const [toggleFaves] = useMutation(TOGGLE_FAVES, {
    variables: {
      id: props.noteId,
    },
    refetchQueries: [{ query: GET_MY_FAVES }],
  });

  const removeFave = () => {
    toggleFaves();
    setFavorited(false);
    setCount(count - 1);
  };

  const addFave = () => {
    toggleFaves();
    setFavorited(true);
    setCount(count + 1);
  };

  return (
    <React.Fragment>
      {favorited ? (
        <StatusButton onClick={removeFave}>Remove</StatusButton>
      ) : (
        <StatusButton onClick={addFave}>Add to Favorites</StatusButton>
      )}
      : {count}
    </React.Fragment>
  );
};

export default FaveNote;
