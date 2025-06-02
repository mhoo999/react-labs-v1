import { useState } from "react";

export default function ToggleMessage() {
    const [visibility, setVisible] = useState("none");

    function toggle() {
        setVisible(visibility === "block" ? "none" : "block");
    }

    return (
        <>
            <button onClick={toggle}>메시지 보기</button>
            <p style={{display: visibility}}>비밀 메시지입니다!</p>
        </>
    )
}