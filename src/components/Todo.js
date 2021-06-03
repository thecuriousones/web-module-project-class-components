import React from 'react';

const Task = props => {
  return (
    <div
      className={`tasks${props.tasks.completed ? 'completed' : ''}`}
      onClick={() => props.toggleCompleted(props.tasks.id) }
    >
      <p>{props.tasks.task}</p>
    </div>
  );
};

export default Task;