import React from 'react';
import Step from './Step';

function Steps({steps}){
  return (
  <div>
    <h2>{steps.length > 0 ? "Steps: " : ""}</h2>
      <ol>
        { steps.map(step => <Step key={step.id} step={step}/>) }
      </ol>
  </div>
  )
}
export default Steps