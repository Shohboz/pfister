import React from "react";
import styled from "styled-components";

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

export default () => (
  <Aside className="fixed">
    <div className="info-inner">
      <Title>
        Photo BEFORE
      </Title>
      <p>
        Вот это мои зубы ДО
      </p>

      <DateView>
        5 дней назад
      </DateView>

      <p>
        Здесь должен быть какой-то текст... ывалфдывафыва фываф ыва фыв афыв а
      </p>
    </div>
  </Aside>
);
