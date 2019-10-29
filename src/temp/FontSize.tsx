import React, { Component } from "react";

interface IFontSizeState {
  value: number;
}

class FontSize extends Component<any, IFontSizeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: 16
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }: { target: any }) {
    this.setState({
      value: Number(target.value)
    });
  }

  render() {
    return (
      <input
        type="number"
        value={this.state.value}
        onChange={this.handleChange}
        style={{ fontSize: this.state.value }}
      />
    );
  }
}

export default FontSize;
