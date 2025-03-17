import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Install react-icons if not installed
import "./Header.css"; // We'll create this next
import { Link } from "react-router-dom"; // makes the link works


const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                <FiMenu size={28} color="white" />
            </button>
            <img src="/logo.png" alt="Logo" className="logo" />
            
            {/* Dropdown Menu */}
            {menuOpen && (
                <nav className="menu">
                    <ul>
                        <li><Link to="/inbox" onClick={() => setMenuOpen(false)}>Inbox</Link></li>
                        <li><Link to="/search" onClick={() => setMenuOpen(false)}>Search</Link></li>
                    </ul>
                </nav>
            )}

        </header>
    );
};

export default Header;
