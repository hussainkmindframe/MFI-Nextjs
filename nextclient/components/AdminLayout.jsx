'use client'

/**
 * Admin Layout Component
 * Shared layout for all admin pages with sidebar and header
 */

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/utils/authStore';
import { MdDashboard, MdArticle, MdAdd, MdLogout, MdClose, MdEmail, MdWork, MdBusinessCenter, MdMenu } from 'react-icons/md';

const gold = '#c9a84c';

const THEME = {
  bg: '#f8f9fa',
  bgCard: '#ffffff',
  border: '1px solid #eef2f6',
  text: '#1a1a1a',
  textMuted: '#6c757d',
  textDim: '#495057',
  gold: gold,
  green: '#10b981',
  font: "'Inter', 'Segoe UI', 'Georgia', serif",
};

const MENU_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: MdDashboard, description: 'View overview', path: '/admin/dashboard' },
  { id: 'blogs', label: 'Manage Blogs', icon: MdArticle, description: 'Edit & manage posts', path: '/admin/BlogManagement' },
  { id: 'contacts', label: 'Contact Forms', icon: MdEmail, description: 'View submissions', path: '/admin/ContactManagement' },
  { id: 'careers', label: 'Career Applications', icon: MdWork, description: 'Job applications', path: '/admin/CareerManagement' },
  { id: 'hiring', label: 'Hiring Management', icon: MdBusinessCenter, description: 'Manage job positions', path: '/admin/HiringManagement' },
];

export default function AdminLayout({ children, pageTitle, pageSubtitle }) {
  const router = useRouter();
  const pathname = usePathname();
  // const { admin, logout, checkAuth } = useAuthStore();
  const { admin, logout, checkAuth, loading, authCheckComplete } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  // Auto-close sidebar on route change (mobile-friendly behavior)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  const isActive = (path) => pathname === path;

  // if (!admin) return null;
if (loading || !authCheckComplete) return (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f8f9fa' }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px', height: '40px',
        border: '3px solid #e8ecef',
        borderTop: `3px solid ${gold}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 12px'
      }} />
      <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>Loading...</p>
    </div>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

if (!admin) {
  router.push('/admin/login');
  return null;
}
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: THEME.bg,
      fontFamily: THEME.font,
      overflow: 'hidden',
    }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(2px)',
            zIndex: 30,
            display: 'none',
          }}
          className="md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '260px',
          background: '#ffffff',
          borderRight: '1px solid #e8ecef',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 40,
          transition: 'transform 0.3s ease',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          boxShadow: '2px 0 8px rgba(0,0,0,0.02)',
        }}
      >
        {/* Top gold accent line */}
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${gold}, ${gold}66, transparent)`, flexShrink: 0 }} />

        {/* Header */}
        <div style={{
          padding: '1.5rem 1.25rem 1.25rem',
          borderBottom: '1px solid #e8ecef',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="/assets/logo2.png"
                alt="Mindframe India Logo"
                style={{
                  height: '42px',
                  width: 'auto',
                  maxWidth: '90px',
                  objectFit: 'contain',
                  flexShrink: 0,
                  display: 'block',
                }}
              />
              <div>
                <p style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a2e', margin: 0, letterSpacing: '-0.3px' }}>Mindframe</p>
                <p style={{ color: '#6c757d', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>Admin Panel</p>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto' }}>
          <p style={{ color: '#adb5bd', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', padding: '0 8px', marginBottom: '8px', fontWeight: '600' }}>
            Navigation
          </p>
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.id}
                onClick={() => {
                  router.push(item.path);
                  setSidebarOpen(false);
                }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: active ? `1px solid ${gold}40` : '1px solid transparent',
                  background: active ? `${gold}10` : 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = '#f8f9fa';
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = 'transparent';
                }}
              >
                {active && (
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '20%',
                    bottom: '20%',
                    width: '3px',
                    background: gold,
                    borderRadius: '0 4px 4px 0',
                  }} />
                )}
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  flexShrink: 0,
                  background: active ? `${gold}15` : '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon style={{ fontSize: '17px', color: active ? gold : '#6c757d' }} />
                </div>
                <div>
                  <p style={{ color: active ? '#1a1a2e' : '#495057', fontSize: '13.5px', fontWeight: active ? '600' : '400', margin: 0 }}>
                    {item.label}
                  </p>
                  <p style={{ color: '#adb5bd', fontSize: '11px', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div style={{ padding: '0.75rem', borderTop: '1px solid #e8ecef', flexShrink: 0 }}>
          {/* User card */}
          <div style={{
            background: '#f8f9fa',
            border: '1px solid #e8ecef',
            borderRadius: '10px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '8px',
          }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              flexShrink: 0,
              background: `linear-gradient(135deg, ${gold}, ${gold}99)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              color: '#fff',
            }}>👤</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: '#1a1a2e', fontSize: '13px', fontWeight: '600', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {admin?.name || 'Admin User'}
              </p>
              <p style={{ color: '#6c757d', fontSize: '11px', margin: 0 }}>Administrator</p>
            </div>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#28a745', flexShrink: 0 }} />
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '10px 12px',
              background: '#f8d7da',
              border: '1px solid #f5c6cb',
              borderRadius: '10px',
              color: '#721c24',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f5c6cb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8d7da';
            }}
          >
            <MdLogout style={{ fontSize: '16px' }} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        minWidth: 0,
        marginLeft: sidebarOpen ? '260px' : '0px',
        transition: 'margin-left 0.3s ease',
      }}>
        {/* Header */}
        <header style={{
          background: '#ffffff',
          borderBottom: '1px solid #eef2f6',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                background: '#f8f9fa',
                border: '1px solid #eef2f6',
                borderRadius: '8px',
                padding: '7px',
                cursor: 'pointer',
                color: '#6c757d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e8ecef'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#f8f9fa'}
              title="Toggle Sidebar"
            >
              {sidebarOpen ? <MdClose style={{ fontSize: '18px' }} /> : <MdMenu style={{ fontSize: '18px' }} />}
            </button>
            <div>
              <h1 style={{ color: '#1a1a1a', fontSize: '20px', fontWeight: '700', margin: 0, letterSpacing: '-0.3px' }}>
                {pageTitle}
              </h1>
              {pageSubtitle && (
                <p style={{ color: THEME.textMuted, fontSize: '12px', margin: 0 }}>
                  {pageSubtitle}
                </p>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
}