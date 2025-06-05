import { Link, useNavigate } from "react-router-dom"
import { posts } from "../data/post"

export default function PostListPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h2 className="mb-4">전체 게시글</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`} className="hover:text-blue-600 transition">{post.title}</Link>
                    </li>
                ))}
            </ul>

            <button onClick={()=>navigate("/posts/new")} className="pt-4">새 게시글 작성</button>
        </div>
    )
}