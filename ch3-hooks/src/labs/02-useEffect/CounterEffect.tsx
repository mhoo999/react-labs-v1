import React, { useEffect, useState } from "react";

export default function CounterEffect() {

    const [count, setCount] = useState(0);

    function onClick() {
        setCount((c) => c + 1);
    }

    useEffect(() => {
        console.log(count);
    }, [count])

    return <div><p>count is {count}</p><button onClick={onClick}>ADD</button></div>;
}