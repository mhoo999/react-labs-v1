import { useEffect, useState } from "react"

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function PostLoader() {
    const [post, setPost] = useState<Post | null>(null);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => setPost(data))
    })
    
    return (
        <div>
            {post ? (
                <ul>
                    <li>id: {post.id}</li>
                    <li>title: {post.title}</li>
                </ul>
            ) : (
                <p>로딩중...</p>
            )}
        </div>
    );
}