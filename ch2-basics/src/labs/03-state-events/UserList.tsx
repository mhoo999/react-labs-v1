import { useState } from 'react';
import UserItem from './UserItem';

type User = {
    id: number;
    name: string;
};

export default function UserList() {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "윤유저" },
        { id: 2, name: "김유저" },
    ]);

    return (
        <ul>
            {users.map((user) => (
                <UserItem user={user}/>
            ))}
        </ul>
    );
}