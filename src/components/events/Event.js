import React, { Component } from 'react';

class Event extends Component {
  
  state={
    done: false
  }
  
  handleChecked(e){
    this.setState({done: e.target.checked}) 
  }

  render() {
    return (
      <div>
        <li key={this.props.event.id}>
        <form>
            <input
              type="checkbox"
              checked={this.state.done}
              onChange={e => this.handleChecked(e)}
            />
          <label>
            {this.props.event.time}
          </label>
        </form>
        <button onClick={() => this.props.deleteEvent({time: this.props.event.time, step_id: this.props.stepId}, this.props.event.id)}>X</button>
        </li>
      </div>
    )}
}
export default Event;