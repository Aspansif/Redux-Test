import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.Fetch_users:
      return { loading: true, error: null, users: [] };
  }
  switch (action.type) {
    case UserActionTypes.Fetch_users_Error:
      return { loading: false, error: action.payload, users: [] };
  }
  switch (action.type) {
    case UserActionTypes.Fetch_users_Success:
      return { loading: false, error: null, users: action.payload };
    default:
      return state;
  }
};
