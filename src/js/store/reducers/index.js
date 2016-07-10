import {combineReducers} from 'redux-loop';
import {routerReducer} from 'react-router-redux';
import fightlist from './fightlist';
import tasks from './tasks';


function createReducer(reducers) {

  return (state = [], action) => {

    var reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
  }
}

const rootReducer = combineReducers({
  fightlist,
  tasks: createReducer(tasks),
  routing: routerReducer
});

export default rootReducer;