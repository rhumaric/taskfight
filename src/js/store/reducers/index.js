import {combineReducers} from 'redux-loop';
import {routerReducer} from 'react-router-redux';
import fightlist from './fightlist';
import tasks from './tasks';

const reducers = {
  NEW_FIGHT(state = {}, action) {
    return {
      ...state,
      fightlist: [],
      tasks: {}
    }
  },
};

function createReducer(reducers) {

  return (state = [], action) => {

    var reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
  };
}

const combinedReducers = combineReducers({
  fightlist: createReducer(fightlist),
  tasks: createReducer(tasks),
  routing: routerReducer
});

const rootReducer = function (state = {}, action) {
  var reducer = reducers[action.type] || combinedReducers;
  return reducer(state, action);
};

export default rootReducer;