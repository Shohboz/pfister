import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 0 0 20px;
`;

const Image = styled.img`
  width: 100%;
  cursor: zoom-in;
`;

const ImageComponent = ({ url, alt, onClickHandler }) => (
  <Wrapper>
    <Image onClick={onClickHandler} src={url} alt={alt} />
  </Wrapper>
);

ImageComponent.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired
};

export default ImageComponent;
