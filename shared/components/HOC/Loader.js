import React, { Component } from "react";
import { bindActionCreators } from "redux";
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
      const { dispatch, action, isLoaded, match: { params } } = this.props;
      if (isLoaded) {
        dispatch(loadReset());
      } else {
        action(params[prop]);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({ action }, dispatch);

  return connect(({ loader: { isLoaded } }) => ({ isLoaded }), mapDispatchToProps)(Loader);
};
