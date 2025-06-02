import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(count+1);
    }

    function sub() {
        if (count <= 0) return;
        setCount(count-1);
    }

    return (
        <>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
            <p>현재 값: {count}</p>
        </>
    )
}