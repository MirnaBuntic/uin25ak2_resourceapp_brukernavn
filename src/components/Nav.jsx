import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/resources/html">HTML</Link>
            <Link to="/resources/css">CSS</Link>
            <Link to="/resources/javascript">JavaScript</Link>
            <Link to="/resources/react">React</Link>
            <Link to="/resources/sanity and headless cms">Sanity</Link>
        </nav>
    );
}