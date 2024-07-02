export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  Fetch_users = "Fetch_users",
  Fetch_users_Success = "Fetch_users_Success",
  Fetch_users_Error = "Fetch_users_Error",
}

interface FetchUserAction {
  type: UserActionTypes.Fetch_users;
}

interface FetchUserSuccessAction {
  type: UserActionTypes.Fetch_users_Success;
  payload: any[];
}

interface FetchUserErrorAction {
  type: UserActionTypes.Fetch_users_Error;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;
