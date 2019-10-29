import React, { Component } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

interface ICounterState {
  counter: number;
}

class Counter extends Component<any, ICounterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState((state, props) => {
      return {
        counter: state.counter + 1
      };
    });
  }

  handleDecrement() {
    this.setState((state, props) => {
      return {
        counter: state.counter - 1
      };
    });
  }

  render() {
    return [
      <Display value={this.state.counter} />,
      <Buttons
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
      />
    ];
  }
}

export default Counter;
