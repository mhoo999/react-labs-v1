import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="border-b border-gray-300 mb-4 pb-2 flex gap-3 items-center">
            <Link to="/" className="hover:text-blue-600 transition">HOME</Link>
            <Link to="/about" className="hover:text-blue-600 transition">ABOUT</Link>
            <Link to="/posts" className="hover:text-blue-600 transition">POST</Link>
            <Link to="/login" className="hover:text-blue-600 transition">LOGIN</Link>
            <Link to="/search" className="hover:text-blue-600 transition">SEARCH</Link>
        </nav>
    )
}