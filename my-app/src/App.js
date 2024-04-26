import logo from './logo.svg';
import './App.css';
import Button from "./exercices/Button.js"
import MyTask from "./Task List/atoms/taskButton.js"
import Calculator from './exercices/Calculator.js';

function App() {
  return (
    <>
      <Button />
      <Calculator/> 
      <MyTask></MyTask>
    </>
 
  )
}

export default App;
