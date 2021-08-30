import React, { Component } from "react";
import TimerCard from "./TimerCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../styles/timer/Timers.css";
import { connect } from "react-redux";
import { getTimers, deleteTimer } from "../../state/actions/timerActions";
import PropTypes from "prop-types";

/*
 * Component loops trough timer items and also deletes them
 */

export class Timers extends Component {
  constructor(props) {
    super(props);

    this.deleteTimeCard = this.deleteTimeCard.bind(this);

    this.state = {
      timers: [],
    };
  }

  componentDidMount() {
    this.props.getTimers();
  }

  deleteTimeCard(id) {
    this.props.deleteTimer(id);
  }

  render() {
    const { timers } = this.props.timer;

    return (
      <TransitionGroup>
        <div className="timers">
          {timers.map((timer) => (
            <div className="container">
              <CSSTransition key={timer.id} timeout={500} classNames="fade">
                <TimerCard
                  key={timer.id}
                  timer={timer}
                  onDelete={this.deleteTimeCard.bind(this, timer.id)}
                />
              </CSSTransition>
            </div>
          ))}
        </div>
      </TransitionGroup>
    );
  }
}

Timers.propTypes = {
  getTimers: PropTypes.func.isRequired,
  timer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  timer: state.timer,
});

export default connect(mapStateToProps, { getTimers, deleteTimer })(Timers);
