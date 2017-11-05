import React from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import BackgroundVideo from "./Video";
import HighlightedText from "./HighlightedText";

const Container = styled.div`
  margin-left: initial;
  margin-right: initial;
`;

export default injectIntl(({ intl }) => (
  <Container className="container">
    <BackgroundVideo />
    <HighlightedText intl={intl} />
  </Container>
));
