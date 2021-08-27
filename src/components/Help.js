import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Help.css";

export class Help extends Component {
  rc;
  render() {
    return (
      <div className="help">
        <h1>Help</h1>
        <p>
          To start timer enter description and time in hh:mm:ss format and press
          start
        </p>
        <p>To cancel timer press delete button</p>
        <p>
          To stop timer press stop button or to start timer press start button
        </p>
        <Link type="button" class="btn btn-link" to="/">
          Go Back
        </Link>
      </div>
    );
  }
}

export default Help;
