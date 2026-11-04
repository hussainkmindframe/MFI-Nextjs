'use client'

import { useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const digitalServices = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    desc: "To compete and stay ahead in the aggressive market, you need to optimize your business for your google position. Through Search Engine Optimization, you get large volume and quality traffic to your website. Our team of experienced SEO experts helps you scale up your business through different result-oriented SEO strategies in the online market. With us, you can attain the profits you wish to set.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Social Media Marketing",
    desc: "No wonder, Social Media has become a central part of building a brand's social media page to understand its business reach and popularity in the industry. We are a team of proactive social media and digital marketers who help you with setting up creative and innovative social media campaigns for your brand. We also create strategic planning and logistics to help you differentiate between your previous metrics and attainments with us.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M34 12a6 6 0 016 6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Influencer Marketing",
    desc: "Social Media Influencers have an authority to advise and inspire their followers worldwide. A powerful influencer talking about your brand can leave a huge impact on the target audiences. We understand your business and find the best and relevant influencers for your brand. This is why we only build trust with your target audience, content leads into sales, better ROI and SEO, and grow social followers through Influencer marketing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="20" r="5" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Content Marketing",
    desc: "From creative and interactive website writing right end to engaging videos, content marketing is a huge concept created for any business to boost brand loyalty. Our experienced team of content creators and content strategists help you bring your brand and its concepts to your target audience. We focus on creating and distributing valuable, relevant, and consistent content to drive tangible & also profitable customer action.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 18l12 8 12-8 12 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 28h20" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Paid PR",
    desc: "Any you looking to expand your brand's reach and expecting exposure from new people who are likely to be interested in what you have to offer? We will be able to guide you through Paid PR.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M8 28l10-12 8 6 10-14 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 38h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="12" r="3" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Email Marketing",
    desc: "We help drive audience through Email marketing by targeting particular groups of consumers, even individuals.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="14" width="36" height="24" rx="4" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 20l12 8 12-8 12 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 32l8-6M42 32l-8-6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Video & Display Advertising",
    desc: "We assist to attract the audience of a website, social media platform or other digital mediums to take a specific action through Video & Display advertising.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="12" width="28" height="24" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M34 20l8-4v12l-8-4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="24" r="2" fill="#b08d57" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Affiliate Marketing",
    desc: "We help build trust with customers over time to earn them into repeat customers through Affiliate marketing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M34 12l6 6M40 12l-6 6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Measure, Attribution Tagging & Setup",
    desc: "We measure the impact of marketing channels of your business and determine the return on investment (ROI) through tagging & setup.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M6 38l10-14 8 8 10-16 8 10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 42h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 6v36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: "What digital marketing services does a digital marketing agency offer?",
    answer:
      "A digital marketing agency can offer SEO, SEM, PPC, content marketing, social media marketing, email marketing, and performance marketing.",
  },
  {
    question: "What is SEO and why is it important?",
    answer:
      "SEO, or search engine optimization, improves your website visibility on Google and helps attract organic traffic.",
  },
  {
    question: "What is SEM?",
    answer:
      "SEM, or search engine marketing, uses paid search ads to increase visibility and drive traffic from search engines.",
  },
  {
    question: "What is PPC advertising?",
    answer:
      "PPC advertising lets you place ads on search engines and social platforms and pay only when someone clicks.",
  },
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing is a results-driven approach where success is measured by clicks, leads, conversions, or sales.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "PPC can show results quickly, while SEO and content marketing usually take several months to build momentum.",
  },
  {
    question: "What is the cost of digital marketing services?",
    answer:
      "Digital marketing pricing depends on your goals, scope, channels, and campaign complexity.",
  },
  {
    question: "Can a digital marketing agency manage my full strategy?",
    answer:
      "Yes, a full-service agency can manage strategy, execution, optimization, and reporting across multiple channels.",
  },
  {
    question: "What is a digital marketing services list?",
    answer:
      "A digital marketing services list usually includes SEO, PPC, social media, content, email, analytics, and website optimization.",
  },
  {
    question: "What is a digital marketing service provider?",
    answer:
      "A digital marketing service provider offers specialized online growth services based on business goals and audience needs.",
  },
  {
    question: "What is a digital marketing agency in Mumbai?",
    answer:
      "A digital marketing agency in Mumbai helps local businesses grow online through SEO, paid ads, social media, and content built for the Mumbai audience.",
  },
  {
    question: "What is a digital marketing company in Mumbai?",
    answer:
      "A digital marketing company in Mumbai plans and runs online campaigns that improve visibility, generate leads, and increase sales for businesses in the region.",
  },
  {
    question: "What is email marketing?",
    answer:
      "Email marketing uses targeted emails and automated flows to nurture leads, retain customers, and drive repeat sales.",
  },
  {
    question: "What is online advertising?",
    answer:
      "Online advertising places paid ads across search engines, social media, and websites to reach a targeted audience and drive measurable results.",
  },
  {
    question: "What is conversion rate optimization?",
    answer:
      "Conversion rate optimization (CRO) improves a website or campaign so a higher share of visitors take action, such as buying or submitting a form.",
  },
  {
    question: "What is marketing automation?",
    answer:
      "Marketing automation uses software to run repetitive tasks like email flows, lead scoring, and follow-ups, saving time and improving consistency.",
  },
  {
    question: "What is a digital marketing strategy?",
    answer:
      "A digital marketing strategy is a plan that defines your goals, audience, channels, and budget to grow a business online effectively.",
  },
  {
    question: "What is ROI in digital marketing?",
    answer:
      "ROI in digital marketing measures the return earned compared to the amount spent, showing whether campaigns are profitable.",
  },
  {
    question: "What is a digital marketing audit?",
    answer:
      "A digital marketing audit reviews your website, SEO, ads, and social presence to find gaps and opportunities for growth.",
  },
  {
    question: "What is lead generation in digital marketing?",
    answer:
      "Lead generation in digital marketing attracts potential customers and captures their interest through forms, ads, content, and landing pages.",
  },
  {
    question: "What is B2B digital marketing?",
    answer:
      "B2B digital marketing targets other businesses through channels like LinkedIn, search ads, and content to generate qualified leads.",
  },
  {
    question: "What is omnichannel marketing?",
    answer:
      "Omnichannel marketing gives customers a seamless, connected experience across website, social media, email, and offline touchpoints.",
  },
  {
    question: "What is the difference between SEO and SEM?",
    answer:
      "SEO earns unpaid rankings on search engines over time, while SEM uses paid search ads for immediate visibility. They work best together.",
  },
  {
    question: "What is a digital marketing retainer?",
    answer:
      "A digital marketing retainer is an ongoing monthly agreement where an agency manages your campaigns continuously for a fixed fee.",
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

function DigitalServiceCard({ svc }) {
  return (
    <div className="digital-card">
      <div className="digital-icon">{svc.icon}</div>
      <h3 style={styles.cardTitle}>{svc.title}</h3>
      <p style={styles.body}>{svc.desc}</p>
    </div>
  );
}

// ─── FAQ Accordion Item ────────────────────────────────────────────────────────
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
          id={`dm-faq-btn-${index}`}
          aria-controls={`dm-faq-panel-${index}`}
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
              fontSize: 15,
              fontWeight: 700,
              color: '#1a1510',
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.5,
            }}
          >
            {question}
          </span>
          <span
            style={{
              fontSize: 22,
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
        id={`dm-faq-panel-${index}`}
        aria-labelledby={`dm-faq-btn-${index}`}
        role="region"
        style={{
          maxHeight: open ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p
          style={{
            fontSize: 14,
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

export default function DigitalMarketing() {
  return (
    <>

      <SEO 
        title={seoConfig.services.digitalMarketing.title}
        description={seoConfig.services.digitalMarketing.description}
        keywords={seoConfig.services.digitalMarketing.keywords}
        path={seoConfig.services.digitalMarketing.path}
      />
      
    <div style={styles.page}>
      <style>
        {`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          .digital-card {
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
          .digital-card:hover {
            box-shadow: 0 20px 40px rgba(176, 141, 87, 0.12);
            transform: translateY(-6px);
            border-color: #b08d57;
          }
          .digital-icon {
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
          }
          .digital-card:hover .digital-icon {
            transform: scale(1.08) rotate(-3deg);
          }
          .digital-icon svg stroke {
            transition: stroke 0.3s ease;
          }
          .digital-card:hover .digital-icon svg stroke {
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

          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
          @media (max-width: 640px) {
            .services-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .digital-card {
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
            font-size: clamp(36px, 6vw, 64px);
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

          .seo-section {
            background: #fff;
            padding: 60px 24px;
          }

          .sem-section {
            background: #f5f3ef;
            padding: 60px 24px;
          }

          .faq-section {
            background: #fff;
            padding: 64px 24px 72px;
            border-top: 1px solid #e8e2d9;
          }

          .faq-intro {
            font-family: 'DM Sans', sans-serif;
            font-size: 14px;
            color: #555;
            line-height: 1.8;
            text-align: center;
            margin-bottom: 32px;
          }

          .footer-strip {
            border-top: 1px solid #e8e2d9;
            padding: 28px 24px;
            text-align: center;
            background: #fff;
          }

          .mid-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }
          @media (max-width: 768px) {
            .mid-image {
              height: 250px;
            }
          }
        `}
      </style>

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85"
          alt="Digital Marketing Agency"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay">
          <div className="hero-title">
            Digital Marketing Agency in Mumbai
          </div>
          <div className="hero-subtitle">ROI-ORIENTED DIGITAL SOLUTIONS</div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="intro-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "32px" }}>
            MIND FRAME India is a highly successful digital marketing agency in Mumbai specializing in ROI-oriented digital marketing services. We have clients across all verticals with a strong presence in digital marketing for real estate, FMCG, BFSI, R2H, healthcare, eCommerce, and education, to name a few. We choose the right digital marketing platforms and strategies to promote your product and services the right way.
          </p>
          
          <h2 style={styles.goldTitle}>Boost Your marketing Campaign with Result Focused Digital Marketing Agency in Mumbai</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "32px" }}>
            MIND FRAME India is a digital marketing agency in Mumbai which offers a wide range of marketing services. It is our goal to provide you with complete digital marketing solutions, including search engine optimization, search engine marketing, content creation, and much more. It has been our pleasure to work with a wide range of clients from various industries over the years.
          </p>

          <h2 style={styles.goldTitle}>We Are a Digital Marketing Agency in Mumbai That Has A Lot To Offer</h2>
          <div style={styles.underline} />
        </div>
      </div>

      {/* MIDDLE IMAGE SECTION */}
      <div style={{ padding: "0 24px" }}>
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=85"
          alt="Digital Marketing Services"
          className="mid-image"
          style={{ borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
        />
      </div>

      {/* SERVICES GRID */}
      <div className="services-section">
        <div className="services-grid">
          {digitalServices.map((svc) => (
            <DigitalServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="faq-section">
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={styles.darkTitle}>Frequently Asked Questions</h2>
          <div style={styles.underline} />
          <p className="faq-intro">
            Common questions about digital marketing services, strategy, and what to expect when working with a digital marketing agency in Mumbai.
          </p>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* FAQ Schema (JSON-LD) */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://mindframeindia.com/services/digital-marketing#faq",
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
  
    </>
);
}