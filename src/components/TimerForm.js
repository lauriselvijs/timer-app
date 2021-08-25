import React, { Component } from "react";

export class TimerForm extends Component {
  render() {
    return (
      <div>
        <form className="m-2">
          <fieldset>
            <div class="form-group">
              <label for="memo" class="form-label mt-4">
                Memo
              </label>
              <input
                type="text"
                class="form-control"
                id="memo"
                ariaDescribedBy="Memo"
                placeholder="Enter memo"
              />
            </div>
            <div class="form-group">
              <label for="time" class="form-label mt-4">
                Time
              </label>
              <input
                type="time"
                class="form-control"
                id="time"
                ariaDescribedBy="Time"
                placeholder="Enter time"
              />
            </div>
            <div class="d-grid gap-2 m-2">
              <button class="btn btn-lg btn-primary" type="button">
                Start
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default TimerForm;
