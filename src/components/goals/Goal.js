import React from 'react';
import StepsContainer from '../../containers/StepsContainer';

const  Goal = (props) => 
    <div>
        <li>
            <h3>{props.goal.text}</h3>
            <strong>{ props.goal.reason ? "This is important to me because " : ""} {props.goal.reason}</strong>
            <h4>{ props.goal.deadline ? "Deadline: " : ""} {props.goal.deadline}</h4>
            <StepsContainer goalId={props.goal.id}/>
        </li>
    </div>

export default Goal;