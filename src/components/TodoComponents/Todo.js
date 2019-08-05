import React from "react";

const Todo = props => {
  return (
    <div
      className={`Todo${props.Todo.purchased ? " purchased" : ""}`}
      onClick={() => props.toggleTodo(props.Todo.id)}
    >
      <p>{props.Todo.name}</p>
    </div>
  );
};

export default Todo;
