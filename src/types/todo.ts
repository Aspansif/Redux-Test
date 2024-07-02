export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  Fetch_todos = "Fetch_todos",
  Fetch_todos_Success = "Fetch_todos_Success",
  Fetch_todos_Error = "Fetch_todos_Error",
  Set_todo_Page = "Set_todo_Page",
}

interface FetchTodoAction {
  type: TodoActionTypes.Fetch_todos;
}

interface FetchTodosSuccess {
  type: TodoActionTypes.Fetch_todos_Success;
  payload: any[];
}

interface FetchTodosError {
  type: TodoActionTypes.Fetch_todos_Error;
  payload: string;
}

interface SetTodoPage {
  type: TodoActionTypes.Set_todo_Page;
  payload: number;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodosSuccess
  | FetchTodosError
  | SetTodoPage;
