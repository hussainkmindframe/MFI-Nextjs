'use client'

import { useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const creativeServices = [
  {
    id: 1,
    title: "Logo Design",
    desc: "Logo can often be the first impression as it appears on your business cards, letterheads, invoices, advertisements, PR material, website etc. We like to take the time to get a feel for your business, understand your products / services to design the aspired logo.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="4" y="4" width="40" height="40" rx="4" fill="#b08d57" opacity="0.1" />
        <rect x="4" y="4" width="40" height="40" rx="4" stroke="#b08d57" strokeWidth="1.5" />
        <text x="24" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#b08d57" fontFamily="'Helvetica Neue', Arial, sans-serif">Ps</text>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Website Design",
    desc: "We help you with the entire design process of your website and maximize your accessibility on the internet. Our team creates stunning, user-friendly websites that convert visitors into customers.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="4" y="10" width="40" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="7" stroke="#b08d57" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="2.5" fill="#b08d57" opacity="0.7" />
        <line x1="24" y1="38" x2="24" y2="44" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="44" x2="32" y2="44" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Stationery Design",
    desc: "We create impactful designs which promote your business and motivate potential consumers to contact you. From business cards to letterheads, every touchpoint matters.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="8" y="4" width="24" height="34" rx="2" stroke="#b08d57" strokeWidth="1.5" fill="none" />
        <rect x="16" y="4" width="24" height="34" rx="2" stroke="#b08d57" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="14" x2="32" y2="14" stroke="#b08d57" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="20" y1="20" x2="32" y2="20" stroke="#b08d57" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="20" y1="26" x2="27" y2="26" stroke="#b08d57" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Leaflet, Flyer & Poster Design",
    desc: "We make informative and eye-catching creative designs which have immediate impact on buyers. Our print designs communicate your message with clarity and visual impact.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="8" y="6" width="32" height="38" rx="2" stroke="#b08d57" strokeWidth="1.5" fill="none" />
        <line x1="14" y1="16" x2="34" y2="16" stroke="#b08d57" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="14" y1="22" x2="34" y2="22" stroke="#b08d57" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="14" y1="28" x2="26" y2="28" stroke="#b08d57" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M14 36 l4-4 4 4 4-4 4 4" stroke="#b08d57" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Magazine Advert Design",
    desc: "Magazines are one type of force which influences people's opinions and showcases your brand's image. We craft editorial-quality ads that stop readers mid-flip.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="8" width="36" height="32" rx="2" stroke="#b08d57" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="20" r="5" stroke="#b08d57" strokeWidth="1.2" fill="none" />
        <path d="M6 32 L16 24 L26 30 L34 22 L42 30" stroke="#b08d57" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Brochure Design",
    desc: "We give personal touch to the designs which tell your potential customer what the product or service can do for them and the reason to buy your product.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M8 8 h14 v32 H8 z" stroke="#b08d57" strokeWidth="1.5" fill="none" />
        <path d="M22 8 h14 v32 H22 z" stroke="#b08d57" strokeWidth="1.5" fill="none" />
        <line x1="11" y1="16" x2="19" y2="16" stroke="#b08d57" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="11" y1="22" x2="19" y2="22" stroke="#b08d57" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="25" y1="16" x2="33" y2="16" stroke="#b08d57" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="25" y1="22" x2="33" y2="22" stroke="#b08d57" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Packaging Design",
    desc: "Our job is to make sure that your product is the one that the consumer wants to pick up, read about and buy. Great packaging is silent salesmanship.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="10" y="16" width="28" height="24" rx="2" stroke="#b08d57" strokeWidth="1.5" fill="none" />
        <path d="M16 16 V12 Q24 7 32 12 V16" stroke="#b08d57" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <line x1="24" y1="16" x2="24" y2="40" stroke="#b08d57" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="2 2" />
        <line x1="16" y1="24" x2="32" y2="24" stroke="#b08d57" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ── FAQ Data ──
const faqs = [
  {
    question: "What is a social media marketing agency?",
    answer: "A social media marketing agency manages content, ads, and audience engagement on platforms like Instagram, Facebook, and LinkedIn. Mind Frame India offers comprehensive social media marketing services to help brands build visibility and grow their online presence."
  },
  {
    question: "What is a social media marketing agency for small business?",
    answer: "A social media marketing agency for small business helps brands build visibility, engagement, and leads on a manageable budget. Mind Frame India creates tailored social media strategies that deliver results without breaking the bank."
  },
  {
    question: "What is a social media marketing company near me?",
    answer: "A social media marketing company near you provides local support for content creation, paid ads, and profile growth. Mind Frame India, based in Mumbai, offers expert social media services to businesses across India and globally."
  },
  {
    question: "What is a paid social media agency?",
    answer: "A paid social media agency runs advertising campaigns on social platforms to reach targeted audiences. Mind Frame India manages paid social campaigns on Meta, LinkedIn, and other platforms to drive awareness, leads, and sales."
  },
  {
    question: "What is a social media ads agency?",
    answer: "A social media ads agency creates and optimizes paid campaigns for awareness, leads, and sales. Mind Frame India's ad experts leverage data-driven targeting to maximize your advertising ROI."
  },
  {
    question: "What are top social media marketing companies?",
    answer: "Top social media marketing companies offer strategy, content, ad management, and performance tracking. Mind Frame India is among the leading social media marketing agencies in Mumbai, delivering results-driven solutions."
  },
  {
    question: "What is a boutique social media agency?",
    answer: "A boutique social media agency is a smaller, specialized team that provides focused and customized social media support. Mind Frame India offers personalized, boutique-style service with the expertise of a full-scale agency."
  },
  {
    question: "What is a social media management company for small business?",
    answer: "A social media management company for small business handles planning, posting, engagement, and reporting for growing brands. Mind Frame India helps small businesses build consistent, engaging social presences."
  },
  {
    question: "What is a social media digital marketing agency?",
    answer: "A social media digital marketing agency combines content, ads, and analytics to grow online brand presence. Mind Frame India integrates social media with broader digital marketing strategies for holistic growth."
  },
  {
    question: "What is digital marketing agency Facebook ads?",
    answer: "A digital marketing agency for Facebook ads creates and manages Meta campaigns that drive clicks, leads, and sales. Mind Frame India specializes in Facebook and Instagram advertising that delivers measurable results."
  },
  {
    question: "What is a social media marketing agency in Mumbai?",
    answer: "A social media marketing agency in Mumbai manages content, ads, and engagement on Instagram, Facebook, and LinkedIn for local brands. Mind Frame India is a trusted social media marketing agency in Mumbai with a proven track record."
  },
  {
    question: "What is Instagram marketing?",
    answer: "Instagram marketing uses posts, reels, stories, and ads to build brand awareness, engagement, and sales on Instagram. Mind Frame India creates Instagram strategies that connect brands with their target audiences."
  },
  {
    question: "What is influencer marketing?",
    answer: "Influencer marketing partners with creators who have engaged audiences to promote a brand authentically. Mind Frame India connects brands with relevant influencers to drive awareness and conversions."
  },
  {
    question: "What is an influencer marketing agency?",
    answer: "An influencer marketing agency finds, manages, and runs campaigns with creators to reach targeted audiences and drive results. Mind Frame India offers end-to-end influencer marketing services for brands of all sizes."
  },
  {
    question: "What is social media management?",
    answer: "Social media management handles planning, posting, engagement, and reporting to grow and maintain a brand's social presence. Mind Frame India provides comprehensive social media management services that keep your brand active and engaging."
  },
  {
    question: "What is a content calendar?",
    answer: "A content calendar is a schedule that plans what content gets posted, when, and on which platforms for consistency. Mind Frame India develops strategic content calendars that ensure consistent, timely social media presence."
  },
  {
    question: "What is LinkedIn marketing?",
    answer: "LinkedIn marketing uses content and ads on LinkedIn to reach professionals and generate B2B leads. Mind Frame India creates LinkedIn strategies that position your brand as an industry authority."
  },
  {
    question: "What is community management?",
    answer: "Community management responds to comments, messages, and conversations to build relationships and trust with a brand's audience. Mind Frame India manages social communities to foster engagement and loyalty."
  },
  {
    question: "What is YouTube channel management?",
    answer: "YouTube channel management handles video strategy, optimization, and growth to build an audience and visibility on YouTube. Mind Frame India helps brands leverage YouTube for long-term visibility and engagement."
  },
  {
    question: "What is social media branding?",
    answer: "Social media branding creates a consistent look, tone, and identity across social profiles so a brand is instantly recognizable. Mind Frame India ensures your social media branding aligns with your overall brand identity."
  },
  {
    question: "What is WhatsApp marketing?",
    answer: "WhatsApp marketing uses WhatsApp Business to send updates, offers, and support messages directly to customers. Mind Frame India leverages WhatsApp marketing for personalized customer engagement and lead nurturing."
  },
  {
    question: "What is a reels and short video marketing agency?",
    answer: "A reels and short video marketing agency creates short-form video content for Instagram, YouTube Shorts, and similar platforms to boost reach and engagement. Mind Frame India produces engaging short-form video content that captures attention and drives results."
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
  goldTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(20px, 2.8vw, 26px)",
    fontWeight: 600,
    color: "#b08d57",
    textAlign: "center",
    marginBottom: "14px",
    letterSpacing: "-0.2px",
  },
  underline: {
    width: "60px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 28px",
  },
  body: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14.5px",
    color: "#555",
    lineHeight: 1.8,
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

function CreativeServiceCard({ svc }) {
  return (
    <div className="cs-card">
      <div className="cs-icon">{svc.icon}</div>
      <h3 style={styles.cardTitle}>{svc.title}</h3>
      <p style={{ ...styles.body, textAlign: "center" }}>{svc.desc}</p>
    </div>
  );
}

export default function CreativeDesign() {
  return (
    <>

      <SEO 
        title={seoConfig.services.creativeDesign.title}
        description={seoConfig.services.creativeDesign.description}
        keywords={seoConfig.services.creativeDesign.keywords}
        path={seoConfig.services.creativeDesign.path}
      />
      
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── CARD ── */
        .cs-card {
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
        .cs-card:hover {
          box-shadow: 0 20px 40px rgba(176, 141, 87, 0.13);
          transform: translateY(-6px);
          border-color: #b08d57;
        }
        .cs-icon {
          display: inline-flex;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cs-card:hover .cs-icon {
          transform: scale(1.1) rotate(-3deg);
        }

        /* ── GRID ── */
        .cs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1300px;
          margin: 0 auto;
          padding: 20px 24px 60px;
        }

        /* ── FAQ ── */
        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px 60px;
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
          padding: 60px 0 40px;
          border-top: 1px solid #e8e2d9;
        }

        @media (max-width: 1024px) {
          .cs-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr; gap: 16px; }
          .cs-card { padding: 32px 22px 28px; }
          .faq-container { padding: 0 16px 40px; }
        }

        /* ── HERO ── */
        .cs-hero {
          position: relative;
          height: 480px;
          overflow: hidden;
        }
        .cs-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.50) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0;
        }
        .cs-breadcrumb {
          position: absolute;
          top: 20px;
          left: 0; right: 0;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 2.5px;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
        }
        .cs-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(32px, 5.5vw, 60px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -1.5px;
          line-height: 1.15;
          text-align: center;
          max-width: 860px;
          padding: 0 24px;
        }
        .cs-hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(14px, 1.8vw, 19px);
          color: #b08d57;
          margin-top: 18px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        /* ── INTRO ── */
        .cs-intro {
          background: #fff;
          padding: 64px 24px 56px;
          border-bottom: 1px solid #e8e2d9;
        }
        .cs-intro-inner {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* ── MID IMAGE ── */
        .cs-mid-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 10px 32px rgba(0,0,0,0.10);
          display: block;
        }
        @media (max-width: 768px) {
          .cs-mid-img { height: 220px; }
          .cs-hero { height: 340px; }
        }

        /* ── SERVICES SECTION ── */
        .cs-services-section {
          background: #f5f3ef;
          padding: 60px 0 40px;
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="cs-hero">
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=85"
          alt="Creative Design Agency Mumbai"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div className="cs-hero-overlay">
          <div className="cs-hero-title">Creative Design Agency in Mumbai</div>
          <div className="cs-hero-subtitle">DESIGN THAT SPEAKS BEFORE YOU DO</div>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className="cs-intro">
        <div className="cs-intro-inner">

          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.85, marginBottom: "36px" }}>
            MIND FRAME India is a highly creative and result-driven design agency in Mumbai. When you get your branding designed correctly from the start you don't have the expense of redoing your 'not-so-good work.' Mind Frame India is the best creative design agency in Mumbai with a highly experienced graphic designing team. The team knows the software and tools of graphic design which save your time and money by delivering it before the time. Our creative design services will give your business a consistent brand that makes you stand out from the crowd.
          </p>

          <h2 style={styles.goldTitle}>
            #1 Integrated Creative Design Agency in Mumbai
          </h2>
          <div style={styles.underline} />

          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.85, marginBottom: "36px" }}>
            Being one of the Best creative design agencies in Mumbai, we know the trends and can easily adapt. We ensure through our Graphic Design Services that your branding is recognizable from print work to your social media platforms. Our graphic designers are trained to look at your business with a fresh, creative eye and come up with new creative ideas to brand your business and creatively reinforce your message to communicate it clearly to your target market through designs.
          </p>

          <h2 style={styles.goldTitle}>
            We Are a Creative Design Agency in Mumbai That Has A Lot To Offer
          </h2>
          <div style={styles.underline} />

          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.85 }}>
            Graphic Design services do not mean ready-made templates from the internet that anyone from the same industry can pick and get the job done. We brainstorm with different departments like the graphic design team, content writer, etc, and drill down to understand the product or the service. Communication is a vital part of any creative design and a picture speaks a thousand words. We choose the right images relevant to your brand and design creatively with catchy taglines to attract the eyes of your target audience.
          </p>

        </div>
      </div>

      {/* ── MID IMAGE ── */}
      <div style={{ padding: "0 24px", marginTop: "0", background: "#fff", paddingBottom: "0" }}>
        <img
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1600&q=85"
          alt="Creative Design Services"
          className="cs-mid-img"
        />
      </div>

      {/* ── SERVICES GRID ── */}
      <div className="cs-services-section">
        <div className="cs-grid">
          {creativeServices.map((svc) => (
            <CreativeServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </div>

      {/* ── FAQ SECTION ── */}
      <div className="faq-section">
        <div className="faq-container">
          <h2 className="faq-section-title">Frequently Asked Questions</h2>
          <div style={styles.underline} />
          <p className="faq-intro">
            Everything you need to know about Mind Frame India's creative design, social media marketing, and branding services in Mumbai.
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