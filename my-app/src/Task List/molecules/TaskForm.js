import React, { useState } from 'react';
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(task) 
    setTask('')
  }
  return(
    <form onSubmit={handleSubmit}>
      <Input value={task} onChange={ (e) => {setTask(e.target.value)} }></Input>
      <Button type="submit">ADD TASK</Button>
    </form>
  )
}

export default TaskForm