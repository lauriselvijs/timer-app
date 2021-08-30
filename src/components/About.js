import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

/*
 * About component shows information about timer app
 */

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>Timer</h1>
        <h4>Version 1.0.0</h4>
        <Link type="button" class="btn btn-link" to="/">
          Go Back
        </Link>
      </div>
    );
  }
}
