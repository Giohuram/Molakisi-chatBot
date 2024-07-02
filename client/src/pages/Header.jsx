import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../Styles/Home.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="logo">Molakisi Chatbot</div>
      <nav className="nav">
        <Link to="/" className="navLink">Accueil</Link>
        <Link to="/about" className="navLink">À propos</Link>
        <Link to="/chat" className="navLink">Chat</Link>
        {user ? (
          <>
            <div className="user-menu">
              <img src={user.profilePicture} alt="Profile" className="profile-picture" />
              <div className="dropdown">
                <button className="dropbtn">{user.username}</button>
                <div className="dropdown-content">
                  <Link to="/dashboard">Dashboard</Link>
                  <button onClick={logout}>Logout</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="navButton">Sign In</Link>
            <Link to="/register" className="navButton">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
