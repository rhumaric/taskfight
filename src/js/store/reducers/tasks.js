import {Effects,loop} from 'redux-loop';
import StoreError from '../StoreError';
import findKey from 'lodash/findKey';
import uuid from 'node-uuid';

function taskAdded(title, tasks, previousTasks) {
  return {
    type: 'TASK_ADDED',
    payload: {
      title,
      tasks,
      previousTasks
    }
  }
}

function taskRemoved(title, tasks, previousTasks) {
  return {
    type: 'TASK_REMOVED',
    payload: {
      title,
      tasks,
      previousTasks
    }
  }
}

const tasks = {
  ADD_TASK (state=[], action) {
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
  REMOVE_TASK (state=[], action) {
    var title = action.payload.title;
    var index = state.indexOf(title);
      
    if (index === -1) {
      return state;
    }
    var result = [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ]
    return loop(result,
      Effects.constant(taskRemoved(title, result, state)))
  }
}

export default tasks;