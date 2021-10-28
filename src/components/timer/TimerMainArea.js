import React, { Component } from "react";
import TimerForm from "./TimerForm";
import Timers from "./Timers";

/*
 * Displays timer form and set timers
 */

export class TimerMainArea extends Component {
  render() {
    return (
      <div className="d-flex flex-row ">
        <div className="m-2">
          <TimerForm />
        </div>
        <Timers />
      </div>
    );
  }
}

export default TimerMainArea;
