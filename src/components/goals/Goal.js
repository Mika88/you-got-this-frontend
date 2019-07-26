import React from 'react';
import StepsContainer from '../../containers/StepsContainer';

function Goal({match, goals}){
    const goal = goals.find(goal => goal.id == match.params.goalId)
    if(goal){
        return (
        <div>
            <h3>{goal.text}</h3>
            <strong>{ goal.reason ? "This is important to me because " : ""} {goal.reason}</strong>
            <h4>{ goal.deadline ? "Deadline: " : ""} {goal.deadline}</h4>
            <StepsContainer goalId={goal.id}/>
        </div>
        )
    }else{
        return <div></div>
    }
}
export default Goal;