import {Todo, ADD_TODO, TOGGLE_TODO, TodoActionTypes} from './types';

// TypeScript infers that this function is returning AddTodoAction
export function addTodo(newTodo: Todo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
}

// TypeScript infers that this function is returning ToggleTodoAction
export function toggleTodo(complete: boolean, id: string): TodoActionTypes {
  return {
    type: TOGGLE_TODO,
    meta: {
      complete,
      id,
    },
  };
}
