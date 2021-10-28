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

    this.nodeRef = React.createRef(null);
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
      <div className="container">
        <TransitionGroup className="row">
          {timers.map((timer) => (
            <CSSTransition
              nodeRef={this.nodeRef}
              key={timer.id}
              timeout={1000}
              classNames="fade"
            >
              <div ref={this.nodeRef} className="col">
                <TimerCard
                  timer={timer}
                  onDelete={this.deleteTimeCard.bind(this, timer.id)}
                />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
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
