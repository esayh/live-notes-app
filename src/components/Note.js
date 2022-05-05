import React from "react";
import { useQuery } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { parseISO, format } from "date-fns";
import styled from "styled-components";

import UserNote from "./UserNote";
import { IS_LOGGED_IN } from "../gql/query";

const NoteStyle = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const Data = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const NoteInfo = styled.div`
  padding-right: 1em;
`;

const Extras = styled.div`
  margin-left: 1em;
`;

const Note = ({ note }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading, Please wait...</p>;

  if (error) return <p>Error</p>;

  return (
    <NoteStyle>
      <Data>
        <NoteInfo>
          <img
            src={note.author.avatar}
            alt="{note.author.username} avatar"
            height="50px"
          />
        </NoteInfo>{" "}
        <NoteInfo>
          <em>published by</em> {note.author.username} <br />
          {format(parseISO(note.createdAt), "MMM do yyyy")}
        </NoteInfo>{" "}
        {data.isLoggedIn ? (
          <Extras>
            <UserNote note={note} />
          </Extras>
        ) : (
          <Extras>
            <em>Favorites:</em>
            {note.favoriteCount}
          </Extras>
        )}
      </Data>
      <ReactMarkdown children={note.content} />
    </NoteStyle>
  );
};

export default Note;
