import React, { Component } from 'react';
import EventInput from '../components/events/EventInput';
import Events from '../components/events/Events';

class EventsContainer extends Component {
  
  render() {
    
    return (
      <div>
        <EventInput step={this.props.step}/>
        <Events stepId={this.props.step.id}/>
      </div>
    )
  }
}

export default EventsContainer