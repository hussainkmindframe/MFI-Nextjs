'use client'

import { useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="4" y="8" width="40" height="28" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M16 44h16M24 36v8" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 20l5 5-5 5M22 28h8" stroke="#b08d57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Extensive Industry Experience",
    desc: "Creatives Design Agency boasts a team of seasoned professionals with extensive experience in web development. They have successfully worked with clients from various industries, including e-commerce, healthcare, real estate, and more. Their deep industry knowledge allows them to understand the unique requirements of each business and tailor their solutions accordingly.",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="#b08d57" strokeWidth="2"/>
        <path d="M6 16h36M16 6v10" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 28h12M18 34h8" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Customized Website Development",
    desc: "Understanding that every business has its own identity, Creatives Design Agency adopts a personalized approach to website development. They take the time to understand your brand, target audience, and business objectives before crafting a bespoke website that reflects your vision. Whether you need a simple informational website or a complex e-commerce platform, they have the expertise to deliver outstanding results.",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <circle cx="24" cy="24" r="18" stroke="#b08d57" strokeWidth="2"/>
        <path d="M24 6v36M6 24h36" stroke="#b08d57" strokeWidth="2"/>
        <ellipse cx="24" cy="24" rx="10" ry="18" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "Stunning Visual Design",
    desc: "The team at Creatives Design Agency believes that aesthetics play a crucial role in capturing the attention of visitors. They combine stunning visual design elements with intuitive user interfaces to create websites that are visually appealing and easy to navigate. By incorporating your brand elements, they ensure that your website maintains a cohesive and professional look throughout.",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="28" y="6" width="14" height="20" rx="2" stroke="#b08d57" strokeWidth="2"/>
        <rect x="6" y="6" width="18" height="12" rx="2" stroke="#b08d57" strokeWidth="2"/>
        <rect x="6" y="22" width="18" height="20" rx="2" stroke="#b08d57" strokeWidth="2"/>
        <rect x="28" y="30" width="14" height="12" rx="2" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "Mobile-First Approach",
    desc: "With the majority of internet users accessing websites through mobile devices, having a mobile-friendly website is no longer a luxury but a necessity. Creatives Design Agency follows a mobile-first approach, ensuring that your website is fully responsive and optimized for seamless viewing across all screen sizes. This not only enhances user experience but also boosts your website's search engine rankings.",
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <circle cx="20" cy="20" r="13" stroke="#b08d57" strokeWidth="2"/>
        <path d="M30 30l10 10" stroke="#b08d57" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 20h10M20 15v10" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Search Engine Optimization (SEO) Expertise",
    desc: "Creatives Design Agency understands the importance of SEO in driving organic traffic to your website. They employ best practices in on-page optimization, including keyword research, meta tags, and optimized content, to enhance your website's visibility on search engines. By incorporating the relevant keywords strategically, they ensure that your website ranks higher in search results, attracting more potential customers.",
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="4" y="10" width="28" height="20" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M32 18h8a4 4 0 014 4v6a4 4 0 01-4 4H32" stroke="#b08d57" strokeWidth="2"/>
        <circle cx="38" cy="24" r="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M10 38h28" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Seamless Integration and Functionality",
    desc: "A website is more than just a collection of web pages. It needs to seamlessly integrate with other business systems, such as customer relationship management (CRM) software, e-commerce platforms, and payment gateways. Creatives Design Agency excels in developing websites that have seamless integrations and advanced functionality, ensuring a smooth user experience and streamlined business processes.",
  },
  {
    id: 7,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z" stroke="#b08d57" strokeWidth="2"/>
        <path d="M4 24h40M24 4c-5.5 6-8 13-8 20s2.5 14 8 20M24 4c5.5 6 8 13 8 20s-2.5 14-8 20" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "Domain Registration, Hosting & Deployment",
    desc: "We help you design and develop the best website for your business.",
  },
  {
    id: 8,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="10" y="4" width="28" height="40" rx="4" stroke="#b08d57" strokeWidth="2"/>
        <path d="M18 36h12M22 10h4" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <rect x="16" y="16" width="16" height="14" rx="2" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "Mobile App Design & Development",
    desc: "People are engaging with their phones in crucial moments. We make sure to give the best quality of mobile app's user experience.",
  },
  {
    id: 9,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <path d="M6 36h8v4H6zM20 28h8v12h-8zM34 20h8v20h-8z" stroke="#b08d57" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M8 28l8-8 8 4 10-14" stroke="#b08d57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "E-commerce Website Design",
    desc: "We help you in the easiest way to open a store where the whole world can visit and buy your products or services.",
  },
  {
    id: 10,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="4" y="8" width="40" height="32" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M4 16h40" stroke="#b08d57" strokeWidth="2"/>
        <path d="M15 26h18M15 32h12" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="12" r="2" fill="#b08d57"/>
        <circle cx="16" cy="12" r="2" fill="#b08d57"/>
      </svg>
    ),
    title: "Website Development & Maintenance",
    desc: "We develop websites and back-end services so that you don't have to worry about time consuming scripting and programming to build and maintain your website. We are consistent in checking your website if there are any issues and mistakes and keep it updated and relevant.",
  },
  {
    id: 11,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M16 22l6 6 10-10" stroke="#b08d57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 18h36" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "UI / UX Design",
    desc: "Our UI designers make sure the application's interface is attractive, visually-stimulating and themed appropriately to match the purpose. Our UI designers are tasked with deciding how the user interface will look. UX designers are in charge of determining how the user interface operates.",
  },
  {
    id: 12,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <circle cx="24" cy="24" r="18" stroke="#b08d57" strokeWidth="2"/>
        <path d="M24 14v10l7 4" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 36l6-6M40 36l-6-6" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Web Scraping / Competitive Analysis",
    desc: "We develop a website design that has an impressive user interface which will result in a much better conversion rate, and will lead to better business and revenue.",
  },
  {
    id: 13,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M16 24h16M24 18l6 6-6 6" stroke="#b08d57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 18h32" stroke="#b08d57" strokeWidth="2"/>
        <circle cx="13" cy="14" r="2" fill="#b08d57"/>
      </svg>
    ),
    title: "Email Hosting Services",
    desc: "We offer reliable, secure email hosting that helps your brand look sharp. With us, your emails don't just get delivered, they make an impression. It's not just email, it's your brand voice, elevated.",
  },
];

// ── FAQ Data ──
const faqs = [
  {
    question: "What is a digital marketing website?",
    answer: "A digital marketing website is built to generate traffic, capture leads, and convert visitors into customers. Mind Frame India creates digital marketing websites that are optimized for visibility, engagement, and conversions."
  },
  {
    question: "What is a digital agency website?",
    answer: "A digital agency website showcases services, portfolio, client proof, and clear calls to action. Mind Frame India designs digital agency websites that effectively communicate your expertise and drive client inquiries."
  },
  {
    question: "What is a website marketing agency?",
    answer: "A website marketing agency uses SEO, PPC, and content to turn a website into a business growth tool. Mind Frame India offers comprehensive website marketing services to help businesses achieve their online goals."
  },
  {
    question: "What is website marketing for law firms?",
    answer: "Website marketing for law firms uses search, content, and conversion-focused design to generate legal leads. Mind Frame India creates specialized marketing strategies for law firms to attract and convert clients."
  },
  {
    question: "What is a website design and digital marketing company?",
    answer: "A website design and digital marketing company builds websites and promotes them using online marketing strategies. Mind Frame India is a full-service agency that combines expert web design with powerful digital marketing."
  },
  {
    question: "What is a digital marketing website design service?",
    answer: "A digital marketing website design service creates websites that are optimized for visibility and conversions. Mind Frame India designs websites with SEO, user experience, and conversion rate optimization in mind."
  },
  {
    question: "What is a digital agency web design service?",
    answer: "A digital agency web design service focuses on visually strong, user-friendly, and conversion-ready websites. Mind Frame India delivers web design that aligns with your brand and business objectives."
  },
  {
    question: "What is a website and digital marketing service?",
    answer: "A website and digital marketing service combines web development with growth strategies like SEO and PPC. Mind Frame India offers integrated services to ensure your website drives real business results."
  },
  {
    question: "What is a digital web agency?",
    answer: "A digital web agency provides website design, development, and online marketing support. Mind Frame India is a leading digital web agency in Mumbai with expertise across all aspects of web presence."
  },
  {
    question: "What is a web design marketing agency?",
    answer: "A web design marketing agency builds websites that support brand growth and lead generation. Mind Frame India creates websites that are both visually stunning and optimized for marketing success."
  },
  {
    question: "What is a web development company in Mumbai?",
    answer: "A web development company in Mumbai designs and builds websites for local businesses, often alongside SEO and digital marketing support. Mind Frame India is a trusted web development company in Mumbai with years of experience."
  },
  {
    question: "What is responsive web design?",
    answer: "Responsive web design ensures a website adapts and works smoothly across mobile, tablet, and desktop screens. Mind Frame India follows a mobile-first approach to deliver seamless user experiences on all devices."
  },
  {
    question: "What is a landing page?",
    answer: "A landing page is a single focused web page built to convert campaign traffic toward one action, like a form or purchase. Mind Frame India creates high-converting landing pages for PPC, email, and social media campaigns."
  },
  {
    question: "What is a WordPress development agency?",
    answer: "A WordPress development agency builds and customizes websites on WordPress, the most widely used content management system. Mind Frame India offers expert WordPress development services for businesses of all sizes."
  },
  {
    question: "What is a Shopify development agency?",
    answer: "A Shopify development agency builds and customizes online stores on Shopify for ecommerce businesses. Mind Frame India creates Shopify stores that are secure, fast, and optimized for sales."
  },
  {
    question: "What is ecommerce website development?",
    answer: "Ecommerce website development builds online stores with product catalogs, secure payments, and conversion-focused design. Mind Frame India develops ecommerce websites that drive sales and customer loyalty."
  },
  {
    question: "What is UI/UX design?",
    answer: "UI/UX design shapes how a website or app looks and feels so it is easy, intuitive, and enjoyable to use. Mind Frame India creates user-centered designs that enhance engagement and conversions."
  },
  {
    question: "What is a website maintenance service?",
    answer: "A website maintenance service keeps your site secure, updated, fast, and running smoothly after launch. Mind Frame India offers ongoing maintenance to ensure your website performs at its best."
  },
  {
    question: "What is a website redesign service?",
    answer: "A website redesign service modernizes an existing site's design, speed, and usability while protecting its SEO value. Mind Frame India delivers website redesigns that boost performance and user satisfaction."
  },
  {
    question: "What is website speed optimization?",
    answer: "Website speed optimization improves load times through better code, images, and hosting, boosting rankings and conversions. Mind Frame India optimizes websites for lightning-fast performance."
  },
  {
    question: "What is a mobile app development company?",
    answer: "A mobile app development company designs, builds, tests, and launches apps for iOS and Android. Mind Frame India offers end-to-end mobile app development services for businesses seeking to expand their mobile presence."
  },
  {
    question: "What is a mobile app development company in Mumbai?",
    answer: "A mobile app development company in Mumbai builds iOS and Android apps for local businesses, from concept to launch and support. Mind Frame India is a leading mobile app development company in Mumbai with a proven track record."
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
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 600,
    color: "#b08d57",
    marginBottom: "12px",
  },
  titleUnderline: {
    width: "40px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 20px",
  },
  bodyText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.85,
    maxWidth: "860px",
    margin: "0 auto",
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    fontWeight: 600,
    color: "#1a1510",
    marginBottom: "12px",
    lineHeight: 1.3,
  },
  cardDesc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    color: "#777",
    lineHeight: 1.75,
  },
};

export default function WebDevelopment() {
  return (
    <>
      <SEO 
        title={seoConfig.services.webDevelopment.title}
        description={seoConfig.services.webDevelopment.description}
        keywords={seoConfig.services.webDevelopment.keywords}
        path={seoConfig.services.webDevelopment.path}
      />
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .service-card {
          background: #fff;
          border: 1px solid #e8e2d9;
          border-radius: 6px;
          padding: 36px 28px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }
        .service-card:hover {
          box-shadow: 0 8px 32px rgba(176,141,87,0.14);
          transform: translateY(-5px);
          border-color: #b08d57;
        }
        .svc-icon {
          margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .service-card:hover .svc-icon {
          transform: scale(1.12);
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
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
          margin-top: 60px;
        }

        @media (max-width: 900px) {
          .grid-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .grid-3 { grid-template-columns: 1fr; }
          .faq-container { padding: 0 0 0px; }
        }
      `}</style>

      {/* HERO */}
      <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80"
          alt="Web Design"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 24px",
        }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 9vw, 110px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-1px",
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
          }}>
            Web <span style={{ color: "#b08d57" }}>Design</span>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#b08d57",
            marginTop: "20px",
          }}>
            Creating Engaging and Effective Web Solutions
          </p>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Intro */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h2 style={styles.sectionTitle}>Creating Engaging and Effective Web Solutions</h2>
          <div style={styles.titleUnderline} />
          <p style={styles.bodyText}>
            In today's digital age, having a strong online presence is crucial for businesses to succeed. A well-designed and optimized website can be a powerful tool for attracting customers and generating leads. When it comes to website development in Mumbai, you need a reliable agency that understands the dynamics of the local market and can deliver top-notch solutions. In this article, we will explore the best website development agency in Mumbai that excels in creating engaging and effective web solutions.
          </p>
        </div>

        {/* Power of Web */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h2 style={styles.sectionTitle}>The Power of Web Design and Development</h2>
          <div style={styles.titleUnderline} />
          <p style={styles.bodyText}>
            Web design and development play a pivotal role in shaping a user's perception of your brand. A visually appealing and user-friendly website can leave a lasting impression, driving conversions and fostering customer loyalty. It is essential to partner with a website development agency that has a deep understanding of design principles, user experience, and search engine optimization (SEO). By leveraging the expertise of such an agency, you can ensure that your website stands out in the competitive online landscape.
          </p>
        </div>

        {/* Meet */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={styles.sectionTitle}>Meet the Best Website Development Agency in Mumbai</h2>
          <div style={styles.titleUnderline} />
          <p style={styles.bodyText}>
            Creatives Design Agency is the epitome of excellence when it comes to website development in Mumbai. With their innovative approach and meticulous attention to detail, they have earned a reputation for delivering outstanding web solutions that align with their clients' business goals. Let's delve into what sets them apart from the competition.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid-3">
          {services.map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="svc-icon">{svc.icon}</div>
              <h3 style={styles.cardTitle}>{svc.title}</h3>
              <p style={styles.cardDesc}>{svc.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ── FAQ SECTION ── */}
      <div className="faq-section">
        <div className="faq-container">
          <h2 className="faq-section-title">Frequently Asked Questions</h2>
          <div style={styles.titleUnderline} />
          <p className="faq-intro">
            Everything you need to know about Mind Frame India's web development, website design, and digital marketing services in Mumbai.
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