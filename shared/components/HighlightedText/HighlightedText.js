import React, { Component } from "react";
import styled from "styled-components";

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

class HighlightedText extends Component {
  render() {
    const { text } = this.props;
    return (
      <HighlightText {...this.props}>
        <Text>
          {text}
        </Text>
      </HighlightText>
    );
  }
}

export { HighlightedText, Container };
