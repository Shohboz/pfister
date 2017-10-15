import React, { Component } from "react";
import { connect } from "react-redux";
import { load } from "redux/posts/actions";
import { withRouter } from "react-router";
import Gallery from "../Gallery";
import Preloader from "../Preloader";
import ErrorPage from "../ErrorPage";

// const items = [
//   { src: "https://dummyimage.com/600x100/8ed4cc/ffffff.png" },
//   { src: "https://dummyimage.com/600x400/abc4cc/ffffff.png" },
//   { src: "https://dummyimage.com/600x400/8ed4cc/ffffff.png" },
//   { src: "https://dummyimage.com/600x300/8eaaac/ffffff.png" },
//   { src: "https://dummyimage.com/600x300/bed4bc/ffffff.png" },
//   { src: "https://dummyimage.com/600x300/eedecc/ffffff.png" },
//   { src: "https://dummyimage.com/600x300/8ed4cc/ffffff.png" },
//   { src: "https://dummyimage.com/600x400/8eaaac/ffffff.png" },
//   { src: "https://dummyimage.com/600x500/bed4bc/ffffff.png" },
//   { src: "https://dummyimage.com/600x400/bedecc/ffffff.png" },
//   { src: "https://dummyimage.com/600x400/8ed4cc/ffffff.png" }
// ];

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadAll());
  }

  render() {
    const { errors, list, isFetching } = this.props;
    return (
      <div>
        {isFetching &&
          <div
            className="row middle-xs center-xs">
            <Preloader />
          </div>}
        {!isFetching &&
          !errors &&
          <Gallery
            {...this.props}
            items={list}
          />}
        {errors && <ErrorPage errors={errors} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { posts: { isFetching, errors, list } } = state;
  return {
    errors,
    list,
    isFetching
  };
}

export default withRouter(connect(mapStateToProps)(App));
