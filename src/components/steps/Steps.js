import React from 'react';
import Step from './Step';
import './steps.css'

function Steps(props){

  const {steps, deleteStep, goalId} = props 

  return (
  <div className="steps">
    <h2>{steps.length > 0 ? "Steps: " : ""}</h2>
    <ol>
        { steps.map(step => 
        <li key={step.id}>
          <button onClick={() => deleteStep({text: step.text, goal_id: goalId}, step.id)}>X</button> 
          <Step step={step} goalId={goalId} deleteStep={deleteStep}/>
        </li>
        )}
    </ol>
  </div>
  )
}
export default Steps