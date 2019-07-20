import React, { Component } from 'react';
import Goal from './Goal';

class Goals extends Component {
    render() {
        return (
            <ul>
              { this.props.goals.map((goal, id) => <Goal goal={goal}/>) }
            </ul>
        )
    }
}

export default Goals