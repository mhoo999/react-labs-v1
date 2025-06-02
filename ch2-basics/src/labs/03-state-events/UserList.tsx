import { useState } from 'react';
import UserItem from './UserItem';

export default function UserList() {
    const [users, setUsers] = useState([
        { id: 1, name: "윤유저" },
        { id: 2, name: "김유저" },
      ]);

      const [UserName, setUserName] = useState();
    
    return (
        <>
        
        </>
    );
}