import type React from "react";

// 컴포넌트로 props를 받는 방법
type CardProps = {
    title: string;
    children: React.ReactNode;
};

// slot 패턴, 조합형 UI 패턴
export default function Card({title, children}: CardProps) {
    return (
        <div>
            <h1>{title}</h1>
            <div>{children}</div>
        </div>
    )
}