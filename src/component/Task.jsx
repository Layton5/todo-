import React from "react";
import "./Task.css";
import TodoItem from "./TodoItem";

const Task = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
};

export default Task;
