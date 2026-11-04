
'use client'
import { useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const services = [
  {
    id: 1,
    title: "Website Development and Design",
    desc: "Building Engaging Online Experiences. As a website development company in Mumbai, we specialize in creating engaging online experiences that drive conversions and elevate your brand's online presence. Our expert team of web developers and designers collaborate closely to develop custom websites that are visually stunning, user-friendly, and optimized for search engines.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="8" width="36" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M16 36v4h16v-4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 16h8M22 20h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Brand Advertising and Campaigns",
    desc: "Igniting Brands and Sparking Engagement. As a creative ad agency, we excel in crafting brand advertising campaigns that ignite brands and spark engagement. Our strategic approach involves in-depth market research, target audience analysis, and a deep understanding of your brand's unique value proposition.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12L8 18h12z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2" fill="#b08d57" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Social Media Marketing and Management",
    desc: "Driving Engagement and Building Communities. In the era of social media dominance, our digital media agency understands the importance of social media marketing and management. We develop comprehensive social media strategies that align with your brand's goals and values.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M34 12a6 6 0 016 6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Search Engine Optimization (SEO)",
    desc: "Boosting Visibility and Organic Traffic. In a highly competitive online landscape, search engine optimization (SEO) plays a crucial role in improving your brand's visibility and driving organic traffic. Our digital experts employ proven SEO techniques to optimize your website's structure, content, and keywords.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Content Creation and Copywriting",
    desc: "Crafting Compelling Narratives. At our creative ad agency, we believe that compelling content is the backbone of any successful marketing campaign. Our team of talented writers and content creators develop engaging narratives that resonate with your target audience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 18l12 8 12-8 12 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 28h20" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Influencer Marketing",
    desc: "Harnessing the Power of Influencers. Influencer marketing has become a powerful tool for brands to reach and engage with their target audience. Our team identifies relevant influencers in your industry, develops authentic collaborations, and creates captivating campaigns.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="20" r="5" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Email Marketing",
    desc: "Nurturing Customer Relationships. Email marketing remains one of the most effective channels for nurturing customer relationships and driving conversions. Our digital media agency specializes in creating tailored email marketing strategies that resonate with your audience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="14" width="36" height="24" rx="4" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 20l12 8 12-8 12 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 32l8-6M42 32l-8-6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Mobile Marketing",
    desc: "Captivating Users On-the-Go. In today's mobile-centric world, reaching your audience on their smartphones and tablets is essential. Our digital media agency creates tailored strategies to capture users on-the-go through impressive website design and mobile app development.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="14" y="6" width="20" height="36" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 34v2" stroke="#b08d57" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="36" r="1" fill="#b08d57" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Reputation Management",
    desc: "Safeguarding Your Brand Image. In today's digital world, maintaining a positive brand reputation is crucial. Our digital media agency offers reputation management services to safeguard your brand image and protect your brand equity.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 16l3 3M29 29l3 3M32 16l-3 3M19 29l-3 3" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "Video Production and Marketing",
    desc: "Engaging Audiences Through Captivating Visual Storytelling. Video has become an increasingly popular medium for engaging audiences. Our creative ad agency offers comprehensive video production and marketing services to help brands reach their desired audiences.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="12" width="28" height="24" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M34 20l8-4v12l-8-4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 11,
    title: "E-commerce Solutions",
    desc: "Driving Online Sales. If you're looking to establish or expand your online store, our digital media agency offers comprehensive e-commerce solutions. From setting up secure online platforms to implementing effective marketing strategies.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="16" width="36" height="26" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M16 16V10a4 4 0 018 0v6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28h16M20 34h8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 12,
    title: "Social Media Advertising",
    desc: "Targeted Reach and Engagement. Social media platforms provide unparalleled opportunities to reach and engage with your target audience. Our digital media agency specializes in social media advertising, creating targeted campaigns that drive brand awareness.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M34 12a6 6 0 016 6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="18" r="2" fill="#b08d57" />
      </svg>
    ),
  },
];

const whyChoose = [
  {
    id: 1,
    title: "Expertise and Experience",
    desc: "Mindframe India boasts a team of skilled branding professionals who have extensive experience and expertise in crafting successful brand strategies across various industries.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M24 6l3.6 10.8H38l-8.8 6.4 3.4 10.4L24 27.2l-8.6 6.4 3.4-10.4L10 16.8h10.4L24 6z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Strategic Media Buying",
    desc: "Innovative media buying is a key component of our digital media agency. We leverage data-driven insights, audience segmentation, and advanced targeting techniques to optimize your ad spend.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M8 28l10-12 8 6 10-14 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 38h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Integrated Approach",
    desc: "As a digital media agency, we recognize the importance of an integrated approach to advertising, seamlessly blending traditional and digital channels to maximize your brand's reach.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <circle cx="24" cy="24" r="10" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 6v8M24 34v8M6 24h8M34 24h8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Holistic Digital Solutions",
    desc: "Our creative advertising agency offers holistic digital solutions that encompass website development, SEO, social media marketing, and more to ensure your brand remains visible.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <rect x="8" y="8" width="14" height="14" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <rect x="26" y="8" width="14" height="14" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <rect x="8" y="26" width="14" height="14" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <rect x="26" y="26" width="14" height="14" rx="2" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Exceptional Graphic Design",
    desc: "At our graphic design agency, we believe that design has the power to captivate and inspire. Our talented designers create cohesive and visually appealing designs that tell your brand's story.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 28l10-8 8 6 6-5 4 7" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ── FAQ Data ──
const faqs = [
  {
    question: "What is digital marketing SEO?",
    answer: "Digital marketing SEO refers to using search optimization as part of an overall online growth strategy. It integrates SEO with broader digital marketing efforts like content, social media, and paid ads to drive sustainable visibility and conversions."
  },
  {
    question: "What is search engine optimization in digital marketing?",
    answer: "Search engine optimization in digital marketing improves website visibility on search engines like Google. It involves on-page, off-page, and technical tactics to help your pages rank higher for relevant queries and attract qualified organic traffic."
  },
  {
    question: "What is an SEO agency near me?",
    answer: "An SEO agency near you helps improve your website rankings and local search presence. Mind Frame India, based in Mumbai, serves clients globally with expert SEO strategies tailored to your business goals and target locations."
  },
  {
    question: "What are content marketing agencies?",
    answer: "Content marketing agencies create blogs, videos, guides, and other content to build authority and attract leads. Mind Frame India develops content strategies that engage your audience, support SEO, and drive measurable business growth."
  },
  {
    question: "What is marketing and SEO?",
    answer: "Marketing and SEO together help businesses reach customers online through visibility, relevance, and trust. SEO ensures your brand appears in search results, while marketing strategies convert that visibility into loyal customers."
  },
  {
    question: "What are search engine optimization companies?",
    answer: "Search engine optimization companies specialize in improving rankings, traffic, and organic leads. Mind Frame India is a leading SEO company in Mumbai, offering data-driven SEO solutions for businesses across industries."
  },
  {
    question: "What is local SEO agency?",
    answer: "A local SEO agency helps businesses rank in location-based searches and attract nearby customers. Mind Frame India offers expert local SEO services in Mumbai to help businesses dominate local search results and Google Maps."
  },
  {
    question: "What is content marketing in digital marketing?",
    answer: "Content marketing in digital marketing uses helpful content to attract, engage, and convert audiences. It builds trust and authority while supporting SEO through valuable, shareable, and keyword-optimized materials."
  },
  {
    question: "What is digital marketing SEO agency?",
    answer: "A digital marketing SEO agency combines website optimization, content, and search strategy to grow visibility. Mind Frame India provides integrated SEO and digital marketing services that drive traffic, leads, and revenue."
  },
  {
    question: "What is SEO and PPC agency?",
    answer: "An SEO and PPC agency manages both organic and paid search strategies for stronger search presence. Mind Frame India balances long-term SEO growth with immediate PPC results to maximize your search marketing ROI."
  },
  {
    question: "What is an SEO company in Mumbai?",
    answer: "An SEO company in Mumbai improves your website rankings on Google and helps local businesses attract more organic traffic and leads. Mind Frame India is a trusted SEO company in Mumbai with a proven track record of delivering results."
  },
  {
    question: "What is on-page SEO?",
    answer: "On-page SEO optimizes elements on your website, like titles, content, headings, and structure, to improve search rankings. Mind Frame India ensures every page is fully optimized for target keywords and user experience."
  },
  {
    question: "What is off-page SEO?",
    answer: "Off-page SEO builds your website's authority through external signals like backlinks, mentions, and reviews. Mind Frame India uses ethical link-building and brand-building strategies to strengthen your domain authority."
  },
  {
    question: "What is technical SEO?",
    answer: "Technical SEO improves a website's speed, structure, indexing, and mobile-friendliness so search engines can crawl and rank it well. Mind Frame India conducts comprehensive technical audits to fix issues and optimize site performance."
  },
  {
    question: "What is link building?",
    answer: "Link building earns quality backlinks from other websites to boost your authority and search rankings. Mind Frame India builds high-quality, relevant links that improve your site's credibility and organic visibility."
  },
  {
    question: "What is keyword research?",
    answer: "Keyword research identifies the terms your customers search for so you can target them with content and ads. Mind Frame India uses advanced tools and strategies to find high-intent keywords that drive conversions."
  },
  {
    question: "What is local SEO in Mumbai?",
    answer: "Local SEO in Mumbai helps businesses rank for location-based searches and appear in Google Maps results for nearby customers. Mind Frame India specializes in local SEO strategies tailored to Mumbai's competitive market."
  },
  {
    question: "What is an SEO audit?",
    answer: "An SEO audit reviews your website's technical health, content, and backlinks to find issues and opportunities to rank higher. Mind Frame India provides in-depth SEO audits with actionable recommendations for improvement."
  },
  {
    question: "What is Google Business Profile optimization?",
    answer: "Google Business Profile optimization improves your local listing so your business shows up in Maps and local search with accurate details and reviews. Mind Frame India helps you maximize visibility and engagement on Google."
  },
  {
    question: "What is a content writing service?",
    answer: "A content writing service produces blogs, web pages, and marketing copy that engage audiences and support SEO. Mind Frame India crafts compelling, SEO-friendly content that builds authority and drives action."
  },
  {
    question: "What is blog writing for SEO?",
    answer: "Blog writing for SEO creates keyword-targeted articles that attract organic traffic and build topical authority. Mind Frame India develops blog content that ranks well and resonates with your target audience."
  },
  {
    question: "What is the difference between SEO and content marketing?",
    answer: "SEO optimizes your site to rank on search engines, while content marketing creates the valuable content that earns those rankings and engages users. Mind Frame India integrates both to deliver a complete digital growth strategy."
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
          maxHeight: open ? '800px' : '0',
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

function WhyChooseCard({ item }) {
  return (
    <div className="why-card">
      <div className="why-icon">{item.icon}</div>
      <h3 style={{ ...styles.cardTitle, fontSize: "18px", margin: "16px 0 10px" }}>{item.title}</h3>
      <p style={{ ...styles.body, fontSize: "13px", textAlign: "center" }}>{item.desc}</p>
    </div>
  );
}

export default function MarketingAndBranding() {
  return (
    <>
      <SEO 
        title={seoConfig.services.marketingBranding.title}
        description={seoConfig.services.marketingBranding.description}
        keywords={seoConfig.services.marketingBranding.keywords}
        path={seoConfig.services.marketingBranding.path}
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

            .why-card {
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
            .why-card:hover {
              box-shadow: 0 15px 30px rgba(176, 141, 87, 0.1);
              transform: translateY(-4px);
              border-color: #b08d57;
            }
            .why-icon {
              transition: transform 0.3s ease;
            }
            .why-card:hover .why-icon {
              transform: scale(1.05);
            }

            .services-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 28px;
              max-width: 1300px;
              margin: 0 auto;
              padding: 20px 24px 60px;
            }

            .why-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 24px;
              max-width: 1300px;
              margin: 0 auto;
              padding: 20px 24px 60px;
            }

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

            @media (max-width: 1024px) {
              .services-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
              }
              .why-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
              }
            }
            @media (max-width: 768px) {
              .why-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 640px) {
              .services-grid, .why-grid {
                grid-template-columns: 1fr;
                gap: 20px;
              }
              .service-card {
                padding: 32px 24px 28px;
              }
              .faq-container {
                padding: 0 16px 40px;
              }
            }

            .hero-section {
              position: relative;
              height: 500px;
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

            .intro-section {
              background: #fff;
              padding: 64px 24px 56px;
              border-bottom: 1px solid #e8e2d9;
            }

            .services-section {
              background: #f5f3ef;
              padding: 60px 0 40px;
            }

            .why-section {
              background: #fff;
              padding: 60px 0 40px;
            }

            .approach-section {
              background: #f5f3ef;
              padding: 60px 24px;
              text-align: center;
            }

            .faq-section {
              background: #fff;
              padding: 60px 0 40px;
              border-top: 1px solid #e8e2d9;
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
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=85"
            alt="Marketing and Branding Agency"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="hero-overlay">
            <div className="hero-title">
              Unlocking the Power of<br />Innovative Brand Advertising
            </div>
            <div className="hero-subtitle">CREATIVE AGENCY IN MUMBAI</div>
          </div>
        </div>

        {/* INTRO SECTION */}
        <div className="intro-section">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
              In today's highly competitive business landscape, effective advertising and creative brand campaigns are crucial for capturing the attention of consumers and driving business growth. That's where a creative ad agency comes into play. A creative ad agency combines art, strategy, and innovation to develop compelling advertising campaigns that resonate with the target audience and deliver tangible results.
            </p>
            <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
              At Creative Ad Agency, we are a leading creative agency in Mumbai, specializing in brand advertising and digital media solutions. With our expertise and passion for creativity, we help businesses stand out in a crowded marketplace and connect with their customers in meaningful ways. From concept to execution, we bring ideas to life, creating engaging campaigns that leave a lasting impression.
            </p>
          </div>
        </div>

        {/* OUR SERVICES SECTION */}
        <div className="services-section">
          <div style={{ textAlign: "center", marginBottom: "20px", padding: "0 24px" }}>
            <h2 style={styles.goldTitle}>Our Services</h2>
            <div style={styles.underline} />
            <p style={{ ...styles.body, maxWidth: "700px", margin: "16px auto 0", textAlign: "center" }}>
              As a full-service advertising company, we offer a wide range of services to meet the diverse needs of our clients. Whether you're a small startup or an established brand, our team of experts is dedicated to crafting tailored solutions that align with your objectives and drive business growth.
            </p>
          </div>
          <div className="services-grid">
            {services.map((svc) => (
              <ServiceCard key={svc.id} svc={svc} />
            ))}
          </div>
        </div>

        {/* CREATIVE CAMPAIGN DEVELOPMENT SECTION */}
        <div className="why-section">
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
            <h2 style={styles.goldTitle}>Creative Campaign Development</h2>
            <div style={styles.underline} />
            <h3 style={{ ...styles.darkTitle, fontSize: "clamp(20px, 2.5vw, 24px)" }}>Delivering impactful Brand Advertising</h3>
            <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
              Our creative campaign agency specializes in developing impactful brand advertising strategies that capture attention and leave a lasting impression. We understand that every brand has unique story to tell, and we work closely with our clients to understand their values, target audiences, and goals. With our deep understanding of consumer behavior and market trends, we create compelling campaigns that evoke emotions, drive engagement, and inspire action.
            </p>
          </div>
        </div>

        {/* DIGITAL MEDIA SOLUTIONS SECTION */}
        <div className="approach-section">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={styles.goldTitle}>Digital Media Solutions</h2>
            <div style={styles.underline} />
            <h3 style={{ ...styles.darkTitle, fontSize: "clamp(20px, 2.5vw, 24px)" }}>Transforming Brands in the Digital Age</h3>
            <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
              In today's digital era, having a strong online presence is essential for success. Our digital media agency in Mumbai combines creativity with data-driven insights to deliver digital solutions that drive your brand's visibility and impact. From social media marketing and search engine optimization (SEO) to pay-per-click (PPC) advertising and content creation, we leverage the power of digital platforms to reach and engage your target audience effectively.
            </p>
          </div>
        </div>

        {/* GRAPHIC DESIGN AND WEBSITE DEVELOPMENT SECTION */}
        <div className="why-section">
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
            <h2 style={styles.goldTitle}>Graphic Design and Website Development</h2>
            <div style={styles.underline} />
            <h3 style={{ ...styles.darkTitle, fontSize: "clamp(20px, 2.5vw, 24px)" }}>Bringing Visuals to Life</h3>
            <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
              Visual communication is a powerful tool for brand storytelling and engaging consumers. Our graphic design agency uses your offers as a canvas to showcase your brand identity, including logos, brochures, packaging, and more. We collaborate with talented designers who have a keen eye for aesthetics and a deep understanding of brand identity. Additionally, our website development company in Mumbai creates user-friendly and visually appealing websites that provide a seamless user experience and drive conversions.
            </p>
          </div>
        </div>

        {/* MEDIA BUYING AND PLANNING SECTION */}
        <div className="approach-section">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={styles.goldTitle}>Media Buying and Planning</h2>
            <div style={styles.underline} />
            <h3 style={{ ...styles.darkTitle, fontSize: "clamp(20px, 2.5vw, 24px)" }}>Maximizing Advertising ROI</h3>
            <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
              Investor media buying is crucial for optimizing advertising budgets and ensuring maximum reach and impact. As an experienced advertising agency company, we have established strong relationships with media partners, enabling us to negotiate favorable rates and placements for our clients. Our media buying agency combines market research, audience insights, and strategic planning to identify the most effective media channels for reaching your target audience and achieving your advertising goals.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="why-section">
          <div style={{ textAlign: "center", marginBottom: "20px", padding: "0 24px" }}>
            <h2 style={styles.goldTitle}>Why Choose Our Creative Agency in Mumbai?</h2>
            <div style={styles.underline} />
            <h3 style={{ ...styles.darkTitle, fontSize: "clamp(20px, 2.5vw, 24px)" }}>Unleashing the Power of Creativity</h3>
          </div>
          <div className="why-grid">
            {whyChoose.map((item) => (
              <WhyChooseCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* MIDDLE IMAGE SECTION */}
        <div style={{ padding: "0 24px", marginBottom: "60px" }}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85"
            alt="Creative Agency Team"
            className="mid-image"
            style={{ borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          />
        </div>

        {/* ── FAQ SECTION ── */}
        <div className="faq-section">
          <div className="faq-container">
            <h2 className="faq-section-title">Frequently Asked Questions</h2>
            <div style={styles.underline} />
            <p className="faq-intro">
              Everything you need to know about Mind Frame India's SEO, digital marketing, and branding services in Mumbai.
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