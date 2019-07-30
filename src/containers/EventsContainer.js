import React, { Component } from 'react';
import EventInput from '../components/events/EventInput';
import Events from '../components/events/Events';
import { connect } from 'react-redux';
import { addEvent, fetchEvents, deleteEvent, updateEvent } from '../actions/events';

class EventsContainer extends Component {
  
  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {

    const associatedEvents = this.props.events.filter( event => event.step.id === this.props.step.id)
 
    return (
      <div>
        <EventInput addEvent={this.props.addEvent} step={this.props.step} />
        <Events stepId={this.props.step.id} events={associatedEvents} deleteEvent={this.props.deleteEvent} updateEvent={this.props.updateEvent} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { events: state.events }
}

const mapDispatchToProps = (dispatch) => ({
   addEvent: data => dispatch(addEvent(data)),
   fetchEvents: () => dispatch(fetchEvents()),
   deleteEvent: (data, id) => dispatch(deleteEvent(data, id)),
   updateEvent: (data, id) => dispatch(updateEvent(data, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)