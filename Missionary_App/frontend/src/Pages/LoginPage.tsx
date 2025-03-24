"use client";
import React from "react";

const LoginPage: React.FC = () => {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <input className="login-input" type="text" placeholder="Username" />
            <input className="login-input" type="password" placeholder="Password" />
            <button className="search-button">Login</button>
        </div>
    );
};

export default LoginPage;
