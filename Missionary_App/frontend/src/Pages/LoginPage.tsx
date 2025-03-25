"use client";
import React from "react";

const LoginPage: React.FC = () => {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <input className="login-input" type="text" placeholder="Username" />
            <input className="login-input" type="password" placeholder="Password" />
            <button className="search-button">Login</button>
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
