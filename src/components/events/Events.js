import React from 'react';
import Event from './Event';

function Events({events}){
    return (
      <div>
        <ul>
          { events.map(event=> <Event key={event.id} event={event}/>) }
        </ul>
      </div>
    )
  }
  export default Events