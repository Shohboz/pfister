import React from "react";
import Description from "../Description";
import ImageContainer from "../ImageContainer";

export default () => (
  <div className="container">
    <div className="row rtl">
      <div className="col-sm-12 col-offset-380">
        <ImageContainer />
      </div>
      <div className="col-fixed-380 col-sm-12">
        <Description />
      </div>
    </div>
  </div>
);
