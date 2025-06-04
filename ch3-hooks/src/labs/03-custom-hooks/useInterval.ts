import { useEffect, useState } from "react";

export function useInterval(callback, delay: number): number {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            callback();
        }, delay);

        return () => clearInterval(id);
    }, [callback, delay]);

    return count;
}