'use client'

/**
 * Blog Table Component
 * Displays blogs in a table format
 */

export default function BlogTable({ blogs, onEdit, onDelete, isLoading }) {
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#6c757d' }}>Loading blogs...</p>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#6c757d' }}>No blogs found</p>
      </div>
    );
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '13px',
      }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #f0f0f0', background: '#f9fafb' }}>
            <th style={{ textAlign: 'left', padding: '12px', color: '#6c757d', fontWeight: '500', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Image</th>
            <th style={{ textAlign: 'left', padding: '12px', color: '#6c757d', fontWeight: '500', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Title</th>
            <th style={{ textAlign: 'left', padding: '12px', color: '#6c757d', fontWeight: '500', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Views</th>
            <th style={{ textAlign: 'left', padding: '12px', color: '#6c757d', fontWeight: '500', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '12px', color: '#6c757d', fontWeight: '500', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id} style={{ borderBottom: '1px solid #f8f9fa', background: '#fff' }}>
              <td style={{ padding: '12px' }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: '1px solid #eef2f6',
                  }}
                />
              </td>
              <td style={{ padding: '12px', color: '#1a1a1a', maxWidth: '260px' }}>
                <span style={{
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {blog.title}
                </span>
              </td>
              <td style={{ padding: '12px', color: '#6c757d' }}>{blog.views || 0}</td>
              <td style={{ padding: '12px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: '600',
                  background: blog.published ? 'rgba(16,185,129,0.08)' : 'rgba(245,158,11,0.08)',
                  color: blog.published ? '#0a7c4e' : '#b45309',
                  border: `1px solid ${blog.published ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)'}`,
                }}>
                  {blog.published ? '✓ Published' : '○ Draft'}
                </span>
              </td>
              <td style={{ padding: '12px' }}>
                <button
                  onClick={() => onEdit && onEdit(blog._id)}

                  style={{
                    padding: '4px 8px',
                    background: '#e0f2fe',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#0369a1',
                    fontSize: '11px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginRight: '4px',
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete && onDelete(blog._id)}
                  style={{
                    padding: '4px 8px',
                    background: '#fee2e2',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#dc2626',
                    fontSize: '11px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
