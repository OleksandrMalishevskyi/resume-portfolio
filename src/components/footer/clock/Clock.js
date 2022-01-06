import React, { Component } from 'react';
import AnalogClock from 'analog-clock-react'

class Clock extends Component {

  interval = null;
  constructor(props) {
    super(props);
    this.state = {
      options: {
        useCustomTime: false,
        width: "130px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#d81c7a",
          minute: "#000000",
          hour: "#ffffff"
        },
      }
    };
  }

  render() {
    return (
      <AnalogClock {...this.state.options} />
    );
  }

}

export default Clock;