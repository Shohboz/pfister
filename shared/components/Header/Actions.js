import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.div`
  padding-top: 14px;
  font-size: 1.7rem;
  position: absolute;
  z-index: 1000;
`;

export default () => (
  <StyledLink>
    <Link to="/">
      <i className="fa fa-arrow-left" />
    </Link>
  </StyledLink>
);
