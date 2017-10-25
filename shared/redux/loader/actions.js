import { REQUEST_COMPLETE, RESET } from "./constants";

export function loadComplete() {
  return {
    type: REQUEST_COMPLETE
  };
}

export function loadReset() {
  return {
    type: RESET
  };
}
