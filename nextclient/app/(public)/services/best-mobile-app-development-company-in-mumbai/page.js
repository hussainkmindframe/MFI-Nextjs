'use client'

import { useState } from "react";
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const reasons = [
  "Increased Brand Visibility.",
  "Initiate Customer Loyalty.",
  "Better Brand Presence.",
  "A Direct Marketing Channel.",
  "Increased Profitability.",
  "Increased Accessibility.",
  "Better Customer Service.",
];

const benefitsFaq = [
  {
    id: 1,
    q: "Apps are a Constant Reminder of your Business",
    a: "Mobile apps reinforce your brand by increasing your visibility. An app gives a business more presence on a phone than a browser bookmark does because it is always visible on the phone's screen. This helps build loyalty with customers because your business is in front of them at all times.",
    defaultOpen: true,
  },
  {
    id: 2,
    q: "Apps Increase Customer Engagement",
    a: "Mobile apps make it easier for customers to browse, shop, and interact with your brand anytime, anywhere. Push notifications keep users engaged and informed about deals, updates, and news directly on their device.",
    defaultOpen: false,
  },
  {
    id: 3,
    q: "Apps Reduce Costs",
    a: "A well-built mobile app can significantly reduce operational costs by automating tasks, reducing customer service overhead, and streamlining communication — saving time and resources for your business.",
    defaultOpen: false,
  },
];

const considerFaq = [
  {
    id: 4,
    q: "Determining How Popular Your App Will Be?",
    a: "Is my app going to be helpful to customers and are people going to use it? The only answer to this question can be found through research. Poll your existing customers and your online visitors and ask the question. This will help you better understand whether there is a market for your app.",
    defaultOpen: true,
  },
  {
    id: 5,
    q: "Defining The Purpose Of Your App",
    a: "What problem does your app solve? Clearly defining the purpose and core value proposition of your app before development begins ensures a focused, user-friendly product that genuinely meets your audience's needs.",
    defaultOpen: false,
  },
  {
    id: 6,
    q: "Allocation Of Time & Resources",
    a: "Developing a quality mobile app takes planning. You need to allocate sufficient time, budget, and the right development team to ensure a polished final product that meets both user expectations and business goals.",
    defaultOpen: false,
  },
  {
    id: 7,
    q: "Your Business Requirements",
    a: "Every business is unique. Understanding your specific requirements — from features and integrations to target platforms — helps tailor the development process and ensures the final app aligns perfectly with your business objectives.",
    defaultOpen: false,
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div style={{
      borderBottom: "1px solid #e8e2d9",
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "12px",
        }}
      >
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          color: "#1a1510",
          lineHeight: 1.4,
        }}>
          {item.q}
        </span>
        <span style={{
          flexShrink: 0,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "1.5px solid #b08d57",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#b08d57",
          fontSize: "16px",
          lineHeight: 1,
          transition: "transform 0.3s",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div style={{
        maxHeight: isOpen ? "300px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13.5px",
          color: "#666",
          lineHeight: 1.8,
          paddingBottom: "18px",
          paddingLeft: "0",
        }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

function AccordionSection({ items }) {
  const [openId, setOpenId] = useState(items.find(i => i.defaultOpen)?.id ?? null);
  return (
    <div>
      {items.map(item => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

export default function MobileAppDevelopment() {
  return (
    <>
      <SEO 
        title={seoConfig.services.appDevelopment.title}
        description={seoConfig.services.appDevelopment.description}
        keywords={seoConfig.services.appDevelopment.keywords}
        path={seoConfig.services.appDevelopment.path}
      />
      <div style={styles.page}>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }

        .store-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #111;
          color: #fff;
          border-radius: 8px;
          padding: 10px 20px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          border: none;
          cursor: pointer;
        }
        .store-btn:hover {
          background: #b08d57;
          transform: translateY(-2px);
        }
        .store-btn-label {
          display: flex;
          flex-direction: column;
        }
        .store-btn-sub {
          font-size: 10px;
          opacity: 0.75;
          letter-spacing: 0.5px;
        }
        .store-btn-main {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
        }

        .info-box {
          background: #fff;
          border: 1px solid #e8e2d9;
          border-radius: 6px;
          padding: 32px 36px;
          margin-bottom: 20px;
          border-left: 3px solid #b08d57;
        }

        .cta-box {
          background: #fff;
          border: 1px solid #e8e2d9;
          border-radius: 6px;
          padding: 40px 36px;
          text-align: center;
        }

        .get-in-touch {
          display: inline-block;
          margin-top: 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #b08d57;
          text-decoration: none;
          border-bottom: 1px solid #b08d57;
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .get-in-touch:hover {
          color: #8a6830;
          border-color: #8a6830;
        }

        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; gap: 32px !important; }
          .hero-img-wrap { max-width: 100% !important; }
          .hero-left { max-width: 100% !important; }
          .store-btns { flex-wrap: wrap; }
        }
        @media (max-width: 560px) {
          .info-box { padding: 24px 20px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div style={{ background: "#f7f5f1", padding: "60px 24px 20px" }}>
        <div
          className="hero-inner"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          {/* Left */}
          <div className="hero-left" style={{ maxWidth: "440px" }}>
            <h1 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 700,
              color: "#1c3266",
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              marginBottom: "28px",
              textTransform: "uppercase",
            }}>
              Mobile App<br />Development
            </h1>

            {/* Store Buttons */}
            <div className="store-btns" style={{ display: "flex", gap: "14px", marginBottom: "32px" }}>
              <button className="store-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M3.18 23.76c.32.18.68.24 1.04.17l10.89-10.89-2.65-2.65L3.18 23.76zM20.48 10.27L17.6 8.61l-3.02 3.02 3.03 3.03 2.9-1.67c.82-.48.82-1.25-.03-1.72zM1.64.18C1.38.46 1.22.88 1.22 1.43v21.14c0 .55.16.97.43 1.25l.07.07 11.85-11.85v-.28L1.71.11l-.07.07zM13.27 7.72L4.22.61c-.36-.26-.74-.3-1.06-.12L13.27 10.62l2.65-2.65-2.65-2.25z"/>
                </svg>
                <span className="store-btn-label">
                  <span className="store-btn-sub">GET IT ON</span>
                  <span className="store-btn-main">Google Play</span>
                </span>
              </button>
              <button className="store-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.73M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="store-btn-label">
                  <span className="store-btn-sub">Download on the</span>
                  <span className="store-btn-main">App Store</span>
                </span>
              </button>
            </div>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              fontStyle: "italic",
              color: "#b08d57",
              lineHeight: 1.5,
              borderBottom: "1px solid #b08d57",
              paddingBottom: "4px",
              display: "inline",
            }}>
              Does your business needs a mobile presence to stay connected with its customers?
            </p>
          </div>

          {/* Right — illustration */}
          <div className="hero-img-wrap" style={{ maxWidth: "520px", flex: "1" }}>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80"
              alt="Mobile App Development"
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
                height: "320px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 24px 80px" }}>

        {/* Benefits intro */}
        <div className="info-box">
          <h2 style={styles.boxHeading}>Benefits of Mobile Apps</h2>
          <p style={{ ...styles.bodyText, marginBottom: "16px" }}>
            Mobility plays a significant role in anyone's life. Almost 70 percent of the world's population is online. There are more mobile devices in the world than desktops and laptops combined.
          </p>
          <p style={styles.bodyText}>
            When it comes to mobile technology, a best mobile app development company can make all the difference. Mobile apps provide a much faster alternative than mobile web browsing. Web browsing requires a user to launch a web browser, enter a URL, and wait for the site to load. In contrast, it only takes a second to launch a mobile app because the majority of the information is stored in the application itself, making it possible to function offline.
          </p>
        </div>

        {/* Reasons list */}
        <div className="info-box">
          <h2 style={{ ...styles.boxHeading, marginBottom: "18px" }}>Few Reasons Why Your Business Needs a Mobile App</h2>
          <ol style={{ paddingLeft: "18px" }}>
            {reasons.map((r, i) => (
              <li key={i} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13.5px",
                color: "#555",
                lineHeight: 2,
              }}>{r}</li>
            ))}
          </ol>
          <p style={{ ...styles.bodyText, marginTop: "20px", fontWeight: 500, color: "#1a1510" }}>
            We develop both Android and iOS Mobile applications.
          </p>
        </div>

        {/* What are the benefits */}
        <div className="info-box">
          <h2 style={{ ...styles.boxHeading, marginBottom: "6px" }}>What are the benefits of having a mobile app?</h2>
          <p style={{ ...styles.bodyText, marginBottom: "20px" }}>
            Mobile apps provide a much faster alternative than mobile web browsing. Web browsing requires a user to launch a web browser, enter a URL and wait for the site to load (providing there is adequate reception), whereas it only takes a second to launch a mobile app because the majority of the information is stored in the application itself making it possible to function offline.
          </p>
          <AccordionSection items={benefitsFaq} />
        </div>

        {/* What to consider */}
        <div className="info-box">
          <h2 style={{ ...styles.boxHeading, marginBottom: "20px" }}>What should be considered before Developing a Mobile App?</h2>
          <AccordionSection items={considerFaq} />
        </div>

        {/* CTA */}
        <div className="cta-box">
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 600,
            color: "#1a1510",
            marginBottom: "20px",
          }}>
            Are you ready to join your Customers in the Mobile App Revolution?
          </h2>
          <div style={styles.divider} />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            color: "#1a1510",
            marginBottom: "6px",
          }}>
            Call us:
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            color: "#b08d57",
            marginBottom: "16px",
            letterSpacing: "0.5px",
          }}>
            MS Ali : +91 9892000733
          </p>
          <p style={{ ...styles.bodyText, marginBottom: "20px" }}>
            To discuss how a mobile app could add value to your business.
          </p>
          <a href="#contact" className="get-in-touch">Get In Touch</a>
        </div>

      </div>
    </div>
    </>
  );
}

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#f5f3ef",
    minHeight: "100vh",
  },
  boxHeading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 600,
    color: "#1a1510",
    marginBottom: "14px",
  },
  bodyText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13.5px",
    color: "#666",
    lineHeight: 1.85,
  },
  divider: {
    width: "36px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 20px",
  },
};


