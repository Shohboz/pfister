import React from "react";
import Header from "components/Header";
import styled from "styled-components";
import { renderRoutes } from "react-router-config";

const Wrapper = styled.div`
  padding-top: 100px;
`;

export default ({ route }) => (
  <div>
    <Header />
    <Wrapper>
      { renderRoutes(route.routes) }
    </Wrapper>
  </div>
)
