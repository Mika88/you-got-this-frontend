import React from 'react';
import GoalsContainer from './containers/GoalsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" render={() => <h1>Home</h1>}/>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;