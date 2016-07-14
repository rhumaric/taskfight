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
import {createStore} from 'redux';
import {install} from 'redux-loop';

import rootReducer from './reducers';

import demoState from './demoState.json';

const store = createStore(rootReducer, demoState,
  install()
);

export default store;