import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from './Redux/TaskActions';
import TaskList from './Components/TaskList';
import TaskForm from './Components/Taskform';

const App = () => {
  const tasks = useSelector((state) => state.tasks); 
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      console.log('Component unmounted');
    };
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleAddTask = (newTask) => {
    dispatch(addTask(newTask));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
