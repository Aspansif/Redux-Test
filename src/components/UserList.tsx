import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../store/ActionCreators/user";
import { useActions } from "../hooks/useActions";

const UserList: FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка... </h1>;
  }
  if (error) {
    <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
