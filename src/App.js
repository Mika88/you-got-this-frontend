import React from 'react';
import GoalsContainer from './containers/GoalsContainer';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Route path="/goals" render={routerProps => <GoalsContainer {...routerProps}/>}/>
        <Route exact path="/" render={() => <h1>Home</h1>}/>
      </div>
    );
  }

}

export default App;