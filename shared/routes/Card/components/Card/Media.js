import React, { Component } from "react";
import Lightbox from "react-images";
import Image from "../Image";

const NoFile = () => <div />;

const theme = {
  container: {
    background: "rgba(0, 0, 0, 0.85)"
  },
  arrow: {
    background: "none",
    fill: "white",
    opacity: 0.1,
    transition: "opacity 200ms",
    ":hover": {
      opacity: 1
    }
  },
  header: {
    height: 10
  },
  footer: {
    height: 10
  }
};

export default class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      current: 0
    };
  }

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
    if (this.state.current === this.props.files.length - 1) return;

    this.gotoNext();
  };

  render() {
    const { files = [] } = this.props;
    return (
      <div>
        {files.map(({ type, id, src, alt = "" }, idx) => {
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
          images={files}
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
}
