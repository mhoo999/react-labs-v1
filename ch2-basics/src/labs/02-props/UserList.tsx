const list = [
    {id: 1, name: "유유저"},
    {id: 2, name: "김유저"},
    {id: 3, name: "박유저"},
]

export default function UserList() {
    return (
        <ul>
            {list.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}