import {createStore, compose, applyMiddleware} from 'redux';
import {install} from 'redux-loop';

import rootReducer from './reducers';

let initialState;

if (process.env.NODE_ENV === 'production') {
  initialState = {
    fightlist: [],
    tasks: {}
  }
} else {
  initialState = require('./demoState.json');
}

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = compose(
    install()
  );

  
} else {

  if (!window.devToolsOptions) { 
    window.devToolsOptions = {};
  }
  window.devToolsOptions.shouldCatchErrors = false;

  enhancer = compose(
    install(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
}

const store = createStore(rootReducer, initialState, enhancer);

export default store;