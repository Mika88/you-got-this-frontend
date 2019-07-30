import React from 'react';
import StepsContainer from '../../containers/StepsContainer';
import './goal.css'
function Goal(props){

    const {match, goals, deadlineTracker, deadlineFormat} = props
    const goal = goals.find(goal => goal.id == match.params.goalId)
    
    if(goal){
        return (
        <div>
            <h1>{goal.text}</h1>
            <div className="deadline-tracker">
                <strong>Days to deadline: </strong> 
                <h1>{deadlineTracker(goal.deadline)}</h1>
            </div>
            <strong>{ goal.reason ? "This is important to me because " : ""} {goal.reason}</strong>
            <h4>{ goal.deadline ? "Deadline: " : ""} {deadlineFormat(goal.deadline)}</h4>
            
            <StepsContainer goalId={goal.id}/>
        </div>
        )
    }else{
        return <div></div>
    }
}
export default Goal;