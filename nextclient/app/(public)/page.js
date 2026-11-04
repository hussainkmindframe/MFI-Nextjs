'use client'

/**
 * Home Page — Fully Responsive (Mindframe India)
 * Sections (top to bottom):
 * 1. Hero — background video + overlay heading
 * 2. Intro text + Quick Contact Form
 * 3. Core Services (numbered 3-col)
 * 4. Current Campaigns (3-col image grid)
 * 5. Our Work (YouTube 3-col)
 * 6. Behind The Scenes (YouTube 3-col)
 * 7. TV Commercials (YouTube 3-col)
 * 8. Celebrity Shoot (auto-slide photo carousel)
 * 9. Outdoor & Print Media (4-col grid)
 * 10. Testimonials component
 */


import { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import { organizationSchema } from '@/components/SEO';
import contactService from '@/services/contactService';
import Testimonial from '@/components/Testimonial';


const gold = '#c9a84c';

// Celebrity photos array using string paths
const celebrityPhotos = [
  '/assets/celebrity/clb-1.jpg', '/assets/celebrity/clb-2.jpg', '/assets/celebrity/clb-3.jpg', '/assets/celebrity/clb-4.jpg', '/assets/celebrity/clb-5.jpg', '/assets/celebrity/clb-6.jpg',
  '/assets/celebrity/clb-7.jpg', '/assets/celebrity/clb-8.jpg', '/assets/celebrity/clb-9.jpg', '/assets/celebrity/clb-10.jpg', '/assets/celebrity/clb-11.jpg', '/assets/celebrity/clb-12.jpg'
];


const sectionTitle = (text) => (
  <div style={{ textAlign: 'center', marginBottom: 48 }}>
    <h2 style={{ 
      fontSize: 'clamp(28px, 5vw, 38px)', 
      fontWeight: 900, 
      fontFamily: 'Georgia, serif', 
      color: '#1a1a1a', 
      margin: '0 0 12px', 
      letterSpacing: -0.5 
    }}>
      {text}
    </h2>
    <div style={{ width: 60, height: 2, background: gold, margin: '0 auto' }} />
  </div>
);

// ─── YouTube Embed ───────────────────────────────────────────────────────────
// function YTEmbed({ videoId, title }) {
//   return (
//     <div style={{ borderRadius: 4, overflow: 'hidden', background: '#000', aspectRatio: '16/9', width: '100%' }}>
//       <iframe
//         width="100%"
//         height="100%"
//         src={`https://www.youtube.com/embed/${videoId}`}
//         title={title}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         style={{ display: 'block' }}
//       />
//     </div>
//   );
// }


// ─── YouTube Embed (Lazy / Click-to-Load) ────────────────────────────────────
function YTEmbed({ videoId, title }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{ borderRadius: 4, overflow: 'hidden', background: '#000', aspectRatio: '16/9', width: '100%', position: 'relative', cursor: 'pointer' }}
      onClick={() => setLoaded(true)}
    >
      {!loaded ? (
        <>
          {/* Thumbnail image instead of iframe */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Play button overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.3)',
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'rgba(255,0,0,0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {/* Triangle play icon */}
              <div style={{
                width: 0, height: 0,
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                borderLeft: '22px solid white',
                marginLeft: 4,
              }} />
            </div>
          </div>
        </>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: 'block', position: 'absolute', inset: 0 }}
        />
      )}
    </div>
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
const Section = ({ children, bg = '#fff', py = 72 }) => (
  <section style={{ background: bg, padding: `${py}px 0` }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
      {children}
    </div>
  </section>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const coreServices = [
  {
    num: '01',
    tag: 'BRAND IDENTITY',
    title: 'Set Yourself Apart',
    desc: 'As the best advertising and brand identity agency in Mumbai, we understand, analyze, and then build a compelling identity for your brand. By doing this, we help you create a truly considered, cohesive, and integrated brand identity that sets you apart from your competitors in the most aggressive market.',
  },
  {
    num: '02',
    tag: 'CREATIVE COMMUNICATION',
    title: 'Creations that Communicate Brand Persona',
    desc: 'Creative Communication can be the strongest pillar of your brand. We create communications that inform, engage and motivate your target audience to think about your brand in the very first place. You define your target audience and we help you communicate with them most creatively.',
  },
  {
    num: '03',
    tag: 'DIGITAL MARKETING',
    title: 'Digital Marketing Solutions For Your Brand',
    desc: 'Our expert team offers top-notch SEO, SEM, and social media services to elevate your brand\'s online presence. From strategic planning to campaign optimization, we deliver measurable results by analyzing past metrics and creating data-driven strategies. Partner with the best advertising agency in Mumbai to achieve success across all digital platforms.',
  },
];


const campaigns = [
  {
    img: '/assets/campaign/camp1.jpg',
    title: 'Metro Grande Blockbuster Outdoor Campaign',
    desc: "Bringing Metro Grande's Vision to Life Through Blockbuster Outdoor Campaign",
  },
  {
    img: '/assets/campaign/camp2.jpg',
    title: 'New Beginnings — 2 & 3 BHK',
    desc: 'A bold outdoor hoarding campaign for West Pioneer real estate launch',
  },
  {
    img: '/assets/campaign/camp3.jpg',
    title: 'Tots Couture Week — Audition Call',
    desc: 'In-mall display campaign targeting Mumbai parents for the couture event',
  },
];


const ourWork = [
  { videoId: 'HVlb4RQJlxQ', title: 'Bharat Agri TVC 1 with Nawazuddin Siddiqui' },
  { videoId: '9iRpcyQt0U8', title: 'Bharat Agri TVC 2 with Nawazuddin Siddiqui' },
  { videoId: 'IRPOE4KxMLM', title: "Padma Bhushan Smt. Rajashree Birla's Corporate Film" },
  { videoId: 'GhHBpdY8n3I', title: 'Bharat Agri TVC 1 with Nawazuddin Siddiqui' },
  { videoId: 'xxEGGhcWhZs', title: 'Bharat Agri TVC 2 with Nawazuddin Siddiqui' },
  { videoId: 'CwkZPVZ9S1Y', title: "Padma Bhushan Smt. Rajashree Birla's Corporate Film" },
  { videoId: '43EDtFshuM8', title: 'Bharat Agri TVC 1 with Nawazuddin Siddiqui' },
  { videoId: 'NqGAfUfhA3I', title: 'Bharat Agri TVC 2 with Nawazuddin Siddiqui' },
  { videoId: '1IGCqY2TPJk', title: "Padma Bhushan Smt. Rajashree Birla's Corporate Film" },
  { videoId: 'Gdavi9Z8Gz8', title: 'Bharat Agri TVC 1 with Nawazuddin Siddiqui' },
  { videoId: 'qUP0qQW0uKo', title: 'Bharat Agri TVC 2 with Nawazuddin Siddiqui' },
  { videoId: 'vk3DHvMI0Lk', title: "Padma Bhushan Smt. Rajashree Birla's Corporate Film" },
];

const bts = [
  { videoId: 'W_HcPX39DiY', title: 'Filming with Nawazuddin Siddiqui' },
  { videoId: 'baiKTFFaok4', title: 'Mind Frame India — Big Screen BTS' },
  { videoId: 'N6QyM-R7SAs', title: 'Behind the Scenes with Shreyas Talpade: Metro Grande' },
];

const tvcs = [
  { videoId: 'QtD-QxzTe-w', title: 'Cancer Awareness in India | UMMEED Musical Journey' },
  { videoId: 'YQch1ko8Lgs', title: 'Supreme Furnitures TVC 60 Sec AD by Mind Frame India' },
  { videoId: 'Dd5dTy04hNg', title: 'Dil Se Khelo Latest Video Song 2019 | Shahnawaz Ali' },
  { videoId: 'Ys9fIbVVhuU', title: 'Cancer Awareness in India | UMMEED Musical Journey' },
  { videoId: 'cjJ153qKENU', title: 'Supreme Furnitures TVC 60 Sec AD by Mind Frame India' },
  { videoId: 'mL-zEtgcHBQ', title: 'Dil Se Khelo Latest Video Song 2019 | Shahnawaz Ali' },
  { videoId: 'mTLd_jczJwA', title: 'Cancer Awareness in India | UMMEED Musical Journey' },
  { videoId: '-3dI6pQGJEw', title: 'Supreme Furnitures TVC 60 Sec AD by Mind Frame India' },
  { videoId: 'Cq9UdCwl8QE', title: 'Dil Se Khelo Latest Video Song 2019 | Shahnawaz Ali' },
];

const outdoorMedia = [
  { img: '/assets/outdoor/outdoor-1.jpg', title: 'Metro Grande Hoarding', desc: 'Blockbuster outdoor hoarding campaign for Metro Grande real estate' },
  { img: '/assets/outdoor/outdoor-2.jpg', title: 'Dastak Khushiyon Ki', desc: 'Bold outdoor campaign for upcoming residential project launch' },
  { img: '/assets/outdoor/outdoor-3.jpg', title: 'Gourmet Craft', desc: 'Magical culinary experience — restaurant outdoor branding' },
  { img: '/assets/outdoor/outdoor-4.jpg', title: 'Smart Families Campaign', desc: 'West Pioneer real estate — outdoor hoarding campaign Mumbai' },
];






// ─── Responsive Celebrity Shoot Auto-Slide Carousel ─────────────────────────────────────


const catalogueDesign = [
  { slug: 'earthbased-catalogue-design',    img: '/assets/catalogue/cat1.jpg', title: 'Earthbased Catalogue Design',    desc: 'Showcasing Earthbased: Creative Catalogue Design That Captures Eyes' },
  { slug: 'imperial-decor-catalogue-design-2',    img: '/assets/catalogue/cat2.jpg', title: 'Magnum Catalogue Design',    desc: 'Crafting a Secure Look for Magnum with Sleek Catalogue Design.' },
  { slug: 'my-beauty-world-catalogue-design', img: '/assets/catalogue/cat3.jpg', title: 'My Beauty World Catalogue Design', desc: 'My Beauty World Catalogue: Showcasing Beauty in Every Page.' },
  { slug: 'donear-catalogue-design',    img: '/assets/catalogue/cat4.jpg', title: 'Donear Catalogue Design',    desc: 'Visualizing Donear’s Products Through Innovative Catalogue Design' },
  { slug: 'bwb-catalogue-design',      img: '/assets/catalogue/cat5.jpg', title: 'BWB Catalogue Design',      desc: 'Designing Impactful Catalogue for BWB: A Creative Approach.' },
  { slug: 'mysticity-catalogue-design',     img: '/assets/catalogue/cat6.jpg', title: 'Mysticity Catalogue Design',     desc: 'Showcasing Mysticity’s Skin Products with Innovative Catalogue Design.' },
  { slug: 'imperial-decor-catalogue-design', img: '/assets/catalogue/cat7.jpg', title: 'Imperial Decor Catalogue Design', desc: 'Imperial Decor: Crafting Timeless Catalogue Designs with Style.' },
  { slug: 'sqiinful-catalogue-design',  img: '/assets/catalogue/cat8.jpg', title: 'Sqiinful Catalogue Design',  desc: 'Elevating Sqiinful with Innovative Catalogue Design Solution.' },
];


const packagingDesign = [
  { slug: 'oishi-oishi-packagin-design',    img: '/assets/package/pack1.png', title: 'Oishi oishi Packagin Design',    desc: 'Oishi oishi Packaging Design Bringing Flavour to Life with Every Box..' },
  { slug: 'sqiinful-packaging-design', img: '/assets/package/pack2.png', title: 'Sqiinful Packaging Design', desc: 'Creative Packaging Design for Sqiinful.' },
  { slug: 'mysticity-packaging-design',    img: '/assets/package/pack3.png', title: 'Mysticity Packaging Design',    desc: 'Creative Packaging Design for Mysticity: Making a Lasting Impression' },
  { slug: 'jgf-packaging-design', img: '/assets/package/pack4.png', title: 'JGF Packaging Design', desc: 'Bringing JGF’s Vision to Life Through Packaging Design.' },
  { slug: 'soul-packaging-design', img: '/assets/package/pack5.png', title: 'Soul Packaging Design', desc: 'Transforming Soul with Captivating Packaging Design.' },
];



// ─── FAQ DATA ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: 'What is a digital marketing agency?',
    answer:
      'A digital marketing agency helps businesses grow online through SEO, PPC, social media marketing, content marketing, and analytics.',
  },
  {
    question: 'What is a digital marketing company?',
    answer:
      'A digital marketing company plans and runs online campaigns that improve visibility, generate leads, and increase sales.',
  },
  {
    question: 'What is a digital agency?',
    answer:
      'A digital agency provides services such as digital strategy, paid media, social media, website support, and online brand growth.',
  },
  {
    question: 'What are digital marketing services?',
    answer:
      'Digital marketing services include SEO, Google Ads, social media marketing, content marketing, email marketing, and online advertising.',
  },
  {
    question: 'What are digital marketing services near me?',
    answer:
      'Digital marketing services near you help businesses get local visibility and more qualified leads.',
  },
  {
    question: 'What is a digital marketing agency near me?',
    answer:
      'A digital marketing agency near you is a local team that helps businesses in your area with online growth, leads, and brand visibility.',
  },
  {
    question: 'Why choose a marketing agency in Mumbai?',
    answer:
      'A marketing agency in Mumbai understands the local market, audience behavior, and competitive landscape, which helps create more effective campaigns.',
  },
  {
    question: 'What does a digital marketing company do?',
    answer:
      'A digital marketing company creates and manages campaigns that help businesses attract the right audience and convert them into customers.',
  },
  {
    question: 'What is a marketing company for small business?',
    answer:
      'A marketing company for small business offers affordable services that help small brands grow online and reach local customers.',
  },
  {
    question: 'What is a digital marketing website?',
    answer:
      'A digital marketing website is built to attract traffic, capture leads, and convert visitors into customers through optimized design and content.',
  },
  {
    question: 'What is a marketing agency in Mumbai?',
    answer:
      'A marketing agency in Mumbai helps local businesses grow through branding, digital marketing, advertising, and lead generation tailored to the Mumbai market.',
  },
  {
    question: 'What is the best digital marketing agency in Mumbai?',
    answer:
      'The best digital marketing agency in Mumbai combines strategy, creativity, and measurable results across SEO, ads, and social media. Mind Frame India is a full-service example based in Mumbai with over a decade of experience.',
  },
  {
    question: 'What is a full-service advertising agency?',
    answer:
      'A full-service advertising agency handles branding, creative, digital marketing, media buying, and production under one roof, so one team manages a brand end to end.',
  },
  {
    question: 'What is a full-service advertising agency in Mumbai?',
    answer:
      'A full-service advertising agency in Mumbai offers branding, digital, ATL, BTL, and media services locally, helping Mumbai brands run integrated campaigns from a single team.',
  },
  {
    question: 'What is an advertising agency?',
    answer:
      'An advertising agency plans, creates, and places ad campaigns across TV, print, outdoor, and digital media to build brand awareness and drive sales.',
  },
  {
    question: 'What is an advertising agency in Mumbai?',
    answer:
      'An advertising agency in Mumbai creates and runs campaigns for local and national brands across traditional and digital channels from a Mumbai base.',
  },
  {
    question: 'What does a marketing agency do?',
    answer:
      'A marketing agency develops strategy, creates campaigns, and manages channels like SEO, ads, and social media to help businesses attract and convert customers.',
  },
  {
    question: 'Why hire a digital marketing agency in Mumbai?',
    answer:
      'Hiring a digital marketing agency in Mumbai gives you local market knowledge, specialist skills, and measurable campaigns without building a full in-house team.',
  },
  {
    question: 'What is a creative agency?',
    answer:
      'A creative agency develops the ideas, design, and content behind campaigns, including visuals, copy, video, and brand storytelling.',
  },
  {
    question: 'What is a branding agency?',
    answer:
      'A branding agency builds a brand\'s identity, including logo, colors, voice, and positioning, to make it recognizable and trusted.',
  },
  {
    question: 'What is integrated marketing?',
    answer:
      'Integrated marketing coordinates one consistent message across digital, social, print, and outdoor channels so each reinforces the others.',
  },
  {
    question: 'What is a 360 degree marketing agency?',
    answer:
      'A 360 degree marketing agency covers every stage of marketing, from strategy and branding to digital, media, and performance, as a single partner.',
  },
];

function CelebCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Get number of visible images based on screen size
  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      setVisibleCount(getVisibleCount());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (celebrityPhotos.length - visibleCount + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visiblePhotos = celebrityPhotos.slice(currentIndex, currentIndex + visibleCount);
  const totalDots = celebrityPhotos.length - visibleCount + 1;

  return (
    <div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${visibleCount}, 1fr)`, 
        gap: 8, 
        marginBottom: 20,
        transition: 'all 0.5s ease'
      }}>
        {visiblePhotos.map((src, i) => (
          <div key={i} style={{ 
            aspectRatio: '3/4', 
            overflow: 'hidden', 
            background: '#eee',
            borderRadius: isMobile ? 8 : 0,
          }}>
            <img 
              src={src} 
              alt={`Celebrity shoot ${currentIndex + i + 1}`} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                display: 'block',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            style={{
              width: i === currentIndex ? 12 : 8,
              height: i === currentIndex ? 12 : 8,
              borderRadius: '50%', 
              border: 'none',
              background: i === currentIndex ? gold : '#ccc', 
              cursor: 'pointer', 
              padding: 0,
              transition: 'all 0.3s ease',
              transform: i === currentIndex ? 'scale(1.2)' : 'scale(1)',
            }}
          />
        ))}
      </div>
      
      {/* Progress Indicator */}
      <div style={{
        textAlign: 'center',
        marginTop: 16,
        fontSize: 12,
        color: '#999',
        letterSpacing: 1
      }}>
        {currentIndex + 1} / {totalDots}
      </div>
    </div>
  );
}


// ─── Quick Contact Form ───────────────────────────────────────────────────────
function QuickContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', company: '', designation: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) newErrors.name = 'Min 2 characters required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.phone.trim() || !/^[0-9]{10}$/.test(form.phone)) newErrors.phone = 'Enter valid 10-digit number';
    if (!form.company.trim()) newErrors.company = 'Company name is required';
    if (!form.designation.trim()) newErrors.designation = 'Designation is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await contactService.submitQuickContactForm(form);
      toast.success("Thank you! We'll be in touch shortly.");
      setForm({ name: '', email: '', phone: '', city: '', company: '', designation: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    border: 'none',
    borderBottom: `1px solid ${errors[field] ? '#e53e3e' : '#bbb'}`,
    background: 'transparent',
    fontFamily: 'Georgia, serif',
    fontSize: 13,
    color: '#1a1a1a',
    padding: '8px 0',
    outline: 'none',
    width: '100%',
  });

  const errStyle = { fontSize: 10, color: '#e53e3e', marginTop: 3, fontFamily: 'Georgia, serif' };

  return (
    <div style={{ border: '1px solid #ddd', padding: '28px 28px 32px', fontFamily: 'Georgia, serif' }}>
      <p style={{ fontSize: 14, fontWeight: 700, textAlign: 'center', margin: '0 0 10px', color: '#1a1a1a' }}>
        Fill in your details and you'll hear from us shortly!
      </p>
      <div style={{ width: 40, height: 2, background: gold, margin: '0 auto 24px' }} />
      <form onSubmit={handleSubmit}>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 16 : '0 24px', marginBottom: 20 }}>
          <div>
            <input placeholder="Name*" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle('name')} />
            {errors.name && <p style={errStyle}>{errors.name}</p>}
          </div>
          <div>
            <input placeholder="E-mail*" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle('email')} />
            {errors.email && <p style={errStyle}>{errors.email}</p>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 16 : '0 24px', marginBottom: 20 }}>
          <div>
            <input placeholder="Contact No.*" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle('phone')} />
            {errors.phone && <p style={errStyle}>{errors.phone}</p>}
          </div>
          <div>
            <input placeholder="City" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} style={inputStyle('city')} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 16 : '0 24px', marginBottom: 28 }}>
          <div>
            <input placeholder="Your Company Name*" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} style={inputStyle('company')} />
            {errors.company && <p style={errStyle}>{errors.company}</p>}
          </div>
          <div>
            <input placeholder="Designation*" value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })} style={inputStyle('designation')} />
            {errors.designation && <p style={errStyle}>{errors.designation}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            background: gold, color: '#fff', border: 'none',
            padding: '11px 32px', fontSize: 11, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: 2,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'Georgia, serif', opacity: loading ? 0.7 : 1,
            width: isMobile ? '100%' : 'auto',
          }}
        >
          {loading ? 'SENDING...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
}



// ─── FAQ Accordion Item ────────────────────────────────────────────────────────
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
          id={`home-faq-btn-${index}`}
          aria-controls={`home-faq-panel-${index}`}
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
        id={`home-faq-panel-${index}`}
        aria-labelledby={`home-faq-btn-${index}`}
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



// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <SEO 
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        path={seoConfig.home.path}
        structured={organizationSchema}
      />
      <div style={{ fontFamily: 'Georgia, serif', overflowX: 'hidden' }}>

      {/* ── 1. HERO: Background Video ───────────────────────────────────────── */}
      <section style={{ 
        position: 'relative', 
        height: '100vh', 
        minHeight: 560, 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        {/* Background video */}
         <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          {/* <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" /> */}
        <source src="https://videos.pexels.com/video-files/1851190/1851190-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,20,0.62)', zIndex: 1 }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <p style={{ 
            fontSize: 'clamp(10px, 3vw, 12px)', 
            letterSpacing: 'clamp(3px, 1vw, 4px)', 
            textTransform: 'uppercase', 
            color: gold, 
            marginBottom: 16, 
            fontWeight: 600 
          }}>
            Advertising & Creative Communications
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 8vw, 72px)',
              fontWeight: 900, 
              color: '#fff', 
              lineHeight: 1.1,
              margin: '0 0 20px', 
              letterSpacing: -1,
            }}
          >
            Leading Advertising Agency in Mumbai
          </h1>
          <div style={{ width: 60, height: 2, background: gold, margin: '0 auto 24px' }} />
          <p style={{ 
            fontSize: 'clamp(14px, 2vw, 16px)', 
            color: 'rgba(255,255,255,0.82)', 
            lineHeight: 1.6, 
            marginBottom: 36, 
            maxWidth: 640, 
            margin: '0 auto 36px',
            padding: '0 16px'
          }}>
            Conceptualizing strategic communication campaigns for leading brands across FMCG, FnB, Travel, Luxury, IT, Healthcare, and more.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', padding: '0 16px' }}>
            <Link href="/contact-us"
              style={{
                padding: 'clamp(10px, 2vw, 13px) clamp(24px, 4vw, 32px)', 
                background: gold, 
                color: '#fff',
                textDecoration: 'none', 
                fontWeight: 700, 
                fontSize: 'clamp(10px, 2vw, 12px)',
                letterSpacing: 2, 
                textTransform: 'uppercase', 
                fontFamily: 'Georgia, serif',
                display: 'inline-block',
              }}
            >
              GET IN TOUCH
            </Link>
            <Link href="/about-us"
              style={{
                padding: 'clamp(10px, 2vw, 13px) clamp(24px, 4vw, 32px)', 
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.6)', 
                color: '#fff',
                textDecoration: 'none', 
                fontWeight: 600, 
                fontSize: 'clamp(10px, 2vw, 12px)',
                letterSpacing: 2, 
                textTransform: 'uppercase', 
                fontFamily: 'Georgia, serif',
                display: 'inline-block',
              }}
            >
              ABOUT US
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ 
          position: 'absolute', 
          bottom: 28, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 2, 
          display: isMobile ? 'none' : 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 6 
        }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 2, textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.3)' }} />
        </div>
      </section>

      {/* ── 2. INTRO + QUICK CONTACT FORM ──────────────────────────────────── */}
      <Section bg="#fff" py={isMobile ? 48 : 72}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 48 }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 5vw, 38px)', 
            fontWeight: 900, 
            fontFamily: 'Georgia, serif', 
            color: '#1a1a1a', 
            margin: '0 0 12px', 
            letterSpacing: -0.5,
            padding: '0 16px'
          }}>
            Leading Advertising Agency in Mumbai
          </h2>
          <div style={{ width: 60, height: 2, background: gold, margin: '0 auto' }} />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? 40 : 56, 
          alignItems: 'flex-start' 
        }}>
          {/* Left: Company Intro */}
          <div style={{ fontSize: 'clamp(13px, 2vw, 13.5px)', color: '#333', lineHeight: 1.9, padding: '0 8px' }}>
            <p style={{ margin: '0 0 16px' }}>
              Over the last decade, the ad agency Mumbai based, <strong>Mind Frame India, which is one of the best advertising agency in Mumbai</strong> has been conceptualizing strategic communication campaigns for various brands. Being a <strong>Mumbai Advertising Agency</strong>, we have been creating consumer-centric strategies and designs for clients across various industry verticals.
            </p>
            <p style={{ margin: '0 0 16px' }}>
              The most prominent industries are FMCG, FnB, Travel Industry, Luxury Brands, Information Technology, Health Care, Insurance Sector, Hotels, Fashion Labels, Retail Brands, various franchise brands, and many more. Competing with ad agencies in Mumbai, Mind Frame India also caters to International markets like the US, the Middle East, and the Far East countries.
            </p>
            <p style={{ margin: 0 }}>
              Our company's consistent and integrated workflow motivates our team to keep working toward perfection always. We provide above-the-line marketing (ATL), below-the-line marketing (BTL), digital marketing services, creative solutions, and branding solutions, positioning us as a full-service marketing agency in Mumbai.
            </p>
          </div>

          {/* Right: Quick Contact Form */}
          <QuickContactForm />
        </div>
      </Section>

      {/* ── 3. CORE SERVICES ───────────────────────────────────────────────── */}
      <Section bg="#f7f6f2" py={isMobile ? 56 : 80}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 56 }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 5vw, 38px)', 
            fontWeight: 900, 
            fontFamily: 'Georgia, serif', 
            color: '#1a1a1a', 
            margin: '0 0 12px', 
            letterSpacing: -0.5, 
            maxWidth: 560, 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            lineHeight: 1.2,
            padding: '0 16px'
          }}>
            Core Services of a Modern Advertising Agency In Mumbai
          </h2>
          <div style={{ width: 60, height: 2, background: gold, margin: '0 auto' }} />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: isMobile ? 40 : 32 
        }}>
          {coreServices.map((s) => (
            <div key={s.num}>
              <p style={{ fontSize: 11, color: '#aaa', letterSpacing: 1, margin: '0 0 10px' }}>
                <span style={{ color: '#888' }}>{s.num}/</span>{' '}
                <span style={{ color: gold, fontWeight: 700 }}>{s.tag}</span>
              </p>
              <h3 style={{ fontSize: 'clamp(18px, 3vw, 20px)', fontWeight: 900, color: '#1a1a1a', margin: '0 0 14px', lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 'clamp(13px, 2vw, 13px)', color: '#555', lineHeight: 1.85, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 4. CURRENT CAMPAIGNS ───────────────────────────────────────────── */}
      <Section bg="#f0efe9" py={isMobile ? 48 : 72}>
        {sectionTitle('Current Campaigns')}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: isMobile ? 16 : 4 
        }}>
          {campaigns.map((c, i) => (
            <div
              key={i}
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                aspectRatio: '4/3', 
                cursor: 'pointer',
                borderRadius: isMobile ? 8 : 0,
                marginBottom: isMobile ? 4 : 0
              }}
              onMouseOver={(e) => { if(!isMobile) e.currentTarget.querySelector('.camp-overlay').style.opacity = 1; }}
              onMouseOut={(e) => { if(!isMobile) e.currentTarget.querySelector('.camp-overlay').style.opacity = i === 1 ? 1 : 0; }}
            >
              <img 
                src={c.img} 
                alt={c.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }} 
              />
              <div
                className="camp-overlay"
                style={{
                  position: 'absolute', 
                  inset: 0,
                  background: 'rgba(20,18,14,0.55)',
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'flex-end', 
                  padding: 20,
                  opacity: isMobile ? 1 : (i === 1 ? 1 : 0),
                  transition: 'opacity 0.3s',
                }}
              >
                <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{c.title}</p>
                <p style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: 'rgba(255,255,255,0.8)', margin: 0 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 5. OUR WORK ────────────────────────────────────────────────────── */}
      <Section bg="#f7f6f2" py={isMobile ? 48 : 72}>
        {sectionTitle('Our Work')}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: 16 
        }}>
          {ourWork.map((v) => <YTEmbed key={v.videoId} videoId={v.videoId} title={v.title} />)}
        </div>
      </Section>

      {/* ── 6. BEHIND THE SCENES ───────────────────────────────────────────── */}
      <Section bg="#fff" py={isMobile ? 48 : 72}>
        {sectionTitle('Behind The Scenes')}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: 16 
        }}>
          {bts.map((v) => <YTEmbed key={v.videoId} videoId={v.videoId} title={v.title} />)}
        </div>
      </Section>

      {/* ── 7. TV COMMERCIALS ──────────────────────────────────────────────── */}
      <Section bg="#f7f6f2" py={isMobile ? 48 : 72}>
        {sectionTitle('TV Commercials')}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: 16 
        }}>
          {tvcs.map((v) => <YTEmbed key={v.videoId} videoId={v.videoId} title={v.title} />)}
        </div>
      </Section>

      {/* ── 8. CELEBRITY SHOOT (Auto-Slide Carousel) ─────────────────────────────── */}
      <Section bg="#fff" py={isMobile ? 48 : 72}>
        {sectionTitle('Celebrity Shoot')}
        <CelebCarousel />
      </Section>

   {/* ── 9. OUTDOOR & PRINT MEDIA ───────────────────────────────────────── */}
<Section bg="#f0efe9" py={isMobile ? 48 : 72}>
  {sectionTitle('Outdoor & Print Media')}
  <div style={{
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? 8 : 4,
  }}>
    {outdoorMedia.map((c, i) => (
      <div
        key={i}
        style={{
          position: 'relative',
          aspectRatio: '4/3',
          overflow: 'hidden',
          borderRadius: isMobile ? 8 : 0,
          cursor: 'pointer',
        }}
        onMouseOver={(e) => { if (!isMobile) e.currentTarget.querySelector('.out-overlay').style.opacity = 1; }}
        onMouseOut={(e) => { if (!isMobile) e.currentTarget.querySelector('.out-overlay').style.opacity = 0; }}
      >
        <img
          src={c.img}
          alt={c.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s',
          }}
          onMouseOver={(e) => { if (!isMobile) e.currentTarget.style.transform = 'scale(1.05)'; }}
          onMouseOut={(e) => { if (!isMobile) e.currentTarget.style.transform = 'scale(1)'; }}
        />
        <div
          className="out-overlay"
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(20,18,14,0.62)',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            padding: 16,
            opacity: isMobile ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: '0 0 5px', lineHeight: 1.3 }}>{c.title}</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>{c.desc}</p>
        </div>
      </div>
    ))}
  </div>
</Section>

      {/* ── 9b. CATALOGUE DESIGN ───────────────────────────────────────────── */}
      <Section bg="#fff" py={isMobile ? 48 : 72}>
        {sectionTitle('Catalogue Design')}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 8 : 4,
        }}>
        
          {catalogueDesign.map((c, i) => (
  <Link key={i} href={`/portfolio-item/${c.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
    <div
      style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: isMobile ? 8 : 0, cursor: 'pointer' }}
      onMouseOver={(e) => { if (!isMobile) e.currentTarget.querySelector('.cat-overlay').style.opacity = 1; }}
      onMouseOut={(e) => { if (!isMobile) e.currentTarget.querySelector('.cat-overlay').style.opacity = 0; }}
    >
      <img
        src={c.img}
        alt={c.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
        onMouseOver={(e) => { if (!isMobile) e.currentTarget.style.transform = 'scale(1.05)'; }}
        onMouseOut={(e) => { if (!isMobile) e.currentTarget.style.transform = 'scale(1)'; }}
      />
      <div
        className="cat-overlay"
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20,18,14,0.62)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 16,
          opacity: isMobile ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: '0 0 5px', lineHeight: 1.3 }}>{c.title}</p>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>{c.desc}</p>
      </div>
    </div>
  </Link>
))}
        </div>
      </Section>

      {/* ── 9c. PACKAGING DESIGNS ──────────────────────────────────────────── */}
      <Section bg="#f7f6f2" py={isMobile ? 48 : 72}>
        {sectionTitle('Packaging Designs')}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
          gap: isMobile ? 8 : 4,
        }}>
        
          {packagingDesign.map((c, i) => (
  <Link key={i} href={`/portfolio-item/${c.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
    <div
      style={{ position: 'relative', aspectRatio: isMobile ? '4/3' : '3/4', overflow: 'hidden', borderRadius: isMobile ? 8 : 0, cursor: 'pointer' }}
      onMouseOver={(e) => { if (!isMobile) e.currentTarget.querySelector('.pkg-overlay').style.opacity = 1; }}
      onMouseOut={(e) => { if (!isMobile) e.currentTarget.querySelector('.pkg-overlay').style.opacity = 0; }}
    >
      <img
        src={c.img}
        alt={c.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
        onMouseOver={(e) => { if (!isMobile) e.currentTarget.style.transform = 'scale(1.05)'; }}
        onMouseOut={(e) => { if (!isMobile) e.currentTarget.style.transform = 'scale(1)'; }}
      />
      <div
        className="pkg-overlay"
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20,18,14,0.62)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 16,
          opacity: isMobile ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: '0 0 5px', lineHeight: 1.3 }}>{c.title}</p>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>{c.desc}</p>
      </div>
    </div>
  </Link>
))}
        </div>
      </Section>




      {/* ── 10. FAQ SECTION ────────────────────────────────────────────────── */}
      <Section bg="#fff" py={isMobile ? 48 : 72}>
        <style>{`
          .home-faq-section {
            margin-top: 16px;
            max-width: 880px;
            margin-left: auto;
            margin-right: auto;
          }
 
          .home-faq-intro {
            font-size: 13px;
            color: #444;
            line-height: 1.9;
            margin: 0 0 32px;
            text-align: center;
          }
        `}</style>
 
        {sectionTitle('Frequently Asked Questions')}
        <div className="home-faq-section">
          <p className="home-faq-intro">
            Quick answers about Mind Frame India and what to expect from a full-service advertising and digital marketing agency in Mumbai.
          </p>
 
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Section>

      

      {/* ── 10. TESTIMONIALS ───────────────────────────────────────────────── */}
      <Testimonial />

      </div>
         {/* ── FAQ Schema (JSON-LD) ───────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://mindframeindia.com/#faq",
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
