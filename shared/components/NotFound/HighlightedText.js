import React from "react";
import {
  HighlightedText,
  Container as ContainerText
} from "components/HighlightedText";

const Wrapper = ContainerText.extend`
  width: 400px;
  padding: 3px 0;
`;

export default () => (
  <Wrapper>
    <HighlightedText primary text={"404"} />
    <br />
    <HighlightedText text={"Что-то пошло не так"} />
  </Wrapper>
);
