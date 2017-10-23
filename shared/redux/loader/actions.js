import { REQUEST_COMPLETE, REQUEST_RESET } from "./constants";

export function loadComplete() {
  return {
    type: REQUEST_COMPLETE
  };
}

export function loadReset() {
  return {
    type: REQUEST_RESET
  };
}
