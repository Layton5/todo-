import React, { useState } from "react";
import "./Task.css";
import TodoItem from "./TodoItem";

const Task = ({ todos, deleteTodo, editTodo, handleEdit }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};

export default Task;
