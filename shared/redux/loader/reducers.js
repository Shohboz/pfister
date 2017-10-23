import { REQUEST_COMPLETE, REQUEST_RESET } from "./constants";

const initialState = {
  isLoaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMPLETE:
      return {
        ...state,
        isLoaded: true
      };

    case REQUEST_RESET:
      return {
        ...state,
        isLoaded: null
      };

    default:
      return state;
  }
}
