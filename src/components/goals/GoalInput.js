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
      this.props.addGoal(this.state)
      this.setState({
          text: '',
          reason: '',
          deadline: ''
      })
    }

    render() {
      const { text, reason, deadline } = this.state
      return (
          <div>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label>My Goal: </label>
              <input
                type="text" 
                name="text" 
                value={text} 
                onChange={(event)=> this.handleOnChange(event)}
                />
              <br/><br/>
              <label>This Goal is Important to Me Because: </label><br/>
              <textarea
                type="text"
                name="reason" 
                cols="40"
                rows="5"
                value={reason} 
                onChange={(event)=> this.handleOnChange(event)}
                />
               <br/><br/>
               <label>Choose a Deadline (optional) </label> 
               <input
                type="date" 
                name="deadline" 
                value={deadline} 
                onChange={(event)=> this.handleOnChange(event)}
               />
               <br/><br/>
              <input type="submit" value="submit"/>
            </form>
          </div>
      )
    }
}

