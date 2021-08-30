import React, { Component } from "react";
import { Link } from "react-router-dom";

/*
 * Displays error msg to user if incorrect input (no time,
 * or memo inputted)
 */

export default class TimerInputErrMsg extends Component {
  render() {
    return (
      <div class="alert alert-dismissible alert-primary mt-2">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Oh snap!</strong>{" "}
        <Link to="/help" className="alert-link">
          Change a few things up
        </Link>{" "}
        and try submitting again.
      </div>
    );
  }
}
