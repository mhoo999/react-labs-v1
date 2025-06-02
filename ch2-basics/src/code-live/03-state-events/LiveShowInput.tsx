import { useState } from "react"

export default function LiveShowInput() {
    const [text, setText] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    return (
        <>
            <input onChange={handleChange} placeholder="입력..."/>
            <p>입력값: {text}</p>
        </>
    )
}