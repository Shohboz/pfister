import { REQUEST_COMPLETE, RESET } from "./constants";

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

    case RESET:
      return {
        ...state,
        isLoaded: null
      };

    default:
      return state;
  }
}
