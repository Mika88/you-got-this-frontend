import React, { Component } from 'react';
import GoalInput from '../components/goals/GoalInput';
import { connect } from 'react-redux';
import Goals from '../components/goals/Goals'
import {fetchGoals, addGoal, deleteGoal} from '../actions/goals'
import { Route } from 'react-router-dom'
import Goal from '../components/goals/Goal'

class GoalsContainer extends Component {
  componentDidMount() {
    this.props.fetchGoals()
  }
  
  render() {
    return (
      <div>
        <Route exact path={this.props.match.path} render={routerProps => 
          < Goals {...routerProps} goals={this.props.goals} deleteGoal={this.props.deleteGoal}/> }/>
        <Route path={`${this.props.match.path}/:goalId`} render={routerProps => 
          < Goal {...routerProps} goals={this.props.goals}/> }/>
        <Route exact path={`${this.props.match.path}/new`}  render={routerProps => 
          <GoalInput {...routerProps} addGoal={this.props.addGoal}/>
        } /> 
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return { goals: state.goals }
  }

  const mapDispatchToProps = (dispatch) => ({
    fetchGoals: () => dispatch(fetchGoals()),
    addGoal: data => dispatch(addGoal(data)),
    deleteGoal: (data, id) => dispatch(deleteGoal(data, id))
  })

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer)