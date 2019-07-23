import React, { Component } from 'react';

export default class GoalInput extends Component {
    state = {
        text: '',
        reason: '',
        deadline : ''
    }
    
    postGoal(){
      fetch('http://localhost:3001/api/v1/goals', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(this.state) 
      })
        .then(res => res.json())
        .catch(error => console.log("Error:", error))
        .then(response => console.log("Success:", response));
    }  

    handleOnChange(event){
      this.setState({
        [event.target.name] : event.target.value,
      })
    }
    
    handleOnSubmit(event){
      event.preventDefault();
      this.postGoal()
      this.setState({
          [event.target.name]: ''
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

