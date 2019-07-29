import React from 'react';
import EventContainer from '../../containers/EventsContainer';

function Step(props){

  const {step, goalId, deleteStep} = props
  return (
    <div>
        <h2>
          <li>
            {step.text}
            <button onClick={() => deleteStep({text: step.text, goal_id: goalId}, step.id)}>X</button>
          </li>
        </h2>
        <EventContainer step={step}/>
    </div>
  )
}
export default Step;