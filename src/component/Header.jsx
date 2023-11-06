import React, { useState } from "react";
import "./Header.css";

const Header = ({ setTodos, todos }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        className="insert"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // if (input === "") {
          //   alert("You cannot add an empty task");

          // }
          setTodos((previousTask) => [
            ...previousTask,
            {
              id: todos.length + 1,
              text: input,
              // isCompleted: false,
            },
          ]);
          setInput("");
        }}
      >
        Add
      </button>
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
