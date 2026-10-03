import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span aria-label="ShopMate logo" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(249, 115, 22, 0.12)', color: '#f97316', fontSize: '1.1rem' }}>
            🛍️
          </span>
          ShopMate
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Hi, {user.name}</Link></li>
            {user.role === 'admin' && <li><Link to="/admin">Admin</Link></li>}
            <li><button onClick={handleLogout} className="btn-logout">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
