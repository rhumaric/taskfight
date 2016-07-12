export function addTask(title) {
  return {
    type: 'ADD_TASK',
    payload: {
      title
    }
  }
}

export function removeTask(id) {
  return {
    type: 'REMOVE_TASK',
    payload: {
      id
    }
  }
}

export function taskAdded(task, to) {
  return {
    type: 'TASK_ADDED',
    payload: {
      task,
      to
    }
  }
}

export function taskRemoved(task) {
  return {
    type: 'TASK_REMOVED',
    payload: {
      task
    }
  }
}