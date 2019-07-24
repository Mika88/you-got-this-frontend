import React from 'react';
import Step from './Step';

const Steps = (props) => 
  <div>
    <h4>Steps: </h4>
      <ul>
        { props.steps.map(step => <Step key={step.id} step={step}/>) }
      </ul>
  </div>
export default Steps