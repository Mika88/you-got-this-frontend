import React, { Component } from 'react';
import StepInput from '../components/steps/StepInput';
import { connect } from 'react-redux';
import Steps from '../components/steps/Steps';
import { addStep, fetchSteps, deleteStep, updateStep} from '../actions/steps'

class StepsContainer extends Component {
  componentDidMount() {
    this.props.fetchSteps()
  }

  render() {
    const associatedSteps = this.props.steps.filter(step => 
      step.goal.id === this.props.goalId 
     )

    return (
      <div>
        <StepInput addStep={this.props.addStep} goalId={this.props.goalId}/>
        <br /><br />
        <Steps steps={associatedSteps} goalId={this.props.goalId} deleteStep={this.props.deleteStep} updateStep={this.props.updateStep}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { steps: state.steps }
}

const mapDispatchToProps = (dispatch) => ({
   addStep: data => dispatch(addStep(data)),
   fetchSteps: () => dispatch(fetchSteps()),
   deleteStep: (data, id) => dispatch(deleteStep(data, id)),
   updateStep: (data, id) => dispatch(updateStep(data, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepsContainer)