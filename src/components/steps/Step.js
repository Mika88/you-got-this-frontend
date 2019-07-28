import React from 'react';
import EventContainer from '../../containers/EventsContainer';

function Step({step}){
  return (
    <div>
        <h2><li>{step.text}</li></h2>
        <EventContainer step={step}/>
    </div>
  )
}
export default Step;