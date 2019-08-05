import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.Todo);
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.todo}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
