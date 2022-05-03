import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Note from "./Note";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 3px solid #f5f4f0;
`;

const NoteFeed = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <Wrapper key={note.id}>
          <Note note={note} />
          <Link to={`note/${note.id}`}>View Note</Link>
        </Wrapper>
      ))}
    </div>
  );
};

export default NoteFeed;
