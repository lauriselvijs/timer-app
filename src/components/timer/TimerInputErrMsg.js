import React, { Component } from "react";
import { Link } from "react-router-dom";

/*
 * Displays error msg to user if incorrect input (no time,
 * or memo inputted)
 */

export default class TimerInputErrMsg extends Component {
  render() {
    return (
      <div className="alert alert-primary mt-2">
        <strong>Oh snap!</strong>{" "}
        <Link to="/help" className="alert-link">
          Change a few things up
        </Link>{" "}
        and try submitting again.
      </div>
    );
  }
}
