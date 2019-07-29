import React from 'react';

function Event(props){
  
  const {event, deleteEvent, stepId, setDone} = props

  return (
    <div>
      <li>
        <strong>
          {event.time}
          <button onClick={() => deleteEvent({time: event.time, step_id: stepId}, event.id)}>X</button>
        </strong>
      </li>
    </div>
  )
}
export default Event;