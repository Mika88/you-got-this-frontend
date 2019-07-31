import React from 'react';
import '../App.css';
import Quote from '../images/quote.jpg'

function Home() {
    return (   
    <div> 
        <div className="component">
            <h1>Welcome to You Got This!</h1>
            {/* <h4>A Goal tracker application</h4> */}
            <img src={Quote} alt='quote' style={{height:'100px'}}/>
        </div>
    </div>
     )
}

export default Home