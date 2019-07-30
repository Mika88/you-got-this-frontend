import React from 'react';
import { Link } from 'react-router-dom';

function Goals(props){

  const {goals, match, deleteGoal} = props

  return (
    <div>
        { goals.map(goal => 
        <div>
          <button 
            className="btn-outline-primary btn-sm" 
            onClick={() => 
              deleteGoal({text: goal.text, reason: goal.reason, deadline: goal.deadline}, goal.id)}
               >X</button>
          <strong><Link className="bg-light" to={`${match.url}/${goal.id}`}> {goal.text}</Link></strong>
          <br /><br />
        </div>
      )}
  </div>
  )
}
export default Goals

