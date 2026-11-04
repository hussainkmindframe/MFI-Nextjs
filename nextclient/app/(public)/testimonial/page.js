'use client'

/**
 * Testimonials Page — Enhanced Design (Mindframe India)
 * Features auto-sliding client logo carousel + testimonial slider with arrows
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
const clt1 = '/assets/client-logo/clt-1.png';
const clt2 = '/assets/client-logo/clt-2.png';
const clt3 = '/assets/client-logo/clt-3.png';
const clt4 = '/assets/client-logo/clt-4.png';
const clt5 = '/assets/client-logo/clt-5.png';
const clt6 = '/assets/client-logo/clt-6.png';
const clt7 = '/assets/client-logo/clt-7.png';
const clt8 = '/assets/client-logo/clt-8.png';

const gold = '#c9a84c';

// Logo data with imported images
const logos = [
  { name: 'New India Assurance', image: clt1 },
  { name: 'InFocus', image: clt2 },
  { name: 'Pratimoksha', image: clt3 },
  { name: 'Leadership Mavericks', image: clt4 },
  { name: 'Lilavati Hospital', image: clt5 },
  { name: 'Supreme Furniture', image: clt6 },
  { name: 'Mindframe India', image: clt7 },
  { name: 'Additional Client', image: clt8 },
];

const testimonials = [
  {
    text: "These days social media is the most sought after branding & communication medium and we could have no better partner than Mind Frame India for providing us with all the necessary assistance in making our presence felt on the social media platforms. I am particularly impressed with their creativity and agility to engage with our social media followers. Their openness to input is a positive trait that makes us comfortable working with them. Simply want to say that you guys are doing a great job and keep up the good work.",
    author: 'Officer – Marketing',
    company: 'Lilavati Hospital And Research Centre',
  },
  {
    text: "Mind Frame India has been an exceptional partner in our branding journey. Their team's deep understanding of digital marketing combined with their creative prowess has helped us build a strong online presence. The results have been outstanding and we couldn't be more pleased with their work.",
    author: 'Director – Brand Strategy',
    company: 'Leadership Mavericks',
  },
  {
    text: "Working with Mind Frame India has been a transformative experience for our brand. Their strategic approach to creative communication and their ability to understand our target audience has helped us grow significantly. We highly recommend their services to any business looking to make an impact.",
    author: 'Head – Marketing & Communications',
    company: 'InFocus',
  },
  {
    text: "The team at Mind Frame India brings unmatched creativity and professionalism to every project. From concept to execution, they have consistently delivered beyond our expectations. Their commitment to quality and their proactive approach make them a true partner in our success.",
    author: 'General Manager',
    company: 'Supreme Furniture',
  },
  {
    text: "Mind Frame has been instrumental in transforming our digital presence. Their holistic approach combining creativity with data-driven strategies has yielded remarkable results for our wellness brand. We are proud to have them as our marketing partners.",
    author: 'Founder & Director',
    company: 'Pratimoksha Yoga Center',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Logo carousel state
  const [logoStartIndex, setLogoStartIndex] = useState(0);
  const [visibleLogosCount, setVisibleLogosCount] = useState(5);
  const logoCarouselRef = useRef(null);

  // Get visible logos count based on screen size
  const getVisibleLogosCount = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 768) return 3;
    if (window.innerWidth < 1024) return 4;
    return 5;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleLogosCount(getVisibleLogosCount());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // AUTO-SLIDE LOGOS - Changes every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoStartIndex((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const goTo = useCallback((idx) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((idx + testimonials.length) % testimonials.length);
      setVisible(true);
    }, 300);
  }, []);

  // AUTO-SLIDE TESTIMONIALS - Changes every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  // Get visible logos for carousel
  const getVisibleLogos = () => {
    const result = [];
    for (let i = 0; i < visibleLogosCount; i++) {
      const idx = (logoStartIndex + i) % logos.length;
      result.push(logos[idx]);
    }
    return result;
  };

  // Arrow Button Component (Only for Testimonials)
  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      style={{
        width: isMobile ? 40 : 48,
        height: isMobile ? 40 : 48,
        borderRadius: '50%',
        border: `2px solid ${gold}`,
        background: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: isMobile ? 20 : 24,
        color: gold,
        transition: 'all 0.3s ease',
        fontFamily: 'Georgia, serif',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = gold;
        e.currentTarget.style.color = '#fff';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.color = gold;
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  );

  const DotButton = ({ index, isActive, onClick }) => (
    <button
      onClick={onClick}
      style={{
        width: isActive ? 12 : 8,
        height: isActive ? 12 : 8,
        borderRadius: '50%',
        background: isActive ? gold : '#ccc',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        transition: 'all 0.3s ease',
        transform: isActive ? 'scale(1.2)' : 'scale(1)',
        boxShadow: isActive ? `0 0 0 2px rgba(201,168,76,0.2)` : 'none',
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.background = '#999';
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.background = '#ccc';
      }}
    />
  );

  return (
    <>
      <SEO 
        title={seoConfig.testimonial.title}
        description={seoConfig.testimonial.description}
        keywords={seoConfig.testimonial.keywords}
        path={seoConfig.testimonial.path}
      />
      <div style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>

      {/* Professional Logo Carousel Section - No Arrows, Only Auto Slide */}
      <div
        style={{
          background: '#fff',
          padding: isMobile ? '32px 20px' : '40px 48px',
          borderBottom: '1px solid #eee',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h3 style={{ 
            fontSize: isMobile ? 18 : 22, 
            fontWeight: 600, 
            color: '#333',
            letterSpacing: 2,
            margin: 0,
            textTransform: 'uppercase'
          }}>
            Trusted By Leading Brands
          </h3>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        {/* Logo Carousel - Auto Sliding - ENLARGED LOGOS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? 32 : 60,
            transition: 'all 0.5s ease-in-out',
          }}
          ref={logoCarouselRef}
        >
          {getVisibleLogos().map((logo, idx) => (
            <div
              key={`${logo.name}-${logoStartIndex}-${idx}`}
              style={{
                flex: '0 0 auto',
                width: isMobile ? 150 : 220,
                height: isMobile ? 100 : 140,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.85,
                filter: 'grayscale(20%)',
                transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.4, 1)',
                cursor: 'pointer',
                transform: 'scale(1)',
                animation: 'fadeInUp 0.5s ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.filter = 'grayscale(20%)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              title={logo.name}
            >
              <img
                src={logo.image}
                alt={logo.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>

        {/* Progress Dots for Logo Carousel */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          marginTop: 32,
        }}>
          {logos.map((_, i) => (
            <button
              key={i}
              onClick={() => setLogoStartIndex(i)}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: i === logoStartIndex ? gold : '#ddd',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
                transform: i === logoStartIndex ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Testimonials Carousel - With Arrows and Auto Slide */}
      <div
        style={{
          background: 'linear-gradient(135deg, #f4f3ef 0%, #faf9f5 100%)',
          padding: isMobile ? '48px 20px' : '72px 48px 64px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative Quote Icon */}
        <div style={{
          fontSize: 80,
          color: `${gold}15`,
          fontFamily: 'Georgia, serif',
          position: 'absolute',
          top: isMobile ? 20 : 40,
          left: isMobile ? 20 : 60,
          opacity: 0.3,
          pointerEvents: 'none',
        }}>
          "
        </div>

        <h2 style={{ 
          fontSize: isMobile ? 32 : 48, 
          fontWeight: 900, 
          margin: '0 0 12px', 
          letterSpacing: -1,
          background: `linear-gradient(135deg, #1a1a1a 0%, #333 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Testimonials
        </h2>
        <div style={{ width: 60, height: 2, background: gold, margin: '0 auto 48px' }} />

        {/* Testimonial Content with Side Arrows */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? 16 : 32,
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {/* Previous Arrow */}
          <ArrowButton direction="prev" onClick={() => goTo(current - 1)} />

          {/* Testimonial Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.3s ease',
              flex: 1,
              maxWidth: 760,
            }}
          >
            <div style={{ fontSize: 40, color: gold, opacity: 0.5, marginBottom: 16 }}>
              <span>“</span>
            </div>
            
            <p style={{ 
              fontSize: isMobile ? 15 : 17, 
              color: '#444', 
              lineHeight: 1.8, 
              textAlign: 'center', 
              margin: '0 0 28px',
              fontStyle: 'italic',
              fontWeight: 400
            }}>
              {testimonials[current].text}
            </p>
            
            <div style={{ 
              width: 40, 
              height: 2, 
              background: gold, 
              margin: '0 auto 20px',
              opacity: 0.5
            }} />
            
            <p style={{ 
              fontSize: isMobile ? 14 : 15, 
              fontWeight: 700, 
              color: '#1a1a1a', 
              margin: '0 0 4px',
              letterSpacing: 0.5
            }}>
              {testimonials[current].author}
            </p>
            <p style={{ 
              fontSize: isMobile ? 12 : 13, 
              color: gold, 
              margin: 0,
              fontWeight: 500,
              letterSpacing: 0.5
            }}>
              {testimonials[current].company}
            </p>
          </div>

          {/* Next Arrow */}
          <ArrowButton direction="next" onClick={() => goTo(current + 1)} />
        </div>

        {/* Navigation Dots */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: isMobile ? 10 : 12, 
          marginTop: 48,
          flexWrap: 'wrap'
        }}>
          {testimonials.map((_, i) => (
            <DotButton
              key={i}
              index={i}
              isActive={i === current}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div style={{
          marginTop: 32,
          fontSize: 12,
          color: '#999',
          letterSpacing: 1
        }}> 
          {current + 1} / {testimonials.length}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    </>
  );
};


export default Testimonials;





