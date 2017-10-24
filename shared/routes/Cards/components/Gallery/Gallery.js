import React from "react";
import Masonry from "react-masonry-component";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";

const masonryOptions = {
  columnWidth: ".item",
  itemSelector: ".item"
};

const Wrapper = styled.div`
  padding-left: 0px;
  padding-right: 0px;
`;

const MasonryElement = ({ data: { id, thumbnail, title } }) => (
  <Wrapper className="col-md-4 col-sm-6 col-xs-12 item">
    <Thumbnail id={id} thumbnail={thumbnail} title={title} />
  </Wrapper>
);

export default ({ items }) => (
  <div className="container">
    <div className="row">
      <Masonry
        className="masonry-container"
        elementType="div"
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {items.map(el => <MasonryElement key={el.id} data={el} />)}
      </Masonry>
    </div>
  </div>
);
