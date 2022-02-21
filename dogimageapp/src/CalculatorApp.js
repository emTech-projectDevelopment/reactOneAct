// Import react and useState, useEffect !even though useEffect isnt being used
import React, { useState, useEffect } from 'react';

// Calculator function
export function Calculator() {

    // Array destructuring the useSate 
    const [ calc , setCalc ] = useState("");
    const [ result , setResult ] = useState("")    

    // Array of calculator operations
    const ops = ['/', '*', '-', '+', '.'];

    // Check use of operators
    const updateCalc = value => {
        if(
            // Check if operator has been used before a number OR 
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return
        }
        setCalc(calc + value);
        if (!ops.includes(value)) {
            setResult(eval(calc+value).toString())
        }
    }

    // Function to create numbers 1 to 9 dynamically
    const createDigits = () => {
        const digits = [];

        for (let i=1; i<10; i++) {
            digits.push(
                // An excellent way to add a key to a iterator
                <button onClick={()=> updateCalc(i.toString())} key={i}>{i}</button>
            )
        }
        return digits;
    };

    // Function to make the calculation
    const calculate = () => {
        setCalc(eval(calc).toString())
    }

    // Function to delete last user input
    const deleteLast = () => {
        if (calc === ''){
            return
        }
        const value = calc.slice(0,-1);
        setCalc(value)
        setResult(value)
    }

    return (
        <div className="AppWindow">
            <div className="calculator">
                <div className="display">
                    {result ? <span className='result'>eval({result})</span> : ''}&nbsp;&nbsp;
                    {calc || "0"}
                </div>
                <div className="operators">
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>x</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={() => updateCalc('+')}>+</button>

                    <button onClick={deleteLast} className='delete-btn'>del</button>
                </div>
                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>

                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )

}

