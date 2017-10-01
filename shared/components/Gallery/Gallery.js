import React from "react";
import Masonry from "react-masonry-component";
import styled from "styled-components";
import Item from "./Item";

const masonryOptions = {
  columnWidth: ".item",
  itemSelector: ".item"
};

const Wrapper = styled.div`
  padding-left: 0px;
  padding-right: 0px;
`;

const MasonryElement = ({ data }) => (
  <Wrapper className="col-md-4 col-sm-6 col-xs-12 item">
    <Item data={data} />
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
        {items.map((el, idx) => <MasonryElement key={idx} data={el} />)}
      </Masonry>
    </div>
  </div>
);
