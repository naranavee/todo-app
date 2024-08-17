export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter,
});
