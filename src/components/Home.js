import React from 'react';
import '../App.css';
import Quote from '../images/quote.jpg'

function Home() {
    return (   
    <div> 
        <div className="component">
            <h1>Welcome to You Got This!</h1>
            <h4>Set yourself up for success with our goal tracker:</h4>
            <strong>
                <ol>
                    <li>Create a goal</li>
                    <li>Click it</li>
                    <li>Add steps</li>
                    <li>For each step create events</li>
                    <li>Add it to your calendar (optional)</li>
                    <li>Submit it</li>
                    <li>Once you finished an event check it off</li>
                    <li>and remember:</li>
                    <img src={Quote} alt='quote' style={{height:'100px'}}/>
                </ol>
            </strong>
        </div>
    </div>
     )
}

export default Home