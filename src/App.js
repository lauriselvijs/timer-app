import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TimerMainArea from "./components/timer/TimerMainArea";
import About from "./components/About";
import Help from "./components/Help";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

/*
 *  Used for displaying navigation bar, main area, about (/about) and
 * help (/help)
 */

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <TimerMainArea />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
