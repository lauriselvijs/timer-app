import React, { Component } from "react";

export class TimerCard extends Component {
  render() {
    return (
      <div class="card border-primary m-3" style={{ maxWidth: "20rem" }}>
        <div class="card-header">Timer</div>
        <div class="card-body">
          <h4 class="card-title">00:00:00</h4>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis illo voluptatibus ea nobis eos blanditiis fuga eaque
            voluptate ut. Dolor?
          </p>
        </div>
        <div class="card-footer text-muted">
          <button type="button" class="btn btn-primary btn-lg">
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default TimerCard;
