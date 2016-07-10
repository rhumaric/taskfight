const reducers = {
  TASK_ADDED (state=[],action) {
    var {title, previousTasks} = action.payload;
    var fights = previousTasks.map((otherTask) => {
      return {
        task: title,
        otherTask
      }
    });
    return state.concat(fights);
  }
};

export default reducers;