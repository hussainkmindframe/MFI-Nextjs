'use client'

import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const sections = [
  {
    id: "intro",
    content: [
      {
        type: "para",
        text: "Mind Frame India Advertising and Creative Communications Pvt Ltd recognise the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on https://www.mindframeindia.com and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.",
      },
      {
        type: "para",
        text: "Mind Frame India Advertising and Creative Communications Pvt Ltd is an Indian Company registered under the Companies Act, 2013 with its registered office at 302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Morya House, Off Link Road, Andheri (West), Mumbai – 400 053",
      },
    ],
  },
  {
    id: "collect",
    heading: "Information we collect",
    content: [
      { type: "bold-para", bold: "Contact information:", text: " We might collect your name, email, mobile number, phone number, street, city, state, pin code, country, and IP address." },
      { type: "bold-para", bold: "Information you post:", text: " We collect information you post in a public space on our website or on a third-party social media site belonging to Mind Frame India Advertising and Creative Communications Pvt Ltd." },
      { type: "bold-para", bold: "Demographic information:", text: " We may collect demographic information about you or any other information provided by you during the use of our website. We might collect this as a part of a survey as well." },
      { type: "bold-para", bold: "Other information:", text: " If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, the duration of time spent on our website, pages accessed, or what site you visit when you leave us. We might also collect the type of mobile device you are using or the version of the operating system your computer or device is running." },
    ],
  },
  {
    id: "ways",
    heading: "We collect information in different ways.",
    headingStyle: "bold",
    content: [
      { type: "bold-para", bold: "We collect information directly from you:", text: " We collect information directly from you when you fill out the get-in-touch form. We also collect information if ask us a question through phone or email." },
      { type: "bold-para", bold: "We collect information from you passively:", text: " We use tracking tools like Google Analytics, Google Webmaster, browser cookies, and web beacons to collect information about your usage of our website." },
      { type: "bold-para", bold: "We get information about you from third parties:", text: " For example, if you use an integrated social media feature on our websites, The third-party social media site will give us certain information about you. This could include your name and email address." },
    ],
  },
  {
    id: "use",
    heading: "Use of your personal information",
    content: [
      { type: "bold-para", bold: "We use information to contact you:", text: " We might use the information you provide to contact you for business or promotional purposes." },
      { type: "para", text: "We use this information to respond to your requests or questions: We might use your information to get in touch with you or for any other purpose." },
      { type: "para", text: "We use information to improve our products and services: We might use your information to customize your experience with us. This could include displaying content based on your preferences." },
      { type: "para", text: "We use the information to look at site trends and customer interests. We may use your information to make our website and services better. We may combine information we get from you with information about you we get from third parties." },
      { type: "para", text: "We use the information for security purposes. We may use the information to protect our company, our customers, or our website." },
      { type: "para", text: "We use the information for marketing purposes. We might send you information about special promotions or offers. We might also tell you about new features or services. These might be our own offers or services, or third-party offers or services we think you might find interesting." },
      { type: "para", text: "We use information as otherwise permitted by law." },
    ],
  },
  {
    id: "sharing",
    heading: "Sharing of information with third parties.",
    headingStyle: "bold",
    content: [
      { type: "para", text: "We may share information if we think we have to in order to comply with the law or to protect ourselves: We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests it. Or, we might also share information when we are investigating potential fraud." },
      { type: "para", text: "We may share information with any successor to all or part of our business: For example, if part of our business is sold, we may give our customer list as part of that transaction." },
      { type: "para", text: "We may share your information for reasons not described in this policy: We will inform you before we do this." },
    ],
  },
  {
    id: "optout",
    heading: "Email Opt-Out",
    headingStyle: "bold",
    content: [
      { type: "para", text: "You can opt out of receiving our marketing emails. To stop receiving our promotional emails, please email info@mindframeindia.com. It may take about ten days to process your request." },
    ],
  },
  {
    id: "social",
    heading: "Social Media",
    headingStyle: "bold",
    content: [
      { type: "para", text: "Mind Frame India Advertising and Creative Communications Pvt Ltd operates channels, pages and accounts on some social media sites to inform, assist, and engage with you. Mind Frame India Advertising and Creative Communications Pvt Ltd monitors and records comments and posts made on these channels about Mind Frame India Advertising and Creative Communications Pvt Ltd in order to improve its products and services." },
      { type: "para", text: "Please note that you must not communicate with Mind Frame India Advertising and Creative Communications Pvt Ltd through such social media sites the following information: Sensitive personal data includes (i) special categories of personal data meaning any information revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation and (ii) other sensitive personal data such as criminal convictions and offences and national identification number;" },
      { type: "para", text: "Excessive, inappropriate, offensive or insulting information towards individuals." },
      { type: "para", text: "Mind Frame India Advertising and Creative Communications Pvt Ltd is not responsible for any information posted on those sites other than the information posted by its employees on its behalf. Mind Frame India Advertising and Creative Communications Pvt Ltd is only responsible for its own use of the personal data received through such sites" },
    ],
  },
  {
    id: "third",
    heading: "Third-party sites",
    content: [
      { type: "para", text: "If you click on one of the links to third-party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third-party sites." },
    ],
  },
  {
    id: "updates",
    heading: "Updates to this policy",
    content: [
      { type: "para", text: "This Privacy Policy was last updated on 10.6.2022. From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates." },
    ],
  },
  {
    id: "jurisdiction",
    heading: "Jurisdiction",
    headingStyle: "bold",
    content: [
      { type: "para", text: "If you choose to visit the website, your visit and any dispute over privacy are subject to this Policy and the website's terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India." },
      { type: "para", text: "If you have any questions about this Policy or other privacy concerns, you can also email us at info@mindframeindia.com" },
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

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title={seoConfig.privacy.title}
        description={seoConfig.privacy.description}
        keywords={seoConfig.privacy.keywords}
        path={seoConfig.privacy.path}
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
            color: "#111",
            textAlign: "center",
            marginBottom: "36px",
            letterSpacing: "-0.3px",
          }}>
            Privacy Policy
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


