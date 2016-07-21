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

export function winnerSet() {
  return {
    type: 'WINNER_SET'
  }
}

export function setWinner(fight, task) {
  return {
    type: 'SET_WINNER',
    payload: {
      fight,
      task
    }
  }
}

export function newFight() {
  return {
    type: 'NEW_FIGHT'
  }
}