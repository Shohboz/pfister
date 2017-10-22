import React from "react";
import Description from "../Description";
import Image from "../Image";

const NoFile = () => <div />;

const Media = ({ files = {} }) => (
  <div>
    {Object.keys(files).map(key => {
      const item = files[key];
      const MediaFile = item.type === "image" ? Image : NoFile;
      return <MediaFile key={key} url={item.src} alt={item.alt} />;
    })}
  </div>
);

export default ({ media, title, text, description }) => (
  <div className="container">
    <div className="row rtl">
      <div className="col-sm-12 col-offset-380">
        <Media files={media} />
      </div>
      <div className="col-fixed-380 col-sm-12">
        <Description title={title} text={text} description={description} />
      </div>
    </div>
  </div>
);
