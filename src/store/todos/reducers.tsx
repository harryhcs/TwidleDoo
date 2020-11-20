import {TodoState, TodoActionTypes, ADD_TODO, TOGGLE_TODO} from './types';

const initialState: TodoState = {
  todos: [],
};

export function todoReducer(
  state = initialState,
  action: TodoActionTypes,
): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.meta.id
            ? {...todo, completed: !todo.complete}
            : todo,
        ),
      };
    default:
      return state;
  }
}
