import React from "react";
import PropTypes from "prop-types";
import Media from "./Media";
import Description from "../Description";

const Card = ({ media, title, text, description, created_at }) => (
  <div className="container">
    <div className="row rtl">
      <div className="col-sm-12 col-offset-380">
        <Media items={media} />
      </div>
      <div className="col-fixed-380 col-sm-12">
        <Description
          title={title}
          text={text}
          description={description}
          created_at={created_at}
        />
      </div>
    </div>
  </div>
);

Card.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      type: PropTypes.oneOf(["image", "video"])
    })
  ),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  text: PropTypes.string,
  created_at: PropTypes.number.isRequired
};

export default Card;
