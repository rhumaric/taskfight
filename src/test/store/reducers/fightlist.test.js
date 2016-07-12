import * as actions from 'app/store/actionCreators';
import fightlist from 'app/store/reducers/fightlist';

describe('Fight list reducers', function () {
  describe ('TASK_ADDED', function () {

    const state = {  
    }

    it('Adds the fights against the existing task for the task that has been added', function () {
      const result = fighlist.TASK_ADDED(state, {
        type: 'TASK_ADDED',
        payload: {
          task: {
            id: 'a-task',
            title: 'A task'
          },
          tasks: {
            'existing-task': {
              id: 'existing-task',
              title: 'Existing task'
            },
            'a-task': {
              id: 'a-task',
              title: 'A task'
            },
            'other-existing-task': {
              id: 'other-existing-task',
              title: 'Other existing task'
            },
            'yet-another-task': {
              id: 'yet-another-task',
              title: 'Yet another task'
            }
          },
          previousTasks: {
            'existing-task': {
              id: 'existing-task',
              title: 'Existing task'
            },
            'other-existing-task': {
              id: 'other-existing-task',
              title: 'Other existing task'
            },
            'yet-another-task': {
              id: 'yet-another-task',
              title: 'Yet another task'
            }
          }
        }
      });

      expect(Object.keys(result)).to.have.length(6);
    });
  });
});