import React from "react";
import "./Footer.css";

const Footer = ({ todos, clearAll, todo }) => {
  return (
    <div>
      {todos.length === 0 || (
        <button onClick={() => clearAll(todo)} className="foot">
          Clear All
        </button>
      )}
    </div>
  );
};

export default Footer;
