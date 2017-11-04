import React from "react";
import styled from "styled-components";
import BackgroundVideo from "./Video";
import HighlightedText from "./HighlightedText";

const Container = styled.div`
  margin-left: initial;
  margin-right: initial;
`;

export default () => (
  <Container className="container">
    <BackgroundVideo />
    <HighlightedText />
  </Container>
);
