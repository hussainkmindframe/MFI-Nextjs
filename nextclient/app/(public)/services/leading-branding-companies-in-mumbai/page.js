'use client'

import { useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const brandServices = [
  {
    id: 1,
    title: "Brand Communication",
    desc: "Effective communication is vital to convey your brand's message to the target audience. Mindframe India develops customized communication strategies and marketing collateral that resonate with your brand's positioning and values. They understand the importance of advertising in today's competitive market and work as an advertising ad agency to create impactful campaigns that drive brand awareness and engagement. So here to compelling brand communication that leaves a lasting impact!",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M8 12h32v20H8z" rx="3" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 32l-6 8h28l-6-8" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 20h16M16 26h10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Brand Strategy",
    desc: "A strong brand strategy lays the foundation for a successful brand. Mindframe India conducts in-depth market research, competitor analysis, and target audience profiling to develop a comprehensive brand strategy that aligns with your business goals. They understand the challenges faced by startups, and their expertise can help you navigate through the competitive business landscape, much like the entrepreneurs on 'Shark Tank India' episodes. So cheers to a brand strategy that sets you apart!",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M6 38l10-12 8 6 10-14 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="12" r="6" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M38 9v3l2 2" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Brand Identity Design",
    desc: "A visually appealing and consistent brand identity is crucial for brand recognition and recall. Mindframe India's talented designers work closely with clients to create expressive brand elements, including logos, color schemes, typography, and visual assets that represent your brand's essence. They specialize in creating rich logo designs that capture the essence of your business and resonate with your target audience. With Mindframe India, your brand's visual identity will truly enchant!",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" stroke="#b08d57" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Brand Experience",
    desc: "The overall experience customers have with your brand greatly impacts their perception and loyalty. Mindframe India helps businesses create memorable brand experiences through thoughtful touchpoints, including website design, packaging, in-store displays, and customer service protocols. They ensure that every interaction with your brand leaves a lasting impression, making you a top shark in your industry. So cheers to exceptional brand experiences that keep customers coming back for more!",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12L8 18h12z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Brand Monitoring and Management",
    desc: "Building a brand is an ongoing process that requires consistent monitoring and management. Mindframe India provides brand monitoring services to keep track of your brand's reputation, customer sentiment, and market trends. They offer proactive solutions to maintain brand consistency and adapt to changing market dynamics, ensuring that your brand remains strong and relevant in the ever-evolving business landscape. So cheers to a brand that stays ahead of the competition!",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="18" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M14 28s2-6 10-6 10 6 10 6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="18" r="4" stroke="#b08d57" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const whyChoose = [
  {
    id: 1,
    title: "Expertise and Experience",
    desc: "Mindframe India boasts a team of skilled branding professionals who have extensive expertise and experience in crafting successful brand strategies across various industries. They understand the best businesses to do in India and can leverage their expertise to position your brand for success. With Mindframe India, you can enchant to the guidance of seasoned professionals who know the ins and outs of the branding industry.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M24 6l3.6 10.8H38l-8.8 6.4 3.4 10.4L24 27.2l-8.6 6.4 3.4-10.4L10 16.8h10.4L24 6z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Customized Approach",
    desc: "No two brands are alike, and Mindframe India understands this. They believe in a customized approach to branding, tailoring their services to meet the unique needs and objectives of each client. They take the time to understand your business goals, target audience, and industry dynamics, ensuring that their branding strategy is perfectly aligned with your vision. So cheers to a branding approach that is tailored specifically for your business.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="8" y="8" width="14" height="14" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <rect x="26" y="8" width="14" height="14" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <rect x="8" y="26" width="14" height="14" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <rect x="26" y="26" width="14" height="14" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Collaborative Partnership",
    desc: "Mindframe India believes in building strong relationships with their clients. They foster open communication and collaboration throughout the branding process, keeping clients involved and informed at every stage. Your input as a client is highly valued, and they will work closely with you to ensure that your vision and aspirations are translated into a powerful brand identity.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30 16a8 8 0 018 8M38 36c0-4-3-7-7-8.5" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Proven Track Record",
    desc: "With their extensive experience and a portfolio of successful projects, Mindframe India has established a reputation as a leading branding agency in Mumbai. Their clients span various industries, and their expertise has been proven time and again in delivering exceptional results. They have a deep understanding of the Indian business landscape and can provide valuable insights and strategies to help your brand thrive in the competitive market.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M6 38l10-14 8 8 10-16 8 10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 42h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Holistic Approach",
    desc: "Mindframe India takes a holistic approach to branding, considering all aspects of your business and its market environment. They go beyond just creating a visually appealing logo or designing a captivating website. They delve into the core of your brand, understanding its values, personality, and unique selling propositions. This comprehensive understanding allows them to create a brand identity and communication strategy that resonates with your target audience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="10" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6M10.1 10.1l4.24 4.24M33.66 33.66l4.24 4.24M37.9 10.1l-4.24 4.24M14.34 33.66l-4.24 4.24" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

// ── FAQ Data ──
const faqs = [
  {
    question: "What are digital marketing firms near me?",
    answer: "Digital marketing firms near you help businesses with SEO, PPC, social media, and online brand promotion. Mind Frame India, based in Mumbai, offers comprehensive digital marketing services to businesses across India and globally."
  },
  {
    question: "What are marketing agency near me services?",
    answer: "Marketing agency near me services usually include digital marketing, branding, PPC, social media, and SEO. Mind Frame India provides all these services and more under one roof."
  },
  {
    question: "What are local marketing agencies?",
    answer: "Local marketing agencies help brands connect with customers in a specific city or region. Mind Frame India specializes in helping businesses connect with their local audience in Mumbai and beyond."
  },
  {
    question: "What are local digital marketing agencies?",
    answer: "Local digital marketing agencies specialize in location-based online growth and lead generation. Mind Frame India offers targeted local digital marketing strategies for businesses in Mumbai."
  },
  {
    question: "What are online marketing companies near me?",
    answer: "Online marketing companies near you manage internet-based campaigns for brand growth and conversions. Mind Frame India provides expert online marketing services that deliver measurable results."
  },
  {
    question: "What are marketing firms for small business?",
    answer: "Marketing firms for small business provide affordable services that support growth, leads, and brand recognition. Mind Frame India offers cost-effective marketing solutions tailored to small businesses."
  },
  {
    question: "What are full service digital marketing agencies?",
    answer: "Full service digital marketing agencies handle SEO, PPC, social media, content, website, and analytics under one roof. Mind Frame India is a full-service digital marketing agency that covers all your online needs."
  },
  {
    question: "What are performance marketing companies?",
    answer: "Performance marketing companies focus on measurable results such as leads, sales, and return on ad spend. Mind Frame India runs performance-driven campaigns that deliver tangible business outcomes."
  },
  {
    question: "What are best marketing agencies?",
    answer: "The best marketing agencies combine strategy, creativity, and measurable performance across channels. Mind Frame India is recognized as one of the best marketing agencies in Mumbai."
  },
  {
    question: "What is an online marketing agency near me?",
    answer: "An online marketing agency near you supports local businesses with SEO, ads, social media, and website growth. Mind Frame India helps local businesses grow their online presence effectively."
  },
  {
    question: "What is a digital marketing agency near me in Mumbai?",
    answer: "A digital marketing agency near you in Mumbai offers local support for SEO, ads, social media, and website growth in your area. Mind Frame India is a trusted digital marketing agency in Mumbai with a proven track record."
  },
  {
    question: "What is a marketing agency in Andheri?",
    answer: "A marketing agency in Andheri provides branding, digital marketing, and advertising services to businesses in and around Andheri, Mumbai. Mind Frame India is a leading marketing agency serving the Andheri business community."
  },
  {
    question: "What are advertising agencies in Mumbai?",
    answer: "Advertising agencies in Mumbai create and run campaigns across digital and traditional media for local and national brands. Mind Frame India is a full-service advertising agency with offices in Mumbai."
  },
  {
    question: "What are the top marketing agencies in Mumbai?",
    answer: "The top marketing agencies in Mumbai combine strong strategy, creative work, and measurable results across multiple channels. Mind Frame India is consistently ranked among the top marketing agencies in Mumbai."
  },
  {
    question: "What is an affordable digital marketing agency?",
    answer: "An affordable digital marketing agency offers cost-effective packages that help small and growing businesses get results within budget. Mind Frame India provides affordable digital marketing solutions without compromising on quality."
  },
  {
    question: "What is a results-driven marketing agency?",
    answer: "A results-driven marketing agency focuses on measurable outcomes like leads, sales, and ROI rather than activity alone. Mind Frame India is a results-driven agency that prioritizes your business outcomes."
  },
  {
    question: "What is a data-driven marketing agency?",
    answer: "A data-driven marketing agency uses analytics and testing to guide decisions and continuously improve campaign performance. Mind Frame India leverages data to optimize every marketing campaign."
  },
  {
    question: "What is an ROI-focused marketing agency?",
    answer: "An ROI-focused marketing agency prioritizes profitable growth and ties every campaign to clear return on investment. Mind Frame India ensures every marketing dollar delivers measurable ROI."
  },
  {
    question: "What is a one-stop marketing agency?",
    answer: "A one-stop marketing agency handles branding, digital, creative, and media in one place, removing the need for multiple vendors. Mind Frame India is a one-stop marketing agency for all your brand needs."
  },
  {
    question: "What is an outsourced marketing team?",
    answer: "An outsourced marketing team gives you agency specialists who work as an extension of your business without in-house hiring. Mind Frame India can serve as your outsourced marketing team."
  },
  {
    question: "What is a performance marketing agency in Mumbai?",
    answer: "A performance marketing agency in Mumbai runs paid campaigns focused on measurable results like leads, sales, and return on ad spend. Mind Frame India is a leading performance marketing agency in Mumbai."
  },
  {
    question: "What is a lead generation agency?",
    answer: "A lead generation agency uses ads, landing pages, and content to capture qualified prospects for your sales team. Mind Frame India specializes in lead generation strategies that fill your sales pipeline."
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
    minHeight: "100vh" 
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
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 600,
    color: "#1a1510",
    textAlign: "center",
    marginBottom: "16px",
    letterSpacing: "-0.3px",
  },
  underline: { 
    width: "50px", 
    height: "2px", 
    background: "#b08d57", 
    margin: "0 auto 24px" 
  },
  body: { 
    fontFamily: "'DM Sans', sans-serif", 
    fontSize: "14px", 
    color: "#555", 
    lineHeight: 1.75 
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
    <div className="svc-card">
      <div className="svc-icon">{svc.icon}</div>
      <h3 style={styles.cardTitle}>{svc.title}</h3>
      <p style={styles.body}>{svc.desc}</p>
    </div>
  );
}

export default function BrandServices() {
  return (
    <>

      <SEO 
        title={seoConfig.services.brandServices.title}
        description={seoConfig.services.brandServices.description}
        keywords={seoConfig.services.brandServices.keywords}
        path={seoConfig.services.brandServices.path}
      />
      
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .svc-card {
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
        .svc-card:hover {
          box-shadow: 0 20px 40px rgba(176, 141, 87, 0.12);
          transform: translateY(-6px);
          border-color: #b08d57;
        }
        .svc-icon { 
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
        }
        .svc-card:hover .svc-icon { 
          transform: scale(1.08) rotate(-3deg);
        }
        .svc-icon svg stroke {
          transition: stroke 0.3s ease;
        }
        .svc-card:hover .svc-icon svg stroke {
          stroke: #9a7842;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 28px;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
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
          .grid-3, .grid-2 {
            gap: 24px;
          }
        }
        @media (max-width: 900px) {
          .grid-3, .grid-2 {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .svc-card {
            padding: 32px 24px 28px;
          }
          .cardTitle {
            font-size: 18px;
          }
        }
        @media (max-width: 560px) {
          .grid-3, .grid-2 {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .faq-container { padding: 0 0 0px; }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .breadcrumb {
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          text-align: center;
          font-family: "'DM Sans', sans-serif";
          font-size: 11px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
        }

        .word-cloud {
          position: relative;
          width: 500px;
          height: 280px;
        }

        @media (max-width: 640px) {
          .word-cloud {
            transform: scale(0.7);
          }
        }

        .brand-letters {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
        }

        .brand-letter {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #d4a853, #8a6830);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "'DM Sans', sans-serif";
          font-weight: 800;
          font-size: 24px;
          color: #1a1510;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }

        .brand-letter:hover {
          transform: translateY(-3px);
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

        .why-choose-section {
          background: #fff;
          padding: 60px 0 80px;
          margin-top: 0;
        }

        .footer-strip {
          border-top: 1px solid #e8e2d9;
          padding: 28px 24px;
          text-align: center;
          background: #fff;
        }
      `}</style>

      {/* HERO SECTION */}
      <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=1600&q=85"
          alt="Brand Services"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay">
          
          {/* Word Cloud */}
          <div className="word-cloud">
            {[
              { word: "CUSTOMER", top: "5%", left: "28%" },
              { word: "PRODUCT", top: "5%", left: "62%" },
              { word: "IDEA", top: "22%", left: "12%" },
              { word: "CONCEPT", top: "22%", left: "72%" },
              { word: "DESIGN", top: "40%", left: "5%" },
              { word: "ADVERTISING", top: "40%", left: "65%" },
              { word: "VALUE", top: "58%", left: "10%" },
              { word: "MARKETING", top: "58%", left: "68%" },
              { word: "LOGO", top: "76%", left: "18%" },
              { word: "STRATEGY", top: "76%", left: "68%" },
            ].map(({ word, top, left }) => (
              <span key={word} style={{
                position: "absolute",
                top,
                left,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "1.5px",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
              }}>{word}</span>
            ))}
            
            {/* Center Icon */}
            <div style={{ position: "absolute", top: "30%", left: "42%", transform: "translateX(-50%)" }}>
              <svg viewBox="0 0 80 100" width="70" height="100" fill="none">
                <ellipse cx="40" cy="35" rx="28" ry="30" stroke="white" strokeWidth="2" opacity="0.8"/>
                <path d="M28 65h24M30 73h20M33 81h14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
                <path d="M40 8V4M10 35H6M70 35h4M18 18l-5-5M62 18l5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                <circle cx="40" cy="42" r="6" stroke="white" strokeWidth="1.5" opacity="0.8"/>
              </svg>
            </div>

            {/* BRAND Letters */}
            <div className="brand-letters">
              {"BRAND".split("").map((letter, i) => (
                <div key={i} className="brand-letter">{letter}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="intro-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={styles.goldTitle}>Elevate Your Brand with the Best Branding Service in Mumbai</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, marginBottom: "48px", textAlign: "center" }}>
            In today's highly competitive business landscape, building a strong brand is crucial for long-term success. A well-defined brand not only differentiates your business from competitors but also establishes trust and credibility among your target audience. However, creating and managing a successful brand requires expertise and strategic thinking. This is where a professional branding agency comes into play. Mindframe India, a leading branding agency in Mumbai, offers comprehensive branding services that can help take your brand to new heights. With a proven track record of delivering exceptional results, Mindframe India is your ideal partner for all your branding needs.
          </p>

          <h2 style={styles.goldTitle}>Understanding the Power of Branding</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, marginBottom: "48px", textAlign: "center" }}>
            Before delving into the details of Mindframe India's branding services, it's essential to understand the power of branding and its impact on businesses. A brand is more than just a logo or a tagline. It encompasses the entire identity and perception of your business in the minds of consumers. Through effective branding, you can communicate your unique value proposition, build emotional connections, and influence customer behavior. Mindframe India recognizes the significance of branding and employs strategies that align with your business objectives and target market.
          </p>

          <h2 style={{ ...styles.goldTitle, textDecoration: "underline", textUnderlineOffset: "8px", textDecorationColor: "#b08d57", textDecorationThickness: "2px" }}>
            Comprehensive Branding Services
          </h2>
          <p style={{ ...styles.body, textAlign: "center", maxWidth: "800px", margin: "20px auto 0" }}>
            Mindframe India offers a wide range of branding services that cover every aspect of brand development and management. Whether you are a startup looking to establish your presence or an established business seeking a brand refresh, their services are tailored to meet your specific needs.
          </p>
        </div>
      </div>

      {/* BRAND SERVICES CARDS */}
      <div className="services-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="grid-3">
            {brandServices.slice(0, 3).map(svc => (
              <ServiceCard key={svc.id} svc={svc} />
            ))}
          </div>
          <div className="grid-2">
            {brandServices.slice(3).map(svc => (
              <ServiceCard key={svc.id} svc={svc} />
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE SECTION */}
      <div className="why-choose-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={styles.goldTitle}>Why Choose Mindframe India for Branding Services</h2>
          <div style={styles.underline} />
          
          <div className="grid-3">
            {whyChoose.slice(0, 3).map(svc => (
              <ServiceCard key={svc.id} svc={svc} />
            ))}
          </div>
          <div className="grid-2">
            {whyChoose.slice(3).map(svc => (
              <ServiceCard key={svc.id} svc={svc} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div style={{ background: "#1a1510", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 600, color: "#fff", marginBottom: "20px" }}>
            Ready to Transform Your Brand?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#aaa", marginBottom: "32px", lineHeight: 1.7 }}>
            Let's create something extraordinary together. Get in touch with our branding experts today.
          </p>
          <button style={{
            background: "#b08d57",
            border: "none",
            padding: "14px 36px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            color: "#1a1510",
            cursor: "pointer",
            transition: "all 0.3s ease",
            borderRadius: "4px",
            letterSpacing: "1px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#9a7842";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#b08d57";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            CONTACT US
          </button>
        </div>
      </div>

      {/* ── FAQ SECTION ── */}
      <div className="faq-section">
        <div className="faq-container">
          <h2 className="faq-section-title">Frequently Asked Questions</h2>
          <div style={styles.underline} />
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