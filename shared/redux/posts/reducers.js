import { REQUEST_FAIL, REQUEST_SUCCESS, REQUEST } from "./constants";

const initialState = {
  isFetching: false,
  list: [],
  errors: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
        lastUpdated: action.receivedAt,
        errors: ""
      };

    case REQUEST_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      };

    default:
      return state;
  }
};
