import { act } from "react";
import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.Fetch_todos:
      return { ...state, loading: true };
    case TodoActionTypes.Fetch_todos_Success:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.Fetch_todos_Error:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.Set_todo_Page:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
