'use client'

import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

export default function AugmentedReality() {
  return (
    <>

      <SEO 
        title={seoConfig.services.augmentedReality.title}
        description={seoConfig.services.augmentedReality.description}
        keywords={seoConfig.services.augmentedReality.keywords}
        path={seoConfig.services.augmentedReality.path}
      />
      
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ar-hero {
          position: relative;
          height: 480px;
          overflow: hidden;
        }
        .ar-hero-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 35%;
        }
        .ar-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.48) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .ar-breadcrumb {
          position: absolute;
          top: 20px; left: 0; right: 0;
          text-align: center;
          font-size: 11px;
          letter-spacing: 2.5px;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
        }
        .ar-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(28px, 5vw, 58px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -1.5px;
          line-height: 1.15;
          text-align: center;
          max-width: 860px;
          padding: 0 24px;
        }
        .ar-hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(13px, 1.8vw, 19px);
          color: #b08d57;
          margin-top: 18px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        /* Content sections */
        .ar-section1 {
          background: #fff;
          padding: 72px 80px 60px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .ar-main-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700;
          color: #b08d57;
          text-align: center;
          margin-bottom: 28px;
          line-height: 1.35;
          letter-spacing: 0.2px;
        }
        .ar-body {
          font-size: 13.5px;
          font-weight: 300;
          color: #555;
          line-height: 1.85;
          text-align: left;
        }

        .ar-divider {
          background: #f5f3ef;
          padding: 56px 80px 56px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .ar-sub-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 600;
          color: #b08d57;
          text-align: center;
          margin-bottom: 12px;
        }
        .ar-gold-line {
          width: 50px; height: 2px;
          background: #b08d57;
          margin: 0 auto 28px;
        }

        @media (max-width: 768px) {
          .ar-hero { height: 320px; }
          .ar-section1 { padding: 52px 24px 44px; }
          .ar-divider { padding: 44px 24px 44px; }
        }
      `}</style>

      {/* HERO */}
      <div className="ar-hero">
        <img
          className="ar-hero-img"
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1600&q=85"
          alt="Augmented Reality Virtual Reality Mumbai"
        />
        <div className="ar-hero-overlay">
          <div className="ar-hero-title">AR & VR Agency in Mumbai</div>
          <div className="ar-hero-subtitle">IMMERSIVE EXPERIENCES THAT INSPIRE</div>
        </div>
      </div>

      {/* Section 1 — AR intro */}
      <div className="ar-section1">
        <h2 className="ar-main-heading">
          Believable &amp; Emotionally Engaging Augmented Reality &amp; Virtual Reality Services In Mumbai
        </h2>
        <p className="ar-body">
          Augmented Reality uses your existing natural environment and overlays virtual information on top of it, enabling you to experience a new and improved natural world where virtual information is used to assist in everyday activities. Augmented Reality can highlight certain features, enhance understanding, and provide accessible and timely data.
        </p>
      </div>

      {/* Section 2 — VR */}
      <div style={{ background: "#f5f3ef" }}>
        <div className="ar-divider">
          <h3 className="ar-sub-heading">Virtual Reality</h3>
          <div className="ar-gold-line" />
          <p className="ar-body">
            Virtual Reality (VR) is the most immersive of the "reality" technologies, which virtually places the user into a digital environment or immersive experience designed to make it feel like he or she is there.
          </p>
        </div>
      </div>

    </div>
  
    </>
);
}


