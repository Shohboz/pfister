import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAll as load } from "redux/posts/actions";
import { withRouter } from "react-router";
import Gallery from "../Gallery";
import Preloader from "../Preloader";
import ErrorPage from "../ErrorPage";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(load());
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
