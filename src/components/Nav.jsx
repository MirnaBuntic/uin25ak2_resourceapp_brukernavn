import {NavLink} from "react-router-dom";

//Fått hjälp av chatgpt att använda NavLink istället för Link så att den automatiskt får en active classname. Detta så att jag ska kunna lägga sass på bara den som är active.

export default function Nav() {
    return (
        <nav>
            <NavLink to="/html">HTML</NavLink>
            <NavLink to="/css">CSS</NavLink>
            <NavLink to="/javascript">JavaScript</NavLink>
            <NavLink to="/react">React</NavLink>
            <NavLink to="/headless-cms">Sanity and headless CMS</NavLink>
        </nav>
    );
}