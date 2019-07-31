import React from 'react';
import EventContainer from '../../containers/EventsContainer';

function Step(props){

  const {step, deleteStep, goalId} = props
  
  return (
    <div>   
      <button onClick={() => deleteStep({text: step.text, goal_id: goalId}, step.id)}>X</button> 
      {step.text}  
      <EventContainer step={step}/>
    </div>
  )
}
export default Step;