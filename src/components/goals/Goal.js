import React, { Component } from 'react';
import StepsContainer from '../../containers/StepsContainer';

class Goal extends Component {
  render(){
      return (
        <div>
          <li>
              {this.props.goal}
              <StepsContainer/>
          </li>
        </div>
      )
  }
}

export default Goal;