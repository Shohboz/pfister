import fetch from "isomorphic-fetch";

export default class API {
  static get(postID = "") {
    return fetch(`/api/posts/${postID}`, {
      credentials: "include"
    }).then(response => response.json());
  }
}
