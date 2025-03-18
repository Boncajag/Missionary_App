import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Install react-icons if not installed
import { FiEdit } from "react-icons/fi"; // Import write icon
import "./Header.css"; // We'll create this next
import { Link } from "react-router-dom"; // makes the link works


const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                <FiMenu size={30} color="white" />
            </button>
            
            {/* Make logo a link to home */}
            <Link to="/" className="logo-container">
                <img src="/logo.png" alt="P-Day Post" className="logo" />
            </Link>

            {/* Dropdown Menu */}
            {menuOpen && (
                <nav className="menu">
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inbox</Link></li>
                        <li><Link to="/search" onClick={() => setMenuOpen(false)}>Search</Link></li>
                        <li><Link to="/friends" onClick={() => setMenuOpen(false)}>Friends</Link></li>
                        <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
                        <li><Link to="/write" onClick={() => setMenuOpen(false)}>Write</Link></li>
                    </ul>
                </nav>
            )}

            {/* Write Icon - Links to Template Page */}
            <Link to="/write" className="write-icon">
                <FiEdit size={32} color="white" />
            </Link>
            
        </header>
    );
};

export default Header;
