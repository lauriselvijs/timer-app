import React, { Component } from "react";
import Clock from "../Clock";

/*
 * TimeCard displays single timer item with memo, timer, stop
 * and cancel buttons
 */

export class TimerCard extends Component {
  constructor(props) {
    super(props);

    this.onStopBtnClick = this.onStopBtnClick.bind(this);

    this.state = {
      isPlaying: false,
    };
  }

  onStopBtnClick() {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  }
  render() {
    const {
      timer: { desc, time },
    } = this.props;

    const { isPlaying } = this.state;

    return (
      <div className="card border-primary mt-2" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Timer</div>
        <div className="card-body">
          <h4 className="card-title">
            <Clock time={time} isPlaying={isPlaying} />
          </h4>
          <p className="card-text">{desc}</p>
        </div>
        <div className="card-footer text-muted">
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={this.onStopBtnClick}
          >
            {isPlaying ? <>Stop</> : <>Start</>}
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.props.onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TimerCard;
