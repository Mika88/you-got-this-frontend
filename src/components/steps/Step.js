import React from 'react';
import EventContainer from '../../containers/EventsContainer';

function Step({step}){
  return (
    <div>   
      {step.text}  
      <EventContainer step={step}/>
    </div>
  )
}
export default Step;