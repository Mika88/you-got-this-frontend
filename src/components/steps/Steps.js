import React from 'react';
import Step from './Step';

const Steps = (props) => 
    
    <ul>
      { props.steps.map((step, id) => <Step key={id} step={step}/>) }
    </ul>
        
export default Steps