import React, { Component } from "react";
import TimerForm from "./TimerForm";
import Timers from "./Timers";

/*
 * Displays timer form and set timers
 */

export class TimerMainArea extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm col-lg-3">
            <TimerForm />
          </div>
          <div class="col-sm col-lg-9">
            <Timers />
          </div>
        </div>
      </div>
    );
  }
}

export default TimerMainArea;
