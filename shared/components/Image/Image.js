import React from "react";

const styles = {
  ImageContainer: {
    padding: "0 0 20px"
  },
  Image: {
    width: "100%"
  }
}

export default ({ url }) => (
  <div style={styles.ImageContainer}>
    <img
      style={styles.Image}
      src={url} />
  </div>
)
