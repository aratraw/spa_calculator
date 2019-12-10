import React from "react";
import "./Button.scss";

import { nullLiteral } from "@babel/types";

function Button(props) {
  let { children, className, onClick } = props;
  return (
    <button
      onClick={() => onClick(children)}
      className={`btn ${className || ""}`}
    >
      {children}
    </button>
  );
}
export default Button;
