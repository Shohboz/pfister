import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

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
  ${props =>
    props.poster &&
    css`
      background: url(${props.poster}) no-repeat;
      background-size: cover;
    `} transition: 1s opacity;
`;

const BackgroundVideo = ({
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

BackgroundVideo.propTypes = {
  poster: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  playsInline: PropTypes.bool
};

export default BackgroundVideo;
