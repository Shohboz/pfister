import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loadAll as load } from "redux/posts/actions";
import { withLoader } from "components/HOC";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import Gallery from "../components/Gallery";

class App extends Component {
  render() {
    const { errors, list, isFetching } = this.props;
    return (
      <div>
        {isFetching && (
          <div className="row middle-xs center-xs">
            <Preloader />
          </div>
        )}
        {!isFetching && !errors && <Gallery {...this.props} items={list} />}
        {errors && <ErrorPage errors={errors} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { posts: { main: { isFetching, errors, list } } } = state;
  return {
    errors,
    list,
    isFetching
  };
};

export default withRouter(
  connect(mapStateToProps)(
    withLoader(App)({
      action: load
    })
  )
);
