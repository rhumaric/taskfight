export function addTask(title) {
  return {
    type: 'ADD_TASK',
    payload: {
      title
    }
  }
}

export function removeTask(title) {
  return {
    type: 'REMOVE_TASK',
    payload: {
      title
    }
  }
}