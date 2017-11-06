import React from "react";
import styled from "styled-components";
import { FormattedRelative } from "react-intl";

const Title = styled.h2`
  margin-bottom: 20px;
  display: block;
`;

const DateView = styled.span`
  font-weight: 200;
  font-size: 1rem;
  margin-bottom: 40px;
  display: block;
`;

const Aside = styled.aside`
  width: 288px;
`;

export default ({ title, description, text, created_at }) => (
  <Aside className="fixed">
    <div className="info-inner">
      <Title>{title}</Title>
      <p>{description}</p>
      <DateView>
        <FormattedRelative value={created_at} />
      </DateView>

      <p>{text}</p>
    </div>
  </Aside>
);
