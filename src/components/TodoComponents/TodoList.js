import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.Complete - b.Complete);
  return (
    <div>
      {props.todos.map(task => (
        <Todo key={task.id} name={task} toggleTodo={props.toggleTodo} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
