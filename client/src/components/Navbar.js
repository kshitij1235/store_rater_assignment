import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="text-primary" style={{ fontSize: '1.5rem', fontWeight: '600', textDecoration: 'none' }}>
          StoreRating
        </Link>

        <div className="nav-links">
          {user ? (
            <>
              {user.role === 'admin' && (
                <>
                  <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
                  <Link to="/admin/users" className="nav-link">Users</Link>
                  <Link to="/admin/stores" className="nav-link">Stores</Link>
                </>
              )}
              {user.role === 'store_owner' && (
                <>
                  <Link to="/owner/dashboard" className="nav-link">Dashboard</Link>
                  <Link to="/stores" className="nav-link">My Stores</Link>
                </>
              )}
              {user.role === 'user' && (
                <>
                  <Link to="/stores" className="nav-link">Browse Stores</Link>
                  <Link to="/profile" className="nav-link">Profile</Link>
                </>
              )}
              <button onClick={handleLogout} className="btn btn-outline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/register" className="btn btn-outline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 