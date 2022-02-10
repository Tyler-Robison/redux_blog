import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

    return (
        <div className="nav-container">
            <h1>Microblog</h1>
            <h3>Like twitter, but cooler</h3>
            <ul>
                <li>
                    <NavLink className="nav-link" to="/blog">
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-link" to="/posts/new">
                        New Post
                    </NavLink>
                </li>


            </ul>
        </div>
    )

}

export default NavBar;