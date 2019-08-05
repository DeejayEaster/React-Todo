import React from "react";

const Todo = props => {
  console.log("props.name", props.name.completed);
  return (
    <div
      className={`todo${props.name.completed ? " completed" : ""}`}
      onClick={() => props.toggleTodo(props.name.id)}
    >
      <p>{props.name.task}</p>
    </div>
  );
};

export default Todo;
