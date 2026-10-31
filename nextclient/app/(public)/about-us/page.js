// 'use client'

// /**
//  * About Page — Updated Design (Mindframe India)
//  */

// import { useEffect, useRef, useState } from 'react';
// import SEO from '@/components/SEO';
// import { seoConfig } from '@/config/seoConfig';

// const gold = '#c9a84c';

// const skills = [
//   { label: 'Digital Marketing', value: 96 },
//   { label: 'Branding Solutions', value: 90 },
//   { label: 'Creative Designing', value: 93 },
//   { label: 'Print Media Creative', value: 89 },
//   { label: '2D / 3D Animation', value: 76 },
//   { label: 'Website Development', value: 95 },
//   { label: 'Mobile App Development', value: 90 },
//   { label: 'Corporate Films & TVCs', value: 80 },
// ];

// const sections = [
//   {
//     title: 'Our Vision',
//     text: `Our vision lies in creating a subtle marketplace for all big-small businesses by providing win-win opportunities in the digital world. We understand our clients' requirements and then serve them a broad spectrum of services blended with creativity, technology, and innovation.`,
//   },
//   {
//     title: 'Our Mission',
//     text: `Our mission is to become a leading Advertising Agency for the top global brands in the market. We have been providing the perfect balance between strategy, creativity, and on-target digital marketing to our clients. And so we look forward to continuing the legacy of delivering the result-oriented services to the business that seek our assistance.`,
//   },
//   {
//     title: 'Our Commitment',
//     text: [
//       `Our Commitment is to give value to your business and help you soar beyond the horizons of success.`,
//       `Together we can develop innovative solutions to all your online and offline advertising and marketing dilemmas. To which, we need you to provide us with sufficient understanding of your business, company, services, products, competitors and the market you operate in.`,
//       `Without this critical information, a plan for a successful advertising campaign is nothing more than a matchstick expecting the sun to ignite it.`,
//     ],
//   },
// ];

// function SkillBar({ label, value, animate }) {
//   return (
//     <div style={{ marginBottom: 18 }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
//         <span style={{ fontSize: 13, color: '#333' }}>{label}</span>
//         <strong style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>{value}%</strong>
//       </div>
//       <div style={{ height: 4, background: '#e0ddd5', overflow: 'hidden' }}>
//         <div
//           style={{
//             height: 4,
//             background: gold,
//             width: animate ? `${value}%` : '0%',
//             transition: 'width 1.2s ease',
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default function About() {
//   const skillsRef = useRef(null);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
//       { threshold: 0.2 }
//     );
//     if (skillsRef.current) observer.observe(skillsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const bodyText = { fontSize: 13, color: '#444', lineHeight: 1.9, margin: '0 0 18px' };

//   return (
//     <>
//       <SEO 
//         title={seoConfig.about.title}
//         description={seoConfig.about.description}
//         keywords={seoConfig.about.keywords}
//         path={seoConfig.about.path}
//       />
//       <div style={{ background: '#f7f6f2', fontFamily: 'Georgia, serif', color: '#1a1a1a', minHeight: '100vh' }}>
//       <style>{`
//         .about-wrapper {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 56px 48px 80px;
//         }

//         .about-top-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 56px;
//           margin-bottom: 64px;
//           align-items: flex-start;
//         }

//         .about-divider {
//           border: none;
//           border-top: 1px solid #ddd;
//           margin: 0 0 48px;
//         }

//         @media (max-width: 768px) {
//           .about-wrapper {
//             padding: 36px 20px 60px;
//           }

//           .about-top-grid {
//             grid-template-columns: 1fr;
//             gap: 40px;
//             margin-bottom: 40px;
//           }

//           .about-title {
//             font-size: 26px !important;
//             margin-bottom: 28px !important;
//           }

//           .about-section-title {
//             font-size: 18px !important;
//           }
//         }

//         @media (max-width: 480px) {
//           .about-wrapper {
//             padding: 28px 16px 48px;
//           }

//           .about-title {
//             font-size: 22px !important;
//           }
//         }
//       `}</style>

//       <div className="about-wrapper">

//         {/* Title */}
//         <h1
//           className="about-title"
//           style={{ fontSize: 32, fontWeight: 900, textAlign: 'center', margin: '0 0 40px', letterSpacing: 0 }}
//         >
//           About Us
//         </h1>

//         {/* Top Two Column */}
//         <div className="about-top-grid">

//           {/* Left: Text */}
//           <div>
//             <p style={bodyText}>
//               Mind Frame India, a leading Agency in the Advertising world, was established on the 6th Oct 2009.
//             </p>
//             <p style={bodyText}>
//               It has a panel of Creative Directors who happen to be marketing evangelists, brand strategists, creative
//               writers & filmmakers by profession. The team has successfully managed to create advertisements for many
//               leading brands including Microsoft, HP, and Dell to name a few. Working with several marketing agencies &
//               media companies helped Mind Frame gain an enormous amount of strategic experience that helped in initiating
//               and accomplishing many successful creative marketing projects.
//             </p>
//             <p style={{ ...bodyText, marginBottom: 0 }}>
//               Mind Frame has sourced the best creative talent in the industry lets it meet the challenges and demands of
//               the advertising world with also servicing the requirements of its clients. Mind Frame team comprises
//               Creative Marketing & Communication Professionals, Art Directors, Business & Creative Heads, Concept
//               Designers, Copywriters, Content Creators, Production Supervisors & Designers who work together to create
//               the most memorable and sophisticated experience for its Clientele.
//             </p>
//           </div>

//           {/* Right: Skill Bars */}
//           <div ref={skillsRef}>
//             {skills.map((s) => (
//               <SkillBar key={s.label} label={s.label} value={s.value} animate={animate} />
//             ))}
//           </div>
//         </div>

//         {/* Vision / Mission / Commitment */}
//         {sections.map((sec, i) => (
//           <div key={i}>
//             <hr className="about-divider" />
//             <div style={{ marginBottom: 52 }}>
//               <h2
//                 className="about-section-title"
//                 style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', margin: '0 0 20px' }}
//               >
//                 {sec.title}
//               </h2>
//               {Array.isArray(sec.text) ? (
//                 sec.text.map((para, j) => (
//                   <p key={j} style={{ fontSize: 13, color: '#444', lineHeight: 1.9, margin: '0 0 10px' }}>
//                     {para}
//                   </p>
//                 ))
//               ) : (
//                 <p style={{ fontSize: 13, color: '#444', lineHeight: 1.9, margin: 0 }}>{sec.text}</p>
//               )}
//             </div>
//           </div>
//         ))}

//       </div>
//       </div>
//     </>
//   );
// }


















'use client'

/**
 * About Page — Updated Design (Mindframe India)
 * Includes SEO FAQ section for Mumbai agency keywords
 */

import { useEffect, useRef, useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const gold = '#c9a84c';

const skills = [
  { label: 'Digital Marketing', value: 96 },
  { label: 'Branding Solutions', value: 90 },
  { label: 'Creative Designing', value: 93 },
  { label: 'Print Media Creative', value: 89 },
  { label: '2D / 3D Animation', value: 76 },
  { label: 'Website Development', value: 95 },
  { label: 'Mobile App Development', value: 90 },
  { label: 'Corporate Films & TVCs', value: 80 },
];

const sections = [
  {
    title: 'Our Vision',
    text: `Our vision lies in creating a subtle marketplace for all big-small businesses by providing win-win opportunities in the digital world. We understand our clients' requirements and then serve them a broad spectrum of services blended with creativity, technology, and innovation.`,
  },
  {
    title: 'Our Mission',
    text: `Our mission is to become a leading Advertising Agency for the top global brands in the market. We have been providing the perfect balance between strategy, creativity, and on-target digital marketing to our clients. And so we look forward to continuing the legacy of delivering the result-oriented services to the business that seek our assistance.`,
  },
  {
    title: 'Our Commitment',
    text: [
      `Our Commitment is to give value to your business and help you soar beyond the horizons of success.`,
      `Together we can develop innovative solutions to all your online and offline advertising and marketing dilemmas. To which, we need you to provide us with sufficient understanding of your business, company, services, products, competitors and the market you operate in.`,
      `Without this critical information, a plan for a successful advertising campaign is nothing more than a matchstick expecting the sun to ignite it.`,
    ],
  },
];

const faqs = [
  {
    question: 'Which is the best television advertising agency in Mumbai for TV commercials (TVCs)?',
    answer:
      'Mind Frame India is a leading television advertising agency in Mumbai, offering full-service TV commercial (TVC) production, scripting, media planning, and broadcast campaigns since 2009. Mind Frame India\'s team of creative directors and filmmakers has managed successful campaigns for top brands including Microsoft, HP, and Dell, establishing it as a highly trusted advertising agency in Mumbai.',
  },
  {
    question: 'What TV ad campaign production and media buying services does Mind Frame India offer?',
    answer:
      'Mind Frame India provides end-to-end TV advertising services in Mumbai, including concept development, scriptwriting, video production, post-production, 2D and 3D animation, and media buying/planning. Mind Frame India coordinates campaigns across regional and national TV channels, servicing diverse sectors such as FMCG, real estate, retail, education, and healthcare.',
  },
  {
    question: 'Why is Mind Frame India a leading branding agency and company in Mumbai?',
    answer:
      'Mind Frame India is considered a leading branding agency in Mumbai because it offers comprehensive, data-driven brand identity services including logo design, brand guidelines, visual language, packaging, and communication strategy. The agency collaborates with expert brand strategists, art directors, copywriters, and concept designers to build brands from the ground up, delivering high-impact branding solutions for global companies like Microsoft, Dell, and HP.',
  },
  {
    question: 'What digital marketing and advertising services does Mind Frame India provide in Mumbai?',
    answer:
      'Mind Frame India provides a full suite of digital marketing and advertising services in Mumbai, including search engine optimization (SEO), social media marketing, paid advertising (Google Ads, Meta Ads), content marketing, email marketing, performance analytics, and influencer campaigns. Mind Frame India combines data-driven digital strategies with creative brand storytelling to increase visibility and drive business conversions.',
  },
  {
    question: 'How does Mind Frame India execute media planning and media buying in Mumbai?',
    answer:
      'Mind Frame India executes media planning and media buying by negotiating optimal advertising rates across TV, print, outdoor billboard, digital, and radio platforms. Mind Frame India designs customized media plans tailored to specific target demographics, campaign goals, and budgets, managing local Mumbai advertising as well as pan-India campaigns.',
  },
  {
    question: 'What corporate brand identity and logo design services does Mind Frame India provide?',
    answer:
      'Mind Frame India provides comprehensive brand identity and logo design services, including brand naming, tagline development, color palettes, typography, brand style guides, stationery, signage, and digital assets. Mind Frame India ensures consistent visual communication across online and offline platforms, helping businesses establish brand recognition in Mumbai and across international markets.',
  },
  {
    question: 'Does Mind Frame India provide Augmented Reality (AR) and Virtual Reality (VR) solutions?',
    answer:
      'Yes, Mind Frame India provides interactive Augmented Reality (AR) and Virtual Reality (VR) solutions in Mumbai. The agency builds virtual product demonstrations, 360-degree brand experiences, AR filters, and interactive installations, merging creative advertising concepts with advanced immersive technology to drive consumer engagement.',
  },
  {
    question: 'When was Mind Frame India established and where are its offices located?',
    answer:
      'Mind Frame India was established on October 6, 2009. The agency\'s head office is located in Andheri West, Mumbai, India. Mind Frame India also operates branch offices in Hyderabad (India), Dubai (UAE), and San Ramon, California (USA), offering global advertising and digital marketing solutions.',
  },
];

function SkillBar({ label, value, animate }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: '#333' }}>{label}</span>
        <strong style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>{value}%</strong>
      </div>
      <div style={{ height: 4, background: '#e0ddd5', overflow: 'hidden' }}>
        <div
          style={{
            height: 4,
            background: gold,
            width: animate ? `${value}%` : '0%',
            transition: 'width 1.2s ease',
          }}
        />
      </div>
    </div>
  );
}

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid #ddd',
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
              fontWeight: 700,
              color: '#1a1a1a',
              fontFamily: 'Georgia, serif',
              lineHeight: 1.5,
            }}
          >
            {question}
          </span>
          <span
            style={{
              fontSize: 20,
              color: gold,
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
            color: '#444',
            lineHeight: 1.9,
            margin: '0 0 18px',
            fontFamily: 'Georgia, serif',
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}


export default function About() {
  const skillsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const bodyText = { fontSize: 13, color: '#444', lineHeight: 1.9, margin: '0 0 18px' };

  return (
    <>
      <SEO 
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        path={seoConfig.about.path}
      />
      <div style={{ background: '#f7f6f2', fontFamily: 'Georgia, serif', color: '#1a1a1a', minHeight: '100vh' }}>
      <style>{`
        .about-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 48px 80px;
        }

        .about-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          margin-bottom: 64px;
          align-items: flex-start;
        }

        .about-divider {
          border: none;
          border-top: 1px solid #ddd;
          margin: 0 0 48px;
        }

        .faq-section {
          margin-top: 16px;
        }

        .faq-intro {
          font-size: 13px;
          color: #444;
          line-height: 1.9;
          margin: 0 0 32px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .about-wrapper {
            padding: 36px 20px 60px;
          }

          .about-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          .about-title {
            font-size: 26px !important;
            margin-bottom: 28px !important;
          }

          .about-section-title {
            font-size: 18px !important;
          }
        }

        @media (max-width: 480px) {
          .about-wrapper {
            padding: 28px 16px 48px;
          }

          .about-title {
            font-size: 22px !important;
          }
        }
      `}</style>

      <div className="about-wrapper">

        {/* Title */}
        <h1
          className="about-title"
          style={{ fontSize: 32, fontWeight: 900, textAlign: 'center', margin: '0 0 40px', letterSpacing: 0 }}
        >
          About Us
        </h1>

        {/* Top Two Column */}
        <div className="about-top-grid">

          {/* Left: Text */}
          <div>
            <p style={bodyText}>
              Mind Frame India, a leading Agency in the Advertising world, was established on the 6th Oct 2009.
            </p>
            <p style={bodyText}>
              It has a panel of Creative Directors who happen to be marketing evangelists, brand strategists, creative
              writers & filmmakers by profession. The team has successfully managed to create advertisements for many
              leading brands including Microsoft, HP, and Dell to name a few. Working with several marketing agencies &
              media companies helped Mind Frame gain an enormous amount of strategic experience that helped in initiating
              and accomplishing many successful creative marketing projects.
            </p>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              Mind Frame has sourced the best creative talent in the industry lets it meet the challenges and demands of
              the advertising world with also servicing the requirements of its clients. Mind Frame team comprises
              Creative Marketing & Communication Professionals, Art Directors, Business & Creative Heads, Concept
              Designers, Copywriters, Content Creators, Production Supervisors & Designers who work together to create
              the most memorable and sophisticated experience for its Clientele.
            </p>
          </div>

          {/* Right: Skill Bars */}
          <div ref={skillsRef}>
            {skills.map((s) => (
              <SkillBar key={s.label} label={s.label} value={s.value} animate={animate} />
            ))}
          </div>
        </div>

        {/* Vision / Mission / Commitment */}
        {sections.map((sec, i) => (
          <div key={i}>
            <hr className="about-divider" />
            <div style={{ marginBottom: 52 }}>
              <h2
                className="about-section-title"
                style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', margin: '0 0 20px' }}
              >
                {sec.title}
              </h2>
              {Array.isArray(sec.text) ? (
                sec.text.map((para, j) => (
                  <p key={j} style={{ fontSize: 13, color: '#444', lineHeight: 1.9, margin: '0 0 10px' }}>
                    {para}
                  </p>
                ))
              ) : (
                <p style={{ fontSize: 13, color: '#444', lineHeight: 1.9, margin: 0 }}>{sec.text}</p>
              )}
            </div>
          </div>
        ))}

        {/* ── FAQ Section ── */}
        <hr className="about-divider" />
        <div className="faq-section">
          <h2
            className="about-section-title"
            style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', margin: '0 0 16px' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="faq-intro">
            Everything you need to know about Mind Frame India — Mumbai&apos;s full-service advertising, branding, and digital agency.
          </p>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                "@id": "https://mindframeindia.com/about-us#webpage",
                "url": "https://mindframeindia.com/about-us",
                "name": "About Mindframe India - Our Mission, Vision & Expert Team",
                "description": "Learn about Mindframe India - our history, expertise, and full-service advertising & digital marketing capabilities in Mumbai and globally.",
                "about": {
                  "@id": "https://mindframeindia.com/#organization"
                }
              },
              {
                "@type": "AdvertisingAgency",
                "@id": "https://mindframeindia.com/#organization",
                "name": "Mind Frame India",
                "url": "https://mindframeindia.com",
                "logo": "https://mindframeindia.com/assets/favicon.png",
                "image": "https://mindframeindia.com/og-image.png",
                "foundingDate": "2009-10-06",
                "description": "Mind Frame India is a full-service advertising, branding, and digital marketing agency established in 2009, with offices in Mumbai, Hyderabad, Dubai, and California.",
                "telephone": "+91 9892000733",
                "email": "info@mindframeindia.com",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "6th Floor Bhukanvala Chambers, B-22, Off Link Road, Veera Desai Rd, Andheri West",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400053",
                  "addressCountry": "IN"
                },
                "areaServed": [
                  {
                    "@type": "AdministrativeArea",
                    "name": "Mumbai"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Hyderabad"
                  },
                  {
                    "@type": "Country",
                    "name": "India"
                  },
                  {
                    "@type": "Country",
                    "name": "United Arab Emirates"
                  },
                  {
                    "@type": "Country",
                    "name": "United States"
                  }
                ],
                "knowsAbout": [
                  "Television Advertising",
                  "Digital Marketing",
                  "Branding",
                  "Media Buying",
                  "Media Planning",
                  "Creative Design",
                  "Augmented Reality",
                  "Virtual Reality",
                  "2D Animation",
                  "3D Animation"
                ],
                "sameAs": [
                  "https://www.facebook.com/mindframeindia",
                  "https://twitter.com/mindframeindia",
                  "https://www.instagram.com/mindframeindia",
                  "https://www.linkedin.com/company/mindframe-india"
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://mindframeindia.com/about-us#faq",
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />
    </>
  );
}