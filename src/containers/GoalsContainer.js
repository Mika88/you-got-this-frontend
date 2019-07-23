import React, { Component } from 'react';
import GoalInput from '../components/goals/GoalInput';
import { connect } from 'react-redux';
import Goals from '../components/goals/Goals'
import {fetchGoals, addGoal} from '../actions/goals'

class GoalsContainer extends Component {
  componentDidMount() {
    this.props.fetchGoals()
  }

  componentDidUpdate() {
    this.props.fetchGoals()
  }
  
  render() {
    return (
      <div>
        <GoalInput addGoal={this.props.addGoal}/>
        <Goals goals={this.props.goals}/>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return { goals: state.goals.goals }
  }

  const mapDispatchToProps = (dispatch) => ({
    fetchGoals: () => dispatch(fetchGoals()),
    addGoal: () => dispatch(addGoal())
  })

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer)