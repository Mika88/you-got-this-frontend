import React, { Component } from 'react';

export default class GoalInput extends Component {
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
    }

    render() {
        return (
            <div>
              <form onSubmit={(event) => this.handleOnSubmit}>
                <input type="text" value={this.state.text} onChange={(event)=> this.handleOnChange(event)}/>
                <input type="submit" value="submit"/>
              </form>
            </div>
        )
    }
}

