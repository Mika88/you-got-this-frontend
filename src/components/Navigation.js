import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.jpg'

function Navigation() {
      return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light" style={{height: '50px'}}>
          <img src={Logo} alt='logo' style={{height: '50px'}}/>
          <NavLink 
            to="/"
            className="navbar-brand" 
            >Home</NavLink>
          <NavLink 
            to="/goals"
            className="navbar-brand" 
            >My Goals</NavLink>
          <NavLink 
            to="/goals/new"
            className="navbar-brand" 
            >Create a Gaol</NavLink>
        </nav>
        )}

export default Navigation