import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  line-height: 1.3;
  padding: 2px 0;
  border-left: 20px solid #000;
`;

const HighlightText = styled.h1`
  font-size: ${props => (props.primary ? "9rem" : "5rem")};
  background-color: #000;
  color: #fff;
  display: inline;
  margin: 0;
  user-select: none;
`;

const Text = styled.strong`
  position: relative;
  left: -10px;
`;

const HighlightedText = props => (
  <HighlightText {...props}>
    <Text>{props.text}</Text>
  </HighlightText>
);

HighlightedText.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.any
};

export { HighlightedText, Container };
