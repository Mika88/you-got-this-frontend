import React from 'react';
import { Link } from 'react-router-dom';

function Goals(props){

  const {goals, match, deleteGoal} = props

  return (
    <div>
    <ul>
        { goals.map(goal => 
        <li 
          key={goal.id}><Link to={`${match.url}/${goal.id}`}>{goal.text}</Link>
          <button onClick={() => deleteGoal({text: goal.text, reason: goal.reason, deadline: goal.deadline}, goal.id)}>X</button>
        </li>
      )}
    </ul>
  </div>
  )
}
export default Goals