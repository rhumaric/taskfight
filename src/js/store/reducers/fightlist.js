const reducers = {
  TASK_ADDED (state=[],action) {
    var {task, previousTasks} = action.payload;
    var fights = previousTasks.map((otherTask) => {
      return {
        id: uuid(),
        task: task.id,
        otherTask: otherTask.id
      };
    });
    return state.concat(fights);
  },

  // TASK_REMOVED (state=[], action) {
  //   var {title} = action.payload;
  //   var result = state.filter((fight) => {

  //     return fight.task !== title && fight.otherTask !== title
  //   });

  //   return result;
  // }
};

export default reducers;