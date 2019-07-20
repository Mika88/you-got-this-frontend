import React, { Component } from 'react'
import GoalInput from '../components/goals/GoalInput'
// import Goals from '../components/goals/Goals'


export default class GoalsContainer extends Component {

    render() {
      return (
        <div>
          <GoalInput/>
          {/* <Goals/> */}
        </div>
      )
    }
  }

