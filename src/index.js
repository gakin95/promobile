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
import signUpreducer from './store/reducers/signupreducers';
import auth from './store/reducers/auth'
import * as serviceWorker from './serviceWorker';




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
  signup : signUpreducer,
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
