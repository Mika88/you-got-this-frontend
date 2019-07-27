import React, { Component } from 'react';
import EventInput from '../components/events/EventInput';
import Events from '../components/events/Events';

class EventsContainer extends Component {
  
  render() {
    
    return (
      <div>
        <EventInput eventlId={this.props.eventId}/>
        <Events eventId={this.props.eventId}/>
      </div>
    )
  }
}

export default EventsContainer