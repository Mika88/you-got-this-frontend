import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class GoalInput extends Component {
    state = {
        text: '',
        reason: '',
        deadline : '',
        redirect: false
    } 
    
    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/goals' />
      }
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
      this.setRedirect()
    }

    render() {
      const { text, reason, deadline } = this.state
      return (
          <div>
            {this.renderRedirect()}
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label>My Goal: </label>
              <input
                type="text" 
                name="text" 
                value={text} 
                onChange={(event)=> this.handleOnChange(event)}
                />
              <br/><br/>
              <label>This Goal is Important to Me Because (optional) </label><br/>
              <textarea
                type="text"
                name="reason" 
                cols="40"
                rows="5"
                value={reason} 
                onChange={(event)=> this.handleOnChange(event)}
                />
               <br/><br/>
               <label>Choose a Deadline (optional)</label> 
               <input
                type="date"                 
                name="deadline" 
                value={deadline} 
                onChange={(event)=> this.handleOnChange(event)}
               />
               <br/><br/>
              <input type="submit" className="btn btn-primary" value="submit"/>
            </form>
          </div>
      )
    }
}

