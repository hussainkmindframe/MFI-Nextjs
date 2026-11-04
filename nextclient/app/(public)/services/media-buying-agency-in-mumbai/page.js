'use client'

import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const mediaServices = [
  {
    id: 1,
    title: "Cinema Media Buying",
    desc: "We identify the right audience before creating a media buying plan. Our cinema advertising solutions help you reach captive audiences in theaters across India.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M16 6l4 4M32 6l-4 4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M14 32h20" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Event Sponsorships",
    desc: "We help you increase your brand exposure and access attendee data through event sponsorship. Connect with your target audience at the right place and time.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v6l4 4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 8l-2 6h4zM32 8l2 6h-4z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 38l-4 4M30 38l4 4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Media Auditing, Search & Media Strategy",
    desc: "We proactively check the vitalis, circulation, deficiencies, and activity levels of your social media efforts through various reporting systems to optimize performance.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M6 38l10-14 8 8 10-16 8 10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 42h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 6v36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="34" cy="12" r="3" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Newspapers & Magazines Media Buying",
    desc: "We guide which print media will be the best for your brand's marketing mix to help you reach your consumers effectively and cost-efficiently.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="8" width="28" height="32" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M14 16h12M14 22h12M14 28h8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="34" y="24" width="10" height="16" rx="1" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M36 30h6M36 34h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Outdoor (OOH) / Outdoor Media Buying",
    desc: "We create attractive and compelling advertising that ensures a high level of audience engagement through billboards, banners, transit advertising, and more.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="10" y="12" width="28" height="22" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <rect x="18" y="34" width="12" height="8" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M14 12V8h20v4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 20h12M18 26h8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Radio Media Buying",
    desc: "Our radio media buying expertise includes the full range of radio platforms at Pan India level. We help you reach audiences through the most effective radio channels.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="8" y="16" width="32" height="22" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M12 16V8a4 4 0 018 0v8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 28h16" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="28" r="2" fill="#b08d57" />
        <circle cx="18" cy="28" r="2" fill="#b08d57" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "SMS Marketing",
    desc: "Our expert content writer team develops innovative and appealing messages which achieve high click-through rates. Reach your customers directly through personalized SMS campaigns.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="14" width="36" height="24" rx="4" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 20l12 8 12-8 12 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 32l8-6M42 32l-8-6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="18" r="2" fill="#b08d57" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Television Media Buying",
    desc: "We run ads on the right TV channels and optimize both your budget and your ROI. Our TV media buying expertise ensures maximum reach for your brand.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="4" y="10" width="40" height="24" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M18 34l-4 8h20l-4-8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 20h8M22 24h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="18" r="1.5" fill="#b08d57" />
      </svg>
    ),
  },
];

const advantages = [
  {
    id: 1,
    title: "Pan India Reach",
    desc: "We have media partnerships across all major cities in India, ensuring your brand reaches the right audience everywhere.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <circle cx="24" cy="24" r="18" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 6v4M24 38v4M8 24H4M44 24h-4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Cost Optimization",
    desc: "We negotiate the best rates with media partners to maximize your ROI while staying within your budget.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M24 8v4M24 36v4M10 24H6M42 24h-4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 16l-4-4M36 36l-4-4M32 16l4-4M16 36l-4 4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 24a6 6 0 11-12 0 6 6 0 0112 0z" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Data-Driven Strategy",
    desc: "We use advanced analytics and audience insights to create media plans that deliver measurable results.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <rect x="8" y="20" width="8" height="18" rx="1" fill="#b08d57" />
        <rect x="20" y="12" width="8" height="26" rx="1" fill="#b08d57" />
        <rect x="32" y="24" width="8" height="14" rx="1" fill="#b08d57" />
        <path d="M4 42h40" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "End-to-End Service",
    desc: "From planning and buying to monitoring and reporting, we handle every aspect of your media campaigns.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12L8 18h12z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 6v42" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#f5f3ef",
    minHeight: "100vh",
  },
  goldTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 600,
    color: "#b08d57",
    textAlign: "center",
    marginBottom: "16px",
    letterSpacing: "-0.3px",
  },
  darkTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(28px, 4vw, 38px)",
    fontWeight: 700,
    color: "#1a1510",
    textAlign: "center",
    marginBottom: "16px",
    letterSpacing: "-0.5px",
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

function MediaServiceCard({ svc }) {
  return (
    <div className="media-card">
      <div className="media-icon">{svc.icon}</div>
      <h3 style={styles.cardTitle}>{svc.title}</h3>
      <p style={styles.body}>{svc.desc}</p>
    </div>
  );
}

function AdvantageCard({ advantage }) {
  return (
    <div className="advantage-card">
      <div className="advantage-icon">{advantage.icon}</div>
      <h3 style={{ ...styles.cardTitle, fontSize: "18px", margin: "16px 0 10px" }}>{advantage.title}</h3>
      <p style={{ ...styles.body, fontSize: "13px", textAlign: "center" }}>{advantage.desc}</p>
    </div>
  );
}

export default function MediaBuying() {
  return (
    <>

      <SEO 
        title={seoConfig.services.mediaBuying.title}
        description={seoConfig.services.mediaBuying.description}
        keywords={seoConfig.services.mediaBuying.keywords}
        path={seoConfig.services.mediaBuying.path}
      />
      
    <div style={styles.page}>
      <style>
        {`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          .media-card {
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
          .media-card:hover {
            box-shadow: 0 20px 40px rgba(176, 141, 87, 0.12);
            transform: translateY(-6px);
            border-color: #b08d57;
          }
          .media-icon {
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
          }
          .media-card:hover .media-icon {
            transform: scale(1.08) rotate(-3deg);
          }
          .media-icon svg stroke {
            transition: stroke 0.3s ease;
          }
          .media-card:hover .media-icon svg stroke {
            stroke: #9a7842;
          }

          .advantage-card {
            background: #fff;
            border: 1px solid #e8e2d9;
            border-radius: 12px;
            padding: 32px 24px 28px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
          }
          .advantage-card:hover {
            box-shadow: 0 15px 30px rgba(176, 141, 87, 0.1);
            transform: translateY(-4px);
            border-color: #b08d57;
          }
          .advantage-icon {
            transition: transform 0.3s ease;
          }
          .advantage-card:hover .advantage-icon {
            transform: scale(1.05);
          }
          .advantage-icon svg stroke {
            transition: stroke 0.3s ease;
          }
          .advantage-card:hover .advantage-icon svg stroke {
            stroke: #9a7842;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
            max-width: 1300px;
            margin: 0 auto;
            padding: 20px 24px 60px;
          }

          .advantages-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1300px;
            margin: 0 auto;
            padding: 20px 24px 60px;
          }

          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
            .advantages-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
          @media (max-width: 640px) {
            .services-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .advantages-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .media-card {
              padding: 32px 24px 28px;
            }
          }

          .hero-section {
            position: relative;
            height: 480px;
            overflow: hidden;
          }
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .hero-title {
            font-family: 'DM Sans', sans-serif;
            font-size: clamp(32px, 5vw, 56px);
            font-weight: 800;
            color: #fff;
            letter-spacing: -1.5px;
            line-height: 1.2;
            text-align: center;
            max-width: 900px;
            margin: 0 24px;
          }
          .hero-subtitle {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(16px, 2vw, 20px);
            color: #b08d57;
            margin-top: 20px;
            letter-spacing: 4px;
            text-transform: uppercase;
          }
          .breadcrumb {
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            text-align: center;
            font-family: 'DM Sans', sans-serif;
            font-size: 11px;
            letter-spacing: 2px;
            color: rgba(255,255,255,0.7);
            text-transform: uppercase;
          }

          .intro-section {
            background: #fff;
            padding: 64px 24px 56px;
            border-bottom: 1px solid #e8e2d9;
          }

          .services-section {
            background: #f5f3ef;
            padding: 60px 0 40px;
          }

          .advantages-section {
            background: #fff;
            padding: 60px 0 40px;
          }

          .cta-section {
            background: linear-gradient(135deg, #1a1510 0%, #2a2015 100%);
            padding: 60px 24px;
          }

          .footer-strip {
            border-top: 1px solid #e8e2d9;
            padding: 28px 24px;
            text-align: center;
            background: #fff;
          }
        `}
      </style>

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=85"
          alt="Media Buying Agency"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay">
          <div className="hero-title">
            Media Buying Agency in Mumbai & Media Planning Services
          </div>
          <div className="hero-subtitle">MAXIMIZE YOUR REACH, OPTIMIZE YOUR BUDGET</div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="intro-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "32px" }}>
            Our expertise includes handling direct media buying on your behalf. With the right connections and through our media partners, we achieve the best results within the allocated budget.
          </p>
          <div style={{ textAlign: "center" }}>
            <h2 style={styles.goldTitle}>Just the Right Medium for your Brand</h2>
            <div style={styles.underline} />
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="services-section">
        <div className="services-grid">
          {mediaServices.map((svc) => (
            <MediaServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </div>
   

 
    </div>
  
    </>
);
}


