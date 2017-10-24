import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 8px;
  margin: 8px 0;
`;

const StyledImage = styled.img`
  max-width: 100%;
`;

export default ({ id, thumbnail, title }) => (
  <Wrapper>
    <Link to={`/p/${id}`}>
      <StyledImage src={thumbnail} alt={title} />
    </Link>
  </Wrapper>
);
