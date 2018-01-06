import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { load } from "redux/post/actions";
import { withLoader } from "components/HOC";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import Card from "../components/Card";

const App = ({ errors, data, isFetching }) => (
  <div>
    {isFetching && <Preloader />}
    {!isFetching && !errors && <Card {...data} />}
    {errors && <ErrorPage errors={errors} />}
  </div>
);

const mapStateToProps = ({ posts: { current } }) => ({ ...current });

export default withRouter(
  connect(mapStateToProps)(
    withLoader(App)({
      action: load,
      prop: "projectId"
    })
  )
);
