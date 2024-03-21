// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="custom-navbar">
            <div className="custom-navbar-brand">
                <Link to="/RAI_Assignment/" className="custom-navbar-logo">Live Stream</Link>
            </div>
            <ul className="custom-navbar-custom-nav">
                <li className="custom-nav-item">
                    <Link to="/RAI_Assignment/" className="custom-nav-link">Live</Link>
                </li>
                <li className="custom-nav-item">
                    <Link to="/RAI_Assignment/replay" className="custom-nav-link">Replay</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
