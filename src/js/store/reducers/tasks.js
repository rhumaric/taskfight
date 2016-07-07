const tasks = {
  ADD_TASK (state=[], action) {
    var result = [...state];
    result.push(action.payload.title);
    return result;
  }
}

export default tasks;