import React, { Component } from 'react';

export default class StepInput extends Component {
    state = {
        text: ''
    }
    
    handleOnChange(event){
      this.setState({
        text: event.target.value,
      })
    }
    
    handleOnSubmit(event){
      event.preventDefault();
      this.props.addStep({text: this.state.text, goal_id: this.props.goalId});
      this.setState({
          text: ''
      })
    }

    render() {
        return (
            <div>
              <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <input type="text" value={this.state.text} onChange={(event)=> this.handleOnChange(event)}/>
                <input type="submit" value="submit"/>
              </form>
            </div>
        )
    }
}

