import React from 'react';
import TodoList from './components/TodoList'
import TodoListForm from './components/TodoForm'


const tasks = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Clean Living Room',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Wash Up the Dishes',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Pick up the Kids',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks:tasks
    }
  }

  toggleCompleted = (taskId) => {
    console.log(taskId);
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    console.log("updated tasks", updatedTasks);
    this.setState({
      ...this.state,
      tasks: updatedTasks
    });
  }

  addTask = (taskName) => {
    console.log("adding tasks", taskName);
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      tasks: [
        ...this.state.tasks,
        newTask
      ]
    })
  }

  
  
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoListForm addTask={this.addTask} />
        </div>
        <TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
