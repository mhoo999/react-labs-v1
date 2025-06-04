// import { useCustomToggle } from "./useCustomToggle"
import { useState } from "react";
import { useInterval } from "./useInterval"
// import { useMenualFatch } from "./useManualFetch"

export default function CustomHooks() {
    // const [visible, toggleVisible] = useCustomToggle(false);
    // return <><button onClick={toggleVisible}>{visible.toString()}</button></>;

    const [count, setCount] = useState(0);
    useInterval(() => {
        setCount((c) => c + 1);
    }, 1000);
    return <p>타이머: {count}s</p>
}