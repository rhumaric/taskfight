import {Effects,loop} from 'redux-loop';
import StoreError from '../StoreError';
import findKey from 'lodash/findKey';
import omit from 'lodash/omit';
import uuid from 'node-uuid';

function taskAdded(task, tasks, previousTasks) {
  return {
    type: 'TASK_ADDED',
    payload: {
      task,
      tasks,
      previousTasks
    }
  }
}

function taskRemoved(task, tasks, previousTasks) {
  return {
    type: 'TASK_REMOVED',
    payload: {
      task,
      tasks,
      previousTasks
    }
  }
}

const tasks = {
  ADD_TASK (state={}, action) {
    var title = action.payload.title;

    if (findKey(state, {title})) {
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
      Effects.constant(taskAdded(task, result, state))
    );
  },
  REMOVE_TASK (state={}, action) {
    var id = action.payload.id;

    if(!state[id]) {
      return state;
    }

    var result = omit(state, id);
    return loop(result,
      Effects.constant(taskRemoved(id, result, state)));
  }
}

export default tasks;