import React, { Component } from "react";
import TimerCard from "./TimerCard";

export class Timers extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <TimerCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Timers;
