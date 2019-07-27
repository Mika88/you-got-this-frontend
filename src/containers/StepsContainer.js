import React, { Component } from 'react';
import StepInput from '../components/steps/StepInput';
import { connect } from 'react-redux';
import Steps from '../components/steps/Steps';
import { addStep, fetchSteps } from '../actions/steps'

class StepsContainer extends Component {
  componentDidMount() {
    this.props.fetchSteps()
  }

  render() {
    
    const associatedSteps = this.props.steps.filter( step => step.goal.id === this.props.goalId)

    return (
      <div>
        <StepInput addStep={this.props.addStep} goalId={this.props.goalId}/>
        <hr />
        <Steps steps={associatedSteps} goalId={this.props.goalId}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { steps: state.steps }
}

const mapDispatchToProps = (dispatch) => ({
   addStep: data => dispatch(addStep(data)),
   fetchSteps: () => dispatch(fetchSteps())
})

export default connect(mapStateToProps, mapDispatchToProps)(StepsContainer)