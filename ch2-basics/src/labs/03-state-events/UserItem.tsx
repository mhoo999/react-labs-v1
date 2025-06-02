import React, { useRef, useState } from "react";

type User = {
    id: number;
    name: string;
};

export default function UserItem(inName: string) {
    const [user, setUser] = useState({});
    const idRef = useRef(0);

    function createUser() {
        idRef.current++;
        const user: User = {
            id: idRef.current,
            name: inName,
        }
    }

    function deleteUser(id: number) {

    }

    return (
        <li key={id}>{name}<button>삭제</button></li>
    );
}