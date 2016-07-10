import * as actions from 'app/store/actionCreators';
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
      var state = tasks.ADD_TASK(this.state, actions.addTask('Non existing title'));
      expect(Object.keys(state).length).to.equal(2);
    });

    it("Doesn't add a new task if one with the title already exists", function () {
      let state;
      expect(() => {
        state = tasks.ADD_TASK(this.state, actions.addTask('Some title')); 
      }).to.throw('TASK_ALREADY_EXIST');
        
      expect(Object.keys(state).length).to.equal(1);
    });
  });

  describe('REMOVE_TASK', function () {

  });
});