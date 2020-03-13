import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './App';
import theme from './theme';
import axios from 'axios';
import signUpeducer from './store/reducers/signupreducers';
import auth from './store/reducers/auth'
import * as serviceWorker from './serviceWorker';


axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  //console.log(request);
  return request;
}, error => {
  //console.log(error);
  return new Promise.reject(error);
});

axios.interceptors.response.use(response => {
  //console.log(response);
  return response;
}, error => {
  console.log(error);
  return new Promise.reject(error);
})

function logger({ getState }) {
  return next => action => {
    //console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    //console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  signup : signUpeducer,
  authentication: auth
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, ReduxThunk)))

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
