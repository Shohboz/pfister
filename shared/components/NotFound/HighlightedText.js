import React from "react";
import {
  HighlightedText,
  Container as ContainerText
} from "components/HighlightedText";
import { defineMessages } from "react-intl";

const Wrapper = ContainerText.extend`
  width: 400px;
  padding: 3px 0;
`;

const messages = defineMessages({
  notFound: {
    id: "NotFound.not_found_message",
    defaultMessage: "Page not found"
  }
});

export default ({ intl: { formatMessage } }) => (
  <Wrapper>
    <HighlightedText primary text={"404"} />
    <br />
    <HighlightedText text={formatMessage(messages.notFound)} />
  </Wrapper>
);
