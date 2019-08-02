import React, { Component } from 'react';
import EventContainer from '../../containers/EventsContainer';

class Step extends Component {

  constructor(props){
    super(props)
    this.state = {
      done: props.step.done
    }
  }

  handleCheckboxChange(e){
    this.setState({done: e.target.checked}, () => 
      this.props.updateStep({done: this.state.done}, this.props.step.id) )
  }

  render() {
    return (
      <div>
        <div className="d-inline-block">
          <button 
            className="btn btn-link btn-lg" 
            onClick={() => 
            { if (window.confirm('Are you sure you wish to delete this step?')) 
              this.props.deleteStep({text: this.props.step.text, goal_id: this.props.goalId}, this.props.step.id)}
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
            <h4><strong>{this.props.step.text}</strong></h4>
            </label>
          </form>
        </div>
        <EventContainer step={this.props.step}/>
      </div>
    )
  }
}
export default Step;