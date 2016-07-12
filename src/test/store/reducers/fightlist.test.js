import * as actions from 'app/store/actionCreators';
import fightlist from 'app/store/reducers/fightlist';

describe('Fight list reducers', function () {
  describe ('TASK_ADDED', function () {

    it('Adds the fights against the existing task for the task that has been added', function () {
      const result = fightlist.TASK_ADDED([], {
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

      expect(result).to.have.length(3);
    });
  });

  describe('TASK_REMOVED', function () {


    const state = [
      {
        id: 'fight-1',
        task: 'task-2',
        otherTask: 'task-1'
      },
      {
        id: 'fight-2',
        task: 'task-3',
        otherTask: 'task-1'
      },
      {
        id: 'fight-3',
        task: 'task-3',
        otherTask: 'task-2'
      }
    ]

    it('Removes fights for the task that was removed', function () {
      const result = fightlist.TASK_REMOVED(state, {
        type: 'TASK_REMOVED',
        payload: {
          task: 'task-2'
        }
      });

      expect(result).to.have.length(1);
    });
  });
});