import React from "react";
import Description from "../Description";
import Image from "../Image";

const NoFile = () => <div />;

const Media = ({ files = [] }) => (
  <div>
    {files.map(({ type, id, src, alt = "" }) => {
      const MediaFile = type === "image" ? Image : NoFile;
      return <MediaFile key={id} url={src} alt={alt} />;
    })}
  </div>
);

export default ({ media, title, text, description, created_at }) => (
  <div className="container">
    <div className="row rtl">
      <div className="col-sm-12 col-offset-380">
        <Media files={media} />
      </div>
      <div className="col-fixed-380 col-sm-12">
        <Description title={title} text={text} description={description} created_at={created_at} />
      </div>
    </div>
  </div>
);
