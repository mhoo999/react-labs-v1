import { useRef, useState } from "react"

export default function Timer() {
    const timerId = useRef(0);
    const [count, setCount] = useState(0);
    
    function start() {
        timerId.current = setInterval(() => {
            setCount((c) => c + 1); // 클로저 동작 방식
        }, 100)
    }

    function stop() {
        clearInterval(timerId.current);
    }

    return (
        <div>
            <p>카운트 : {count}</p>
            <button onClick={start}>시작</button>
            <button onClick={stop}>멈춤</button>
        </div>
    )
}