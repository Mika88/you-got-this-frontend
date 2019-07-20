import React, { Component } from 'react';
import GoalInput from '../components/goals/GoalInput';
import { connect } from 'react-redux';
import Goals from '../components/goals/Goals'


class GoalsContainer extends Component {

    render() {
      return (
        <div>
          <GoalInput addGoal={this.props.addGoal}/>
          <Goals/>
        </div>
      )
    }
  }
const mapStateToProps = (state) => {
  return { goals: state.goals }
}

const mapDispatchToProps = (dispatch) => ({
   addGoal: text => dispatch({type: 'ADD_GOAL', text}) 
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer)