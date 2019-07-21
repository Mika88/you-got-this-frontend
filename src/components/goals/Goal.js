import React from 'react';
import StepsContainer from '../../containers/StepsContainer';

const  Goal = (props) => 
    <div>
        <li>
            {props.goal}
            <StepsContainer/>
        </li>
    </div>

export default Goal;