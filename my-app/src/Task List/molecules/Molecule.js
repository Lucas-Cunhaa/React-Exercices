import React from "react";
import Button from "../atoms/ButtonTask";
import Input from "../atoms/input";

const Molecule = (props) => {

  let tasks = []

  const HandleAddTask = (task) => {
   tasks.push(task)
    return (
    <li>
        {tasks.map(element => {return element})}
    </li>
    )
  }
  const HandleGetTask = () => {

  }
  return (
    <>
      <Input> Type your task</Input>
      <ul>
        {HandleAddTask}
      </ul>
    </>
  );
};
