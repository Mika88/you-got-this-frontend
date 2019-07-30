import React from 'react';
import Event from './Event';

function Events(props){
  
    const { events, deleteEvent, stepId, setDone, updateEvent } = props

    return (
      <div>
        <ul>
          { events.map(event=> <Event key={event.id} event={event} stepId={stepId} deleteEvent={deleteEvent} setDone={setDone} updateEvent={updateEvent} />) }
        </ul>
      </div>
    )
  }
  export default Events