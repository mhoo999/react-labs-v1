import { useToggle } from "./useToggle"

export default function ToggleSwitch() {
    const [on, toggle] = useToggle(false);

    return (
        <>
            <button onClick={toggle}>{on ? "켜짐" : "꺼짐"}</button>
        </>
    )
}