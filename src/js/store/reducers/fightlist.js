import map from 'lodash/map';
import uuid from 'node-uuid';

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
  }
};

export default reducers;