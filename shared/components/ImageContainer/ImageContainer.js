import React from "react";
import Image from "../Image";

const images = [
  {
    url: "http://www.mikiyakobayashi.com/projects/furniture/tc_15629w.jpg",
    alt: "test1"
  },
  {
    url: "http://wovenmagazine.com/content/uploads/2017/07/00_Grovemade-tall.jpg",
    alt: "test2"
  },
  {
    url: "http://wovenmagazine.com/content/uploads/2017/07/14_Grovemade-skinny.jpg",
    alt: "test3"
  }
]

export default () => (
  <div>
    {
      images.map((image, key) => <Image key={key} url={image.url} alt={image.alt} />)
    }
  </div>
)
