import React from 'react';
import Step from './Step';

const Steps = (props) => 
  <div>
    <h4>{props.steps.length > 0 ? "Steps: " : ""}</h4>
      <ol>
        { props.steps.map(step => <Step key={step.id} step={step}/>) }
      </ol>
  </div>
export default Steps