import React from 'react';
import EventContainer from '../../containers/EventsContainer';

function Step({step}){
  return (
    <div>
        <li>
            {step.text}
        </li>
        <EventContainer stepId={step.id}/>
    </div>
  )
}
export default Step;