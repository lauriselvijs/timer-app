import React, { Component } from "react";
import TimerForm from "./TimerForm";
import Timers from "./Timers";

export class TimerMainArea extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm col-lg-6 col-md-4">
            <TimerForm />
          </div>
          <div class="col-sm col-lg-6 col-md-8">
            <Timers />
          </div>
        </div>
      </div>
    );
  }
}

export default TimerMainArea;
