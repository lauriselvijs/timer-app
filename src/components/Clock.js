import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/Clock.css";
import { convertDurationToSeconds } from "./utils/timeConv";

/*
 * Clock component needed for displaying dynamic countdown clock
 */

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <small>{dimension}</small>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;

export class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { time: initialTime, isPlaying } = this.props;

    const timerProps = {
      isPlaying,
      size: 100,
      strokeWidth: 0,
    };

    const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = startTime + convertDurationToSeconds(initialTime); // use UNIX timestamp in seconds

    const remainingTime = endTime - startTime;

    return (
      <div className="clock-container">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#e83283"]]}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > hourSeconds,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("hours", getTimeHours(daySeconds - elapsedTime))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#e83283"]]}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > minuteSeconds,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#e83283"]]}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > 0,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("seconds", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
    );
  }
}

export default Clock;
