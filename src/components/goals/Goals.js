import React from 'react';
import Goal from './Goal';
import { Link } from 'react-router-dom';

const Goals = ({goals, match}) =>
    
    <ul>
        { goals.map(goal => <li key={goal.id}><Link to={`${match.url}/${goal.id}`}>{goal.text}</Link></li>) }
    </ul>
        
export default Goals