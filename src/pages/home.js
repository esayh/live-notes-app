import React from "react";
import { useQuery } from "@apollo/client";

// import LoadButton from "../components/LoadButton";
import { GET_ALL_NOTES } from "../gql/query";
import NoteFeed from "../components/NoteFeed";

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_NOTES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;
  return <NoteFeed notes={data.noteFeed.notes} />;
};
export default Home;
