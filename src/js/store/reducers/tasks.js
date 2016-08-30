import {Effects,loop} from 'redux-loop';
import StoreError from '../StoreError';
import {taskAdded, taskRemoved} from '../actionCreators';
import findKey from 'lodash/findKey';
import omit from 'lodash/omit';
import uuid from 'node-uuid';



const tasks = {
  ADD_TASK (state={}, action) {
    var title = action.payload.title;

    if (findKey(state, t => {
      return t.title.toUpperCase() === title.toUpperCase();
    })) {
      throw new StoreError('TASK_ALREADY_EXISTS');
    }

    const task = {
      id: uuid(),
      title
    };

    const result = {
      ...state,
      [task.id]: task
    }
    
    return loop(result,
      Effects.constant(taskAdded(task, state))
    );
  },
  REMOVE_TASK (state={}, action) {
    var id = action.payload.id;

    if(!state[id]) {
      return state;
    }

    var result = omit(state, id);
    return loop(result,
      Effects.constant(taskRemoved(id)));
  }
}

export default tasks;