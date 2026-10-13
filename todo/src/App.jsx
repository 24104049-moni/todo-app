
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  // Add or Update Task
  function addTask() {
    if (task.trim() === '') {
      alert('Please enter a task');
      return;
    }

    if (editIndex === -1) {
      setTasks([...tasks, task]);
    } else {
      setTasks(
        tasks.map((item, index) =>
          index === editIndex ? task : item
        )
      );
      setEditIndex(-1);
    }

    setTask('');
  }

  // Edit Task
  function editTask(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  // Delete Task
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));

    if (editIndex === index) {
      setTask('');
      setEditIndex(-1);
    } else if (editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  }

  return (
    <div>
      <h1>My To-Do List</h1>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        {editIndex === -1 ? 'Add Task' : 'Update Task'}
      </button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}{' '}

            <button onClick={() => editTask(index)}>
              Edit
            </button>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

