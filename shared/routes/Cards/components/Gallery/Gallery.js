import React from "react";
import Masonry from "react-masonry-component";
import PropTypes from "prop-types";
import MasonryElement from "./GalleryItem";

const masonryOptions = {
  columnWidth: ".item",
  itemSelector: ".item"
};

const Gallery = ({ items }) => (
  <div className="container">
    <div className="row">
      <Masonry
        className="masonry-container"
        elementType="div"
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {items.map(el => <MasonryElement key={el.id} {...el} />)}
      </Masonry>
    </div>
  </div>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string
    })
  )
};

export default Gallery;
