import { useEffect } from "react";

export default function BasicEffect() {
    // 초기화(설정값), 최초 데이터 API 호출
    useEffect(() => {
        alert("마운트 시 호출!");
    }, [])
    return <></>
}