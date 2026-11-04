'use client'

import { useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const services = [
  {
    id: 1,
    title: "Brand Architecture",
    desc: "There could be a brand or many sub-brands under one brand. Brand Architecture is a term used for a service that helps you to strengthen your brand image by letting your consumers perceive your brand positively. It is a roadmap for Brand Identity, Design, and Development of a new product in the market.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="18" y="4" width="12" height="8" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <rect x="4" y="36" width="12" height="8" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <rect x="18" y="36" width="12" height="8" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <rect x="32" y="36" width="12" height="8" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M24 12v10M10 36v-10h28v10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Brand Identity",
    desc: "We coin a brand name what wows you, your audiences and your competitors around the globe. We coin a brand name that creates excitement among your audiences to learn more about your brand. We coin a brand name that distinguishes you from your competitors and promotes the right image of your brand in the minds of your target audiences.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M24 6l3.6 10.8H38l-8.8 6.4 3.4 10.4L24 27.2l-8.6 6.4 3.4-10.4L10 16.8h10.4L24 6z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="20" stroke="#b08d57" strokeWidth="1.5" strokeDasharray="3 3"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Brand Research & Strategy",
    desc: "We start off by listening to you carefully and end nowhere when it comes to brand research. We pull together all the existing resources of information that provides us an effective 360° view of your brand. We utilize every ounce of our research outcomes to strategize a successful advertising campaign for your brand. This not only helps you brand yourself in the aggressive market but also generate sales and boost your conversion rates.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="20" cy="20" r="13" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M30 30l10 10" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 20h12M20 14v12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M36 10l-4 4M38 18h-4M30 10l4 4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Graphic Designing",
    desc: "A brand can speak through graphics and putting them across creatively in the market can do wonders for your business. By understanding the market sphere you operate in, we conceptualize and create attractive graphic designs for your brand. A unique set of creative graphic designs help your audience identify your brand amidst your competitors.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="4" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M6 28l10-8 8 6 6-5 4 7" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 20v16M28 28h16" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Logo Designs & Marketing Collaterals",
    desc: "A brand logo creates a brand identity and shapes a brand image. You cannot control perception but you can create one, and that's what we help you with. We research, think, and meticulously design a concise brand logo design that targets the correct audience and broadcasts the right message in the market. Alongside this, we make an interactive set of collaterals for your brand that help you elevate your brand identity in the competitive market.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="8" y="12" width="32" height="24" rx="3" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M20 24l4-6 4 6M18 30h12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 18h32" stroke="#b08d57" strokeWidth="1.5"/>
        <circle cx="13" cy="15" r="1.5" fill="#b08d57"/>
        <circle cx="18" cy="15" r="1.5" fill="#b08d57"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Product & Packaging Designs",
    desc: "Along with brand identity, one must also critically pay attention to brand positioning, then be it be online, offline or on the SHELVES! No matter what product you make and sell, the most important concern lies in how you present your product in the market. For you to sit back and relax on the product presentation aspect of your brand, we create impactful and eye-catching packaging designs for your products. We design to position your brand at the top, on the shelves too.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="10" y="16" width="28" height="26" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M16 16V10a8 8 0 0116 0v6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 24h28" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M20 30h8M22 35h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 7,
    title: "Publication Designs",
    desc: "A great design visually creates a world around the audiences and helps them to navigate through your brand. From guiding you right from the start of selecting the right paper, proof-reading, producing, to distributing your publication, we design everything that best suits your publication designing requirements. We deliver creativity, quality, and perfect technical assistance for all your publication designing dilemmas.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="8" y="6" width="24" height="36" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M14 14h12M14 20h12M14 26h8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="28" y="24" width="12" height="16" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M31 30h6M31 34h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 8,
    title: "Rebranding",
    desc: "If you are about to kick-start the renovation process of your business visibility, then rebranding can play the role of game-changer here. We study your business backlogs, analyze previous conversions and then initiate the most unrivaled rebranding strategies for your brand. We bridge a gap between the old and new brand image by helping you maintain the same or serve even better quality to your customers. We make sure that your rebranding delivers a tangible ROI and wider business value.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M8 24C8 15.16 15.16 8 24 8c5.2 0 9.8 2.46 12.8 6.28" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M40 24c0 8.84-7.16 16-16 16-5.2 0-9.8-2.46-12.8-6.28" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M34 6l4 8-8 1" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 42l-4-8 8-1" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// ── FAQ Data ──
const faqs = [
  {
    question: "What is a professional digital marketing agency?",
    answer: "A professional digital marketing agency offers strategy, execution, reporting, and long-term support. Mind Frame India is a professional digital marketing agency that provides end-to-end solutions for businesses of all sizes."
  },
  {
    question: "What makes a top digital marketing agency?",
    answer: "A top digital marketing agency combines experience, creativity, data, and measurable results. Mind Frame India is recognized as a top digital marketing agency in Mumbai for its proven track record."
  },
  {
    question: "What is an online marketing company?",
    answer: "An online marketing company helps businesses attract customers and grow through internet-based channels. Mind Frame India is a leading online marketing company with expertise across all digital channels."
  },
  {
    question: "What is a marketing agency website?",
    answer: "A marketing agency website should show services, results, team expertise, and easy contact options. Mind Frame India's website showcases our comprehensive capabilities and client success stories."
  },
  {
    question: "What is a digital marketing consultancy?",
    answer: "A digital marketing consultancy advises businesses on strategy, channels, and growth opportunities. Mind Frame India offers strategic consulting to help businesses maximize their digital potential."
  },
  {
    question: "What is a digital marketing company website?",
    answer: "A digital marketing company website communicates services, case studies, and trust signals clearly. Mind Frame India's website is designed to demonstrate our expertise and build client confidence."
  },
  {
    question: "What is a digital marketing agency services list?",
    answer: "A digital marketing agency services list includes SEO, PPC, social media, content, email, and analytics. Mind Frame India offers a comprehensive services list covering all aspects of digital marketing."
  },
  {
    question: "What is a marketing agency digital?",
    answer: "A marketing agency digital means a business that plans and runs online marketing campaigns. Mind Frame India is a full-service digital marketing agency that handles all your online marketing needs."
  },
  {
    question: "What is a top digital agency?",
    answer: "A top digital agency delivers strong strategy, execution, and measurable business outcomes. Mind Frame India is consistently ranked among the top digital agencies in Mumbai."
  },
  {
    question: "What is a best online marketing company?",
    answer: "A best online marketing company helps brands grow through a strong mix of search, social, and paid media. Mind Frame India is recognized as one of the best online marketing companies in Mumbai."
  },
  {
    question: "What is a 360 degree digital marketing agency?",
    answer: "A 360 degree digital marketing agency covers every channel, from SEO and ads to social and content, as a complete growth partner. Mind Frame India is a 360 degree digital marketing agency that offers end-to-end solutions."
  },
  {
    question: "What is an ATL advertising agency?",
    answer: "An ATL advertising agency runs mass-media campaigns on TV, radio, print, and outdoor to build broad brand awareness. Mind Frame India offers ATL advertising services for large-scale brand building."
  },
  {
    question: "What is a BTL advertising agency?",
    answer: "A BTL advertising agency runs targeted activities like events, activations, and in-store promotions to engage specific audiences. Mind Frame India provides BTL advertising solutions that drive engagement."
  },
  {
    question: "What is a media buying agency?",
    answer: "A media buying agency purchases ad space and time across channels at the best rates and placements for maximum reach. Mind Frame India is a media buying agency that optimizes your advertising spend."
  },
  {
    question: "What is a PR agency?",
    answer: "A PR agency manages a brand's reputation through media relations, press coverage, events, and communications. Mind Frame India offers PR services to build and protect your brand reputation."
  },
  {
    question: "What is a brand strategy agency?",
    answer: "A brand strategy agency defines a brand's positioning, audience, and messaging before any design or campaign work begins. Mind Frame India is a brand strategy agency that builds strong brand foundations."
  },
  {
    question: "What is a video production agency?",
    answer: "A video production agency creates brand films, ads, and social videos from concept and scripting through to final edit. Mind Frame India offers video production services that bring your brand stories to life."
  },
  {
    question: "What is an award-winning digital marketing agency?",
    answer: "An award-winning digital marketing agency has been recognized by the industry for creative or performance excellence, signaling proven quality. Mind Frame India is an award-winning agency with a track record of excellence."
  },
  {
    question: "How do I choose a digital marketing agency in Mumbai?",
    answer: "Choose a Mumbai agency by matching its strengths to your goals, checking real results and reviews, and confirming who manages your account. Mind Frame India is a full-service option to consider for your digital marketing needs."
  },
  {
    question: "How much does a digital marketing agency in Mumbai cost?",
    answer: "Costs depend on scope and channels; project work is a one-time fee while ongoing marketing is a monthly retainer. Mumbai agencies like Mind Frame India quote after a free consultation."
  },
  {
    question: "Why choose Mind Frame India as your marketing agency?",
    answer: "Mind Frame India is a full-service advertising and digital marketing agency in Mumbai with over a decade of experience across branding, performance marketing, media buying, and web and app development."
  },
  {
    question: "What services does a full-service digital agency in Mumbai offer?",
    answer: "A full-service digital agency in Mumbai offers SEO, PPC, social media, content, branding, web development, and media buying under one roof. Mind Frame India provides all these services and more."
  }
];

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid #e8e2d9',
        padding: '0',
      }}
    >
      <h3 style={{ margin: 0, padding: 0 }}>
        <button
          id={`faq-btn-${index}`}
          aria-controls={`faq-panel-${index}`}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '18px 0',
            textAlign: 'left',
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#1a1510',
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.5,
            }}
          >
            {question}
          </span>
          <span
            style={{
              fontSize: 20,
              color: '#b08d57',
              fontWeight: 400,
              flexShrink: 0,
              transition: 'transform 0.3s ease',
              display: 'inline-block',
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={`faq-panel-${index}`}
        aria-labelledby={`faq-btn-${index}`}
        role="region"
        style={{
          maxHeight: open ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: '#555',
            lineHeight: 1.8,
            margin: '0 0 18px',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#f5f3ef",
    minHeight: "100vh",
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 600,
    color: "#1a1510",
    marginBottom: "12px",
    textAlign: "center",
    letterSpacing: "-0.3px",
  },
  sectionGold: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(18px, 2.5vw, 22px)",
    fontWeight: 600,
    color: "#b08d57",
    marginBottom: "8px",
    textAlign: "center",
    fontStyle: "italic",
  },
  bodyText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.75,
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    fontWeight: 700,
    color: "#1a1510",
    margin: "20px 0 14px",
    textAlign: "center",
    letterSpacing: "-0.2px",
  },
};

export default function BrandingIdentity() {
  return (
    <>

      <SEO 
        title={seoConfig.services.brandIdentity.title}
        description={seoConfig.services.brandIdentity.description}
        keywords={seoConfig.services.brandIdentity.keywords}
        path={seoConfig.services.brandIdentity.path}
      />
      
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .service-card {
          background: #fff;
          border: 1px solid #e8e2d9;
          border-radius: 12px;
          padding: 42px 32px 38px;
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
        .svc-icon { 
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
        }
        .service-card:hover .svc-icon { 
          transform: scale(1.08) rotate(-3deg);
        }
        .svc-icon svg stroke {
          transition: stroke 0.3s ease;
        }
        .service-card:hover .svc-icon svg stroke {
          stroke: #9a7842;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1300px;
          margin: 0 auto;
          padding: 20px 24px 60px;
        }

        /* ── FAQ ── */
        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 0 0px;
        }
        .faq-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 600;
          color: #b08d57;
          text-align: center;
          margin-bottom: 12px;
        }
        .faq-intro {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #555;
          text-align: center;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto 32px;
        }
        .faq-section {
          background: #fff;
          padding: 60px 24px 40px;
          border-top: 1px solid #e8e2d9;
        }

        @media (max-width: 1024px) {
          .services-grid {
            gap: 24px;
            padding: 20px 20px 60px;
          }
        }
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .service-card {
            padding: 32px 24px 28px;
          }
          .cardTitle {
            font-size: 20px;
          }
        }
        @media (max-width: 560px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px 16px 50px;
          }
          .faq-container { padding: 0 0 0px; }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-text-box {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(2px);
          padding: 32px 56px;
          border-radius: 4px;
          border-left: 3px solid #b08d57;
        }

        @media (max-width: 640px) {
          .hero-text-box {
            padding: 20px 32px;
          }
        }

        .intro-section {
          background: #fff;
          padding: 64px 24px 56px;
          border-bottom: 1px solid #e8e2d9;
        }

        .stats-section {
          background: #1a1510;
          padding: 60px 24px;
          color: #fff;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: "'Cormorant Garamond', serif";
          font-size: 48px;
          font-weight: 700;
          color: #b08d57;
          margin-bottom: 8px;
        }

        .stat-label {
          font-family: "'DM Sans', sans-serif";
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #aaa;
        }

        .stats-grid {
          display: flex;
          justify-content: space-between;
          max-width: 900px;
          margin: 0 auto;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .quote-section {
          background: #faf8f5;
          padding: 60px 24px;
          text-align: center;
          border-top: 1px solid #e8e2d9;
        }

        .quote-text {
          font-family: "'Cormorant Garamond', serif";
          font-size: clamp(20px, 4vw, 28px);
          font-style: italic;
          color: #1a1510;
          max-width: 800px;
          margin: 0 auto 20px;
          line-height: 1.45;
        }

        .quote-author {
          font-family: "'DM Sans', sans-serif";
          font-size: 13px;
          color: #b08d57;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>

      {/* ── HERO SECTION ── */}
      <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
          alt="Brand Identity Hero"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay">
          <div className="hero-text-box">
            <h1 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(40px, 8vw, 90px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-2px",
              lineHeight: 1.05,
              textTransform: "uppercase",
              textAlign: "center",
              margin: 0,
            }}>
              BRAND<br />IDENTITY
            </h1>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#b08d57",
              textAlign: "center",
              marginTop: "16px",
              letterSpacing: "3px",
            }}>
              SINCE 2012
            </p>
          </div>
        </div>
      </div>

      {/* ── INTRO SECTION ── */}
      <div className="intro-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...styles.sectionGold, marginBottom: "16px", textAlign: "center" }}>
            Creative Branding Agency in Mumbai
          </p>
          <p style={{ ...styles.bodyText, textAlign: "center", maxWidth: "880px", margin: "0 auto 40px", fontSize: "15px", lineHeight: 1.8 }}>
            We at Mind Frame India specialize in creating impactful brand identities and strategies to help businesses succeed in their respective markets. Our goal is to create a brand that will be remembered. Our philosophy is that a strong brand identity is the key to success in today's competitive market. With our team of experienced branding experts, we work closely with clients to understand their unique business goals and target audience. We work closely with you to build a unique and instantly recognizable public image that will engage, delight and also interact with your target audience.
          </p>

          <div style={{ borderTop: "1px solid #e8e2d9", paddingTop: "48px", textAlign: "center" }}>
            <h2 style={styles.sectionTitle}>Taking brands from ideas to industry leaders</h2>
            <p style={{ ...styles.sectionGold, fontSize: "clamp(16px, 2vw, 20px)", marginTop: "6px" }}>
              Let's build more than just a brand
            </p>
            <p style={{ ...styles.bodyText, maxWidth: "850px", margin: "24px auto 0", textAlign: "center", fontSize: "14.5px" }}>
              The Mind Frame team has been helping businesses of all sizes create unforgettable brands for over a decade. As a branding company, our priority is to provide growth-oriented services to our clients. Getting your brand right goes beyond merely designing the logo or slogan — we see it as the overall experience and perception that your customers have about your company.
            </p>
          </div>
        </div>
      </div>

      {/* ── STATS SECTION ── */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">12+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Industry Awards</div>
          </div>
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <div style={{ background: "#f5f3ef", paddingTop: "60px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px", padding: "0 24px" }}>
          <h2 style={styles.sectionTitle}>What We Offer</h2>
          <p style={{ ...styles.sectionGold, fontSize: "clamp(16px, 2vw, 18px)" }}>
            Comprehensive Branding Solutions
          </p>
          <p style={{ ...styles.bodyText, maxWidth: "650px", margin: "16px auto 0", textAlign: "center" }}>
            We provide end-to-end branding services that help your business stand out and connect with your audience
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="svc-icon">{svc.icon}</div>
              <h3 style={styles.cardTitle}>{svc.title}</h3>
              <p style={{ ...styles.bodyText, fontSize: "13.5px", lineHeight: 1.75 }}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── QUOTE SECTION ── */}
      <div className="quote-section">
        <div className="quote-text">
          "Your brand is what other people say about you when you're not in the room"
        </div>
        <div className="quote-author">— Jeff Bezos</div>
        <div style={{
          width: "50px",
          height: "2px",
          background: "#b08d57",
          margin: "24px auto 0",
        }} />
      </div>

      {/* ── FAQ SECTION ── */}
      <div className="faq-section">
        <div className="faq-container">
          <h2 className="faq-section-title">Frequently Asked Questions</h2>
          <div style={{ width: "50px", height: "2px", background: "#b08d57", margin: "0 auto 24px" }} />
          <p className="faq-intro">
            Everything you need to know about Mind Frame India's branding, digital marketing, and advertising services in Mumbai.
          </p>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>

      {/* ── SCHEMA MARKUP ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

    </div>
  
    </>
  );
}