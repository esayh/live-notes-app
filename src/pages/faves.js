import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import NoteFeed from "../components/NoteFeed";
import { GET_MY_FAVES } from "../gql/query";

const Faves = () => {
  useEffect(() => {
    document.title = "Favorites - Live Notes";
  });

  const { data, loading, error } = useQuery(GET_MY_FAVES);

  if (loading) return "Loading, Please wait...";

  if (error) return `Error, ${error.message}`;

  if (data.me.favorites.length > 0) {
    return <NoteFeed notes={data.me.favorites} />;
  } else {
    return <p>No favorites found!</p>;
  }
};

export default Faves;
