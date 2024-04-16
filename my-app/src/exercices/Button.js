import React, { useState } from "react"

const Button = () => { 
    const [initialNum, setInitialNum] = useState(0)

    const handleSum = () => {
        setInitialNum(initialNum + 1)
    }
    const handleReset = () => {
        setInitialNum(initialNum - initialNum)
    }   

    return (
        <>
        <button onClick={handleSum}>CLICK HERE {initialNum}</button> 
        <button onClick={handleReset}>CLICK HERE TO RESET</button>
        </>
    )
}
export default Button



