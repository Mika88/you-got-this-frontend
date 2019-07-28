import React, { Component } from 'react';
import EventInput from '../components/events/EventInput';
import Events from '../components/events/Events';
import { connect } from 'react-redux';
import { addEvent, fetchEvents } from '../actions/events';
class EventsContainer extends Component {
  
  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {

    const associatedEvents = this.props.events.filter( event => event.step.id === this.props.step.id)

    return (
      <div>
        <EventInput addEvent={this.props.addEvent} step={this.props.step}/>
        <Events stepId={this.props.step.id} events={associatedEvents}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { events: state.events }
}

const mapDispatchToProps = (dispatch) => ({
   addEvent: data => dispatch(addEvent(data)),
   fetchEvents: () => dispatch(fetchEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)