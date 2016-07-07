export function addTask(title) {
  return {
    type: 'ADD_TASK',
    payload: {
      title
    }
  }
}