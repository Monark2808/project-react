
// Reactivity
// Reusability
// Component
// Declarative (jsx)
// modularity
// comprehensive

import { useState } from "react";
import Abc from "./abc";

// {}
function Counter(props) {
    console.log("---Counter---");
    const { initialValue = 0, step = 1, setOperand } = props; // destructuring
    let [count, setCount] = useState(0); // hook // state change means reference change

    function handleIncremet() {
        const nextCount = count + step;
        setCount(nextCount);
        setOperand(nextCount)
    }

    function handleDecrement() {
        const nextCount = count - step;
        setCount(nextCount);
        setOperand(nextCount)
    }

    return (
        <div onClick={() => console.log("clicked counter")} style={{ display: 'flex', gap: "1rem" }}>
            <button onClick={handleDecrement}>Decrement</button>
            <h1 id="counter">{count}</h1>
            <button onClick={handleIncremet}>Increment</button>
        </div>
    );
}

export default Counter;

// initial render => changes? => re-render => changes? => re-render

// document.createElement('h1')
// h1.innerText = "Hello World"
// document.getElementById('root').appendChild(h1)


// useState
// useEffect
// useRef
// useContext
// useReducer

// React optimization hooks
// useMemo
// useCallback
// memo