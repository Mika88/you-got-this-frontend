import React from 'react';
import Goal from './Goal';

const Goals = (props) =>
    <ul>
        { props.goals.map(goal => <Goal key={goal.id} goal={goal}/>) }
    </ul>
        
export default Goals