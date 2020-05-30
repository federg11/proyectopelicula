import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="menu-bar d-flex">
            <nav className="navbar navbar-expand-lg navbar-light">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-film"></i>
                </button>
                <div className="collapse navbar-collapse m-auto" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link  to="/"className="nav-link" href="#">Peliculas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link" href="#">Administrar Peliculas</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
