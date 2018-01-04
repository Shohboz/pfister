import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 0 8px;
  margin: 8px 0;
`;

const StyledImage = styled.img`
  max-width: 100%;
`;

const Thumbnail = ({ id, thumbnail, title }) => (
  <Wrapper>
    <Link to={`/p/${id}`}>
      <StyledImage src={thumbnail} alt={title} />
    </Link>
  </Wrapper>
);

Thumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Thumbnail;
