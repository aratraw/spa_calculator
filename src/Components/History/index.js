import React, { Component } from "react";
import { connect } from "react-redux";
import "./History.scss";
class HistoryDropdown extends Component {
  state = { isOpen: false };
  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  CopyToClipboard(text) {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  getBody(isOpen) {
    if (!isOpen) return null;
    const { exprHistory } = this.props;
    return (
      <ul className="history__drawer">
        {exprHistory.map(x => (
          <li
            onClick={() => {
              this.CopyToClipboard(x);
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    const { isOpen } = this.state;
    return (
      <div className={`history ${!isOpen ? "history--closed" : ""}`}>
        <button className="history__toggle" onClick={this.toggle}></button>
        {this.getBody(isOpen)}
      </div>
    );
  }
}
export default connect(store => {
  return {
    exprHistory: store.calc.ExprHistory
  };
}, null)(HistoryDropdown);
