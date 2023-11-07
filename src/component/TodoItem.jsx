import React, { useState } from "react";
import "./Task.css";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [editText, setEditText] = useState("");

  const handleEdit = (id) => {
    editTodo(id, editText);
    setEditText("");
  };

  return (
    <ul>
      <li key={todo.id}>
        {todo.editing ? (
          <div>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={() => handleEdit(todo.id)}>Save</button>
          </div>
        ) : (
          <div>
            {todo?.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
          </div>
        )}
      </li>
    </ul>
  );
};

export default TodoItem;
// return (
//   <div>
//     <li className="mim">
//       {todo?.text}
//       <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//       <button onClick={() => editTodo(todo.id)}>Edit</button>
//     </li>
//   </div>
// );
