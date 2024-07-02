import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <UserList></UserList>
      <hr></hr>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
