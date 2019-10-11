import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment'
import 'react-add-to-calendar/dist/react-add-to-calendar.css';
import '../../App.css'

export default class EventInput extends Component {
    state={
        date: new Date(),
        event: {
            title: this.props.step.text,
            description: '',
            location: '',
            startTime: new Date(),
            endTime: new Date()
          },
        showPicker : false
    }
    
    eventTimeFormat(){
      return moment(this.state.date).format('MMMM Do YYYY, h:mm a')
    }

    onChange = date => this.setState({ 
      date: date, 
      event: {
        ...this.state.event,
          startTime: date,
          endTime: date
      }
     })  
    
     handleSubmit = event => {
      event.preventDefault();
      this.props.addEvent({time: this.eventTimeFormat(), step_id: this.props.step.id})
      this.setState({
        date: new Date(),
        event: {
          ...this.state.event, 
          startTime: new Date(),
          endTime: new Date()
        }
      })
    }
    
    handleShowPicker(){
      this.setState({showPicker: !this.state.showPicker})
    }

    render() {
        let icon = { 'calendar-plus-o': 'left' };
        return (
          <div>
            <button className="btn btn-link btn-lg" onClick={()=> this.handleShowPicker()}>Add an Event</button>
            {this.state.showPicker ? 
            <form onSubmit={event => this.handleSubmit(event)}>
              <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
               />
              <AddToCalendar 
                event={this.state.event}
                buttonTemplate={icon}
                />
               <input type="submit" value="submit"/>
            </form>
              : null
             }
          </div>
        )
    }
}