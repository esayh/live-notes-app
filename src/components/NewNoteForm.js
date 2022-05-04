import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";

const Container = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 450px;
`;

const NewNoteForm = (props) => {
  const [value, setValue] = useState({
    content: props.content || "",
  });

  const handleTextChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <Form>
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note to self"
          value={value.content}
          onChange={handleTextChange}
        />
        <Button type="submit">Save it</Button>
      </Form>
    </Container>
  );
};

export default NewNoteForm;
