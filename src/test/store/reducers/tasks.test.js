import * as actions from 'app/store/actionCreators';
import StoreError from 'app/store/StoreError';
import tasks from 'app/store/reducers/tasks';

describe('Tasks reducers', function () {

  describe('ADD_TASK', function () {

    beforeEach(function () {
      this.state = {
        'some-uuid': {
          id: 'some-uuid',
          title: 'Some title'
        }
      };
    });

    it('Adds a new task', function () {
      let state = tasks.ADD_TASK(this.state, actions.addTask('Non existing title'));
      expect(Object.keys(state).length).to.equal(2);
    });

    it("Throws an exception if a task with the same title already exists", function () {
      expect(() => {
        tasks.ADD_TASK(this.state, actions.addTask('Some title')); 
      }).to.throw('TASK_ALREADY_EXIST');
    })
  });

  describe('REMOVE_TASK', function () {

    beforeEach(function () {
      this.state = {
        'uuid1': {
          id: 'uuid1',
          title: 'Some title'
        },
        'uuid2': {
          id: 'uuid2',
          title: 'Some other title'
        }
      }
    });

    it('Removes the task', function () {

      let state = tasks.REMOVE_TASK(this.state, actions.removeTask('uuid2'));
      expect(state.uuid2).to.be.undefined;
    });

    it('Returns the original state if the ID does not exist', function () {
      let state = tasks.REMOVE_TASK(this.state, actions.removeTask('unknown-task'));
      expect(state).to.deep.equal(this.state);
    });
  });
});