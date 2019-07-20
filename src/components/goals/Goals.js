import React, { Component } from 'react';
import Goal from './Goal';

class Goals extends Component {
    render() {
        return (
            <ul>
              { this.props.goals.map((goal, id) => <Goal/>) }
            </ul>
        )
    }
}

export default Goals