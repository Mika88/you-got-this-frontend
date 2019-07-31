import React from 'react';
import Event from './Event';

function Events(props){
  
    const { events, deleteEvent, stepId, updateEvent } = props

    return (
      <div>
        { events.map(event=> <Event key={event.id} event={event} stepId={stepId} deleteEvent={deleteEvent} updateEvent={updateEvent} />) }
      </div>
    )
  }
  export default Events