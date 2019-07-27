import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import AddToCalendar from 'react-add-to-calendar';
import 'react-add-to-calendar/dist/react-add-to-calendar.css'
export default class EventInput extends Component {
    state={
        done: false,
        date: new Date(),
        event: {
            title: 'Sample Event',
            description: 'This is the sample event provided as an example only',
            location: 'Portland, OR',
            startTime: '2016-09-16T20:15:00-04:00',
            endTime: '2016-09-16T21:45:00-04:00'
          }
    }

    onChange = date => this.setState({ date }, () => console.log(this.state))  
    
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