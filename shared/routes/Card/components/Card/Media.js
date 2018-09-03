import React, { Component } from "react";
import Lightbox from "react-images";
import PropTypes from "prop-types";
import Image from "../Image";

const NoFile = () => <div />;

const theme = {
  container: {
    background: "#f3f3f5"
  },
  arrow: {
    background: "none",
    fill: "#000",
    opacity: 0.25,
    transition: "opacity 200ms",
    ":hover": {
      opacity: 1
    }
  },
  arrow__size__medium: {
    "@media (min-width: 768px)": {
      width: 45
    }
  },
  header: {
    height: 0
  },
  footer: {
    height: 10
  }
};

export default class Media extends Component {
  state = {
    lightboxIsOpen: false,
    current: 0
  };

  openLightbox = (idx, event) => {
    event.preventDefault();
    this.setState({
      current: idx,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      current: 0,
      lightboxIsOpen: false
    });
  };

  gotoPrevious = () => {
    this.setState({
      current: this.state.current - 1
    });
  };

  gotoNext = () => {
    this.setState({
      current: this.state.current + 1
    });
  };

  gotoImage = index => {
    this.setState({
      current: index
    });
  };

  handleClickImage = () => {
    if (this.state.current === this.props.items.length - 1) return;

    this.gotoNext();
  };

  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(({ type, id, src, alt }, idx) => {
          const MediaFile = type === "image" ? Image : NoFile;
          return (
            <MediaFile
              key={id}
              url={src}
              alt={alt}
              onClickHandler={e => this.openLightbox(idx, e)}
            />
          );
        })}
        <Lightbox
          currentImage={this.state.current}
          images={items}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClose={this.closeLightbox}
          showImageCount={false}
          rightArrowTitle={""}
          leftArrowTitle={""}
          closeButtonTitle={""}
          theme={theme}
          backdropClosesModal={true}
          showCloseButton={false}
        />
      </div>
    );
  }

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        type: PropTypes.oneOf(["image", "video"])
      })
    )
  };

  static defaultProps = {
    items: []
  };
}
