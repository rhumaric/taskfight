// Redux store
// 
// Contents:
// 
//  - tasks []
//  - fightlist []
//  - ui {
//  
//    - activeStage ? (UI State?)
//    - editedTask ? (UI State?)
//    }
//  - ?
import {createStore, compose} from 'redux';
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
  enhancer = install();

  
} else {
  enhancer = compose(
    install(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
}

const store = createStore(rootReducer, initialState, enhancer);

export default store;