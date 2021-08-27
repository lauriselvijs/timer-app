import React, { Component } from "react";
import Cleave from "cleave.js/react";
import { v4 as uuidv4 } from "uuid";
import TimerInputErrMsg from "./TimerInputErrMsg";

import { connect } from "react-redux";
import { addTimer } from "../../state/actions/timerActions";

export class TimerForm extends Component {
  constructor(props) {
    super(props);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onStartBtnClick = this.onStartBtnClick.bind(this);

    this.state = {
      time: "",
      desc: "",
      error: false,
    };
  }

  onTimeChange(e) {
    this.setState({
      time: e.target.value,
    });
  }

  onDescChange(e) {
    this.setState({
      desc: e.target.value,
    });
  }

  onStartBtnClick(e) {
    e.preventDefault();
    if (this.state.desc && this.state.time) {
      const timer = {
        id: uuidv4(),
        desc: this.state.desc,
        time: this.state.time,
      };

      this.props.addTimer(timer);

      this.setState({
        error: false,
        time: "",
        desc: "",
      });
    } else {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        <form className="m-2">
          <fieldset>
            <div className="form-group">
              <label for="desc" className="form-label mt-4">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                ariaDescribedBy="Desc"
                placeholder="Enter Description"
                value={this.state.desc}
                onChange={this.onDescChange}
              />
            </div>
            <div className="form-group">
              <label for="time" className="form-label mt-2">
                Time
              </label>
              <Cleave
                id="time"
                className="form-control"
                placeholder="hh:mm:ss"
                options={{
                  time: true,
                  timePattern: ["h", "m", "s"],
                }}
                value={this.state.time}
                onChange={this.onTimeChange}
              />
            </div>
            {error && <TimerInputErrMsg />}
            <div className="d-grid gap-2 m-2">
              <button
                className="btn btn-lg btn-primary"
                type="button"
                onClick={this.onStartBtnClick}
              >
                Start
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.timer,
});

export default connect(mapStateToProps, { addTimer })(TimerForm);
