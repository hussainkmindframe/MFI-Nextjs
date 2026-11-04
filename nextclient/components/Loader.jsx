'use client'

/**
 * Loader Component
 * Displays a loading spinner
 */

export default function Loader({ size = 'md', text = 'Loading...' }) {
  const sizes = {
    sm: { box: '12px', border: '2px', spinner: '10px' },
    md: { box: '20px', border: '3px', spinner: '18px' },
    lg: { box: '32px', border: '4px', spinner: '30px' },
  };

  const s = sizes[size] || sizes.md;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <div style={{ position: 'relative', width: s.box, height: s.box }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: `${s.border} solid #e5e7eb`,
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderTop: `${s.border} solid #c9a84c`,
            borderRight: `${s.border} solid #c9a84c`,
            borderRadius: '50%',
            animation: 'spin 0.6s linear infinite',
          }}
        />
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
      {text && <p style={{ margin: 0, fontSize: '14px', color: '#6c757d' }}>{text}</p>}
    </div>
  );
}
