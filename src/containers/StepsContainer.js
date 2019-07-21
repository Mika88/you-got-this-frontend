import React, { Component } from 'react';
import StepInput from '../components/steps/StepInput';
import { connect } from 'react-redux';
import Steps from '../components/steps/Steps';


class StepsContainer extends Component {

    render() {
      return (
        <div>
          <StepInput addGoal={this.props.addGoal}/>
          <Steps steps={this.props.steps}/>
        </div>
      )
    }
  }
const mapStateToProps = (state) => {
  return { steps: state.steps }
}

const mapDispatchToProps = (dispatch) => ({
   addStep: text => dispatch({type: 'ADD_STEP', text}) 
})

export default connect(mapStateToProps, mapDispatchToProps)(StepsContainer)