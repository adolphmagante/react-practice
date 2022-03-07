import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/content1">
                            Content1
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/component">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/waysofstyling">
                            Pricing
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </>
  )
}

export default NavBar