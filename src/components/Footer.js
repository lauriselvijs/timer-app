import React, { Component } from "react";
import "../styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <hr />
        <p className="copyright-year">Copyright &copy; 2021</p>
      </footer>
    );
  }
}
