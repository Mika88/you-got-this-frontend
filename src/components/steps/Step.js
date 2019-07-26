import React from 'react';

function Step(props){
  return (
    <div>
        <li>
            {props.step.text}
        </li>
    </div>
  )
}
export default Step;