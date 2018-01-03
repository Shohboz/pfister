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

export default ({
  poster,
  video,
  autoplay = true,
  muted = true,
  loop = true,
  playsInline = true
}) => (
  <Video
    poster={poster}
    playsInline={playsInline}
    autoPlay={autoplay}
    muted={muted}
    loop={loop}
  >
    <source src={`${video}.webm`} type="video/webm" />
    <source src={`${video}.mp4`} type="video/mp4" />
  </Video>
);
