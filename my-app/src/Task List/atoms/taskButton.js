import React, { useState } from 'react';

// Átomos
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const Input = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

// Moléculas
const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={task} onChange={(e) => setTask(e.target.value)} />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

const TaskItem = ({ task, onToggle }) => (
  <div>
    <input type="checkbox" checked={task.completed} onChange={onToggle} />
    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
    </span>
  </div>
);

// Organismo
const TaskList = ({ tasks, onToggle }) => (
  <div>
    {tasks.map((task, index) => (
      <TaskItem
        key={index}
        task={task}
        onToggle={() => onToggle(index)}
      />
    ))}
  </div>
);

const MyTask = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onToggle={handleToggleTask} />
    </div>
  );
};

export default MyTask;