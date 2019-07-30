import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar () {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
   }
    
  return (
    <div>
      <NavLink 
        to="/"
        style={link} 
        >
       Home</NavLink>
    </div> 
  )
}

export default Navbar