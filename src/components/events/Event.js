import React, { Component } from 'react';

class Event extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      done: props.event.done
    }
  }

  handleCheckboxChange(e){
    this.setState({done: e.target.checked}, () => 
      this.props.updateEvent({done: this.state.done}, this.props.event.id) )
  }
  
  render() {    
    return (
      <div>
        <li key={this.props.event.id}>
        <form>
            <input
              type="checkbox"
              checked={this.state.done}
              onChange={(e) => this.handleCheckboxChange(e)}
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