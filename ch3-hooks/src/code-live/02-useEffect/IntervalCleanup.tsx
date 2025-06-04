import { useEffect, useState } from "react"

export default function IntervalCleanup() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds((s) => s + 1)
        }, 1000);

        return () => clearInterval(timerId); // 언마운트 될 때 실행
    }, []);

    return <div>{seconds}초 경과</div>;
}