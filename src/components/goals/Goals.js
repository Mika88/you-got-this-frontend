import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Goals(props){
  
  const {goals, match, deleteGoal} = props
 
  if(goals.length > 0){
    return (
      <div className="component">
          { goals.map((goal, index) => 
          <div key={index}>
            <div className="d-inline-block">
              <div className="delete-button">
                <button 
                  className="btn btn-link btn-xs" 
                  onClick={() => 
                    { if (window.confirm('Are you sure you wish to delete this goal?'))  deleteGoal({text: goal.text, about: goal.about, deadline: goal.deadline}, goal.id)}}>X
                </button>
                </div>
            </div>
            <div className="d-inline-block">
                <h4><Link to={`${match.url}/${goal.id}`}> {goal.text}</Link></h4>
            </div>
            <br /><br />
          </div>
          )}
      </div>
    )
  }else{
    return(
      <div className="component">
        <h4>The 'My Goals' page is currently empty,</h4>
        <h4>please add goals using the 'Create a Goal' button.</h4>
      </div>
    )
  }
}
export default Goals

