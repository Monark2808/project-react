import React, { useState } from 'react'


const Abc = (props) => {
    const { parentCount } = props;
    console.log("---Abc---");
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <h2>Parent Count {parentCount}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Abc;