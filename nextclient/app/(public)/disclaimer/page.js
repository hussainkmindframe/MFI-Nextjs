'use client'

import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const sections = [
  {
    id: "intro",
    content: [
      {
        type: "para",
        text: "Mind Frame India is committed to transparency and integrity in all our business operations. We are aware of the unfortunate rise in fraudulent activities where individuals are being misled by unauthorized entities claiming to represent Mind Frame. We want to caution our stakeholders and the public at large.",
      },
    ],
  },
  {
    id: "no-job",
    content: [
      {
        type: "bold-para",
        bold: "No Job Promises or Payments:",
        text: " Mind Frame India does not promise job placements or collect any form of payment for job opportunities. We do not endorse or authorize any person or entity to solicit payments on our behalf for employment purposes.",
      },
    ],
  },
  {
    id: "official-channels",
    content: [
      {
        type: "bold-para",
        bold: "Official Communication Channels:",
        text: "All official communication from Mind Frame India will be conducted through our official channels, including our website, official email addresses, and authorized social media profiles.",
      },
    ],
  },
  {
    id: "no-wfh",
    content: [
      {
        type: "bold-para",
        bold: "No Work-from-Home Opportunities:",
        text: "Mind Frame India does not engage in any work-from-home opportunity calls. We caution individuals against responding to unsolicited communication promising work-from-home opportunities on behalf of Mind Frame.",
      },
    ],
  },
  {
    id: "no-google",
    content: [
      {
        type: "bold-para",
        bold: "No Google Reviews Business:",
        text: "Mind Frame India does not engage in any business related to soliciting or enticing individuals for paid Google reviews. We do not endorse or authorize any person or entity claiming to be associated with us for such activities.",
      },
    ],
  },
  {
    id: "no-liability-1",
    content: [
      {
        type: "bold-para",
        bold: "No Liability for Unauthorized Actions:",
        text: "Mind Frame India disclaims any liability for unauthorized actions taken by individuals or entities claiming to represent us in matters related to job promises, work-from-home opportunities, or paid Google reviews.",
      },
    ],
  },
  {
    id: "reporting",
    content: [
      {
        type: "bold-para",
        bold: "Reporting Fraudulent Calls:",
        text: "Individuals who encounter any suspicious communication related to job promises, work-from-home opportunities, or paid reviews claiming association with Mind Frame India are encouraged to report such incidents to the nearby cyber police in Mumbai.",
      },
    ],
  },
  {
    id: "no-investment",
    content: [
      {
        type: "bold-para",
        bold: "No Investment Solicitation:",
        text: "Mind Frame India does not engage in any form of investment solicitation. We do not endorse or authorize any person or entity to solicit investments on our behalf.",
      },
    ],
  },
  {
    id: "vigilant",
    content: [
      {
        type: "bold-para",
        bold: "Be Vigilant:",
        text: "Be cautious of unsolicited communications claiming to be from Mind Frame India. We do not make unsolicited calls or send messages to individuals for investment purposes.",
      },
    ],
  },
  {
    id: "verify",
    content: [
      {
        type: "bold-para",
        bold: "Verify Before You Trust:",
        text: "Before responding to any investment-related communication, please verify the legitimacy of the source. Contact Mind Frame directly through our official contact information to confirm the authenticity of any investment-related communication.",
      },
    ],
  },
  {
    id: "no-liability-2",
    content: [
      {
        type: "bold-para",
        bold: "No Liability for Unauthorized Actions:",
        text: "Mind Frame India disclaims any liability for unauthorized actions taken by individuals or entities claiming to represent us. We are not responsible for any losses incurred as a result of fraudulent activities conducted by unauthorized parties.",
      },
    ],
  },
  {
    id: "report-suspicious",
    content: [
      {
        type: "bold-para",
        bold: "Report Suspicious Activities:",
        text: "If you encounter any suspicious communication or activities claiming to be associated with Mind Frame India, please report it to us immediately. Your cooperation helps us in maintaining the trust and security of our stakeholders.",
      },
    ],
  },
  {
    id: "no-job-2",
    content: [
      {
        type: "bold-para",
        bold: "No Job Promises or Payments:",
        text: "Mind Frame India does not promise job placements or collect any form of payment for job opportunities. We do not endorse or authorize any person or entity to solicit payments on our behalf for employment purposes.",
      },
    ],
  },
  {
    id: "no-wfh-2",
    content: [
      {
        type: "bold-para",
        bold: "No Work-from-Home Opportunities:",
        text: "Mind Frame India does not engage in any work-from-home opportunity calls. We caution individuals against responding to unsolicited communication promising work-from-home opportunities on behalf of Mind Frame.",
      },
    ],
  },
  {
    id: "contact-info",
    content: [
      { type: "bold-para", bold: "Official Website:", text: " www.mindframeindia.com" },
      { type: "bold-para", bold: "Email:", text: " info@mindframeindia.com or careers@mindframindia.com" },
      { type: "bold-para", bold: "Phone:", text: " 022-40125517" },
    ],
  },
  {
    id: "legal",
    content: [
      {
        type: "para",
        text: "Mind Frame India urges individuals to exercise due diligence and caution to protect themselves from potential fraudulent schemes. We reserve the right to take legal action against those engaged in unauthorized activities claiming affiliation with Mind Frame India.",
      },
    ],
  },
  {
    id: "note",
    content: [
      {
        type: "bold-para",
        bold: "Note:",
        text: " Mind Frame India will not be liable for any losses incurred due to fraudulent activities carried out by unauthorized individuals or entities. Individuals are advised to report any fraudulent calls to the appropriate law enforcement authorities.",
      },
    ],
  },
];

const body = {
  fontFamily: "'Georgia', 'Times New Roman', serif",
  fontSize: "14px",
  color: "#333",
  lineHeight: 1.85,
  marginBottom: "14px",
};

function renderContent(item, i) {
  if (item.type === "para") {
    return <p key={i} style={body}>{item.text}</p>;
  }
  if (item.type === "bold-para") {
    return (
      <p key={i} style={body}>
        <strong style={{ fontWeight: 700, color: "#111" }}>{item.bold}</strong>
        {item.text}
      </p>
    );
  }
  return null;
}

export default function disclaimer() {
  return (
    <>
     <SEO 
  title={seoConfig.disclaimer.title}
  description={seoConfig.disclaimer.description}
  keywords={seoConfig.disclaimer.keywords}
  path={seoConfig.disclaimer.path}
/>
      <div style={{ background: "#f9f8f6", minHeight: "100vh", padding: "60px 24px 80px" }}>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
        `}</style>

        <div style={{ maxWidth: "900px", margin: "0 auto", background: "#fff", padding: "48px 64px 64px", borderRadius: "2px" }}>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 700,
            color: "#c9a84c",        // gold color
            textAlign: "center",
            marginBottom: "36px",
            letterSpacing: "-0.3px",
          }}>
           Beware of Fraudulent Activities

          </h1>

          {sections.map(section => (
            <div key={section.id} style={{ marginBottom: "28px" }}>
              {section.heading && (
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: section.headingStyle === "bold" ? 700 : 600,
                  color: "#111",
                  marginBottom: "10px",
                  marginTop: "6px",
                }}>
                  {section.heading}
                </p>
              )}
              {section.content.map((item, i) => renderContent(item, i))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


