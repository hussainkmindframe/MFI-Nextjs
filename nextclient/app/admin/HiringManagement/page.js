'use client'

/**
 * Admin Hiring Management Page
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/utils/authStore';
import AdminLayout from '@/components/AdminLayout';
import Loader from '@/components/Loader';
import toast from 'react-hot-toast';
import apiClient from '@/services/apiClient';
import {
  MdDelete, MdEdit, MdAdd, MdToggleOn, MdToggleOff, MdBusinessCenter,
} from 'react-icons/md';

const api = apiClient;

const gold = '#c9a84c';
const THEME = {
  bgCard: '#ffffff',
  border: '1px solid #eef2f6',
  text: '#1a1a1a',
  textMuted: '#6c757d',
  textDim: '#495057',
  font: "'Inter', 'Segoe UI', sans-serif",
};

const getId = (obj) => obj?._id || obj?.id || null;

/* ── POSITION MODAL ── */
function PositionModal({ isOpen, position, isNew, onClose, onSave, onRefresh }) {
  const [formData, setFormData] = useState({
    title: '', description: '', location: 'Mumbai', experience: 'Entry Level',
    requirements: [], responsibilities: [],
  });
  const [loading, setLoading] = useState(false);
  const [requirementsInput, setRequirementsInput] = useState('');
  const [responsibilitiesInput, setResponsibilitiesInput] = useState('');

  // ✅ Use getId(position) as dep so edit prefill always syncs
  useEffect(() => {
    if (!isOpen) return;
    if (isNew || !position) {
      setFormData({ title: '', description: '', location: 'Mumbai', experience: 'Entry Level', requirements: [], responsibilities: [] });
      setRequirementsInput('');
      setResponsibilitiesInput('');
    } else {
      setFormData({
        title: position.title || '',
        description: position.description || '',
        location: position.location || 'Mumbai',
        experience: position.experience || 'Entry Level',
        requirements: position.requirements || [],
        responsibilities: position.responsibilities || [],
      });
      setRequirementsInput('');
      setResponsibilitiesInput('');
    }
  }, [isOpen, isNew, getId(position)]);

  if (!isOpen) return null;

  const posId = getId(position);

  const handleSubmit = async () => {
    if (!formData.title.trim()) { toast.error('Position title is required'); return; }
    setLoading(true);
    try {
      if (isNew) {
        await api.post('/positions', formData);
        toast.success('Position created successfully');
      } else {
        await api.put(`/positions/${posId}`, formData);
        toast.success('Position updated successfully');
      }
      onSave();
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save position');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!posId) { toast.error('Invalid position'); return; }
    if (!confirm(`Delete "${position.title}"? This cannot be undone.`)) return;
    setLoading(true);
    try {
      await api.delete(`/positions/${posId}`);
      toast.success('Position deleted successfully');
      onRefresh();
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete position');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '10px 12px',
    border: '1px solid #eef2f6', borderRadius: '8px',
    fontSize: '13px', fontFamily: THEME.font, outline: 'none',
    boxSizing: 'border-box', color: THEME.text,
  };

  const fields = [
    { label: 'Position Title *', key: 'title', placeholder: 'e.g., Web Developer', type: 'input' },
    { label: 'Description', key: 'description', placeholder: 'Brief description of the role', type: 'textarea' },
    { label: 'Location', key: 'location', placeholder: 'e.g., Mumbai', type: 'input' },
    { label: 'Experience Level', key: 'experience', placeholder: 'e.g., 1-3 years', type: 'input' },
  ];

  const addRequirement = () => {
    if (requirementsInput.trim()) {
      setFormData(f => ({
        ...f,
        requirements: [...(f.requirements || []), requirementsInput.trim()]
      }));
      setRequirementsInput('');
    }
  };

  const removeRequirement = (index) => {
    setFormData(f => ({
      ...f,
      requirements: f.requirements.filter((_, i) => i !== index)
    }));
  };

  const addResponsibility = () => {
    if (responsibilitiesInput.trim()) {
      setFormData(f => ({
        ...f,
        responsibilities: [...(f.responsibilities || []), responsibilitiesInput.trim()]
      }));
      setResponsibilitiesInput('');
    }
  };

  const removeResponsibility = (index) => {
    setFormData(f => ({
      ...f,
      responsibilities: f.responsibilities.filter((_, i) => i !== index)
    }));
  };

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', zIndex: 1000 }} />

      {/* Modal box */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1001, width: '94%', maxWidth: '500px',
        maxHeight: '90vh', overflowY: 'auto',
        background: '#fff', borderRadius: '16px',
        boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
        fontFamily: THEME.font,
      }}>
        {/* Gold top bar */}
        <div style={{ height: '4px', background: `linear-gradient(90deg, ${gold}, ${gold}88, transparent)`, borderRadius: '16px 16px 0 0' }} />

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px 16px', borderBottom: THEME.border }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: THEME.text, margin: 0 }}>
              {isNew ? 'Add New Position' : 'Edit Position'}
            </h2>
            {!isNew && position?.title && (
              <p style={{ fontSize: '12px', color: THEME.textMuted, margin: '4px 0 0' }}>{position.title}</p>
            )}
          </div>
          <button onClick={onClose} style={{ background: '#f1f3f5', border: 'none', borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: THEME.textMuted, flexShrink: 0 }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: 'calc(90vh - 150px)', overflowY: 'auto' }}>
          {fields.map(({ label, key, placeholder, type }) => (
            <div key={key}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                {label}
              </label>
              {type === 'textarea' ? (
                <textarea
                  value={formData[key] || ''}
                  onChange={e => setFormData(f => ({ ...f, [key]: e.target.value }))}
                  placeholder={placeholder}
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = gold}
                  onBlur={e => e.target.style.borderColor = '#eef2f6'}
                />
              ) : (
                <input
                  type="text"
                  value={formData[key] || ''}
                  onChange={e => setFormData(f => ({ ...f, [key]: e.target.value }))}
                  placeholder={placeholder}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = gold}
                  onBlur={e => e.target.style.borderColor = '#eef2f6'}
                />
              )}
            </div>
          ))}

          {/* Requirements Section */}
          <div style={{ marginTop: '8px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
              Requirements
            </label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              <input
                type="text"
                value={requirementsInput}
                onChange={e => setRequirementsInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && (addRequirement(), e.preventDefault())}
                placeholder="Add a requirement and press Enter"
                style={{ ...inputStyle, flex: 1 }}
                onFocus={e => e.target.style.borderColor = gold}
                onBlur={e => e.target.style.borderColor = '#eef2f6'}
              />
              <button
                onClick={addRequirement}
                style={{ padding: '10px 16px', background: gold, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: THEME.font }}
              >
                Add
              </button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {(formData.requirements || []).map((req, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f0f0f0', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', color: THEME.text }}>
                  {req}
                  <button
                    onClick={() => removeRequirement(idx)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', fontSize: '16px', padding: 0, display: 'flex', alignItems: 'center' }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities Section */}
          <div style={{ marginTop: '8px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
              Responsibilities
            </label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              <input
                type="text"
                value={responsibilitiesInput}
                onChange={e => setResponsibilitiesInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && (addResponsibility(), e.preventDefault())}
                placeholder="Add a responsibility and press Enter"
                style={{ ...inputStyle, flex: 1 }}
                onFocus={e => e.target.style.borderColor = gold}
                onBlur={e => e.target.style.borderColor = '#eef2f6'}
              />
              <button
                onClick={addResponsibility}
                style={{ padding: '10px 16px', background: gold, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: THEME.font }}
              >
                Add
              </button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {(formData.responsibilities || []).map((resp, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f0f0f0', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', color: THEME.text }}>
                  {resp}
                  <button
                    onClick={() => removeResponsibility(idx)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', fontSize: '16px', padding: 0, display: 'flex', alignItems: 'center' }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px 20px', borderTop: THEME.border }}>
          {/* Delete button on left (only for edit) */}
          <div>
            {!isNew && (
              <button
                onClick={handleDelete}
                disabled={loading}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 16px', background: '#fee2e2', border: '1px solid #fecaca', borderRadius: '8px', color: '#dc2626', fontSize: '13px', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: THEME.font, opacity: loading ? 0.7 : 1 }}
              >
                <MdDelete style={{ fontSize: '16px' }} /> Delete Position
              </button>
            )}
          </div>

          {/* Save / Cancel on right */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={onClose}
              disabled={loading}
              style={{ padding: '9px 16px', background: '#f1f3f5', border: 'none', borderRadius: '8px', color: THEME.textMuted, fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: THEME.font }}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{ padding: '9px 20px', background: loading ? 'rgba(201,168,76,0.6)' : gold, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: THEME.font }}
            >
              {loading ? 'Saving...' : isNew ? 'Create Position' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── MAIN PAGE ── */
export default function HiringManagement() {
  const router = useRouter();
  const navigate = (path) => router.push(path);
  const { admin, checkAuth, authCheckComplete, isAuthenticated } = useAuthStore();
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0, pages: 0 });
  const [stats, setStats] = useState(null);
  const [modal, setModal] = useState({ open: false, isNew: true, position: null });

  const openAddModal = () => setModal({ open: true, isNew: true, position: null });
  const openEditModal = (pos) => setModal({ open: true, isNew: false, position: pos });
  const closeModal = () => setModal(m => ({ ...m, open: false }));

  useEffect(() => { checkAuth(); }, []);
  useEffect(() => {
    if (authCheckComplete && !isAuthenticated) navigate('/admin/login');
  }, [authCheckComplete, isAuthenticated, navigate]);
  useEffect(() => { 
    if (admin && authCheckComplete) fetchPositions(); 
  }, [pagination.page, searchTerm, admin, authCheckComplete]);
  useEffect(() => { 
    if (admin && authCheckComplete) fetchStats(); 
  }, [admin, authCheckComplete]);

  const fetchPositions = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set('page', pagination.page);
      params.set('limit', pagination.limit);
      if (searchTerm) params.set('search', searchTerm);

      const res = await api.get(`/positions?${params.toString()}`);

      setPositions(res.data.data || []);
      if (res.data.pagination) {
        setPagination(prev => ({
          ...prev,
          total: res.data.pagination.total ?? 0,
          pages: res.data.pagination.pages ?? 0,
        }));
      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error('Session expired. Please login again.');
        navigate('/admin/login');
      } else {
        toast.error('Failed to fetch positions');
      }
      setPositions([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await api.get('/positions/stats');
      if (res.data?.data) setStats(res.data.data);
    } catch (err) {
      if (err.response?.status === 401) {
        // Session expired - silently handle
        navigate('/admin/login');
      } else if (err.response?.status !== 404) {
        console.error('Failed to fetch stats:', err);
      }
    }
  };

  const handleToggle = async (posId, currentStatus) => {
    if (!posId) { toast.error('Invalid position ID'); return; }
    try {
      await api.patch(`/positions/${posId}/toggle`);
      toast.success(`Position ${currentStatus ? 'deactivated' : 'activated'}`);
      fetchPositions();
      fetchStats();
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error('Session expired. Please login again.');
        navigate('/admin/login');
      } else {
        toast.error('Failed to toggle status');
      }
    }
  };

  // Inline delete from table row (without opening modal)
  const handleInlineDelete = async (pos) => {
    const posId = getId(pos);
    if (!posId) { toast.error('Invalid position ID'); return; }
    if (!confirm(`Delete "${pos.title}"? This cannot be undone.`)) return;
    try {
      await api.delete(`/positions/${posId}`);
      toast.success('Position deleted');
      fetchPositions();
      fetchStats();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete position');
    }
  };

  const handleSave = () => { fetchPositions(); fetchStats(); };
  const handleRefresh = () => { fetchPositions(); fetchStats(); };

  if (!admin) return null;

  return (
    <AdminLayout pageTitle="Hiring Management" pageSubtitle="Create and manage job positions">

      <PositionModal
        isOpen={modal.open}
        isNew={modal.isNew}
        position={modal.position}
        onClose={closeModal}
        onSave={handleSave}
        onRefresh={handleRefresh}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Stats */}
        {stats && stats.total !== undefined && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
            {[
              { label: 'Total Positions', value: stats.total, color: gold },
              { label: 'Active', value: stats.active, color: '#10b981' },
              { label: 'Inactive', value: stats.inactive, color: '#ef4444' },
            ].map(s => (
              <div key={s.label} style={{ background: THEME.bgCard, border: THEME.border, borderRadius: '12px', padding: '16px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: s.color }} />
                <p style={{ fontSize: '10px', fontWeight: 700, color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>{s.label}</p>
                <p style={{ fontSize: '28px', fontWeight: 700, color: THEME.text, margin: 0, letterSpacing: '-1px' }}>{s.value ?? 0}</p>
              </div>
            ))}
          </div>
        )}

        {/* Search + Add */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search positions..."
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value); setPagination(p => ({ ...p, page: 1 })); }}
            onKeyDown={e => e.key === 'Enter' && fetchPositions()}
            style={{ flex: 1, minWidth: '200px', padding: '11px 14px', background: THEME.bgCard, border: THEME.border, borderRadius: '10px', color: THEME.text, fontSize: '14px', outline: 'none', fontFamily: THEME.font }}
            onFocus={e => e.target.style.borderColor = gold}
            onBlur={e => e.target.style.borderColor = '#eef2f6'}
          />
          <button
            onClick={openAddModal}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '11px 18px', background: gold, border: 'none', borderRadius: '10px', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: THEME.font }}
            onMouseEnter={e => e.currentTarget.style.background = '#b8935f'}
            onMouseLeave={e => e.currentTarget.style.background = gold}
          >
            <MdAdd style={{ fontSize: '18px' }} /> Add Position
          </button>
        </div>

        {/* Table */}
        <div style={{ background: THEME.bgCard, border: THEME.border, borderRadius: '16px', overflow: 'hidden' }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
              <Loader size="md" text="Loading positions..." />
            </div>
          ) : positions.length > 0 ? (
            <>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: THEME.border }}>
                      {['Position', 'Location', 'Experience', 'Status', 'Actions'].map(h => (
                        <th key={h} style={{ textAlign: 'left', padding: '12px 16px', color: THEME.textMuted, fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px', whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {positions.map(pos => (
                      <tr
                        key={getId(pos)}
                        style={{ borderBottom: THEME.border }}
                        onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <td style={{ padding: '12px 16px', color: THEME.text, fontWeight: 500 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: 32, height: 32, borderRadius: 8, background: `${gold}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <MdBusinessCenter style={{ color: gold, fontSize: 16 }} />
                            </div>
                            {pos.title}
                          </div>
                        </td>
                        <td style={{ padding: '12px 16px', color: THEME.textMuted, fontSize: 12 }}>{pos.location}</td>
                        <td style={{ padding: '12px 16px', color: THEME.textMuted, fontSize: 12 }}>{pos.experience}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{ display: 'inline-block', padding: '4px 10px', background: pos.isActive ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)', border: pos.isActive ? '1px solid rgba(16,185,129,0.25)' : '1px solid rgba(239,68,68,0.25)', color: pos.isActive ? '#0a7c4e' : '#dc2626', borderRadius: 6, fontSize: 11, fontWeight: 600 }}>
                            {pos.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>

                            {/* Toggle */}
                            <button
                              onClick={() => handleToggle(getId(pos), pos.isActive)}
                              title={pos.isActive ? 'Deactivate' : 'Activate'}
                              style={{ display: 'flex', alignItems: 'center', padding: '6px 8px', background: pos.isActive ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', border: 'none', borderRadius: 6, cursor: 'pointer' }}
                            >
                              {pos.isActive
                                ? <MdToggleOn style={{ fontSize: 20, color: '#10b981' }} />
                                : <MdToggleOff style={{ fontSize: 20, color: '#ef4444' }} />}
                            </button>

                            {/* Edit */}
                            <button
                              onClick={() => openEditModal(pos)}
                              title="Edit"
                              style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: `${gold}12`, border: `1px solid ${gold}40`, borderRadius: 6, color: gold, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: THEME.font }}
                              onMouseEnter={e => { e.currentTarget.style.background = gold; e.currentTarget.style.color = '#fff'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = `${gold}12`; e.currentTarget.style.color = gold; }}
                            >
                              <MdEdit style={{ fontSize: 14 }} /> Edit
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => handleInlineDelete(pos)}
                              title="Delete"
                              style={{ display: 'flex', alignItems: 'center', padding: '6px 8px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 6, color: '#dc2626', cursor: 'pointer' }}
                              onMouseEnter={e => { e.currentTarget.style.background = '#dc2626'; e.currentTarget.style.color = '#fff'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.08)'; e.currentTarget.style.color = '#dc2626'; }}
                            >
                              <MdDelete style={{ fontSize: 16 }} />
                            </button>

                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderTop: THEME.border, background: '#f8f9fa' }}>
                <span style={{ color: THEME.textMuted, fontSize: 12 }}>
                  Page {pagination.page} of {pagination.pages || 1} · {pagination.total} positions
                </span>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[
                    { label: '← Prev', disabled: pagination.page === 1, onClick: () => setPagination(p => ({ ...p, page: p.page - 1 })) },
                    { label: 'Next →', disabled: pagination.page >= (pagination.pages || 1), onClick: () => setPagination(p => ({ ...p, page: p.page + 1 })) },
                  ].map(btn => (
                    <button key={btn.label} disabled={btn.disabled} onClick={btn.onClick} style={{ padding: '6px 14px', background: btn.disabled ? '#f0f0f0' : THEME.bgCard, border: THEME.border, borderRadius: 6, cursor: btn.disabled ? 'not-allowed' : 'pointer', fontSize: 12, fontWeight: 600, color: btn.disabled ? THEME.textMuted : THEME.textDim, fontFamily: THEME.font }}>
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <MdBusinessCenter style={{ fontSize: 48, color: '#e0e0e0', marginBottom: 12 }} />
              <p style={{ color: THEME.textMuted, fontSize: 14 }}>No positions found</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}


