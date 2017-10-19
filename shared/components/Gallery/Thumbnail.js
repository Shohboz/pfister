import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 1px;
  margin: 1px 0;
`;

const StyledImage = styled.img`
  max-width: 100%;
`;

export default ({ data: { id, thumbnail, title } }) => (
  <Wrapper>
    <Link to={`/p/${id}`}>
      <StyledImage src={thumbnail} alt={title} />
    </Link>
  </Wrapper>
);
