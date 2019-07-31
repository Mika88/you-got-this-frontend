import React from 'react';
import StepsContainer from '../../containers/StepsContainer';
import './goal.css'
function Goal(props){

    const {match, goals, deadlineTracker, deadlineFormat} = props
    const goal = goals.find(goal => goal.id == match.params.goalId)
    
    if(goal){
        return (
        <div className="goal">
            <h1>{goal.text}</h1>
            <div className="deadline-tracker">
              {goal.deadline ? 
                <div>
                    <strong>Days to deadline: </strong> 
                    <h1>{deadlineTracker(goal.deadline)}</h1>
                </div> : ""}
            </div>
            <div className="about-goal">
              <h4>About my goal:</h4>
              <p>{goal.about}</p>
            </div>
            { goal.deadline ? 
               <strong>Deadline:  {deadlineFormat(goal.deadline)}</strong>
               : "" }
            <br /><br />
            <StepsContainer goalId={goal.id}/>
        </div>
        )
    }else{
        return <div></div>
    }
}
export default Goal;