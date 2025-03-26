"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform any authentication logic here (e.g., form validation, API call)
        // If successful, navigate to the inbox page
        navigate("/inbox");
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input className="login-input" type="text" placeholder="Username" />
            <input className="login-input" type="password" placeholder="Password" />
            <button className="search-button" onClick={handleLogin}>Login</button>
            <div className="link-container" style={{ marginTop: '35px' }}>
                <a href="#" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#002952', textDecoration: 'underline' }}>
                    Don't have an account? Create one here
                </a>
                <a href="#" style={{ display: 'block', marginTop: '8px', fontWeight: 'bold', color: '#002952', textDecoration: 'underline' }}>
                    Login with Church Account
                </a>
            </div>
        </div>
    );
};

export default LoginPage;
