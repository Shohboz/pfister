import React from "react";
import {
  Link,
  Route,
  Switch
} from "react-router-dom";

const styles = {
  brand: {
    position: "absolute",
    width: "100%",
    left: 0,
    top: 9,
    textAlign: "center",
    margin: "auto",
    backgroundSize: "contain",
    height: 34
  },
  actions: {
    paddingTop: 14,
    fontSize: "1.7rem",
    position: "absolute",
    zIndex: 1000
  }
}

const Header = ({ match: { params: { projectId } } }) => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      {
        projectId &&
        <div className="actions" style={styles.actions}>
          <Link
            to="/"
          >
            <i className="fa fa-arrow-left" />
          </Link>
        </div>
      }
      <div className="navbar-header">
        <span className="navbar-brand logo" style={styles.brand}></span>
      </div>
    </div>
  </nav>
)

export default () => (
  <Switch>
    <Route
      path={`/p/:projectId`}
      component={Header}
    />
    <Route
      path={"/"}
      component={Header}
    />
  </Switch>
)
