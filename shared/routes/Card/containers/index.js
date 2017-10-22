import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { load } from "redux/post/actions";
import { withRouter } from "react-router";
import Card from "../components/Card";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";

class App extends Component {
  static fetchData(store, params) {
    const { projectId } = params;
    return store.dispatch(load(projectId));
  }

  componentDidMount() {
    const { dispatch, match: { params: { projectId } } } = this.props;
    dispatch(load(projectId));
  }

  render() {
    const { errors, data, isFetching } = this.props;
    return (
      <div>
        {isFetching &&
          <div
            className="row middle-xs center-xs">
            <Preloader />
          </div>}
        {!isFetching &&
          !errors &&
          <Card
            {...this.props}
            data={data}
          />}
        {errors && <ErrorPage errors={errors} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { posts: { current } } = state;
  return {
    ...current
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ load }, dispatch);

export default withRouter(connect(mapStateToProps)(App));
