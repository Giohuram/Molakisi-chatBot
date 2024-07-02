import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Make sure this path is correct
import '../Styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSession, setKeepSession] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your authentication logic here
    const userData = { username, profilePicture: 'path/to/profile/picture.jpg' };
    login(userData);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="path/to/your/image.jpg" alt="Login" className="full-size-image" />
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="keep-session">
            <input
              type="checkbox"
              checked={keepSession}
              onChange={() => setKeepSession(!keepSession)}
            />
            <label>Keep me logged in</label>
          </div>
          <button type="submit">Login</button>
          <div className="login-footer">
            <a href="/forgot-password">Forgot password?</a>
            <a href="/register">Don't have an account? Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
