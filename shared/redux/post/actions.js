import API from "redux/api/posts";
import { REQUEST_FAIL, REQUEST_SUCCESS, REQUEST } from "./constants";

function loadStart() {
  return {
    type: REQUEST
  };
}

function receiveData(json) {
  return {
    type: REQUEST_SUCCESS,
    payload: json,
    receivedAt: Date.now()
  };
}

export function receiveFail(errors) {
  return {
    type: REQUEST_FAIL,
    errors
  };
}

export function load(id) {
  return dispatch => {
    dispatch(loadStart());
    return API.get(id)
      .then(json => dispatch(receiveData(json)))
      .catch(errors => dispatch(receiveFail(errors)));
  };
}
