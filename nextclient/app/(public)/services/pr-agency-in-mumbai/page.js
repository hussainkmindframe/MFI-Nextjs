'use client'

import { useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const prServices = [
  {
    id: 1,
    title: "Organic Press Release Writing and Distribution",
    desc: "The primary objective of our press release writing and distribution service is to maximize the reach and impact of your brand. We craft engaging, authentic press releases tailored to resonate with your target audience. With our distribution strategy, we ensure that your press release reaches the right audience through a comprehensive network of industry influencers and media contacts.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 18l12 8 12-8 12 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 30l8-6M42 30l-8-6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Online Reputation Management",
    desc: "We track mentions of our clients across various online platforms, including social media, reviews, and forums, as part of our proactive approach to addressing negative publicity. Our team implements a range of strategies to highlight positive content, engage with the audience constructively, and swiftly handle potential reputation bumps.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Brand Stories & Brand Launch",
    desc: "Each brand has a unique story to tell, and Mind Frame India excels at telling compelling narratives that resonate with your target audience. We help identify your brand's values, mission, and vision. When launching a new brand, we take a strategic approach to ensure buzz and excitement through digital marketing, influencer partnerships, and media engagement.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12L8 18h12z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 6v6M24 30v12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Brand Building with PR",
    desc: "At Mind Frame India, we view PR as a cornerstone of effective brand building. We integrate public relations into broader marketing strategies, ensuring consistent messaging across all platforms. We increase brand awareness and establish a credible, authoritative presence in the industry by utilizing strategic storytelling, media engagement, and targeted campaigns.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M8 28l10-12 8 6 10-14 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 38h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Influencer Marketing",
    desc: "Mind Frame India develops influencer marketing strategies that align with your brand's goals. We identify influencers who authentically represent your brand and connect with your target audience. We design campaigns that engage their followers by utilizing their unique voice and style, increasing your brand's visibility and credibility.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="24" r="4" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const styles = {
  goldTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 600,
    color: "#b08d57",
    textAlign: "center",
    marginBottom: "16px",
    letterSpacing: "-0.3px",
  },
  underline: {
    width: "60px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 24px",
  },
  body: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.75,
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#1a1510",
    textAlign: "center",
    margin: "18px 0 12px",
    letterSpacing: "-0.2px",
  },
};

// ── TOAST ──
function Toast({ toasts }) {
  return (
    <div style={{
      position: 'fixed', top: 20, right: 20, zIndex: 9999,
      display: 'flex', flexDirection: 'column', gap: 10,
      pointerEvents: 'none',
    }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '12px 18px',
          borderRadius: 4,
          background: t.type === 'success' ? '#f0faf3' : '#fff5f5',
          border: `1px solid ${t.type === 'success' ? '#a3d9b1' : '#feb2b2'}`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: t.type === 'success' ? '#1a6630' : '#c53030',
          fontWeight: 500,
          minWidth: 260,
          animation: 'toastIn 0.3s ease',
        }}>
          <span style={{ fontSize: 16 }}>{t.type === 'success' ? '✓' : '✕'}</span>
          {t.message}
        </div>
      ))}
    </div>
  );
}

function PRServiceCard({ svc }) {
  return (
    <div className="pr-card">
      <div className="pr-icon">{svc.icon}</div>
      <h3 style={styles.cardTitle}>{svc.title}</h3>
      <p style={styles.body}>{svc.desc}</p>
    </div>
  );
}

// ── FORM HOOK ──
const initialForm = { name: '', email: '', mobile: '', location: '', message: '' };
const initialErrors = { name: '', email: '', mobile: '', location: '', message: '' };

function validate(f) {
  const e = { ...initialErrors };
  if (!f.name.trim()) e.name = 'Name is required.';
  if (!f.email.trim()) e.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email.';
  if (!f.mobile.trim()) e.mobile = 'Mobile No. is required.';
  else if (!/^\+?[0-9\s\-]{7,15}$/.test(f.mobile)) e.mobile = 'Enter a valid mobile number.';
  if (!f.location.trim()) e.location = 'Location is required.';
  if (!f.message.trim()) e.message = 'Please describe your requirement.';
  return e;
}

function hasErrors(e) { return Object.values(e).some(Boolean); }

export default function PublicRelation() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  function addToast(message, type = 'success') {
    const id = Date.now();
    setToasts(t => [...t, { id, message, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3500);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) setErrors(validate(updated));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    setErrors(validate(form));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const allTouched = { name: true, email: true, mobile: true, location: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (hasErrors(errs)) {
      addToast('Please fill in all required fields correctly.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
      setTouched({});
      setErrors(initialErrors);
      addToast('Message sent successfully! We\'ll be in touch soon.', 'success');
    }, 1200);
  }

  return (
    <>
      <SEO 
        title={seoConfig.services.publicRelations.title}
        description={seoConfig.services.publicRelations.description}
        keywords={seoConfig.services.publicRelations.keywords}
        path={seoConfig.services.publicRelations.path}
      />
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <Toast toasts={toasts} />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes toastIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pr-card {
          background: #fff;
          border: 1px solid #e8e2d9;
          border-radius: 12px;
          padding: 40px 28px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }
        .pr-card:hover {
          box-shadow: 0 20px 40px rgba(176, 141, 87, 0.12);
          transform: translateY(-6px);
          border-color: #b08d57;
        }
        .pr-icon { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); display: inline-flex; }
        .pr-card:hover .pr-icon { transform: scale(1.08) rotate(-3deg); }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1300px;
          margin: 0 auto;
          padding: 20px 24px 60px;
        }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
        @media (max-width: 640px)  { .services-grid { grid-template-columns: 1fr; gap: 20px; } .pr-card { padding: 32px 24px 28px; } }

        .hero-section { position: relative; height: 450px; overflow: hidden; }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%);
          display: flex; align-items: center; justify-content: center; flex-direction: column;
        }
        .hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800; color: #fff;
          letter-spacing: -1.5px; line-height: 1.2;
          text-align: center; max-width: 900px; margin: 0 24px;
        }
        .hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 2vw, 20px);
          color: #b08d57; margin-top: 20px;
          letter-spacing: 4px; text-transform: uppercase;
        }

        /* ── FORM ── */
        .pr-form-wrap {
          background: #f5f3ef;
          border-radius: 4px;
          padding: 40px;
          max-width: 700px;
          margin: 0 auto;
          border: 1px solid #e8e2d9;
        }
        .pr-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        .pr-field { display: flex; flex-direction: column; gap: 4px; }
        .pr-input {
          width: 100%; padding: 11px 14px;
          border: 1px solid #d4cdc4; border-radius: 2px;
          font-size: 13px; font-family: 'DM Sans', sans-serif;
          color: #333; outline: none; background: #fff;
          transition: border-color 0.2s;
        }
        .pr-input:focus { border-color: #b08d57; }
        .pr-input::placeholder { color: #aaa; }
        .pr-input.err { border-color: #e53e3e; }
        .pr-textarea {
          width: 100%; padding: 11px 14px;
          border: 1px solid #d4cdc4; border-radius: 2px;
          font-size: 13px; font-family: 'DM Sans', sans-serif;
          color: #333; outline: none; resize: vertical;
          min-height: 110px; background: #fff;
          transition: border-color 0.2s;
        }
        .pr-textarea:focus { border-color: #b08d57; }
        .pr-textarea::placeholder { color: #aaa; }
        .pr-textarea.err { border-color: #e53e3e; }
        .pr-err { font-size: 11px; color: #e53e3e; }

        .pr-submit {
          width: 100%; padding: 13px;
          background: #b08d57; border: none;
          border-radius: 2px; color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          cursor: pointer; transition: background 0.25s, transform 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-top: 14px;
        }
        .pr-submit:hover:not(:disabled) { background: #9a7842; transform: translateY(-1px); }
        .pr-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        .pr-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success state */
        .pr-success {
          background: #f0faf3;
          border: 1px solid #a3d9b1;
          border-radius: 4px;
          padding: 28px 24px;
          text-align: center;
          animation: fadeUp 0.4s ease;
        }
        .pr-success-icon {
          width: 52px; height: 52px;
          background: #28a745; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          font-size: 24px; color: #fff;
        }
        .pr-success-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-weight: 700;
          color: #1a6630; margin-bottom: 8px;
        }
        .pr-success-sub {
          font-size: 13px; color: #2d7a3a;
          line-height: 1.6; margin-bottom: 20px;
        }
        .pr-again-btn {
          background: none; border: 1px solid #28a745;
          color: #28a745; font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 10px 24px; cursor: pointer; border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.2s, color 0.2s;
        }
        .pr-again-btn:hover { background: #28a745; color: #fff; }

        @media (max-width: 560px) {
          .pr-form-grid { grid-template-columns: 1fr; }
          .pr-form-wrap { padding: 28px 20px; }
        }
      `}</style>

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=85"
          alt="Public Relations Agency"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay">
          <div className="hero-title">Leading PR Agency in Mumbai</div>
          <div className="hero-subtitle">BUILDING BRAND REPUTATION</div>
        </div>
      </div>

      {/* INTRO */}
      <div style={{ background: "#fff", padding: "64px 24px 56px", borderBottom: "1px solid #e8e2d9" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
            We are the most reputable PR agency in Mumbai with over 14 years of experience. As a public relations agency, we are skilled in media relations, corporate communications, crisis management, brand building, and digital PR.
          </p>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
            By using our experience and energy, we get the attention of influencers and invest in the right areas. We utilize the best practices, new ideas and innovative methods for distributing messages.
          </p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div style={{ background: "#fff", padding: "60px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", marginBottom: "32px" }}>
          <h2 style={styles.goldTitle}>Fill in your details and you'll hear from us shortly!</h2>
          <div style={styles.underline} />
        </div>

        <div className="pr-form-wrap">
          {submitted ? (
            <div className="pr-success">
              <div className="pr-success-icon">✓</div>
              <div className="pr-success-title">Message Sent Successfully!</div>
              <p className="pr-success-sub">Thank you for reaching out to Mind Frame India. Our PR team will get back to you within 24 hours.</p>
              <button className="pr-again-btn" onClick={() => setSubmitted(false)}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="pr-form-grid">
                <div className="pr-field">
                  <input
                    className={`pr-input${errors.name && touched.name ? ' err' : ''}`}
                    placeholder="Name*" name="name" value={form.name}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                  {errors.name && touched.name && <span className="pr-err">{errors.name}</span>}
                </div>
                <div className="pr-field">
                  <input
                    className={`pr-input${errors.email && touched.email ? ' err' : ''}`}
                    placeholder="E-mail*" name="email" type="email" value={form.email}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                  {errors.email && touched.email && <span className="pr-err">{errors.email}</span>}
                </div>
                <div className="pr-field">
                  <input
                    className={`pr-input${errors.mobile && touched.mobile ? ' err' : ''}`}
                    placeholder="Mobile No.*" name="mobile" type="tel" value={form.mobile}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                  {errors.mobile && touched.mobile && <span className="pr-err">{errors.mobile}</span>}
                </div>
                <div className="pr-field">
                  <input
                    className={`pr-input${errors.location && touched.location ? ' err' : ''}`}
                    placeholder="Location*" name="location" value={form.location}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                  {errors.location && touched.location && <span className="pr-err">{errors.location}</span>}
                </div>
              </div>

              <div className="pr-field" style={{ marginBottom: 0 }}>
                <textarea
                  className={`pr-textarea${errors.message && touched.message ? ' err' : ''}`}
                  placeholder="Message (Requirement)*" name="message" value={form.message}
                  onChange={handleChange} onBlur={handleBlur}
                />
                {errors.message && touched.message && <span className="pr-err">{errors.message}</span>}
              </div>

              <button className="pr-submit" type="submit" disabled={loading}>
                {loading ? <><span className="pr-spinner" /> Sending…</> : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={{ background: "#fff", padding: "60px 24px", borderTop: "1px solid #e8e2d9" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={styles.goldTitle}>Why We are Best PR Agency In Mumbai</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
            Mind Frame India possesses qualities such as creativity, strong networking skills, and a keen ability to adapt to changing media landscapes. We are known for our strategic thinking, effective communication, and the ability to build trust with both clients and influencers.
          </p>
        </div>
      </div>

      {/* KEY SERVICES TEXT */}
      <div style={{ background: "#f5f3ef", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={styles.goldTitle}>Our Key Services</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "20px" }}>
            We maintain strong relationships with influential news organizations, journalists, and influencers across a variety of industries. As a result of these connections, we are able to secure valuable media coverage for our clients.
          </p>
        </div>
      </div>

      {/* PR SERVICES GRID */}
      <div style={{ background: "#f5f3ef", padding: "0 0 40px" }}>
        <div style={{ textAlign: "center", padding: "0 24px 20px" }}>
          <h2 style={styles.goldTitle}>Our Public Relations services include:</h2>
          <div style={styles.underline} />
        </div>
        <div className="services-grid">
          {prServices.map((svc) => (
            <PRServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}