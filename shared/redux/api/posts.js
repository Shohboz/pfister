import fetch from "isomorphic-fetch";

export default class API {
  static get(postID = "") {
    const url = `${
      typeof window !== "undefined"
        ? ""
        : `http://localhost:${process.env.API_PORT}`
    }/api/posts/${postID}`;
    return fetch(url, {
      credentials: "include"
    }).then(response => response.json());
  }
}
