import { useRef, useState } from "react"

export default function LikeButton() {
    const timer = useRef(0);
    const [count, setCount] = useState(0);
    const [state, setState] = useState(false);
    
    function addLike() {
        // clearInterval(timer.current);
        // if (timer.current != 0)
        //     return;
        
        setCount((c) => c + 1);
        setState(true);
        timer.current = 1;

        setTimeout(() => {
            timer.current = 0;
            setState(false);
        }, 1000);
    }

    return (
        <div>
            <p>좋아요 : {count}</p>
            <button onClick={addLike} disabled={state}>좋아요</button>
        </div>
    )
}