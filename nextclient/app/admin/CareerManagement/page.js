'use client'



/**
 * Admin Career Management Page
 * View, manage and respond to career/job application submissions
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/utils/authStore';
import AdminLayout from '@/components/AdminLayout';
import Loader from '@/components/Loader';
import toast from 'react-hot-toast';
import apiClient from '@/services/apiClient';

import {
  MdDelete, MdEmail, MdPhone, MdLocationOn, MdWork,
  MdAccessTime, MdDone, MdClose, MdVisibility, MdPerson,
  MdDescription, MdCalendarToday, MdStar, MdSearch,
  MdFilterList, MdDownload,
} from 'react-icons/md';

const gold = '#c9a84c';

const THEME = {
  bg: '#f8f9fa',
  bgCard: '#ffffff',
  border: '1px solid #eef2f6',
  text: '#1a1a1a',
  textMuted: '#6c757d',
  textDim: '#495057',
  gold: gold,
  font: "'Inter', 'Segoe UI', 'Georgia', serif",
};

const STATUS_COLORS = {
  new:         { bg: 'rgba(59,130,246,0.08)',   text: '#1e40af', border: 'rgba(59,130,246,0.25)',  icon: MdStar },
  reviewing:   { bg: 'rgba(245,158,11,0.08)',   text: '#b45309', border: 'rgba(245,158,11,0.25)',  icon: MdAccessTime },
  shortlisted: { bg: 'rgba(16,185,129,0.08)',   text: '#0a7c4e', border: 'rgba(16,185,129,0.25)',  icon: MdDone },
  rejected:    { bg: 'rgba(239,68,68,0.08)',     text: '#dc2626', border: 'rgba(239,68,68,0.25)',   icon: MdClose },
};

/* ── MODAL ── */
function CareerModal({ application, onClose, onStatusChange, onDelete }) {
  if (!application) return null;
  const statusColor = STATUS_COLORS[application.status] || STATUS_COLORS.new;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(3px)',
          zIndex: 1000,
          animation: 'fadeIn 0.2s ease',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1001,
        width: '100%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflowY: 'auto',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
        animation: 'slideUp 0.25s ease',
        fontFamily: THEME.font,
      }}>

        {/* Gold top bar */}
        <div style={{ height: '4px', background: `linear-gradient(90deg, ${gold}, ${gold}88, transparent)` }} />

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '20px 24px 16px',
          borderBottom: THEME.border,
        }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: THEME.text, margin: 0 }}>
              {application.name}
            </h2>
            <p style={{ fontSize: '12px', color: THEME.textMuted, margin: '4px 0 0' }}>
              Application for: <strong style={{ color: gold }}>{application.applyFor}</strong>
            </p>
          </div>
          <button onClick={onClose} style={{
            background: '#f1f3f5', border: 'none', borderRadius: '8px',
            width: '32px', height: '32px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: THEME.textMuted, fontSize: '18px',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#e9ecef'}
            onMouseLeave={e => e.currentTarget.style.background = '#f1f3f5'}
          >
            <MdClose />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* Row: Email + Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Email</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MdEmail style={{ color: gold, fontSize: '15px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: THEME.text, wordBreak: 'break-all' }}>{application.email}</span>
              </div>
            </div>
            <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Mobile</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MdPhone style={{ color: gold, fontSize: '15px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: THEME.text }}>{application.mobile}</span>
              </div>
            </div>
          </div>

          {/* Row: Age + Experience */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Age</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MdCalendarToday style={{ color: gold, fontSize: '15px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: THEME.text }}>{application.age} years</span>
              </div>
            </div>
            <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Experience</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MdWork style={{ color: gold, fontSize: '15px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: THEME.text }}>{application.experience}</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Location</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MdLocationOn style={{ color: gold, fontSize: '15px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: THEME.text }}>{application.location}</span>
            </div>
          </div>

          {/* Subject */}
          <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Subject</p>
            <p style={{ fontSize: '13px', color: THEME.text, lineHeight: '1.6', margin: 0 }}>{application.subject}</p>
          </div>

          {/* Resume — proxy download via backend */}
     {application.resumeOriginalName && (
  <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
        <MdDescription style={{ color: gold, fontSize: '18px', flexShrink: 0 }} />
        <span style={{ fontSize: '13px', color: THEME.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {application.resumeOriginalName}
        </span>
      </div>
      {/* ✅ Backend proxy download */}
      <button
        onClick={async () => {
          try {
            const res = await apiClient.get(`/career/${application._id}/download`, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', application.resumeOriginalName || 'resume.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
          } catch (err) {
            toast.error('Download failed');
          }
        }}
        style={{
          fontSize: '11px', color: gold, background: 'none', border: 'none',
          display: 'flex', alignItems: 'center', gap: '3px',
          fontWeight: '600', flexShrink: 0, marginLeft: '12px',
          cursor: 'pointer', fontFamily: THEME.font,
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#b8943a'}
        onMouseLeave={e => e.currentTarget.style.color = gold}
      >
        <MdDownload style={{ fontSize: '14px' }} /> Download
      </button>
    </div>
  </div>
)}

          {/* Applied At */}
          <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Applied On</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MdAccessTime style={{ color: gold, fontSize: '15px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: THEME.text }}>
                {new Date(application.createdAt).toLocaleString('en-IN', {
                  day: 'numeric', month: 'short', year: 'numeric',
                  hour: '2-digit', minute: '2-digit',
                })}
              </span>
            </div>
          </div>

          {/* Status */}
          <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 8px' }}>Update Status</p>
            <select
              value={application.status}
              onChange={(e) => onStatusChange(application._id, e.target.value)}
              style={{
                padding: '8px 12px',
                background: statusColor.bg,
                border: `1px solid ${statusColor.border}`,
                color: statusColor.text,
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                outline: 'none',
                fontFamily: THEME.font,
              }}
            >
              <option value="new">New</option>
              <option value="reviewing">Reviewing</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', justifyContent: 'flex-end', gap: '10px',
          padding: '14px 24px 20px',
          borderTop: THEME.border,
        }}>
          <button
            onClick={() => { onDelete(application._id); onClose(); }}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '9px 18px',
              background: '#fee2e2', border: '1px solid #fecaca',
              borderRadius: '8px', color: '#dc2626',
              fontSize: '13px', fontWeight: '600', cursor: 'pointer',
              transition: 'all 0.2s', fontFamily: THEME.font,
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#fecaca'}
            onMouseLeave={e => e.currentTarget.style.background = '#fee2e2'}
          >
            <MdDelete style={{ fontSize: '16px' }} /> Delete
          </button>
          <button
            onClick={onClose}
            style={{
              padding: '9px 20px',
              background: gold, border: 'none',
              borderRadius: '8px', color: '#fff',
              fontSize: '13px', fontWeight: '600', cursor: 'pointer',
              transition: 'all 0.2s', fontFamily: THEME.font,
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#b8935f'}
            onMouseLeave={e => e.currentTarget.style.background = gold}
          >
            Close
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translate(-50%, -46%) } to { opacity: 1; transform: translate(-50%, -50%) } }
      `}</style>
    </>
  );
}

/* ── MAIN PAGE ── */
export default function CareerManagement() {
  const router = useRouter();
  const navigate = (path) => router.push(path);
  const { admin, checkAuth } = useAuthStore();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0, pages: 0 });
  const [selectedApp, setSelectedApp] = useState(null);
  const [stats, setStats] = useState(null);
  const [availablePositions, setAvailablePositions] = useState([]);

// Naya:
useEffect(() => {
  const init = async () => {
    await checkAuth();
    const { admin } = useAuthStore.getState();
    if (!admin) navigate('/admin/login');
  };
  init();
}, [])
  useEffect(() => { fetchApplications(); }, [pagination.page, statusFilter, positionFilter]);
  useEffect(() => { fetchStats(); }, []);
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        
       const response = await apiClient.get('/positions');
        if (response.data.success) {
  setAvailablePositions(response.data.data.map(p => p.title));
}
      } catch (error) {
        console.error('Failed to fetch positions:', error);
      }
    };
    fetchPositions();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set('page', pagination.page);
      params.set('limit', pagination.limit);
      if (statusFilter) params.set('status', statusFilter);
      if (positionFilter) params.set('applyFor', positionFilter);
      if (searchTerm) params.set('search', searchTerm);

            const response = await apiClient.get('/careers?' + params.toString())

      setApplications(response.data.data);
      setPagination(prev => ({
        ...prev,
        total: response.data.pagination.total,
        pages: response.data.pagination.pages,
      }));
    } catch {
      toast.error('Failed to fetch applications');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
            const response = await apiClient.get('/careers/stats');

      setStats(response.data.data);
    } catch {
      // Stats are optional
    }
  };

  const handleStatusChange = async (appId, newStatus) => {
    try {
          await apiClient.put(`/career/${appId}/status`, { status: newStatus }); 

      toast.success('Status updated');
      setApplications(prev => prev.map(a => a._id === appId ? { ...a, status: newStatus } : a));
      if (selectedApp?._id === appId) setSelectedApp(prev => ({ ...prev, status: newStatus }));
      fetchStats();
    } catch {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (appId) => {
    if (!confirm('Delete this application?')) return;
    try {
          await apiClient.delete(`/career/${appId}`); 

      toast.success('Application deleted');
      fetchApplications();
      fetchStats();
    } catch {
      toast.error('Failed to delete application');
    }
  };

  if (!admin) return null;

  return (
    <AdminLayout pageTitle="Career Applications" pageSubtitle="View and manage job applications">

      <CareerModal
        application={selectedApp}
        onClose={() => setSelectedApp(null)}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Stats Cards */}
        {stats && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
            {[
              { label: 'Total',      value: stats.total,      color: gold },
              { label: 'New',        value: stats.new,        color: '#3b82f6' },
              { label: 'Reviewing',  value: stats.reviewing,  color: '#f59e0b' },
              { label: 'Shortlisted',value: stats.shortlisted,color: '#10b981' },
              { label: 'Rejected',   value: stats.rejected,   color: '#ef4444' },
            ].map(s => (
              <div key={s.label} style={{
                background: THEME.bgCard, border: THEME.border,
                borderRadius: '12px', padding: '16px',
                position: 'relative', overflow: 'hidden',
                boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: s.color }} />
                <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>
                  {s.label}
                </p>
                <p style={{ fontSize: '28px', fontWeight: '700', color: THEME.text, margin: 0, letterSpacing: '-1px' }}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Filters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Search by name, email, mobile..."
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value); setPagination(p => ({ ...p, page: 1 })); }}
            onKeyDown={e => e.key === 'Enter' && fetchApplications()}
            style={{
              padding: '11px 14px', background: THEME.bgCard, border: THEME.border,
              borderRadius: '10px', color: THEME.text, fontSize: '14px',
              outline: 'none', transition: 'border-color 0.2s', fontFamily: THEME.font,
            }}
            onFocus={e => e.target.style.borderColor = gold}
            onBlur={e => e.target.style.borderColor = '#eef2f6'}
          />
          <select
            value={statusFilter}
            onChange={e => { setStatusFilter(e.target.value); setPagination(p => ({ ...p, page: 1 })); }}
            style={{
              padding: '11px 14px', background: THEME.bgCard, border: THEME.border,
              borderRadius: '10px', color: THEME.text, fontSize: '14px',
              outline: 'none', fontFamily: THEME.font, cursor: 'pointer',
            }}
          >
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="reviewing">Reviewing</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="rejected">Rejected</option>
          </select>
          <select
            value={positionFilter}
            onChange={e => { setPositionFilter(e.target.value); setPagination(p => ({ ...p, page: 1 })); }}
            style={{
              padding: '11px 14px', background: THEME.bgCard, border: THEME.border,
              borderRadius: '10px', color: THEME.text, fontSize: '14px',
              outline: 'none', fontFamily: THEME.font, cursor: 'pointer',
            }}
          >
            <option value="">All Positions</option>
            {availablePositions.map(position => (
              <option key={position} value={position}>{position}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div style={{
          background: THEME.bgCard, border: THEME.border,
          borderRadius: '16px', overflow: 'hidden',
          boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
        }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
              <Loader size="md" text="Loading applications..." />
            </div>
          ) : applications.length > 0 ? (
            <>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: THEME.border }}>
                      {['Name', 'Email', 'Mobile', 'Position', 'Location', 'Status', 'Applied', 'View'].map(h => (
                        <th key={h} style={{
                          textAlign: 'left', padding: '12px 16px',
                          color: THEME.textMuted, fontWeight: '600',
                          fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px',
                          whiteSpace: 'nowrap',
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => {
                      const statusColor = STATUS_COLORS[app.status] || STATUS_COLORS.new;
                      return (
                        <tr
                          key={app._id}
                          style={{ borderBottom: THEME.border, transition: 'background 0.15s' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          <td style={{ padding: '12px 16px', color: THEME.text, fontWeight: '500', whiteSpace: 'nowrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{
                                width: '32px', height: '32px', borderRadius: '8px',
                                background: `${gold}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                              }}>
                                <MdPerson style={{ color: gold, fontSize: '16px' }} />
                              </div>
                              {app.name}
                            </div>
                          </td>
                          <td style={{ padding: '12px 16px', color: THEME.textMuted }}>
                            <span style={{ fontSize: '12px' }}>{app.email}</span>
                          </td>
                          <td style={{ padding: '12px 16px', color: THEME.textMuted, whiteSpace: 'nowrap' }}>
                            <span style={{ fontSize: '12px' }}>{app.mobile}</span>
                          </td>
                          <td style={{ padding: '12px 16px' }}>
                            <span style={{
                              background: `${gold}15`, color: gold,
                              padding: '3px 10px', borderRadius: '6px',
                              fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap',
                              border: `1px solid ${gold}30`,
                            }}>{app.applyFor}</span>
                          </td>
                          <td style={{ padding: '12px 16px', color: THEME.textMuted, fontSize: '12px', whiteSpace: 'nowrap' }}>
                            {app.location}
                          </td>
                          <td style={{ padding: '12px 16px' }}>
                            <span style={{
                              display: 'inline-block',
                              padding: '4px 10px',
                              background: statusColor.bg,
                              border: `1px solid ${statusColor.border}`,
                              color: statusColor.text,
                              borderRadius: '6px',
                              fontSize: '11px', fontWeight: '600',
                              textTransform: 'capitalize',
                            }}>
                              {app.status}
                            </span>
                          </td>
                          <td style={{ padding: '12px 16px', color: THEME.textMuted, fontSize: '11px', whiteSpace: 'nowrap' }}>
                            {new Date(app.createdAt).toLocaleDateString('en-IN', {
                              day: 'numeric', month: 'short', year: 'numeric',
                            })}
                          </td>
                          <td style={{ padding: '12px 16px' }}>
                            <button
                              onClick={() => setSelectedApp(app)}
                              style={{
                                display: 'flex', alignItems: 'center', gap: '5px',
                                padding: '6px 12px',
                                background: `${gold}12`,
                                border: `1px solid ${gold}40`,
                                borderRadius: '6px', color: gold,
                                fontSize: '12px', fontWeight: '600', cursor: 'pointer',
                                transition: 'all 0.2s', fontFamily: THEME.font,
                                whiteSpace: 'nowrap',
                              }}
                              onMouseEnter={e => { e.currentTarget.style.background = gold; e.currentTarget.style.color = '#fff'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = `${gold}12`; e.currentTarget.style.color = gold; }}
                            >
                              <MdVisibility style={{ fontSize: '14px' }} /> View
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 16px', borderTop: THEME.border, background: '#f8f9fa',
              }}>
                <span style={{ color: THEME.textMuted, fontSize: '12px' }}>
                  Page {pagination.page} of {pagination.pages} · {pagination.total} applications
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[
                    { label: '← Prev', disabled: pagination.page === 1, onClick: () => setPagination(p => ({ ...p, page: p.page - 1 })) },
                    { label: 'Next →', disabled: pagination.page >= pagination.pages, onClick: () => setPagination(p => ({ ...p, page: p.page + 1 })) },
                  ].map(btn => (
                    <button
                      key={btn.label}
                      disabled={btn.disabled}
                      onClick={btn.onClick}
                      style={{
                        padding: '6px 14px',
                        background: btn.disabled ? '#f0f0f0' : THEME.bgCard,
                        border: THEME.border, borderRadius: '6px',
                        cursor: btn.disabled ? 'not-allowed' : 'pointer',
                        fontSize: '12px', fontWeight: '600',
                        color: btn.disabled ? THEME.textMuted : THEME.textDim,
                        fontFamily: THEME.font,
                      }}
                    >{btn.label}</button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <MdWork style={{ fontSize: '48px', color: '#e0e0e0', marginBottom: '12px' }} />
              <p style={{ color: THEME.textMuted, fontSize: '14px' }}>No applications found</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}


