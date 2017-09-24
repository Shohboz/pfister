import React from "react";
import Header from "components/Header";
import { renderRoutes } from "react-router-config";

const styles = {
  Container: {
    paddingTop: 100
  }
};

export default ({ route }) => (
  <div>
    <Header />
    <div style={styles.Container}>
      { renderRoutes(route.routes) }
    </div>
  </div>
)
