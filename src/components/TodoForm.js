import React from "react";


class TodoListForm extends React.Component {
    constructor() {
      super(); 
      this.state = {
        newTask: ''
      }
    }
  
    handleChanges = e => {
      this.setState({
        ...this.state,
        newTask: e.target.value
      })
    };
  

    handleSubmit = e => {
      e.preventDefault();
      this.props.addTask(this.state.newTask);
    }
  
    render() {
      return (
        <form>
          <input type="text" name="task" value={this.state.newTask} onChange={this.handleChanges}/>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      );
    }
  }

  export default TodoListForm;