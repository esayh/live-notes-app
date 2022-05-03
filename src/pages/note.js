import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Note from "../components/Note";
import { GET_NOTE } from "../gql/query";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
`;

const NoteID = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <Wrapper>
      <Note note={data.note} />
      <Link to={"/"}>Back</Link>
    </Wrapper>
  );
};

export default NoteID;
