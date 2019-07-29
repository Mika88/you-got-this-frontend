import React from 'react';

function Event(props){
  
  const {event, deleteEvent, stepId} = props

  return (
    <div>
        <button onClick={() => deleteEvent({time: event.time, step_id: stepId}, event.id)}>X</button>
        <h4><li>{event.time}</li></h4>
    </div>
  )
}
export default Event;