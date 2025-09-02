import React from 'react'
import Counter from './first';
import './calculator.css';

const Calculator = () => {
    console.log("---Calculator---");
    const [operand1, setOperand1] = React.useState(0);
    const [operand2, setOperand2] = React.useState(0);
    const [result, setResult] = React.useState(0);

    return (
        <div id="calculator" style={{
            backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem"
        }}>
            <h1>{result}</h1>
            <Counter setOperand={(val) => { setOperand1(val) }} />
            <Counter setOperand={(val) => setOperand2(val)} />
            <div>
                <button onClick={() => setResult(operand1 + operand2)}>+</button>
                <button onClick={() => setResult(operand1 - operand2)}>-</button>
                <button onClick={() => setResult(operand1 / operand2)}>/</button>
                <button onClick={() => setResult(operand1 * operand2)}>*</button>
            </div>
        </div >
    )
}

export default Calculator;