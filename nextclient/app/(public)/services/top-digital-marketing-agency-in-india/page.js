'use client'

import { useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const cityServices = [
  {
    id: 1,
    city: "Mumbai",
    desc: "Mind Frame India is a trusted digital marketing agency in Mumbai, helping businesses establish a strong online presence and drive meaningful engagement with their target audience. As a creative advertising agency, Mind Frame India combines imagination and innovation to create impactful campaigns that resonate with consumers. For Mumbai advertising solutions that deliver exceptional results, Mind Frame India is your trusted partner.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="12" y="8" width="24" height="32" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M20 16h8M20 24h8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="34" r="2" fill="#b08d57" />
      </svg>
    ),
  },
  {
    id: 2,
    city: "Delhi",
    desc: "Mind Frame India offers top advertising services in Delhi, helping businesses establish a strong presence in this thriving capital city. As the best media planning agency in Delhi, Mind Frame India understands the ever-evolving media landscape and stays ahead of the curve. We leverage our extensive network and industry relationships to secure the best media placements for your campaigns.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12L8 18h12z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="4" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 3,
    city: "Bangalore",
    desc: "Mind Frame India offers top advertising services in Bengaluru, helping businesses establish a strong presence in this thriving tech hub. As a digital marketing agency in Bangalore, Mind Frame India understands the unique needs of businesses in this tech-heavy city and provides tailored solutions to drive growth. When it comes to Bangalore's best advertising solutions, Mind Frame India stands out for its innovative approach.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="20" r="10" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M16 34l-4 8h24l-4-8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    city: "Hyderabad",
    desc: "Mind Frame India is the creative advertising agency in Hyderabad that brings brands to life through captivating storytelling and visually stunning campaigns. For Hyderabad advertising solutions that drive growth and generate brand awareness, choose Mind Frame India as your trusted partner. Our team of experts understands the unique dynamics of the Hyderabad market and crafts tailored advertising strategies.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="8" y="12" width="32" height="24" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M16 20h16M16 28h10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    city: "Dubai",
    desc: "As the best media planning agency in Dubai, Mind Frame India understands the ever-evolving media landscape and stays ahead of the curve. We leverage our extensive network and industry relationships to secure the best media placements for your campaigns, ensuring maximum visibility and exposure for your brand across the Middle East market.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M6 28l18-12 18 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="28" width="28" height="12" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const expertiseServices = [
  {
    id: 1,
    title: "Digital Marketing Agency",
    desc: "Mind Frame India is the leading digital marketing agency in India, offering a comprehensive range of services to help businesses thrive in the digital landscape.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Creative Advertising Agency",
    desc: "As a creative advertising agency, Mind Frame India combines imagination and innovation to create impactful campaigns that resonate with consumers and drive results.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M24 6l3.6 10.8H38l-8.8 6.4 3.4 10.4L24 27.2l-8.6 6.4 3.4-10.4L10 16.8h10.4L24 6z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Media Planning Agency",
    desc: "As the best media planning agency in India, Mind Frame India understands the ever-evolving media landscape and stays ahead of the curve, securing the best media placements for your campaigns.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M8 28l10-12 8 6 10-14 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 38h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "PR Agency",
    desc: "Mind Frame India excels in public relations as the best PR agency in India, managing your brand's reputation and building positive relationships with the media and public.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Social Media Marketing Agency",
    desc: "Mind Frame India, the best social media marketing agency in India, understands the power of social platforms in driving engagement and building brand loyalty.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="20" r="4" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Video Production Agency",
    desc: "Mind Frame India is the preferred choice for businesses seeking the best video production agency in India. Our talented team brings your vision to life on the screen.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <rect x="6" y="12" width="28" height="24" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M34 20l8-4v12l-8-4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: "What is a PPC agency?",
    answer:
      "A PPC agency manages paid campaigns on Google and other platforms to drive targeted traffic and conversions.",
  },
  {
    question: "What does a PPC management company do?",
    answer:
      "A PPC management company creates, monitors, and optimizes ad campaigns to improve return on ad spend.",
  },
  {
    question: "What is a Google PPC agency?",
    answer:
      "A Google PPC agency specializes in Google Ads campaigns including search, display, shopping, and remarketing.",
  },
  {
    question: "What are PPC management services?",
    answer:
      "PPC management services include keyword research, ad creation, bid optimization, tracking, and reporting.",
  },
  {
    question: "What is a paid media agency?",
    answer:
      "A paid media agency manages advertising across Google Ads, Meta Ads, YouTube, and other paid channels.",
  },
  {
    question: "What is a paid advertising agency?",
    answer:
      "A paid advertising agency helps businesses run campaigns that pay for placement and reach the right audience faster.",
  },
  {
    question: "What are digital advertising agencies?",
    answer:
      "Digital advertising agencies create and manage online ad campaigns to generate measurable results.",
  },
  {
    question: "What is PPC in digital marketing?",
    answer:
      "PPC in digital marketing means pay-per-click advertising where you pay only when someone clicks your ad.",
  },
  {
    question: "What is Google Ads in digital marketing?",
    answer:
      "Google Ads in digital marketing helps businesses appear at the top of search results and reach people actively searching for their services.",
  },
  {
    question: "What is a PPC agency near me?",
    answer:
      "A PPC agency near you provides local support for Google Ads and paid campaign management.",
  },
  {
    question: "What is a PPC agency in Mumbai?",
    answer:
      "A PPC agency in Mumbai manages Google and Meta ad campaigns for local businesses to drive targeted traffic, leads, and sales.",
  },
  {
    question: "What is a Google Ads agency?",
    answer:
      "A Google Ads agency plans, runs, and optimizes search, display, shopping, and remarketing campaigns to maximize return on ad spend.",
  },
  {
    question: "What is a Google Ads agency in Mumbai?",
    answer:
      "A Google Ads agency in Mumbai helps local businesses appear at the top of search results and reach customers actively searching nearby.",
  },
  {
    question: "What is a Meta ads agency?",
    answer:
      "A Meta ads agency creates and manages advertising campaigns on Facebook and Instagram to drive clicks, leads, and sales.",
  },
  {
    question: "What is remarketing in PPC?",
    answer:
      "Remarketing in PPC shows ads to people who already visited your website, encouraging them to return and convert.",
  },
  {
    question: "What is display advertising?",
    answer:
      "Display advertising places visual banner ads on websites and apps across the Google Display Network to build awareness and reach.",
  },
  {
    question: "What is YouTube advertising?",
    answer:
      "YouTube advertising runs video ads before or during YouTube content to reach a large, targeted audience cost-effectively.",
  },
  {
    question: "What is cost per click (CPC)?",
    answer:
      "Cost per click (CPC) is the amount you pay each time someone clicks your ad in a pay-per-click campaign.",
  },
  {
    question: "What is return on ad spend (ROAS)?",
    answer:
      "Return on ad spend (ROAS) measures the revenue earned for every unit of currency spent on advertising.",
  },
  {
    question: "What is a quality score in Google Ads?",
    answer:
      "Quality score in Google Ads rates the relevance of your keywords, ads, and landing pages, affecting cost and ad position.",
  },
  {
    question: "What is conversion tracking?",
    answer:
      "Conversion tracking measures the actions users take after clicking an ad, such as purchases or form fills, to show campaign performance.",
  },
  {
    question: "What is programmatic advertising?",
    answer:
      "Programmatic advertising uses automated technology to buy and place digital ads in real time to the right audience.",
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

function CityCard({ city }) {
  return (
    <div className="city-card">
      <div className="city-icon">{city.icon}</div>
      <h3 style={styles.cardTitle}>{city.city}</h3>
      <p style={styles.body}>{city.desc}</p>
    </div>
  );
}

function ExpertiseCard({ service }) {
  return (
    <div className="expertise-card">
      <div className="expertise-icon">{service.icon}</div>
      <h3 style={{ ...styles.cardTitle, fontSize: "18px", margin: "16px 0 10px" }}>{service.title}</h3>
      <p style={{ ...styles.body, fontSize: "13px", textAlign: "center" }}>{service.desc}</p>
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
          id={`adv-faq-btn-${index}`}
          aria-controls={`adv-faq-panel-${index}`}
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
        id={`adv-faq-panel-${index}`}
        aria-labelledby={`adv-faq-btn-${index}`}
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

export default function AdvertisingServices() {
  return (
    <>

      <SEO 
        title={seoConfig.services.advertisingServices.title}
        description={seoConfig.services.advertisingServices.description}
        keywords={seoConfig.services.advertisingServices.keywords}
        path={seoConfig.services.advertisingServices.path}
      />
      
    <div style={styles.page}>
      <style>
        {`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          .city-card {
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
          .city-card:hover {
            box-shadow: 0 20px 40px rgba(176, 141, 87, 0.12);
            transform: translateY(-6px);
            border-color: #b08d57;
          }
          .city-icon {
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
          }
          .city-card:hover .city-icon {
            transform: scale(1.08) rotate(-3deg);
          }
          .city-icon svg stroke {
            transition: stroke 0.3s ease;
          }
          .city-card:hover .city-icon svg stroke {
            stroke: #9a7842;
          }

          .expertise-card {
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
          .expertise-card:hover {
            box-shadow: 0 15px 30px rgba(176, 141, 87, 0.1);
            transform: translateY(-4px);
            border-color: #b08d57;
          }
          .expertise-icon {
            transition: transform 0.3s ease;
          }
          .expertise-card:hover .expertise-icon {
            transform: scale(1.05);
          }

          .cities-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 28px;
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px 24px 60px;
          }

          .expertise-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 24px 60px;
          }

          @media (max-width: 1100px) {
            .cities-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }
          }
          @media (max-width: 900px) {
            .cities-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .expertise-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 640px) {
            .cities-grid, .expertise-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .city-card {
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

          .cities-section {
            background: #f5f3ef;
            padding: 60px 0 40px;
          }

          .expertise-section {
            background: #fff;
            padding: 60px 0 40px;
          }

          .atl-section {
            background: #f5f3ef;
            padding: 60px 24px;
            text-align: center;
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
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=85"
          alt="Advertising Services"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay">
          <div className="hero-title">
            Best Advertising Services<br />Across India
          </div>
          <div className="hero-subtitle">CREATIVE EXCELLENCE • STRATEGIC THINKING • OUTSTANDING RESULTS</div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="intro-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
            As a metro city advertising agency, Mind Frame India excels in delivering top-notch services that cater to the unique demands of urban markets. Mind Frame India understands the pulse of the city and provides tailored solutions that resonate with the local audience. If you're in Mumbai and seeking the best advertising services, look no further than Mind Frame India. We offer comprehensive solutions that drive results and exceed expectations.
          </p>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
            When it comes to finding the best advertising agency in Mumbai, look no further than Mind Frame India. We bring together creative excellence, strategic thinking, and a passion for delivering outstanding results. Mind Frame India is the preferred choice for businesses seeking the best video production agency in Mumbai. Our talented team brings your vision to life on the screen.
          </p>
        </div>
      </div>

      {/* CITIES SECTION */}
      <div className="cities-section">
        <div style={{ textAlign: "center", marginBottom: "20px", padding: "0 24px" }}>
          <h2 style={styles.goldTitle}>Our Presence Across Major Cities</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, maxWidth: "700px", margin: "16px auto 0", textAlign: "center" }}>
            Whether you're looking for top advertising services in Mumbai, Delhi, Bangalore, Hyderabad, or Dubai
          </p>
        </div>
        <div className="cities-grid">
          {cityServices.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>

      {/* EXPERTISE SECTION */}
      <div className="expertise-section">
        <div style={{ textAlign: "center", marginBottom: "20px", padding: "0 24px" }}>
          <h2 style={styles.goldTitle}>Our Expertise</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, maxWidth: "700px", margin: "16px auto 0", textAlign: "center" }}>
            Mind Frame India takes pride in being the best advertising agency in India with comprehensive range of services
          </p>
        </div>
        <div className="expertise-grid">
          {expertiseServices.map((service) => (
            <ExpertiseCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* ATL MARKETING SECTION */}
      <div className="atl-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={styles.goldTitle}>Role of Above-The-Line Marketing in Your Brand Strategy</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
            Mind Frame India is the go-to ATL agency for brands looking to make a lasting impact through powerful advertising campaigns. When it comes to radio ads, Mind Frame India is at the forefront, creating catchy jingles that leave a lasting impression on listeners. Our jingle production team at Mind Frame India specializes in crafting memorable melodies that capture the essence of your brand.
          </p>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
            Mind Frame India is not just about advertising and media planning; we also excel in the realm of public relations (PR). As the best PR agency in Mumbai, Delhi, Bangalore, Hyderabad, and Dubai, we know the importance of managing your brand's reputation and building positive relationships with the media and public. Our PR experts work tirelessly to craft compelling narratives, handle media inquiries, and create strategic PR campaigns that enhance your brand's image and influence.
          </p>
        </div>
      </div>

      {/* CONCLUSION SECTION */}
      <div className="expertise-section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <p style={{ ...styles.body, fontSize: "15px", lineHeight: 1.8 }}>
            Mind Frame India takes pride in being the best advertising agency in India. With our comprehensive range of services, including digital marketing, creative advertising, video production, media planning, PR, and social media marketing, we offer a one-stop solution for all your advertising needs. Our team of dedicated professionals works passionately to deliver outstanding results and help your brand stand out in the competitive landscape.
          </p>
          <p style={{ ...styles.body, fontSize: "15px", lineHeight: 1.8, marginTop: "24px" }}>
            Whether you are looking for advertising services in Mumbai, Delhi, Bangalore, Hyderabad, or Dubai, Mind Frame India is your trusted partner. We combine creativity, strategy, and data-driven insights to create advertising campaigns that drive results and leave a lasting impact. Choose Mind Frame India as your advertising agency, and let us elevate your brand to new heights of success.
          </p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="faq-section">
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={styles.darkTitle}>Frequently Asked Questions</h2>
          <div style={styles.underline} />
          <p className="faq-intro">
            Common questions about PPC, Google Ads, and paid advertising services for businesses across India and Dubai.
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
          "@id": "https://mindframeindia.com/services/advertising-services#faq",
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