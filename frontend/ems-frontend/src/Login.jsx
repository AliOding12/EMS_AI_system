import React, { useState } from 'react';
import './style.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login attempted with:', { username, password });
        // Add your login logic here
    };

    return (
        <div className="body">
            <div className="login-container">
                <h2><span>E</span> MS</h2>
                <div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder=" "
                            required
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="one"></div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder=" "
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="two"></div>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;