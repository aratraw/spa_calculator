import { combineReducers } from "redux";
import { INSERT, CALCULATE, CLEAR, CLEAR_ALL } from "../constants";

const defaultState = {
  result: "0"
};

let calcReducer = (CalcState = defaultState, action) => {
  //state=defaultState - ES6
  const { type, payload } = action;
  switch (type) {
    case INSERT: {
      if (CalcState.result === "0")
        return {
          ...CalcState,
          result: payload
        };
      return {
        ...CalcState,
        result: ("" + CalcState.result).slice() + payload
      };
    }
    case CALCULATE:
      return { ...CalcState, result: eval(CalcState.result.slice()) };
    case CLEAR:
      return { ...CalcState, result: eval(CalcState.result.slice()) };
    case CLEAR_ALL:
      return { ...CalcState, result: "0" };

    default:
      return CalcState;
  }
};

export default combineReducers({
  calc: calcReducer
});
