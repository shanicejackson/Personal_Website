import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    return (
                <nav className="navbar">
                        <div className="nav-left">
                                    {/* use href+navigate to ensure SPA navigation and fallback */}
                                    <a href="/" className="brand" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Shanice</a>
                                    <div id="links">
                <Link className="nav-link" to="/">
                Home
                </Link>
                <Link className="nav-link" to="/portfolio">
                Portfolio
                </Link>
                <Link className="nav-link" to="/about">
                About
                </Link>
                <Link className="nav-link" to="/music">
                Music
                </Link>
                <Link className="nav-link" to="/anime">
                Anime
                </Link>
                <Link className="nav-link" to="/contact">
                Contact
                </Link>
                            </div>
                        </div>

                        <div className="nav-right">
                            <input className="site-search" type="search" id="site-search" name="site-search" placeholder="Search..." />
                            <button className="search-button" aria-label="Search">Search</button>
                        </div>
                </nav>
    );
}
export default Navbar;