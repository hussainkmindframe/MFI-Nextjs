'use client'

/**
 * Admin Dashboard Page — Gold & White Theme
 * Shows overview stats and quick actions
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/utils/authStore';
import blogService from '@/services/blogService';
import AdminLayout from '@/components/AdminLayout';
import Loader from '@/components/Loader';
import toast from 'react-hot-toast';
import { MdEdit, MdAdd, MdArticle, MdTrendingUp } from 'react-icons/md';

const gold = '#c9a84c';

const THEME = {
  bg: '#f8f9fa',
  bgCard: '#ffffff',
  border: '1px solid #eef2f6',
  text: '#1a1a1a',
  textMuted: '#6c757d',
  textDim: '#495057',
  gold: gold,
  teal: '#0d9488',
  blue: '#3b82f6',
  green: '#10b981',
  font: "'Inter', 'Segoe UI', 'Georgia', serif",
};

export default function Dashboard() {
  const router = useRouter();
  const navigate = (path) => router.push(path);
  const { admin, checkAuth } = useAuthStore();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ totalBlogs: 0, totalViews: 0 });


  // Naya — dono ko ek saath handle karo:
useEffect(() => {
  const init = async () => {
    await checkAuth();
    const { admin } = useAuthStore.getState();
    if (!admin) navigate('/admin/login');
  };
  init();
}, []);
  
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await blogService.getAdminBlogs(1, 100);
      setBlogs(response.data.blogs);
      const totalViews = response.data.blogs.reduce((sum, blog) => sum + blog.views, 0);
      setStats({ totalBlogs: response.data.total, totalViews });
    } catch (error) {
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  if (!admin) return null;

  return (
    <AdminLayout pageTitle="Dashboard" pageSubtitle={`Welcome back, ${admin?.name}!`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <StatCard
            label="Total Blogs" value={stats.totalBlogs}
            icon={<MdArticle />} color={THEME.gold}
            sub="Blog posts created"
          />
          <StatCard
            label="Total Views" value={stats.totalViews.toLocaleString()}
            icon={<MdTrendingUp />} color={THEME.blue}
            sub="Total page views"
          />
        </div>

        {/* Quick Actions */}
        <div style={{ background: THEME.bgCard, border: THEME.border, borderRadius: '16px', padding: '1.25rem', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
          <p style={{ color: THEME.textDim, fontSize: '14px', fontWeight: '600', marginBottom: '1rem' }}>Quick Actions</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/admin/blogs/add')}
              style={{
                flex: 1, minWidth: '160px', padding: '11px 16px',
                background: gold,
                border: 'none', borderRadius: '10px',
                color: '#fff', fontSize: '14px', fontWeight: '600',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <MdAdd style={{ fontSize: '18px' }} /> Add New Blog
            </button>
          </div>
        </div>

        {/* Recent Blogs */}
        <div style={{ background: THEME.bgCard, border: THEME.border, borderRadius: '16px', padding: '1.25rem', overflow: 'hidden' }}>
          <p style={{ color: THEME.textDim, fontSize: '14px', fontWeight: '600', marginBottom: '1rem' }}>Recent Blogs</p>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
              <Loader size="md" text="Loading blogs..." />
            </div>
          ) : blogs.length > 0 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    {['Image', 'Title', 'Views', 'Status'].map(h => (
                      <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: THEME.textMuted, fontWeight: '500', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {blogs.slice(0, 5).map((blog) => (
                    <tr key={blog._id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                      <td style={{ padding: '10px 12px' }}>
                        <img src={blog.image} alt={blog.title} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #eef2f6' }} />
                      </td>
                      <td style={{ padding: '10px 12px', color: THEME.text, maxWidth: '260px' }}>
                        <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{blog.title}</span>
                      </td>
                      <td style={{ padding: '10px 12px', color: THEME.textMuted }}>{blog.views}</td>
                      <td style={{ padding: '10px 12px' }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                          padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600',
                          background: blog.published ? 'rgba(16,185,129,0.08)' : 'rgba(245,158,11,0.08)',
                          color: blog.published ? '#0a7c4e' : '#b45309',
                          border: `1px solid ${blog.published ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)'}`,
                        }}>
                          {blog.published ? '✓ Published' : '○ Draft'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
              <p style={{ color: THEME.textMuted, marginBottom: '1rem', fontSize: '14px' }}>No blogs yet. Create your first blog!</p>
              <button
                onClick={() => navigate('/admin/blogs/add')}
                style={{
                  padding: '9px 20px',
                  background: gold,
                  border: 'none', borderRadius: '8px',
                  color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                }}
              >
                <MdAdd /> Create Now
              </button>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

/** Stat Card */
function StatCard({ label, value, icon, color, sub }) {
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #eef2f6',
      borderRadius: '16px', padding: '1.25rem',
      position: 'relative', overflow: 'hidden',
      boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: color,
      }} />
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <p style={{ color: '#6c757d', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{label}</p>
          <p style={{ color: '#1a1a1a', fontSize: '32px', fontWeight: '700', letterSpacing: '-1px', margin: '0 0 4px' }}>{value}</p>
          <p style={{ color: '#adb5bd', fontSize: '11px', margin: 0 }}>{sub}</p>
        </div>
        <div style={{
          width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
          background: `${color}10`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px', color,
        }}>
          {icon}
        </div>
      </div>
    </div>
  );
}



