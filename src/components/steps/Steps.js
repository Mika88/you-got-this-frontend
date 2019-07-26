import React from 'react';
import Step from './Step';

function Steps(props){
  return (
  <div>
    <h4>{props.steps.length > 0 ? "Steps: " : ""}</h4>
      <ol>
        { props.steps.map(step => <Step key={step.id} step={step}/>) }
      </ol>
  </div>
  )
}
export default Steps