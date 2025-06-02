type User = {
    name: string;
}

export function Greeting({name}: User) {
    return (
        <p>{`안녕하세요, ${name}님`}</p>
    );
}