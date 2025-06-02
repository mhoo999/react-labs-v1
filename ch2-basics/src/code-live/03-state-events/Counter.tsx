import { useState } from "react";

export default function Counter() {
    // count: 상태변수, setCount: count의 값을 바꿀 때 사용
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    function upCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={upCount}>+1</button>
            <p>현재 값: {count}</p>
            <button onClick={() => setText(text + "a")}>+1</button>
            <p>현재 단어: {text}</p>
        </div>
    )
}