import { ActionTypes } from "./contans";

export const addTodo = (data) => ({
  type: ActionTypes.ADD_TODO,
  payload: data,
});

export const deleteTodo = (id) => ({
  type: ActionTypes.DELETE_TODO,
  payload: id,
});
