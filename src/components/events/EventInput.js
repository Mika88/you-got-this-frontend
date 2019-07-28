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
            title: this.props.step.text,
            description: '',
            location: '',
            startTime: new Date(),
            endTime: new Date()
          }
    }

    onChange = date => this.setState({ 
      date: date, 
      event: {
        ...this.state.event,
          startTime: date,
          endTime: date
      }
     }, () => console.log(this.state))  
    
     handleSubmit(event){
      event.preventDefault();
      this.setState({
        date: new Date(), 
        done: false,
        event: {
          ...this.state.event, 
          startTime: new Date(),
          endTime: new Date()
        }
      })
    }

    render() {
        let icon = { 'calendar-plus-o': 'left' };
        return (
          <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
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
          </div>
        )
    }
}