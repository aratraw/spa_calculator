import React from "react";
import "./ResultField.scss";
import History from "../History";
function ResultField(props) {
  const { children } = props;
  return (
    <div>
      <input type="text" value={children} className="calc__result" disabled />
      <History />
    </div>
  );
}
export default ResultField;
