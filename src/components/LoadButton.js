import styled from "styled-components";

const LoadButton = styled.button`
  display: block;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  color: #fff;
  background-color: #41c3e2;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    background-color: #3e5356;
  }
`;

export default LoadButton;
