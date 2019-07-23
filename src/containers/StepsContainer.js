import React, { Component } from 'react';
import StepInput from '../components/steps/StepInput';
import { connect } from 'react-redux';
import Steps from '../components/steps/Steps';
import { addStep } from '../actions/steps'

class StepsContainer extends Component {

    render() {
      return (
        <div>
          <StepInput addStep={this.props.addStep}/>
          <Steps steps={this.props.steps}/>
        </div>
      )
    }
  }
const mapStateToProps = (state) => {
  return { steps: state.steps }
}

const mapDispatchToProps = (dispatch) => ({
   addStep: data => dispatch(addStep(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(StepsContainer)