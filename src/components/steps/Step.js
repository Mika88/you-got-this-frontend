import React from 'react';
import EventContainer from '../../containers/EventsContainer';

function Step(props){
  return (
    <div>
        <li>
            {props.step.text}
        </li>
        <EventContainer/>
    </div>
  )
}
export default Step;