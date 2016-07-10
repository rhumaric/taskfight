import {Effects,loop} from 'redux-loop';
import StoreError from '../StoreError';

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

const tasks = {
  ADD_TASK (state=[], action) {
    var title = action.payload.title;

    if (state.includes(title)) {
      throw new StoreError('TASKS_ALREADY_EXISTS');
    }

    var result = [...state];
    result.push(title);
    return loop(result,
      Effects.constant(taskAdded(title, result, state))
    );
  }
}

export default tasks;