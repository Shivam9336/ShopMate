import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: '#fff',
      borderTop: '1px solid #e2e8f0',
      padding: '40px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ color: '#f97316', marginBottom: '10px' }}>ShopMate</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Premium E-Commerce Platform.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/about" style={{ color: '#64748b', fontSize: '0.9rem' }}>About Us</Link>
          <Link to="/return" style={{ color: '#64748b', fontSize: '0.9rem' }}>Return Policy</Link>
          <Link to="/disclaimer" style={{ color: '#64748b', fontSize: '0.9rem' }}>Disclaimer</Link>
        </div>
        
        <div style={{ color: '#64748b', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
