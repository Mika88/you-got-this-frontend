import React, { Component } from 'react';

export default class GoalInput extends Component {
    state = {
        text: ''
    }
    
    handleChange(event){
      this.setState({
        text: event.target.value
      })
    }
    
    handleSubmit(event){
      event.preventDefault();
    }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleChange}/>
                <input type="submit"/>
              </form>
            </div>
        )
    }
}

