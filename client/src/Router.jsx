import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Chat from './pages/Chat';
import UserDashboard from './components/UserDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function AppRouter() {
    return (
        <AuthProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/chat" element={<PrivateRoute element={<Chat />} />} />
                <Route path="/dashboard" element={<PrivateRoute element={<UserDashboard />} />} />
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      );
}

export default AppRouter;
