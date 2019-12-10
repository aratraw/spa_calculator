import { INSERT, CALCULATE, CLEAR, CLEAR_ALL } from "../constants";

export function Calculate() {
  return {
    type: CALCULATE
  };
}

export function Insert(character) {
  return {
    type: INSERT,
    payload: character
  };
}

export function Clear(character) {
  return {
    type: CLEAR
  };
}
export function ClearAll(character) {
  return {
    type: CLEAR_ALL
  };
}
