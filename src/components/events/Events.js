import React from 'react';
import Event from './Event';

function Events(props){
  
    const {events, deleteEvent, stepId} = props

    return (
      <div>
        <ul>
          { events.map(event=> <Event key={event.id} event={event} stepId={stepId} deleteEvent={deleteEvent}/>) }
        </ul>
      </div>
    )
  }
  export default Events