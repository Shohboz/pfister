import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loadAll as load } from "redux/posts/actions";
import { withLoader } from "components/HOC";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import Gallery from "../components/Gallery";

const App = ({ errors, list, isFetching }) => (
  <div>
    {isFetching && <Preloader />}
    {!isFetching && !errors && <Gallery items={list} />}
    {errors && <ErrorPage errors={errors} />}
  </div>
);

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
