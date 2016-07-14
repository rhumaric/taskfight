import {Effects,loop} from 'redux-loop';
import map from 'lodash/map';
import uuid from 'node-uuid';
import findIndex from 'lodash/findIndex';
import * as actions from '../actionCreators';

const reducers = {
  TASK_ADDED (state=[],action) {
    let {task, to} = action.payload;
    task = task.id;
    let fights = map(to, (t, otherTask) => {
      return {
        id: uuid(),
        task,
        otherTask
      };
    });
    return state.concat(fights);
  },

  TASK_REMOVED (state=[], action) {
    var {task} = action.payload;
    var result = state.filter((fight) => {

      return fight.task !== task && fight.otherTask !== task
    });

    return result;
  },
  SET_WINNER (state=[], action) {
    var {fight, task} = action.payload;
    var index = findIndex(state, {id: fight});

    return loop([
      ...state.slice(0, index),
      {...state[index], winner: task},
      ...state.slice(index + 1)
    ],
      Effects.constant(actions.winnerSet())
    );
  }
};

export default reducers;