import { Outlet, Link } from "react-router-dom";


export function Frame() {
    return (
    <>
    <nav>
        <ul className="top_bar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/blogs">Blogs</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        </ul>
    </nav>
    
    <Outlet />
    </>
    )
}