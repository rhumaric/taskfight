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

import demoState from './demoState.json';

// TODO: Remove the devtools bit in production
const store = createStore(rootReducer, demoState, compose(
  install(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;