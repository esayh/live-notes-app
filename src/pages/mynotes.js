import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import NoteFeed from "../components/NoteFeed";
import { GET_MY_NOTES } from "../gql/query";

const Mynotes = () => {
  useEffect(() => {
    document.title = "My Notes - Live Notes";
  });

  const { data, loading, error } = useQuery(GET_MY_NOTES);

  if (loading) return "Loading, Please wait...";

  if (error) return `Error, ${error.message}`;

  if (data.me.notes.length > 0) {
    return <NoteFeed notes={data.me.notes} />;
  } else {
    return <p>No notes found!</p>;
  }
};

export default Mynotes;
