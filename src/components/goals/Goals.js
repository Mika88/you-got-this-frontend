import React from 'react';
import Goal from './Goal';
import { Link, Route } from 'react-router-dom';

const Goals = ({goals, match}) =>
  <div>
    <ul>
        { goals.map(goal => <li key={goal.id}><Link to={`${match.url}/${goal.id}`}>{goal.text}</Link></li>) }
    </ul>
    <Route path={`${match.path}/:goalId`} render={routerProps => 
      <Goal {...routerProps} goals={goals}/>} />
  </div>
export default Goals