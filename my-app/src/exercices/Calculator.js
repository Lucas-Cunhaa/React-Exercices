import React, { useState } from "react";
import ShowResult from "./ShowResult";
import AlertResults from "./AlertResult";

const Calculator = () => {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [result, setResult] = useState(0);
    const [allResults, setResults] = useState([]);

    const handleSum = () => {
       setResult(firstNum + secondNum);
       setResults(prevResults => [...prevResults, firstNum + secondNum]);
    }

    const handleSubtraction = () => {
        setResult(firstNum - secondNum);
        setResults(prevResults => [...prevResults, firstNum - secondNum]);
    }

    const handleMultiplication = () => {
        setResult(firstNum * secondNum);
        setResults(prevResults => [...prevResults, firstNum * secondNum]);
    }

    const handleDivison = () => {
        setResult(firstNum / secondNum);
        setResults(prevResults => [...prevResults, firstNum / secondNum]);
    }

    return (
        <>
            <input
                type="number"
                value={firstNum}
                placeholder="NUMBER 1"
                onChange={e => setFirstNum(Number(e.target.value))}
            />
            <input
                type="number"
                value={secondNum}
                placeholder="NUMBER 2"
                onChange={e => setSecondNum(Number(e.target.value))}
            />
            <button onClick={handleSum}>+</button>
            <button onClick={handleSubtraction}>-</button>
            <button onClick={handleMultiplication}>X</button>
            <button onClick={handleDivison}>%</button>

            <ShowResult arrayToShow = {allResults}>Results = </ShowResult>

            <AlertResults myResult = {result}> </AlertResults>
        </>
    );
}

export default Calculator;
