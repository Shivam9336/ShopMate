import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#fff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 10px 40px rgba(15, 23, 42, 0.1)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(249, 115, 22, 0.6)',
    boxShadow: '0 8px 20px rgba(249, 115, 22, 0.25)',
    fontWeight: '700',
    letterSpacing: '0.02em'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#1f2937' }}>About Me</h2>
      <h3 style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '15px' }}>Shivam Yadav</h3>

      <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://shivam9336.github.io/" target="_blank" rel="noreferrer" style={socialBtnStyle}>Portfolio</a>
        <a href="https://www.linkedin.com/in/shivam-yadav-0a2391323" target="_blank" rel="noreferrer" style={socialBtnStyle}>LinkedIn</a>
        <a href="https://github.com/Shivam9336" target="_blank" rel="noreferrer" style={socialBtnStyle}>GitHub</a>
        <a href="https://leetcode.com/u/Shiv174/" target="_blank" rel="noreferrer" style={socialBtnStyle}>LeetCode</a>
        <a href="https://codeforces.com/profile/shivam933638" target="_blank" rel="noreferrer" style={socialBtnStyle}>Codeforces</a>
      </div>
    </div>
  );
};

export default About;
