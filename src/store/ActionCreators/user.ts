import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.Fetch_users });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UserActionTypes.Fetch_users_Success,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.Fetch_users_Error,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
