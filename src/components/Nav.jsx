import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <Link to="/">HTML</Link>
            <Link to="/css">CSS</Link>
            <Link to="/javascript">JavaScript</Link>
            <Link to="/react">React</Link>
            <Link to="/sanity">Sanity</Link>
        </nav>
    );
}