import React from 'react';
import Step from './Step';

function Steps(props){

  const {steps, deleteStep, goalId} = props 

  return (
  <div>
    <h2>{steps.length > 0 ? "Steps: " : ""}</h2>
        { steps.map(step =>
      
      <ol> 
        <Step key={step.id} step={step} goalId={goalId} deleteStep={deleteStep}/>
      </ol>
        )}
  </div>
  )
}
export default Steps