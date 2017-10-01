import React from "react";
import Gallery from "../Gallery";

const items = [
  {src: 'https://dummyimage.com/600x100/8ed4cc/ffffff.png'},
  {src: 'https://dummyimage.com/600x400/abc4cc/ffffff.png'},
  {src: 'https://dummyimage.com/600x400/8ed4cc/ffffff.png'},
  {src: 'https://dummyimage.com/600x300/8eaaac/ffffff.png'},
  {src: 'https://dummyimage.com/600x300/bed4bc/ffffff.png'},
  {src: 'https://dummyimage.com/600x300/eedecc/ffffff.png'},
  {src: 'https://dummyimage.com/600x300/8ed4cc/ffffff.png'},
  {src: 'https://dummyimage.com/600x400/8eaaac/ffffff.png'},
  {src: 'https://dummyimage.com/600x500/bed4bc/ffffff.png'},
  {src: 'https://dummyimage.com/600x400/bedecc/ffffff.png'},
  {src: 'https://dummyimage.com/600x400/8ed4cc/ffffff.png'}
];

export default () => <Gallery items={items} />
