const tasks = {
  ADD_TASK (state=[], action) {
    var title = action.payload.title;

    if (state.includes(title)) {
      throw new Error('TASKS_ALREADY_EXISTS');
    }

    var result = [...state];
    result.push(title);
    return result;
  }
}

export default tasks;