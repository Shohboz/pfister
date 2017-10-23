import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 0 20px;
`;

const Image = styled.img`
  width: 100%;
`;

export default ({ url, alt }) => (
  <Wrapper>
    <Image src={url} alt={alt} />
  </Wrapper>
);
