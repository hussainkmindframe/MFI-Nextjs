'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/utils/authStore';
import { MdEmail, MdLock, MdLogin, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import toast from 'react-hot-toast';
const logo = '/assets/Logo-MFI.png';


const gold = '#c9a84c';

export default function AdminLogin() {
  const router = useRouter();
  const navigate = (path) => router.push(path);
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDemoLogin = () => {
    setFormData({ email: 'admin@mindframe.com', password: 'Mind@123' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(formData.email, formData.password);
      toast.success('Welcome back!');
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error?.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: "'Inter', 'Segoe UI', 'Georgia', serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.03) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{ width: '100%', maxWidth: '480px', position: 'relative', zIndex: 1 }}>

        {/* Logo Area */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            border: `2px solid ${gold}`, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}>
            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h2 style={{
            fontSize: '24px', fontWeight: 600, color: '#1a1a1a',
            margin: '12px 0 4px', letterSpacing: '-0.5px',
          }}>
            Admin Portal
          </h2>
          <p style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>
            Secure access to Mindframe India dashboard
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: '#ffffff', borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
        }}>
          {/* Gold top accent */}
          <div style={{ height: '4px', background: `linear-gradient(90deg, ${gold}, ${gold}66, transparent)` }} />

          <div style={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Email */}
              <div>
                <label style={{
                  display: 'block', color: '#333', fontSize: '13px',
                  fontWeight: '600', marginBottom: '8px', letterSpacing: '0.3px',
                }}>
                  Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <MdEmail style={{
                    position: 'absolute', left: '14px', top: '50%',
                    transform: 'translateY(-50%)', color: '#999', fontSize: '18px',
                  }} />
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleChange} required disabled={loading}
                    placeholder="admin@mindframe.com"
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      paddingLeft: '44px', paddingRight: '16px',
                      paddingTop: '12px', paddingBottom: '12px',
                      background: '#fafafa', border: '1px solid #e0e0e0',
                      borderRadius: '12px', color: '#1a1a1a', fontSize: '14px',
                      outline: 'none', transition: 'all 0.2s',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = gold;
                      e.target.style.background = '#fff';
                      e.target.style.boxShadow = `0 0 0 3px rgba(201,168,76,0.1)`;
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = '#e0e0e0';
                      e.target.style.background = '#fafafa';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label style={{
                  display: 'block', color: '#333', fontSize: '13px',
                  fontWeight: '600', marginBottom: '8px', letterSpacing: '0.3px',
                }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <MdLock style={{
                    position: 'absolute', left: '14px', top: '50%',
                    transform: 'translateY(-50%)', color: '#999', fontSize: '18px',
                  }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password" value={formData.password}
                    onChange={handleChange} required disabled={loading}
                    placeholder="Enter your password"
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      paddingLeft: '44px', paddingRight: '44px',
                      paddingTop: '12px', paddingBottom: '12px',
                      background: '#fafafa', border: '1px solid #e0e0e0',
                      borderRadius: '12px', color: '#1a1a1a', fontSize: '14px',
                      outline: 'none', transition: 'all 0.2s',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = gold;
                      e.target.style.background = '#fff';
                      e.target.style.boxShadow = `0 0 0 3px rgba(201,168,76,0.1)`;
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = '#e0e0e0';
                      e.target.style.background = '#fafafa';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  <button
                    type="button" onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute', right: '14px', top: '50%',
                      transform: 'translateY(-50%)', background: 'none',
                      border: 'none', cursor: 'pointer', color: '#999',
                      fontSize: '18px', padding: 0, display: 'flex',
                    }}
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </button>
                </div>
              
              </div>

              {/* Submit */}
              <button
                type="submit" disabled={loading}
                style={{
                  width: '100%', padding: '14px',
                  background: loading ? `rgba(201,168,76,0.6)` : gold,
                  border: 'none', borderRadius: '12px',
                  color: '#fff', fontSize: '14px', fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '10px',
                  transition: 'all 0.2s', textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 2px 8px rgba(201,168,76,0.3)',
                }}
                onMouseEnter={e => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(201,168,76,0.4)';
                  }
                }}
                onMouseLeave={e => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(201,168,76,0.3)';
                  }
                }}
              >
                <MdLogin style={{ fontSize: '18px' }} />
                {loading ? 'Authenticating...' : 'Sign In'}
              </button>

            </form>
          </div>
        </div>

        <p style={{
          textAlign: 'center', color: '#aaa',
          fontSize: '11px', marginTop: '1.5rem',
        }}>
          🔒 Secure Admin Access · Protected by JWT
        </p>
        <p style={{ textAlign: 'center', color: '#bbb', fontSize: '10px', marginTop: '8px' }}>
          © 2024 Mindframe India. All rights reserved.
        </p>

      </div>
    </div>
  );
}



