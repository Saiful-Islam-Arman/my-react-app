import { useState } from "react";

export default function Counter(){

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    const handleClear = () => {
        const newCount = 0;
        setCount(newCount);
    }
    
    return(
        <div style={{border: '2px solid yellow'}}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}