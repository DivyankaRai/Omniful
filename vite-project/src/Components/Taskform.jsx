import React, { useState, useRef } from 'react';

const TaskForm = ({ handleAddTask }) => {
  const [task, setTask] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      handleAddTask(task);
      setTask('');
    }
  };

  const handleTask = () => {
    if (inputRef.current.value) {
      handleAddTask(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Add task in controlled component'
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        <input
          type="text"
          ref={inputRef}
          placeholder='Add task in uncontrolled component'
        />
        <button onClick={handleTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskForm;
