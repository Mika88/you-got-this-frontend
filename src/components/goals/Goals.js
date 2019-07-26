import React from 'react';
import { Link } from 'react-router-dom';

const Goals = ({goals, match}) =>
  <div>
    <ul>
        { goals.map(goal => <li key={goal.id}><Link to={`${match.url}/${goal.id}`}>{goal.text}</Link></li>) }
    </ul>
  </div>
export default Goals