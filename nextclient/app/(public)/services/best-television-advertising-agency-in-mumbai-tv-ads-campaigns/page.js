'use client'

import React, { useState } from 'react';
import contactService from '@/services/contactService';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const videos = [
  { id: 1, title: "Supreme Furnitures TVC 60 Sec AD by Mind Frame India", ytId: "YQch1ko8Lgs" },
  { id: 2, title: "ABMH Mother & Child Care MIDDLE CLASS 30 HINDI TVC", ytId: "Ys9fIbVVhuU" },
  { id: 3, title: "UMMEED – An Emotional Cancer Awareness Campaign for Aditya Birla Memorial Hospital | Pune", ytId: "9u7dQGzBXJQ" },
  { id: 4, title: "Kohler TVC – The Bold Look of Kohler", ytId: "XMCYvxx3H2Y" },
  { id: 5, title: "Five Fat Monk Dim Sum Story Part 1 | Food & Beverages Ads | Mind Frame India", ytId: "Cq9UdCwl8QE" },
  { id: 6, title: "ABMH Mother & Child Care ELITE CLASS 30 HINDI TVC", ytId: "g0R83YLwAJc" },
];

function YTEmbed({ videoId, title }) {
  return (
    <div style={{ borderRadius: 4, overflow: 'hidden', background: '#000', aspectRatio: '16/9', width: '100%' }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ display: 'block' }}
      />
    </div>
  );
}

function Toast({ toasts }) {
  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 10, pointerEvents: 'none' }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '12px 18px', borderRadius: 4,
          background: t.type === 'success' ? '#f0faf3' : '#fff5f5',
          border: `1px solid ${t.type === 'success' ? '#a3d9b1' : '#feb2b2'}`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, fontWeight: 500,
          color: t.type === 'success' ? '#1a6630' : '#c53030',
          minWidth: 260, animation: 'toastIn 0.3s ease',
        }}>
          <span style={{ fontSize: 16 }}>{t.type === 'success' ? '✓' : '✕'}</span>
          {t.message}
        </div>
      ))}
    </div>
  );
}

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

export default function Television() {
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

 async function handleSubmit(e) {
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
  try {
  await contactService.submitTelevisionContactForm(form);
    setSubmitted(true);
    setForm(initialForm);
    setTouched({});
    setErrors(initialErrors);
    addToast("Message sent successfully! We'll be in touch soon.", 'success');
  } catch (error) {
    addToast('Something went wrong. Please try again.', 'error');
  } finally {
    setLoading(false);
  }
}

  return (
    <>
      <SEO 
        title={seoConfig.services.television.title}
        description={seoConfig.services.television.description}
        keywords={seoConfig.services.television.keywords}
        path={seoConfig.services.television.path}
      />
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <Toast toasts={toasts} />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes toastIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeUp  { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin    { to { transform: rotate(360deg); } }

        .tv-hero { position: relative; height: 480px; overflow: hidden; }
        .tv-hero img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .tv-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.68) 0%, rgba(10,5,30,0.55) 100%);
          display: flex; align-items: center; justify-content: center; flex-direction: column;
        }
        .tv-hero-title { font-family: 'DM Sans', sans-serif; font-size: clamp(26px, 5vw, 56px); font-weight: 800; color: #fff; letter-spacing: -1.5px; line-height: 1.15; text-align: center; max-width: 860px; padding: 0 24px; }
        .tv-hero-subtitle { font-family: 'Cormorant Garamond', serif; font-size: clamp(13px, 1.8vw, 18px); color: #b08d57; margin-top: 18px; letter-spacing: 4px; text-transform: uppercase; }

        .tv-intro-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 0; max-width: 1200px; margin: 0 auto; padding: 72px 60px 60px; }
        .tv-intro-left { padding-right: 60px; }
        .tv-intro-right { padding-left: 40px; border-left: 1px solid #e8e2d9; }

        .tv-main-heading { font-family: 'Cormorant Garamond', serif; font-size: clamp(20px, 2.5vw, 27px); font-weight: 700; color: #b08d57; text-align: center; margin-bottom: 12px; line-height: 1.3; }
        .tv-gold-line { width: 55px; height: 2px; background: #b08d57; margin: 0 auto 28px; }
        .tv-sub-gold { font-family: 'Cormorant Garamond', serif; font-size: clamp(17px, 2vw, 22px); font-weight: 700; font-style: italic; color: #b08d57; margin-bottom: 14px; line-height: 1.3; }
        .tv-body { font-size: 13px; font-weight: 300; color: #555; line-height: 1.85; margin-bottom: 14px; }
        .tv-body strong { font-weight: 600; color: #333; }
        .tv-body em { font-style: italic; }

        .tv-form-label { font-size: 13px; font-weight: 500; color: #444; margin-bottom: 20px; display: block; }
        .tv-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; }
        .tv-field { display: flex; flex-direction: column; gap: 4px; }
        .tv-input { width: 100%; padding: 10px 12px; border: 1px solid #d4cdc4; border-radius: 2px; font-size: 12.5px; font-family: 'DM Sans', sans-serif; color: #333; outline: none; transition: border-color 0.2s; }
        .tv-input:focus { border-color: #b08d57; }
        .tv-input::placeholder { color: #aaa; }
        .tv-input.err { border-color: #e53e3e; }
        .tv-textarea { width: 100%; padding: 10px 12px; border: 1px solid #d4cdc4; border-radius: 2px; font-size: 12.5px; font-family: 'DM Sans', sans-serif; color: #333; outline: none; resize: vertical; min-height: 100px; transition: border-color 0.2s; }
        .tv-textarea:focus { border-color: #b08d57; }
        .tv-textarea::placeholder { color: #aaa; }
        .tv-textarea.err { border-color: #e53e3e; }
        .tv-err-msg { font-size: 11px; color: #e53e3e; }

        .tv-send-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; margin-top: 14px; background: #b08d57; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; border: none; cursor: pointer; transition: background 0.25s, transform 0.2s; border-radius: 2px; }
        .tv-send-btn:hover:not(:disabled) { background: #9a7842; transform: translateY(-1px); }
        .tv-send-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .tv-spinner { width: 13px; height: 13px; border: 2px solid rgba(255,255,255,0.35); border-top-color: #fff; border-radius: 50%; animation: spin 0.7s linear infinite; }

        .tv-success { background: #f0faf3; border: 1px solid #a3d9b1; border-radius: 4px; padding: 24px; text-align: center; animation: fadeUp 0.4s ease; }
        .tv-success-icon { width: 48px; height: 48px; background: #28a745; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; font-size: 22px; color: #fff; }
        .tv-success-title { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: #1a6630; margin-bottom: 8px; }
        .tv-success-sub { font-size: 12.5px; color: #2d7a3a; line-height: 1.6; margin-bottom: 16px; }
        .tv-again-btn { background: none; border: 1px solid #28a745; color: #28a745; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 9px 20px; cursor: pointer; border-radius: 2px; font-family: 'DM Sans', sans-serif; transition: background 0.2s, color 0.2s; }
        .tv-again-btn:hover { background: #28a745; color: #fff; }

        .tv-article { background: #f9f7f4; border-top: 1px solid #e8e2d9; padding: 64px 60px; max-width: 1200px; margin: 0 auto; }
        .tv-article-h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(20px, 2.8vw, 28px); font-weight: 700; color: #b08d57; text-align: center; margin-bottom: 20px; line-height: 1.3; }
        .tv-article-h3 { font-family: 'DM Sans', sans-serif; font-size: clamp(15px, 1.8vw, 18px); font-weight: 700; color: #1a1510; margin: 28px 0 8px; }
        .tv-article-body { font-size: 13px; font-weight: 300; color: #555; line-height: 1.85; margin-bottom: 8px; }
        .tv-article-body strong { font-weight: 600; color: #333; }
        .tv-bullet { font-size: 13px; font-weight: 300; color: #555; line-height: 1.85; padding-left: 20px; margin-bottom: 6px; position: relative; }
        .tv-bullet::before { content: '•'; position: absolute; left: 0; color: #b08d57; }

        .tv-videos-wrap { padding: 60px 24px 80px; max-width: 1300px; margin: 0 auto; }
        .tv-videos-tagline { font-family: 'Cormorant Garamond', serif; font-size: clamp(18px, 2.2vw, 24px); font-weight: 600; font-style: italic; color: #b08d57; text-align: center; margin-bottom: 36px; }
        .tv-videos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

        @media (max-width: 900px) {
          .tv-intro-wrap { grid-template-columns: 1fr; padding: 48px 24px; }
          .tv-intro-left { padding-right: 0; margin-bottom: 48px; }
          .tv-intro-right { padding-left: 0; border-left: none; border-top: 1px solid #e8e2d9; padding-top: 40px; }
          .tv-article { padding: 48px 24px; }
          .tv-videos-grid { grid-template-columns: repeat(2, 1fr); }
          .tv-hero { height: 320px; }
        }
        @media (max-width: 560px) {
          .tv-videos-grid { grid-template-columns: 1fr; }
          .tv-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <div className="tv-hero">
        <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=85" alt="Television Advertising Agency Mumbai" />
        <div className="tv-hero-overlay">
          <div className="tv-hero-title">Television Advertising Agency in Mumbai</div>
          <div className="tv-hero-subtitle">IMPACTFUL TV CAMPAIGNS THAT DELIVER ROI</div>
        </div>
      </div>

      {/* INTRO */}
      <div className="tv-intro-wrap">
        <div className="tv-intro-left">
          <h2 className="tv-main-heading">Cost Effective Television Advertising Agency in Mumbai</h2>
          <div className="tv-gold-line" />
          <h3 className="tv-sub-gold">Welcome to Mind Frame India – Leading Television Advertising Agency in Mumbai</h3>
          <p className="tv-body">At <strong>Mind Frame India</strong>, we specialize in creating <em>impactful television campaigns</em> and corporate films that leave a lasting impression. With over a decade of experience, our results-driven approach has solidified our position as the top television advertising agency in Mumbai.</p>
          <p className="tv-body">From compelling TV commercials to brand-enhancing corporate films, we're here to help your business connect with millions of viewers and stand out from the competition.</p>
        </div>

        <div className="tv-intro-right">
          {submitted ? (
            <div className="tv-success">
              <div className="tv-success-icon">✓</div>
              <div className="tv-success-title">Message Sent Successfully!</div>
              <p className="tv-success-sub">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button className="tv-again-btn" onClick={() => setSubmitted(false)}>Send Another Message</button>
            </div>
          ) : (
            <>
              <span className="tv-form-label">Fill in your details and you'll hear from us shortly!</span>
              <form onSubmit={handleSubmit} noValidate>
                <div className="tv-form-grid">
                  <div className="tv-field">
                    <input className={`tv-input${errors.name && touched.name ? ' err' : ''}`} placeholder="Name*" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} />
                    {errors.name && touched.name && <span className="tv-err-msg">{errors.name}</span>}
                  </div>
                  <div className="tv-field">
                    <input className={`tv-input${errors.email && touched.email ? ' err' : ''}`} placeholder="E-mail*" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && touched.email && <span className="tv-err-msg">{errors.email}</span>}
                  </div>
                  <div className="tv-field">
                    <input className={`tv-input${errors.mobile && touched.mobile ? ' err' : ''}`} placeholder="Mobile No.*" name="mobile" type="tel" value={form.mobile} onChange={handleChange} onBlur={handleBlur} />
                    {errors.mobile && touched.mobile && <span className="tv-err-msg">{errors.mobile}</span>}
                  </div>
                  <div className="tv-field">
                    <input className={`tv-input${errors.location && touched.location ? ' err' : ''}`} placeholder="Location*" name="location" value={form.location} onChange={handleChange} onBlur={handleBlur} />
                    {errors.location && touched.location && <span className="tv-err-msg">{errors.location}</span>}
                  </div>
                </div>
                <div className="tv-field">
                  <textarea className={`tv-textarea${errors.message && touched.message ? ' err' : ''}`} placeholder="Message (Requirement)*" name="message" value={form.message} onChange={handleChange} onBlur={handleBlur} />
                  {errors.message && touched.message && <span className="tv-err-msg">{errors.message}</span>}
                </div>
                <button className="tv-send-btn" type="submit" disabled={loading}>
                  {loading ? <><span className="tv-spinner" />Sending…</> : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* ARTICLE */}
      <div style={{ background: "#f9f7f4", borderTop: "1px solid #e8e2d9", borderBottom: "1px solid #e8e2d9" }}>
        <div className="tv-article">
          <h2 className="tv-article-h2">Why Choose Mind Frame India For TV Advertising?</h2>
          <p className="tv-article-body">Do you want to boost your brand's visibility and reach through strategic TV ad campaigns? We at <strong>Mind Frame India</strong> are here to make it happen.</p>
          <h3 className="tv-article-h3">Build Instant Credibility</h3>
          <p className="tv-article-body">Television is a powerful advertising medium that instantly boosts brand credibility and trustworthiness in the eyes of consumers.</p>
          <h3 className="tv-article-h3">Targeted Reach, Maximum Exposure</h3>
          <p className="tv-article-body">TV ads reach targeted audiences and deliver maximum exposure to your brand across millions of potential customers.</p>
          <h3 className="tv-article-h3">High Recall Value and Immediate Impact</h3>
          <p className="tv-article-body">We create visually compelling and memorable TV commercials that remain etched in the minds of your target audience long after they see your ad.</p>
          <h2 className="tv-article-h2" style={{ marginTop: 48 }}>The Mind Frame Advantage – Our In-House Production Team</h2>
          <p className="tv-article-body">What makes us stand out is our in-house production team. Here's why it makes a difference:</p>
          <p className="tv-bullet"><strong>Cost-Effective Solutions:</strong> Enjoy reduced production costs without compromising quality.</p>
          <p className="tv-bullet"><strong>Creative Control:</strong> Greater flexibility and alignment with your vision.</p>
          <p className="tv-bullet"><strong>Faster Turnaround:</strong> Bring ideas to life quickly with minimized delays.</p>
          <p className="tv-bullet"><strong>Confidentiality Assured:</strong> Reduced risks of conflicts or data breaches.</p>
          <h2 className="tv-article-h2" style={{ marginTop: 48 }}>Our Process – Seamless Collaboration from Start to Finish</h2>
          <h3 className="tv-article-h3">Understanding Your Brand</h3>
          <p className="tv-article-body">We begin by deeply understanding your brand, target audience, and marketing goals.</p>
          <h3 className="tv-article-h3">Creative Concept Development</h3>
          <p className="tv-article-body">Our creative team brings your brand story to life with engaging, out-of-the-box concepts.</p>
          <h3 className="tv-article-h3">Production Excellence</h3>
          <p className="tv-article-body">Using the latest technology and our in-house team, we produce high-quality TVCs with quick turnaround times.</p>
          <h3 className="tv-article-h3">Flawless Campaign Execution</h3>
          <p className="tv-article-body">From strategic media planning to seamless delivery, we handle every aspect of your campaign.</p>
        </div>
      </div>

      {/* VIDEOS */}
      <div className="tv-videos-wrap">
        <p className="tv-videos-tagline">We create stories that generate leads.</p>
        <div className="tv-videos-grid">
          {videos.map((v) => (<YTEmbed key={v.id} videoId={v.ytId} title={v.title} />))}
        </div>
      </div>
    </div>
    </>
  );
}