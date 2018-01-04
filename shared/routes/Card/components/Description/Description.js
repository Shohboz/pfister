import React from "react";
import styled from "styled-components";
import { FormattedRelative } from "react-intl";
import PropTypes from "prop-types";

const Title = styled.h2`
  display: block;
  line-height: 1.7;
  letter-spacing: 0.8rem;
`;

const DateView = styled.span`
  font-weight: 200;
  font-size: 1rem;
  margin-bottom: 40px;
  display: block;
`;

const Desription = styled.h3`
  font-weight: 200;
  line-height: 1.7;
  margin-top: 10px;
`;

const Aside = styled.aside`
  width: 288px;
`;

const Text = styled.p`
  font-weight: lighter;
`;

const DescriptionComponent = ({ title, description, text, created_at }) => (
  <Aside className="fixed">
    <div className="info-inner">
      <Title>{title}</Title>
      <Desription>{description}</Desription>
      <DateView>
        <FormattedRelative value={created_at} />
      </DateView>
      <Text>{text}</Text>
    </div>
  </Aside>
);

DescriptionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  text: PropTypes.string,
  created_at: PropTypes.number.isRequired
};

export default DescriptionComponent;
