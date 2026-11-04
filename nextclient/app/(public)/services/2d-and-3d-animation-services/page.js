'use client'

import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

export default function Animation() {
  return (
    <>

      <SEO 
        title={seoConfig.services.animation.title}
        description={seoConfig.services.animation.description}
        keywords={seoConfig.services.animation.keywords}
        path={seoConfig.services.animation.path}
      />
      
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* HERO */
        .an-hero {
          position: relative;
          height: 480px;
          overflow: hidden;
        }
        .an-hero img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 40%;
        }
        .an-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%);
          display: flex; align-items: center; justify-content: center; flex-direction: column;
        }
        .an-breadcrumb {
          position: absolute; top: 20px; left: 0; right: 0;
          text-align: center; font-size: 11px;
          letter-spacing: 2.5px; color: rgba(255,255,255,0.65);
          text-transform: uppercase;
        }
        .an-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(28px, 5vw, 58px);
          font-weight: 800; color: #fff;
          letter-spacing: -1.5px; line-height: 1.15;
          text-align: center; max-width: 860px; padding: 0 24px;
        }
        .an-hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(13px, 1.8vw, 19px);
          color: #b08d57; margin-top: 18px;
          letter-spacing: 4px; text-transform: uppercase;
        }

        /* CONTENT WRAPPER */
        .an-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 80px 80px;
        }

        /* MAIN GOLD HEADING */
        .an-main-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700; color: #b08d57;
          text-align: center;
          margin-bottom: 12px;
          line-height: 1.35;
        }
        .an-gold-line {
          width: 55px; height: 2px;
          background: #b08d57;
          margin: 0 auto 28px;
        }

        /* BODY TEXT */
        .an-body {
          font-size: 13.5px; font-weight: 300;
          color: #555; line-height: 1.85;
          text-align: left; margin-bottom: 0;
        }

        /* SUB SECTION */
        .an-sub {
          margin-top: 48px;
        }
        .an-sub-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 2.4vw, 26px);
          font-weight: 600; color: #b08d57;
          text-align: center; margin-bottom: 12px;
        }

        /* CLOSING LINE */
        .an-closing {
          margin-top: 20px;
          font-size: 13.5px; font-weight: 300;
          color: #555; line-height: 1.85;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .an-hero { height: 300px; }
          .an-content { padding: 52px 24px 60px; }
        }
      `}</style>

      {/* HERO */}
      <div className="an-hero">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=85"
          alt="2D 3D Animation Services Mumbai"
        />
        <div className="an-hero-overlay">
          <div className="an-hero-title">2D / 3D Animation Services in Mumbai</div>
          <div className="an-hero-subtitle">CREATIVITY MEETS TECHNICAL EXCELLENCE</div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="an-content">

        {/* Main heading + intro */}
        <h2 className="an-main-heading">We Provide Cost Effective 2D/3D Animation Services in Mumbai</h2>
        <div className="an-gold-line" />
        <p className="an-body">
          Mind Frame India excels at producing both 2D and 3D animations tailored to meet the unique demands of each platform. This is true whether it's film, motion graphics, Facebook, or YouTube. We are dedicated to crafting high-quality videos that capture and forge a profound emotional connection with your audience. To convey your message effectively, we apply creativity and technical excellence to all our projects.
        </p>

        {/* Our Services */}
        <div className="an-sub">
          <h3 className="an-sub-heading">Our Services</h3>
          <div className="an-gold-line" />
          <p className="an-body">
            We provide all animation services, from concept to completion. Our team of experienced animators has the expertise to bring any idea to life. We guarantee satisfaction with every project. Our animators are highly skilled and proficient in the latest techniques. They are committed to providing the highest quality of work and customer satisfaction. We look forward to working with you on your next project!
          </p>
        </div>

        {/* 2D Animation */}
        <div className="an-sub">
          <h3 className="an-sub-heading">2D Animation Services</h3>
          <div className="an-gold-line" />
          <p className="an-body">
            2D animation brings ideas to life engagingly and vibrantly. Whether it's character animation, explainer videos, or commercials, our team utilizes advanced techniques to produce visually appealing and communicative animations. The goal of our 2D animation services is to convey your story effectively and leave a lasting impression on your audience.
          </p>
        </div>

        {/* 3D Animation */}
        <div className="an-sub">
          <h3 className="an-sub-heading">3D Animation Services</h3>
          <div className="an-gold-line" />
          <p className="an-body">
            Our 3D animation services delve into realism, creating immersive experiences that capture audiences. From architectural visualizations to complex simulations, our team uses cutting-edge technology to create lifelike animations that are both stunning and informative. Each project is tailored to your specific needs, ensuring a final product that looks incredible and serves your communication goals.
          </p>
        </div>

        {/* Motion Graphics */}
        <div className="an-sub">
          <h3 className="an-sub-heading">Motion Graphics</h3>
          <div className="an-gold-line" />
          <p className="an-body">
            Motion graphics are an excellent way to capture attention and convey messages quickly. Our design team specializes in creating dynamic and striking motion graphics that enhance your content's visual appeal. By combining design elements with kinetic typography and sound, we ensure your message stands out and resonates with your audience.
          </p>
        </div>

        {/* Animation for Social Media */}
        <div className="an-sub">
          <h3 className="an-sub-heading">Animation For Social Media Content</h3>
          <div className="an-gold-line" />
          <p className="an-body">
            In today's digital age, a strong social media presence is imperative. We create tailor-made animations optimized for platforms like Facebook, Instagram, and YouTube, helping you reach your target audience effectively. Our expertise in social media trends allows us to craft content that is engaging and shared well, boosting your online presence and community engagement.
          </p>
          <p className="an-closing">
            Collaborate with us to transform your ideas into compelling visual stories that leave a mark. Let our expertise guide you to new heights of creativity and connect with audiences like never before.
          </p>
        </div>

      </div>
    </div>
  
    </>
);
}


