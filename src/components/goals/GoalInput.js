import React, { Component } from 'react';

export default class GoalInput extends Component {
    state = {
        text: '',
        reason: '',
        deadline : ''
    }
    
    handleOnChange(event){
      this.setState({
        [event.target.name] : event.target.value,
      })
    }
    
    handleOnSubmit(event){
      event.preventDefault();
      this.props.addGoal(this.state.text);
      this.setState({
          [event.target.name]: ''
      })
    }

    render() {
      const { text, reason, deadline } = this.state
      return (
          <div>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <input type="text" name="text" value={text} onChange={(event)=> this.handleOnChange(event)}/>
              <input type="text" name="reason" value={reason} onChange={(event)=> this.handleOnChange(event)}/>
              <input type="text" name="deadline" value={deadline} onChange={(event)=> this.handleOnChange(event)}/>
              <input type="submit" value="submit"/>
            </form>
          </div>
      )
    }
}

