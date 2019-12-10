import React from "react";
import "./ResultField.scss";
function ResultField(props) {
  const { children } = props;
  return (
    <input type="text" className="calc__result" value={children} disabled />
  );
}
export default ResultField;
