import { useRef, useState } from "react"

type Todo = {
    id: number,
    text: string,
}

export default function TodoList() {
    const [inputText, setText] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const currentIdRef = useRef(0);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    function makeTodo() {
        currentIdRef.current++;
        const newTodo: Todo = {
                id: currentIdRef.current,
                text: inputText
        }
        setTodos(prevTodos => [...prevTodos, newTodo]);
        setText("");
    }

    function deleteTodo(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        currentIdRef.current--;
    }

    return (
        <>
            <input value={inputText} onChange={handleChange} placeholder="입력..." />
            <button onClick={makeTodo}>추가</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}<button onClick={() => deleteTodo(todo.id)}>삭제</button></li>
                ))}
            </ul>
        </>
    )
}