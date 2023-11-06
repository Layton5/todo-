import React, { useState } from "react";
import "./Task.css";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div>
      <p className="mim">
        {todo?.text}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button>Edit</button>
      </p>
    </div>
  );
};

export default TodoItem;
