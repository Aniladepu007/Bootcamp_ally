import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    const { count } = this.state;
    // if (count < 10) {
    this.setState({ count: count + 1 });
    // }
  };
  decrement = () => {
    const { count } = this.state;
    // if (count > 0) {
    this.setState({ count: count - 1 });
    // }
  };
  render() {
    return (
      <CounterComponent
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }
}

const CounterComponent = ({ count, increment, decrement }) => {
  return (
    <div className="counter">
      <h2>{count}</h2>
      <div className="btns">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
