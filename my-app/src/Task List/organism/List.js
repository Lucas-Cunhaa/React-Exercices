import React from 'react'  
import TaskItem from '../molecules/TaskItem'
const TaskList = ({ tasks, onToggle }) => {
    return (<div>
        { tasks.map( ( task, index ) => {
               return <TaskItem 
                    key={index} 
                    task={task} 
                    onToggle= { () => onToggle(index) }
                />

            })}
    </div>)
}

export default TaskList