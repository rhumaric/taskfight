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