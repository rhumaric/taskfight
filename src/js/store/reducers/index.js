import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import fightlist from './fightlist';
import tasks from './tasks';

const rootReducer = combineReducers({
  fightlist,
  tasks,
  routing: routerReducer
});

export default rootReducer;