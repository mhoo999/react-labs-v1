// JSX : JS + HTML
export default function Expression() {
    // 자바스크립트 코드 작성 가능
    const userName = "윤유저";
    const greet = () => "안녕하세요!";

    return (
        <>
            { /* {Expression} 표현식을 중괄호로 묶어 출력 */ }
            <h2>{userName}</h2>
            <h3>2 + 3 = {2 + 3}</h3>
            <h3>{greet()}</h3>
        </>
    )
}