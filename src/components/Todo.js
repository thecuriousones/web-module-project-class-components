import React from 'react';


const Task = props => {

    const onClick = () => {
        props.toggleCompleted(props.tasks.id)

    }

  return (
    <div
      className={`task${props.tasks.completed ? ' completed' : ''}` } 
      onClick={onClick}
    >
      <p>{props.tasks.task}</p>
    </div>
  );
};

export default Task;