import React, { Component } from "react";
import { connect } from "react-redux";
import { loadComplete, loadReset } from "redux/loader/actions";

export default WrappedComponent => ({ action, prop }) => {
  class Loader extends Component {
    static fetchData(store, params) {
      const { dispatch } = store;
      return dispatch(action(params && params[prop])).then(() =>
        dispatch(loadComplete())
      );
    }

    componentDidMount() {
      const { dispatch, isLoaded, match: { params } } = this.props;
      if (isLoaded) {
        dispatch(loadReset());
      } else {
        dispatch(action(params[prop]));
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(({ loader: { isLoaded } }) => ({ isLoaded }))(Loader);
};
