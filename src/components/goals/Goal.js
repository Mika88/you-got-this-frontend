import React from 'react';
import StepsContainer from '../../containers/StepsContainer';
import './goal.css'

function Goal(props){

    const {match, goals, deadlineTracker, deadlineFormat} = props
    const goal = goals.find(goal => goal.id == match.params.goalId)
     
    if(goal){
        const isAbout = () => {
            if(goal.about || goal.deadline) {
              return (
                <div className="side-bar">
                    <div className="about-goal">
                        <h3>About My Goal</h3>
                        <p>{goal.about}</p>
                        <strong>Deadline: </strong>
                        <p>{deadlineFormat(goal.deadline)}</p>
                    </div>
                   
                    <div className="deadline-tracker"> 
                        <strong>Days to deadline: </strong> 
                        <h1>{deadlineTracker(goal.deadline)}</h1>
                    </div> 
                </div>
              )
            } else {
                return (
                    <div></div>
               )}
        }

        return (
            <div className="goal">
                <h1>{goal.text}</h1>  
                {isAbout()}
                <br /><br />
                <StepsContainer goalId={goal.id}/>
            </div>
            )
    }else{
        return <div></div>
    }
}
export default Goal;