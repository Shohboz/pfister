import fetch from "isomorphic-fetch";
import {
  REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAIL
} from "./constants";
import API from "redux/api/posts";

export function loadAll() {
  return dispatch => {
    dispatch(loadStart());
    return API.get(id)
      .then(json => {
        return dispatch(receiveList(json));
      })
      .catch(errors => dispatch(receiveFail(errors)));
  };
}

function loadStart() {
  return {
    type: REQUEST
  };
}

function receiveList(json) {
  return {
    type: REQUEST_SUCCESS,
    list: json.list,
    receivedAt: Date.now()
  };
}

export function receiveFail(errors) {
  return {
    type: REQUEST_FAIL,
    errors
  };
}
