import React from 'react';
import Step from './Step';

const Steps = (props) => 
    <ul>
      { props.steps.map(step => <Step key={step.id} step={step}/>) }
    </ul>
        
export default Steps