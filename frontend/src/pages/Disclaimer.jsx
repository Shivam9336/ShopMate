import React from 'react';

const textualStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px',
  background: '#fff',
  borderRadius: '16px',
  border: '1px solid #e2e8f0',
  lineHeight: '1.8',
  color: '#475569'
};

const Disclaimer = () => {
  return (
    <div style={textualStyle}>
      <h2 style={{ color: '#1f2937', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
        Legal & Site Disclaimer
      </h2>
      
      <p style={{ marginBottom: '20px' }}>
        The data, interfaces, and graphical components represented across the ShopMate domain are provided strictly as an educational development platform. This codebase models application structures and architectures for demonstrative, portfolio-oriented engineering usage.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>1. Accuracy of Materials</h4>
      <p style={{ marginBottom: '15px' }}>
        The materials spanning the ShopMate interface may include dynamic technical, typographical, or placeholder visual elements. Product data in the database is for demo purposes and is not tied to real-world inventory or fulfillment.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>2. Payment Processing Restrictions</h4>
      <p style={{ marginBottom: '15px' }}>
        No authentic financial variables are handled natively within this environment. All payment endpoints forcefully bind exclusively to external testing-based networks (Sandbox Razorpay environments). No exact deductibles exist.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>3. External Binding Links</h4>
      <p style={{ marginBottom: '15px' }}>
        ShopMate operates on independent domains and does not assume responsibility for the content or behavior of external links or third-party services integrated into this application.
      </p>

      <p style={{ marginTop: '30px', fontStyle: 'italic', fontSize: '0.9rem' }}>
        By interacting natively within this codebase, you unconditionally signal acceptance bounded by these parameters efficiently.
      </p>
    </div>
  );
};

export default Disclaimer;
