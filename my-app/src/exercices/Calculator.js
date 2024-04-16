import React, { useState } from "react"

const Calculator = () => { 
    const [firstNum, setFirstNum] = useState(0)
    const [secondNum, setSecondNum] = useState(0)
    const [result, setResult] = useState(0)

    const handleSum = () => {
       setResult(firstNum + secondNum )
    }
    const handleSubtraction = () => {
        setResult(firstNum - secondNum )
    }
    const handleMultiplication = () => {
        setResult(firstNum * secondNum )
    }
    const handleDivison = () => {
        setResult(firstNum / secondNum )
    }
    
    return (
        <>
        <input
        type="Number"
         value ={firstNum}
         placeholder="NUMBER 1"
         onChange={ e => setFirstNum(Number(e.target.value)) }
         >

         </input>

        <input 
        type="Number"
        value ={secondNum}
        placeholder="NUMBER 2"
        onChange= { e => setSecondNum(Number(e.target.value)) }
        >

        </input>

        <button onClick={handleSum}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>X</button>
        <button onClick={handleDivison}>%</button>
        <span>Result = {result} </span>
       
        </>

        
    )
}
export default Calculator