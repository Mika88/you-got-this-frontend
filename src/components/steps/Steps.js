import React from 'react';
import Step from './Step';

function Steps(props){

  const {steps, deleteStep, goalId} = props 

  return (
  <div>
    <h2>{steps.length > 0 ? "Steps: " : ""}</h2>
    <ol>
        { steps.map(step => 
        <li key={step.id}><Step step={step} goalId={goalId} deleteStep={deleteStep}/></li>
         )}
    </ol>
  </div>
  )
}
export default Steps