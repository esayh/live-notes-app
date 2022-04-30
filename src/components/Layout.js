import React from "react";
import styled from "styled-components";

import Heading from "../components/Heading";
import Navi from "../components/Navi";

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    padding-top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`;

const Main = styled.main`
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;

  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Heading />
      <Wrapper>
        <Navi />
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
};

export default Layout;
