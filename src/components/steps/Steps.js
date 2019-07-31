import React from 'react';
import Step from './Step';
import '../../App.css'

function Steps(props){

  const {steps, deleteStep, goalId, updateStep} = props 

  return (
  <div>
    <h2>{steps.length > 0 ? "Steps: " : ""}</h2>
      <ol>
        { steps.map(step =>
          <li key={step.id}>
            <Step step={step} goalId={goalId} deleteStep={deleteStep} updateStep={updateStep}/>
          </li>
        )}
      </ol>
  </div>
  )
}
export default Steps

