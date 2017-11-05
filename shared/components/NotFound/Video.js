import React from "react";
import styled from "styled-components";

const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background: url("/images/404.png") no-repeat;
  background-size: cover;
  transition: 1s opacity;
`;

export default () => (
  <Video
    poster="/images/404.png"
    playsInline="true"
    autoPlay="true"
    muted="true"
    loop="true"
  >
    <source src="/videos/404.webm" type="video/webm" />
    <source src="/videos/404.mp4" type="video/mp4" />
  </Video>
);
