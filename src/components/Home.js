import React from 'react';
import '../App.css';
import Quote from '../images/quote.jpg'

function Home() {
    return (   
    <div> 
        <div className="component">
            <h1>Welcome to You Got This!</h1>
            <h4>Set yourself up for success with our goal tracker:</h4>
            <p>
                => create a goal <br />
                => add your steps <br />
                => for each step create events using the date-time picker<br />
                => add them to your calender <br />
                => once you finish an event or a step check them off <br />
                =>and remember: <br />
                <img src={Quote} alt='quote' style={{height:'100px'}}/>
            </p>
        </div>
    </div>
     )
}

export default Home