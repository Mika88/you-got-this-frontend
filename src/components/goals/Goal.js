import React, { Component } from 'react';

class Goal extends Component {
  render(){
      return (
        <div>
          <li>
              {this.props.goal}
          </li>
        </div>
      )
  }
}

export default Goal;