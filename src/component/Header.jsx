import React, { useState } from "react";
import "./Header.css";

const Header = ({ setTodos, todos }) => {
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) {
      return alert("You cannot add an empty task");
    }
    setTodos((previousTask) => [
      ...previousTask,
      {
        id: todos.length + 1,
        text: input,
      },
    ]);
    setInput("");
  };

  const addTodoItem = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };

  return (
    <div>
      <h1>You have {todos.length} todos</h1>
      <input
        type="text"
        className="insert"
        value={input}
        onKeyDown={(e) => addTodoItem(e)}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Header;

// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
// }, [todos]);
// useEffect(() => {
//   const getTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if (getTodos) setTodos(getTodos);
// }, []);
