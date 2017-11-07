import React from "react";
import Media from "./Media";
import Description from "../Description";

export default ({ media, title, text, description, created_at }) => (
  <div className="container">
    <div className="row rtl">
      <div className="col-sm-12 col-offset-380">
        <Media files={media} />
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
