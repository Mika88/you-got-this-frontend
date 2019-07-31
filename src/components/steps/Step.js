import React, { Component } from 'react';
import EventContainer from '../../containers/EventsContainer';

class Step extends Component {

  constructor(props){
    super(props)
    this.state = {
      done: props.step.done
    }
  }
  render() {
    return (
      <div>
        <div className="d-inline-block">
          <button 
            className="btn btn-link btn-lg" 
            onClick={() => this.props.deleteStep({text: this.props.step.text, goal_id: this.props.goalId}, this.props.step.id)}>
          X  </button> 
        </div>
        <div className="d-inline-block">
          <h4>{this.props.step.text}</h4>
        </div>
        <EventContainer step={this.props.step}/>
      </div>
    )
  }
}
export default Step;