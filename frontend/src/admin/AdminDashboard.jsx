import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await fetch('/api/analytics', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setStats(data);
        } else {
          if (res.status === 401) {
            navigate('/login');
          }
          setStats({ totalOrders: 0, totalProducts: 0, totalUsers: 0, totalRevenue: 0 });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchStats();
  }, [user, navigate]);

  const cardStyle = {
    padding: '25px',
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px'
  };

  const numberStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#f97316'
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '5px' }}>
        <span aria-label="ShopMate logo" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(249, 115, 22, 0.12)', color: '#f97316', fontSize: '1.3rem', boxShadow: '0 0px 10px rgba(249, 115, 22, 0.2)' }}>
          🛍️
        </span>
        <h2 style={{ margin: 0 }}>Admin Dashboard</h2>
      </div>
      <p style={{ color: '#64748b', marginBottom: '30px', fontSize: '1.1rem' }}>Welcome back, <span style={{color: '#1f2937'}}>{user?.name}</span></p>
      
      {stats ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={cardStyle}>
            <h4 style={{ color: '#64748b', fontSize: '1rem' }}>Total Orders</h4>
            <div style={numberStyle}>{stats.totalOrders}</div>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: '#64748b', fontSize: '1rem' }}>Total Products</h4>
            <div style={numberStyle}>{stats.totalProducts}</div>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: '#64748b', fontSize: '1rem' }}>Total Users</h4>
            <div style={numberStyle}>{stats.totalUsers}</div>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: '#64748b', fontSize: '1rem' }}>Total Revenue</h4>
            <div style={numberStyle}>₹{stats.totalRevenue.toFixed(2)}</div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', margin: '50px 0', color: '#f97316' }}>Loading metrics...</div>
      )}

      <div style={{ marginTop: '40px', padding: '30px', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ marginBottom: '25px', color: '#f97316' }}>Administrative Controls</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <button className="btn" onClick={() => navigate('/admin/add-product')}>+ Add Product</button>
          <button className="btn" onClick={() => navigate('/admin/products')} style={{ background: '#e2e8f0', color: '#334155', boxShadow: 'none' }}>📦 Manage Products</button>
          <button className="btn" onClick={() => navigate('/admin/orders')} style={{ background: '#e2e8f0', color: '#334155', boxShadow: 'none' }}>🚚 Manage Orders</button>
          <button className="btn" onClick={() => navigate('/admin/users')} style={{ background: '#e2e8f0', color: '#334155', boxShadow: 'none' }}>👥 Users Directory</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
