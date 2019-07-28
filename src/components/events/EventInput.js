import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import AddToCalendar from 'react-add-to-calendar';
import 'react-add-to-calendar/dist/react-add-to-calendar.css';
import './event.css';

export default class EventInput extends Component {
    state={
        done: false,
        date: new Date(),
        event: {
            title: '',
            description: '',
            location: '',
            startTime: '',
            endTime: ''
          }
    }

    onChange = date => this.setState({ 
      date: date,
      event: {
        ...this.state.event, 
        title: this.props.step.text,
        startTime: date,
        endTime: date
      }
     }, () => console.log(this.state))  
    
    render() {
        let icon = { 'calendar-plus-o': 'left' };
        return (
          <div>
            <span>
              <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
               />
              <AddToCalendar 
                event={this.state.event}
                buttonTemplate={icon}
                />
            </span>
          </div>
        )
    }
}