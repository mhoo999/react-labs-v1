function add(x:number, y:number): number {
    return x + y;
}

export default function Calculator() {
    const a = 5;
    const b = 3;

    return (
        <>
            <h1>{a} + {b} = {add(a, b)}</h1>
        </>
    )
}