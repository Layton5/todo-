import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Task from "./component/Task";
import Footer from "./component/Footer";

function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useState([]);
  //Deleting a task
  const deleteTodo = (id) => {
    setTodos((presentTodo) => {
      return presentTodo.filter((todo) => todo.id !== id);
    });
  };
  //Deleting all task
  const clearAll = (id) => {
    setTodos((allTodo) => {
      return allTodo.splice((todo) => todo.id !== id);
    });
  };

  // const Edit = (id = {
  //   setTodos,
  // });
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Header setTodos={setTodos} todos={todos} />
      <Task todos={todos} deleteTodo={deleteTodo} />
      <Footer todos={todos} clearAll={clearAll} />
    </div>
  );
}

export default App;
