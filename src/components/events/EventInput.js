import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

export default class EventInput extends Component {
    state={
        done: false,
        date: new Date()
    }

    onChange = date => this.setState({ date }) 

    render() {
        return (
           <div>
             <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
              />
           </div> 
        )
    }
}