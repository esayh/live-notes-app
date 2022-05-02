import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { parseISO, format } from "date-fns";
import styled from "styled-components";

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

// const Extras = styled.div``;

const Note = ({ note }) => {
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
      </Data>
      <ReactMarkdown children={note.content} />
    </NoteStyle>
  );
};

export default Note;
