import { combineReducers } from "redux";
import { INSERT, CALCULATE, CLEAR, CLEAR_ALL } from "../constants";

const defaultState = {
  result: "0",
  ExprHistory: []
};

let calcReducer = (state = defaultState, action) => {
  //state=defaultState - ES6
  const { type, payload } = action;
  switch (type) {
    case INSERT: {
      if (state.result === "0")
        return {
          ...state,
          result: payload
        };
      return {
        ...state,
        result: ("" + state.result).slice() + payload
      };
    }
    case CALCULATE: {
      let expr = state.result.slice();
      let res = eval(expr);
      return {
        ...state,
        result: res,
        ExprHistory: [...state.ExprHistory, expr]
      };
    }
    case CLEAR: {
      let slice = state.result.slice(0, -1);
      let res = slice === "" ? "0" : slice;
      return { ...state, result: res };
    }
    case CLEAR_ALL:
      return { ...state, result: "0", ExprHistory: [] };

    default:
      return state;
  }
};

export default combineReducers({
  calc: calcReducer
});
