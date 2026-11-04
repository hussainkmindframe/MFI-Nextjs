'use client'

import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const btlServices = [
  {
    id: 1,
    title: "Outdoor Advertising",
    desc: "We get you the best places across India to advertise your brand in outdoor media at competitive prices. Our BTL services include billboards, banners, bus & metro wraps, pole kiosk, and more.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="8" y="12" width="32" height="24" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <rect x="18" y="36" width="12" height="8" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M12 12V8h24v4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 20h16M16 26h10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Brand Activation",
    desc: "Our main aim of brand activation is to create a positive attitude and generate a good response from the target group. Activities include experiential marketing, mall activation, corporate activation, showroom activation, road shows, and more.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12L8 18h12z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2" fill="#b08d57" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Direct Marketing",
    desc: "Our team drafts tailor-made messages about the brand or different offers according to the needs of each customer. This includes email marketing, SMS campaigns, pamphlet distribution, and personalized communication.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="14" width="36" height="24" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 20l12 8 12-8 12 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 32l8-6M42 32l-8-6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Sponsorship",
    desc: "We understand your brand value, hence we suggest sponsorship with targeted corporate or events to get more impressions which leads to brand building among the audiences.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v12l6 6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 8l-4 6h8zM30 8l4 6h-8z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "In Store Marketing",
    desc: "We make use of various points of sale to get the most return out of the investments. These activities include visual merchandising, retailer pop-ups, product sampling, and sales promotions.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="16" width="36" height="26" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M12 16V10a4 4 0 018 0v6M28 16V10a4 4 0 018 0v6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28h16M20 34h8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const benefits = [
  {
    id: 1,
    title: "Targeted Reach",
    desc: "BTL marketing allows you to reach specific audience segments with precision, ensuring your message reaches those most likely to convert.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <circle cx="24" cy="24" r="18" stroke="#b08d57" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="10" stroke="#b08d57" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" fill="#b08d57" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Cost Effective",
    desc: "Compared to ATL advertising, BTL activities offer higher ROI by focusing spending on audiences who are genuinely interested in your product.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M24 6v4M24 38v4M8 24H4M44 24h-4M12 12l-3-3M39 39l-3-3M36 12l3-3M12 36l-3 3" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Measurable Results",
    desc: "Track and measure campaign performance with clear metrics, allowing you to optimize strategies for better outcomes.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M6 38l10-14 8 8 10-16 8 10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 42h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 6v36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Personalized Engagement",
    desc: "Create meaningful connections with your audience through personalized interactions that build brand loyalty.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 16a8 8 0 018 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
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

function ServiceCard({ svc }) {
  return (
    <div className="service-card">
      <div className="service-icon">{svc.icon}</div>
      <h3 style={styles.cardTitle}>{svc.title}</h3>
      <p style={styles.body}>{svc.desc}</p>
    </div>
  );
}

function BenefitCard({ benefit }) {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">{benefit.icon}</div>
      <h3 style={{ ...styles.cardTitle, fontSize: "18px", margin: "16px 0 10px" }}>{benefit.title}</h3>
      <p style={{ ...styles.body, fontSize: "13px", textAlign: "center" }}>{benefit.desc}</p>
    </div>
  );
}

export default function BelowTheLine() {
  return (
    <>

      <SEO 
        title={seoConfig.services.btl.title}
        description={seoConfig.services.btl.description}
        keywords={seoConfig.services.btl.keywords}
        path={seoConfig.services.btl.path}
      />
      
    <div style={styles.page}>
      <style>
        {`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          .service-card {
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
          .service-card:hover {
            box-shadow: 0 20px 40px rgba(176, 141, 87, 0.12);
            transform: translateY(-6px);
            border-color: #b08d57;
          }
          .service-icon {
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
          }
          .service-card:hover .service-icon {
            transform: scale(1.08) rotate(-3deg);
          }
          .service-icon svg stroke {
            transition: stroke 0.3s ease;
          }
          .service-card:hover .service-icon svg stroke {
            stroke: #9a7842;
          }

          .benefit-card {
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
          .benefit-card:hover {
            box-shadow: 0 15px 30px rgba(176, 141, 87, 0.1);
            transform: translateY(-4px);
            border-color: #b08d57;
          }
          .benefit-icon {
            transition: transform 0.3s ease;
          }
          .benefit-card:hover .benefit-icon {
            transform: scale(1.05);
          }
          .benefit-icon svg stroke {
            transition: stroke 0.3s ease;
          }
          .benefit-card:hover .benefit-icon svg stroke {
            stroke: #9a7842;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            max-width: 1300px;
            margin: 0 auto;
            padding: 20px 24px 60px;
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1300px;
            margin: 0 auto;
            padding: 20px 24px 60px;
          }

          @media (max-width: 1024px) {
            .services-grid, .benefits-grid {
              gap: 24px;
            }
          }
          @media (max-width: 900px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
            .benefits-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
            .service-card {
              padding: 32px 24px 28px;
            }
          }
          @media (max-width: 560px) {
            .services-grid, .benefits-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }

          .hero-section {
            position: relative;
            height: 450px;
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
            font-size: clamp(36px, 6vw, 64px);
            font-weight: 800;
            color: #fff;
            letter-spacing: -1.5px;
            line-height: 1.1;
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

          .benefits-section {
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
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1600&q=85"
          alt="Below The Line Advertising"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay">
          <div className="hero-title">
            Cost Effective Below The Line<br />Advertising Services in Mumbai
          </div>
          <div className="hero-subtitle">BTL MARKETING SOLUTIONS</div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="intro-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "32px" }}>
            We make sure that through BTL marketing strategies the brand message is directed to specific target groups and focused on conversions. Our BTL marketing activities give exposure to a specific category of the audience that is especially interested in your product category.
          </p>
          <div style={{ textAlign: "center" }}>
            <h2 style={styles.goldTitle}>Forms of BTL Activities that can help your Business</h2>
            <div style={styles.underline} />
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="services-section">
        <div className="services-grid">
          {btlServices.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </div>

   
    </div>
  
    </>
);
}


