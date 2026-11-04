'use client'

import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const styles = {
  page: { fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" },
  goldTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(18px, 2.5vw, 26px)",
    fontWeight: 600, color: "#b08d57",
    textAlign: "center", marginBottom: "10px",
  },
  underline: { width: "60px", height: "2px", background: "#b08d57", margin: "0 auto 20px" },
  body: { fontFamily: "'DM Sans', sans-serif", fontSize: "13.5px", color: "#555", lineHeight: 1.85 },
  pointLabel: {
    fontFamily: "'DM Sans', sans-serif", fontSize: "13.5px",
    fontWeight: 600, color: "#1a1510", marginBottom: "4px",
  },
  sectionWrap: { maxWidth: "960px", margin: "0 auto", padding: "0 24px" },
};

const mediaCards = [
  {
    id: 1,
    title: "Television",
    desc: "We distribute the TV advertisements to the targeted channels to get better connection with the viewers.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <rect x="4" y="8" width="40" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M16 42h16M24 36v6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 20l8 5-8 5V20z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Radio",
    desc: "We feel that Radio is a perfect option for marketers to fulfill all the frequency and creative demands of an advertisement.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <rect x="6" y="18" width="36" height="22" rx="3" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M10 18L32 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="34" cy="29" r="5" stroke="#b08d57" strokeWidth="1.5"/>
        <circle cx="34" cy="29" r="2" fill="#b08d57"/>
        <path d="M12 27h8M12 33h6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Newspaper",
    desc: "We suggest different types of options as we understand that local, regional and national print media has a wider reach than any of the other mediums.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <rect x="4" y="8" width="34" height="36" rx="2" stroke="#b08d57" strokeWidth="1.5"/>
        <rect x="38" y="12" width="6" height="28" rx="1" stroke="#b08d57" strokeWidth="1.5"/>
        <path d="M10 16h22M10 22h22M10 28h14M10 34h14" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="24" y="26" width="8" height="10" rx="1" stroke="#b08d57" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function AboveTheLine() {
  return (
    <>

      <SEO 
        title={seoConfig.services.atl.title}
        description={seoConfig.services.atl.description}
        keywords={seoConfig.services.atl.keywords}
        path={seoConfig.services.atl.path}
      />
      
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .media-card {
          background: #fff;
          border: 1px solid #e8e2d9;
          border-radius: 4px;
          padding: 36px 24px 32px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
          transition: box-shadow .3s, transform .3s, border-color .3s;
        }
        .media-card:hover {
          box-shadow: 0 10px 32px rgba(176,141,87,.13);
          transform: translateY(-4px);
          border-color: #b08d57;
        }
        .media-icon { transition: transform .3s; }
        .media-card:hover .media-icon { transform: scale(1.1); }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 860px) { .grid-3 { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .grid-3 { grid-template-columns: 1fr; } }

        .divider-line {
          border: none;
          border-top: 1px solid #ece7de;
          margin: 0;
        }
      `}</style>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "380px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1400&q=80"
          alt="Above The Line"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6)" }}
        />
        <p style={{
          position: "absolute", top: "14px", left: "50%", transform: "translateX(-50%)",
          fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
          letterSpacing: "1px", color: "rgba(255,255,255,0.55)", whiteSpace: "nowrap",
        }}>Home &nbsp;$&nbsp; Above The Line</p>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ background: "#fff", padding: "60px 0 0" }}>

        {/* Leading ATL Agency */}
        <div style={styles.sectionWrap}>
          <h2 style={styles.goldTitle}>Leading Above The Line Advertising Agency in Mumbai (ATL)</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, marginBottom: "48px" }}>
            We strategize ATL marketing campaign in a way which encourage target audiences to visit stores and actively seek the product. These strategies help companies reach a larger audience and create brand visibility. Our expert team strategizes ATL activities for your brand based on your target group so that your brand gets wider reach, brand building and better connection with the audience.
          </p>
        </div>

        <hr className="divider-line" />

        {/* What is ATL */}
        <div style={{ ...styles.sectionWrap, padding: "44px 24px" }}>
          <h2 style={styles.goldTitle}>What is ATL or Above The Line Marketing?</h2>
          <div style={styles.underline} />
          <p style={styles.body}>
            Above The Line (ATL) marketing refers to mass media campaigns that build brand awareness and captivate a broad audience. Using mediums like television, radio, and newspapers, ATL marketing ensures your brand gets maximum visibility in the most impactful way.
          </p>
        </div>

        <hr className="divider-line" />

        {/* Why ATL Matters */}
        <div style={{ ...styles.sectionWrap, padding: "44px 24px" }}>
          <h2 style={styles.goldTitle}>Why ATL Marketing Matters for Your Brand?</h2>
          <div style={styles.underline} />
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { label: "1. Reach a Larger Audience:", text: "From regional to national levels, ATL campaigns connect your brand to millions in a single broadcast or publication." },
              { label: "2. Build Stronger Brand Recognition:", text: "Hit the airwaves and media where your audience is — ensuring your brand stays top of mind." },
              { label: "3. Encourage Targeted Action:", text: "Our strategies drive not just awareness but active interest, encouraging customers to visit stores and actively seek your product." },
            ].map(({ label, text }) => (
              <div key={label}>
                <p style={styles.pointLabel}>{label}</p>
                <p style={styles.body}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="divider-line" />

        {/* How ATL Works */}
        <div style={{ ...styles.sectionWrap, padding: "44px 24px" }}>
          <h2 style={styles.goldTitle}>How Do ATL Marketing Campaigns Work?</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, marginBottom: "24px" }}>
            Our process combines proven methods and creativity to make your campaigns stand out.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <p style={styles.pointLabel}>1. Targeted Strategy Development</p>
              <p style={styles.body}>We identify your audiences, their preferences, and the best media channels to ensure your campaign hits its mark.</p>
            </div>
            <div>
              <p style={styles.pointLabel}>2. Mass Media Execution</p>
              <p style={styles.body}>We'll launch and manage impactful campaigns via TV, radio, and print, ensuring optimal placement across platforms.</p>
              <div style={{ marginTop: "12px", paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { bold: "Television Advertising:", text: " Tailor TV spots aired on targeted channels that engage your ideal audience." },
                  { bold: "Radio Advertising:", text: " Design high-frequency, creative audio campaigns that resonate with listeners." },
                  { bold: "Print Advertising:", text: " Maximize reach with local, regional, and national publications." },
                ].map(({ bold, text }) => (
                  <p key={bold} style={styles.body}><strong style={{ color: "#1a1510" }}>{bold}</strong>{text}</p>
                ))}
              </div>
            </div>
            <div>
              <p style={styles.pointLabel}>3. Performance Analysis</p>
              <p style={styles.body}>We continuously monitor, analyze, and optimize your ATL campaigns to deliver exceptional results.</p>
            </div>
          </div>
        </div>

        <hr className="divider-line" />

        {/* Why Trust Us */}
        <div style={{ ...styles.sectionWrap, padding: "44px 24px" }}>
          <h2 style={styles.goldTitle}>Why Businesses Trust Us for ATL Marketing?</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, marginBottom: "24px" }}>
            When it comes to successful ATL marketing campaigns, we've got the expertise that delivers.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { label: "1. Tailored for Your Success", text: "Our expert team doesn't believe in one-size-fits-all solutions. We craft customized strategies based on your industry and audience." },
              { label: "2. Proven Reach & Visibility", text: "Work with a team that knows how to leverage media to captivate audiences. Whether it's a national TV advertisement or a regional radio ad, we use creative and analytical expertise to build your brand." },
              { label: "3. Exceptional Support", text: "From planning campaigns to analyzing performance, our team is with you every step of the way." },
            ].map(({ label, text }) => (
              <div key={label}>
                <p style={styles.pointLabel}>{label}</p>
                <p style={styles.body}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="divider-line" />

        {/* ATL Services Offered */}
        <div style={{ ...styles.sectionWrap, padding: "44px 24px" }}>
          <h2 style={styles.goldTitle}>ATL Marketing Services Offered</h2>
          <div style={styles.underline} />

          <div style={{ marginBottom: "32px" }}>
            <p style={{ ...styles.pointLabel, marginBottom: "8px" }}>Full-Service ATL Marketing Solutions</p>
            <p style={{ ...styles.body, marginBottom: "28px" }}>
              At Mindframe, we offer a comprehensive suite of ATL marketing services designed to elevate your brand's presence across mass media platforms. Our goal is to ensure your message reaches the right audience, generating maximum impact for your business.
            </p>

            {[
              { label: "Television Advertising", text: "Harness the power of one of the most influential mediums — television. Our team creates captivating TV commercials and ensures strategic placement on channels that align with your target demographics. Whether it's prime-time slots or regional programming, we tailor our approach to achieve optimal reach and engagement." },
              { label: "Radio Advertising", text: "With radio remaining a trusted source of entertainment and information, we produce memorable audio campaigns that resonate with listeners. From crafting creative jingles to designing persuasive messaging, we ensure your brand's voice is heard loud and clear across the airwaves." },
              { label: "Print Media Advertising", text: "Print media remains a powerful tool for establishing credibility and reaching diverse audiences. Our print ads are strategically placed in newspapers, magazines, and other publications to maximize visibility and drive customer interest." },
              { label: "Creative & Content Development", text: "Our in-house creative team brings your brand's vision to life with compelling visuals and messaging. From scriptwriting to graphic design, we craft campaigns that not only catch attention but also leave a lasting impression." },
              { label: "Campaign Management", text: "We handle every aspect of your campaign, from initial ideation to final execution. Our dedicated managers oversee media buying, scheduling, and coordination to ensure seamless delivery of your ATL strategy." },
            ].map(({ label, text }) => (
              <div key={label} style={{ marginBottom: "20px" }}>
                <p style={{ ...styles.pointLabel, color: "#1a1510" }}>{label}</p>
                <p style={styles.body}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="divider-line" />

        {/* Media Cards */}
        <div style={{ background: "#faf8f5", padding: "48px 24px 64px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div className="grid-3">
              {mediaCards.map(card => (
                <div key={card.id} className="media-card">
                  <div className="media-icon" style={{ marginBottom: "16px" }}>{card.icon}</div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px", fontWeight: 700,
                    color: "#1a1510", marginBottom: "10px",
                  }}>{card.title}</h3>
                  <p style={styles.body}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  
    </>
);
}


