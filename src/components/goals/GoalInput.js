import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../App.css';

export default class GoalInput extends Component {
    state = {
        text: '',
        about: '',
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
          about: '',
          deadline: ''
      })
      this.setRedirect()
    }

    render() {
      const { text, about, deadline } = this.state
      return (
          <div className="component">
            {this.renderRedirect()}
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label>My Goal:</label>
              <input
                type="text" 
                name="text" 
                value={text} 
                onChange={(event)=> this.handleOnChange(event)}
                />
              <br/><br/>
              <label>Tell us about your goal and why is it important to you (optional)</label><br/>
              <textarea
                type="text"
                name="about" 
                cols="40"
                rows="5"
                value={about} 
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

