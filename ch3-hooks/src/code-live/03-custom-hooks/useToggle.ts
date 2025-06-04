import { useState } from "react";

type ToggleRetrurn = [boolean, () => void];

export function useToggle(initial = false): ToggleRetrurn {
    const [on, setOn] = useState<boolean>(initial);

    const toggle = () => {
        setOn(v => !v);
    };

    return [on, toggle];
}