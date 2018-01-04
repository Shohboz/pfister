import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Thumbnail from "./Thumbnail";

const Wrapper = styled.div`
  padding-left: 0px;
  padding-right: 0px;
`;

const MasonryElement = ({ id, thumbnail, title }) => (
  <Wrapper className="col-md-4 col-sm-6 col-xs-12 item">
    <Thumbnail id={id} src={thumbnail} title={title} />
  </Wrapper>
);

MasonryElement.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default MasonryElement;
