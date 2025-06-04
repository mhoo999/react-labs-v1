import { useEffect, useState } from "react";

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function FetchData() {
    // https://jsonplaceholder.typecode.com/todos/1
    const [todo, setTodo] = useState<Todo | null>(null);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => setTodo(data));
    }, []);
    
    // ?(optional chaining), !(non-null assertion operator)
    return ( 
        <div>
            {todo? (
                <ul>
                    <li>id : {todo?.id}</li>
                    <li>title : {todo?.title}</li>
                </ul>
            ) : (
                <p>로딩중...</p>
            )}
        </div>
    );
}