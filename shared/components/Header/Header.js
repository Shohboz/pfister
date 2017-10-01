import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Logo from "components/Logo";
import Actions from "./Actions";

const Header = ({ match: { params: { projectId } } }) => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      {
        projectId &&
        <Actions />
      }
      <div className="navbar-header">
        <Logo className="navbar-brand logo" />
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
