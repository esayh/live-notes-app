import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useQuery } from "@apollo/client";

// import LoadButton from "../components/LoadButton";
import { GET_ALL_NOTES } from "../gql/query";

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_NOTES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;
  return (
    <div>
      {data.noteFeed.notes.map((note) => (
        <article key={note.id}>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height="50px"
          />
          {""}
          {note.author.username} {note.createdAt} {note.favoriteCount}
          {""}
          <ReactMarkdown children={note.content} />
        </article>
      ))}
    </div>
  );
};
export default Home;
