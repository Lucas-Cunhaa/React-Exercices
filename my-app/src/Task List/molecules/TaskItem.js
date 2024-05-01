import React from 'react' 

const TaskItem = ({ task, onToggle }) => {
   return ( <div>
        <input type='checkbox' checked={ task.completed } onChange={onToggle}></input> 
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
    </span>
    </div>
    )
}

export default TaskItem