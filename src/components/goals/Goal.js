import React from 'react';
import StepsContainer from '../../containers/StepsContainer';
import moment from 'moment'

function Goal({match, goals}){
    
    const goal = goals.find(goal => goal.id == match.params.goalId)

    if(goal){
        return (
        <div>
            <h1>{goal.text}</h1>
            <strong>{ goal.reason ? "This is important to me because " : ""} {goal.reason}</strong>
            <h4>{ goal.deadline ? "Deadline: " : ""} {moment(goal.deadline).format("MMM Do YYYY")}</h4>
            <StepsContainer goalId={goal.id}/>
           
        </div>
        )
    }else{
        return <div></div>
    }
}
export default Goal;