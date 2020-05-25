import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto justify-content-center">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/admin" className="nav-link" href="#">Administrar Peliculas</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
