// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Task from "./Todo";

const TodoList = props => {

  return (
    <div>
        <div className='todo-list'>
            {props.tasks.map(tasks => (
                <Task key={tasks.id} tasks={tasks} toggleCompleted={props.toggleCompleted} />
            ))}
        </div>
        <button onClick = {props.clearCompleted} className='clear-tasks'>
             Clear Completed Tasks
        </button>
    </div>
  );
};

export default TodoList;
