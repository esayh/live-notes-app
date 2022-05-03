import React from "react";
import { useQuery } from "@apollo/client";

import NoteFeed from "../components/NoteFeed";
import LoadButton from "../components/LoadButton";
import { GET_ALL_NOTES } from "../gql/query";

const Home = () => {
  const handleFetch = () => {
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          noteFeed: {
            cursor: fetchMoreResult.noteFeed.cursor,
            hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
            // combine the new results and the old
            notes: [...prev.noteFeed.notes, ...fetchMoreResult.noteFeed.notes],
            __typename: "noteFeed",
          },
        };
      },
    });
  };

  const { data, loading, error, fetchMore } = useQuery(GET_ALL_NOTES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;
  return (
    <React.Fragment>
      <NoteFeed notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <LoadButton onClick={handleFetch}>More notes</LoadButton>
      )}
    </React.Fragment>
  );
};
export default Home;
