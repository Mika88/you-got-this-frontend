import React from 'react';
import EventContainer from '../../containers/EventsContainer';

function Step(props){

  const {step, goalId, deleteStep} = props
  return (
    <div>   
      {step.text}  
      <EventContainer step={step}/>
    </div>
  )
}
export default Step;