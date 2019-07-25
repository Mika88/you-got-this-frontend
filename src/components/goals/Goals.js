import React from 'react';
import Goal from './Goal';
import { Link } from 'react-router-dom';

const Goals = (props) =>
    
    <ul>
        { props.goals.map(goal => <li><Link key={goal.id} to={`/goals/${goal.id}`}>{goal.text}</Link></li>) }
    </ul>
        
export default Goals