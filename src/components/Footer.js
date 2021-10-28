import React, { Component } from "react";
import "../styles/Footer.css";

/*
 * Footer component shows copyright information
 */

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <hr />
        <p className="copyright-year">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </footer>
    );
  }
}
