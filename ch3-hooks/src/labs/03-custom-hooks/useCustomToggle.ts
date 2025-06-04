import { useState } from "react"

type ToggleReturn = [ visible: boolean, () => void ]

export function useCustomToggle(initial = false): ToggleReturn {
    const [visible, toggleVisible] = useState(initial);

    const toggle = () => {
        toggleVisible(v => !v);
    }

    return [visible, toggle]
}