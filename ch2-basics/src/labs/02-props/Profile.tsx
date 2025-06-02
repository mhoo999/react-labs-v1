type User = {
    name: string;
    age: number;
};

export default function Profile({name, age}: User) {
    return (
        <div>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
        </div>
    )
}