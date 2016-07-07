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

import rootReducer from './reducers';

const store = createStore(rootReducer, {
  tasks: [],
  fightlist: []
});

export default store;