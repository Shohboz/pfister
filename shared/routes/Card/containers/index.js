import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { load } from "redux/post/actions";
import { withRouter } from "react-router";
import { withLoader } from "components/HOC";
import Card from "../components/Card";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";

class App extends Component {
  render() {
    const { errors, data, isFetching } = this.props;
    return (
      <div>
        {isFetching &&
          <div className="row middle-xs center-xs">
            <Preloader />
          </div>}
        {!isFetching && !errors && <Card {...data} />}
        {errors && <ErrorPage errors={errors} />}
      </div>
    );
  }
}

const mapStateToProps = ({ posts: { current } }) => ({ ...current });

const mapDispatchToProps = dispatch => bindActionCreators({ load }, dispatch);

export default withRouter(
  connect(mapStateToProps)(
    withLoader(App)({
      action: load,
      prop: "projectId"
    })
  )
);
