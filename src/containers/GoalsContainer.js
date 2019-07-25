import React, { Component } from 'react';
import GoalInput from '../components/goals/GoalInput';
import { connect } from 'react-redux';
import Goals from '../components/goals/Goals'
import {fetchGoals, addGoal} from '../actions/goals'
import { Route } from 'react-router-dom'

class GoalsContainer extends Component {
  componentDidMount() {
    this.props.fetchGoals()
  }
  
  render() {
    return (
      <div>
        <Route exact path="/goals" render={routerProps => <Goals {...routerProps} goals={this.props.goals}/>}>
          {/* <GoalInput addGoal={this.props.addGoal}/> */}
        </Route>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return { goals: state.goals }
  }

  const mapDispatchToProps = (dispatch) => ({
    fetchGoals: () => dispatch(fetchGoals()),
    addGoal: data => dispatch(addGoal(data))
  })

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer)