import { useEffect, useState } from "react";

export default function EffectWithState() {
    const [count, setCount] = useState(0);

    // update
    // 공통적으로 실행하는 함수를 정의하고, 필요한 상태들을 의존성 배열로 만들어서 넣어서 사용하면 될 듯
    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>ADD</button>
        </div>
    )
}