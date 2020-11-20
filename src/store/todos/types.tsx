export interface Todo {
  id: string;
  title: string;
  complete: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  meta: {
    complete: boolean;
    id: string;
  };
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
