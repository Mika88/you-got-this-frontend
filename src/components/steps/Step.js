import React from 'react';
import EventContainer from '../../containers/EventsContainer';

function Step(props){

  const {step, deleteStep, goalId} = props

  return (
    <div>
       <div className="d-inline-block">
        <button 
          className="btn btn-link btn-lg" 
          onClick={() => deleteStep({text: step.text, goal_id: goalId}, step.id)}>
         X  </button> 
      </div>
      <div className="d-inline-block">
        <h4>{step.text}</h4>
      </div>
      <EventContainer step={step}/>
    </div>
  )
}
export default Step;