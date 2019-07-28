import React, { Component } from 'react';
import EventInput from '../components/events/EventInput';
import Events from '../components/events/Events';
import { connect } from 'react-redux';
import { addEvent } from '../actions/steps'

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

const mapStateToProps = (state) => {
  return { steps: state.steps }
}

const mapDispatchToProps = (dispatch) => ({
   addEvent: data => dispatch(addEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)