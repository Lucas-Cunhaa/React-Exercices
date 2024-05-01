import React, { useState } from 'react'; 
import TaskForm from '../molecules/TaskForm' 
import TaskList from './List'

const MyTask = () => {
    const [tasks, setTasks] = useState([]) 

    const handleAddTask = (text) => {
        setTasks([...tasks, {text, completed: false }])
    }

    const handleToggleTask = (index) => {
        const newTasks = [...tasks] 
        newTasks[index].completed = !newTasks[index].completed
        setTasks(newTasks)
    }
    return (
        <div>
            <h1>My task react list</h1> 
            <TaskForm onSubmit={handleAddTask} /> 
            <TaskList tasks = {tasks} onToggle = {handleToggleTask} />
        </div>
    )

}

export default MyTask;