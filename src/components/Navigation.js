import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo.jpg'

class Navigation extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={Logo} alt='logo' />
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
    }

    export default Navigation