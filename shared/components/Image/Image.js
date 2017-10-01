import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 0 20px;
`;

const Image = styled.img`
  width: 100%;
`;

export default ({ url }) => (
  <Container>
    <Image src={url} />
  </Container>
)
