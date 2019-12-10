import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Button from "./Components/Button";
import ResultField from "./Components/ResultField";
import { connect } from "react-redux";
import { Insert, Calculate, Clear, ClearAll } from "./Redux/action_creators";

class App extends Component {
  render() {
    const { result, Insert, Calculate, Clear, ClearAll } = this.props;
    return (
      <div className="calc">
        <div className="calc__row">
          <ResultField>{result}</ResultField>
        </div>

        <div className="calc__row calc__row--underscore">
          <Button className="calc__btn--c" onClick={Clear}>
            C
          </Button>
          <Button className="calc__btn--ac" onClick={ClearAll}>
            AC
          </Button>
        </div>
        <div className="calc__wrapper">
          <div className="calc__numpad">
            <Button onClick={Insert}>7</Button>
            <Button onClick={Insert}>8</Button>
            <Button onClick={Insert}>9</Button>

            <Button onClick={Insert}>4</Button>
            <Button onClick={Insert}>5</Button>
            <Button onClick={Insert}>6</Button>

            <Button onClick={Insert}>1</Button>
            <Button onClick={Insert}>2</Button>
            <Button onClick={Insert}>3</Button>

            <Button onClick={Insert}>.</Button>
            <Button onClick={Insert}>0</Button>
            <Button onClick={Calculate}>=</Button>
          </div>
          <div className="calc__operator-col">
            <Button onClick={Insert}>/</Button>
            <Button onClick={Insert}>*</Button>
            <Button onClick={Insert}>-</Button>
            <Button onClick={Insert}>+</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      result: state.calc.result
    };
  },
  { Insert, Calculate, Clear, ClearAll }
)(App);
