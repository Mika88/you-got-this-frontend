import React, { Component } from 'react';
import '../../App.css'

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
      <div className="event">
         <div className="d-inline-block" >
          <button
            className="btn btn-link btn-xs" 
            onClick={() => 
              { if (window.confirm('Are you sure you wish to delete this step?'))
              this.props.deleteEvent({time: this.props.event.time, step_id: this.props.stepId}, this.props.event.id)}
              }>X
            </button>
        </div>
        <div className="d-inline-block">
        <form>
            <input
              type="checkbox"
              checked={this.state.done}
              onChange={(e) => this.handleCheckboxChange(e)}
            />
          <label className="d-inline-block">
            {this.props.event.time}
          </label>
        </form>
        </div>
      </div>
    )}
}
export default Event;