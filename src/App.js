import React from 'react';
import GoalsContainer from './containers/GoalsContainer';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="bg">
      <div className="container">
         <Navigation/>
         <br /><br />
        <Route path="/goals" render={routerProps => <GoalsContainer {...routerProps}/>}/>
        <Route exact path="/" render={() => <h1>Home</h1>}/>
      </div>
    </div>
    );
  }

}

export default App;

