'use client'

/**
 * Admin Contact Management Page
 * View, manage and respond to contact form submissions
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/utils/authStore';
import contactService from '@/services/contactService';
import AdminLayout from '@/components/AdminLayout';
import Loader from '@/components/Loader';
import toast from 'react-hot-toast';
import { MdDelete, MdEmail, MdPhone, MdBusiness, MdAccessTime, MdDone, MdClose, MdVisibility } from 'react-icons/md';

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
  pending: { bg: 'rgba(245,158,11,0.08)', text: '#b45309', border: 'rgba(245,158,11,0.25)', icon: MdAccessTime },
  contacted: { bg: 'rgba(59,130,246,0.08)', text: '#1e40af', border: 'rgba(59,130,246,0.25)', icon: MdEmail },
  completed: { bg: 'rgba(16,185,129,0.08)', text: '#0a7c4e', border: 'rgba(16,185,129,0.25)', icon: MdDone },
};

/* ── MODAL ── */
function ContactModal({ contact, onClose, onStatusChange, onDelete }) {
  if (!contact) return null;
  const statusColor = STATUS_COLORS[contact.status] || STATUS_COLORS.pending;

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
        maxWidth: '560px',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
        overflow: 'hidden',
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
              {contact.name}
            </h2>
            <p style={{ fontSize: '12px', color: THEME.textMuted, margin: '4px 0 0' }}>
              Contact Details
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
        <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Row: Email + Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Email</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MdEmail style={{ color: gold, fontSize: '15px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: THEME.text, wordBreak: 'break-all' }}>{contact.email}</span>
              </div>
            </div>
            <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Phone</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MdPhone style={{ color: gold, fontSize: '15px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: THEME.text }}>{contact.phone}</span>
              </div>
            </div>
          </div>

          {/* Company */}
          {contact.company && (
            <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Company</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MdBusiness style={{ color: gold, fontSize: '15px' }} />
                <span style={{ fontSize: '13px', color: THEME.text }}>{contact.company}</span>
              </div>
            </div>
          )}

          {/* Services */}
          {contact.services?.length > 0 && (
            <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px' }}>Services Interested In</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {contact.services.map((s, i) => (
                  <span key={i} style={{
                    background: `${gold}15`, color: gold,
                    padding: '4px 10px', borderRadius: '6px',
                    fontSize: '12px', fontWeight: '600',
                    border: `1px solid ${gold}30`,
                  }}>{s}</span>
                ))}
              </div>
            </div>
          )}

          {/* Message */}
          {contact.anything && (
            <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
              <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>Message</p>
              <p style={{ fontSize: '13px', color: THEME.text, lineHeight: '1.6', margin: 0 }}>{contact.anything}</p>
            </div>
          )}

          {/* Status */}
          <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ fontSize: '10px', fontWeight: '700', color: THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 8px' }}>Update Status</p>
            <select
              value={contact.status}
              onChange={(e) => onStatusChange(contact._id, e.target.value)}
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
              <option value="pending">Pending</option>
              <option value="contacted">Contacted</option>
              <option value="completed">Completed</option>
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
            onClick={() => { onDelete(contact._id); onClose(); }}
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
export default function ContactManagement() {
  const router = useRouter();
  const navigate = (path) => router.push(path);
  const { admin, checkAuth } = useAuthStore();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0, pages: 0 });
  const [selectedContact, setSelectedContact] = useState(null);

  // Naya:
useEffect(() => {
  const init = async () => {
    await checkAuth();
    const { admin } = useAuthStore.getState();
    if (!admin) navigate('/admin/login');
  };
  init();
}, [])
  useEffect(() => { fetchContacts(); }, [pagination.page, statusFilter]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await contactService.getAllContacts(
        pagination.page, pagination.limit, statusFilter, searchTerm
      );
      setContacts(response.data);
      setPagination(prev => ({
        ...prev,
        total: response.pagination.total,
        pages: response.pagination.pages,
      }));
    } catch {
      toast.error('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (contactId, newStatus) => {
    try {
      await contactService.updateContactStatus(contactId, newStatus);
      toast.success('Status updated');
      // update locally too so modal reflects change
      setContacts(prev => prev.map(c => c._id === contactId ? { ...c, status: newStatus } : c));
      if (selectedContact?._id === contactId) setSelectedContact(prev => ({ ...prev, status: newStatus }));
    } catch {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (contactId) => {
    if (!confirm('Delete this contact submission?')) return;
    try {
      await contactService.deleteContact(contactId);
      toast.success('Contact deleted');
      fetchContacts();
    } catch {
      toast.error('Failed to delete contact');
    }
  };

  if (!admin) return null;

  return (
    <AdminLayout pageTitle="Contact Management" pageSubtitle="View and manage contact form submissions">

      {/* Modal */}
      <ContactModal
        contact={selectedContact}
        onClose={() => setSelectedContact(null)}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Filters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value); setPagination(p => ({ ...p, page: 1 })); }}
            onKeyDown={e => e.key === 'Enter' && fetchContacts()}
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
            <option value="pending">Pending</option>
            <option value="contacted">Contacted</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Table card */}
        <div style={{
          background: THEME.bgCard, border: THEME.border,
          borderRadius: '16px', overflow: 'hidden',
          boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
        }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
              <Loader size="md" text="Loading contacts..." />
            </div>
          ) : contacts.length > 0 ? (
            <>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: THEME.border }}>
                      {['Name', 'Email', 'Phone', 'Company', 'Services', 'Status', 'View'].map(h => (
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
                    {contacts.map((contact) => {
                      const statusColor = STATUS_COLORS[contact.status] || STATUS_COLORS.pending;
                      return (
                        <tr
                          key={contact._id}
                          style={{ borderBottom: THEME.border, transition: 'background 0.15s' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          <td style={{ padding: '12px 16px', color: THEME.text, fontWeight: '500', whiteSpace: 'nowrap' }}>
                            {contact.name}
                          </td>
                          <td style={{ padding: '12px 16px', color: THEME.textMuted }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                              <MdEmail style={{ fontSize: '13px', flexShrink: 0 }} />
                              <span style={{ fontSize: '12px' }}>{contact.email}</span>
                            </div>
                          </td>
                          <td style={{ padding: '12px 16px', color: THEME.textMuted, whiteSpace: 'nowrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                              <MdPhone style={{ fontSize: '13px' }} />
                              <span style={{ fontSize: '12px' }}>{contact.phone}</span>
                            </div>
                          </td>
                          <td style={{ padding: '12px 16px', color: THEME.textMuted, fontSize: '12px' }}>
                            {contact.company || <span style={{ color: '#c0c0c0' }}>—</span>}
                          </td>
                          <td style={{ padding: '12px 16px' }}>
                            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                              {contact.services?.slice(0, 2).map((s, i) => (
                                <span key={i} style={{
                                  background: `${gold}15`, color: gold,
                                  padding: '3px 8px', borderRadius: '4px',
                                  fontSize: '11px', fontWeight: '500', whiteSpace: 'nowrap',
                                }}>{s}</span>
                              ))}
                              {contact.services?.length > 2 && (
                                <span style={{
                                  background: `${gold}15`, color: gold,
                                  padding: '3px 8px', borderRadius: '4px',
                                  fontSize: '11px', fontWeight: '500',
                                }}>+{contact.services.length - 2}</span>
                              )}
                            </div>
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
                              {contact.status}
                            </span>
                          </td>
                          <td style={{ padding: '12px 16px' }}>
                            <button
                              onClick={() => setSelectedContact(contact)}
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
                  Page {pagination.page} of {pagination.pages} · {pagination.total} contacts
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
              <p style={{ color: THEME.textMuted, fontSize: '14px' }}>No contacts found</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}


