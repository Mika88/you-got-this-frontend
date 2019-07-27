import React from 'react';
import EventContainer from '../../containers/EventsContainer';

function Step({step}){
  return (
    <div>
        <h1><li>{step.text}</li></h1>
        <EventContainer stepId={step.id}/>
    </div>
  )
}
export default Step;