import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}
 
let store = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App/>
      </AlertProvider>
    </BrowserRouter>
  </Provider>, 
  
  document.getElementById('root')
);


