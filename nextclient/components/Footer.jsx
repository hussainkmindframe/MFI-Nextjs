'use client'

"use client";

/**
 * Footer Component — Updated Design (Mindframe India)
 */

import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const goldColor = '#c9a84c';

const SocialLink = ({ href, children }) => {
  const baseStyle = {
    width: 34, height: 34,
    border: '1px solid #333',
    color: '#888',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    textDecoration: 'none',
  };
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...baseStyle,
        borderColor: hovered ? goldColor : '#333',
        color: hovered ? goldColor : '#888',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', to: '/about-us', external: false },
    // { label: 'Our Team', to: '/our-team', external: false },
    { label: 'Our Work', to: '/creative-communication-and-advertising-campaigns', external: false },
    { label: 'Brand Presentation', to: '/services/branding-agency-in-mumbai', external: false },
    { label: 'Blogs', to: '/blogs', external: false },
    { label: 'Careers', to: '/careers', external: false },
    { label: 'Disclaimer', to: '/disclaimer', external: false },
    { label: 'Privacy Policy', to: '/privacy', external: false },
    { label: 'Sitemap', to: '/sitemap.xml', external: true },
  ];

  const services = [
    { label: 'Brand Identity', to: '/services/branding-agency-in-mumbai' },
    { label: 'Branding and Marketing', to: '/services/unlocking-the-power-of-innovative-c-mind-frame-india' },
    { label: 'Digital Marketing', to: '/services/digital-marketing-agency-in-mumbai' },
    { label: 'Advertising Services', to: '/services/top-digital-marketing-agency-in-india' },
    { label: 'Best Television Advertising Agency in Mumbai | TV Ads Campaigns', to: '/services/best-television-advertising-agency-in-mumbai-tv-ads-campaigns' },
    { label: 'Website Development', to: '/services/website-development' },
    { label: 'Mobile App Development', to: '/services/best-mobile-app-development-company-in-mumbai' },
  ];

  const locations = [
    {
      label: 'Head Office',
      address:
        'B28 Venue – 6th Floor, Bhukanvala Chambers, Behind Crystal Plaza, Next to Mourya House, Off Link Road, Andheri West, Mumbai, Maharashtra 400053',
    },
    {
      label: 'Branch Office',
      address:
        '302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Mourya House, Off Link Road, Andheri West, Mumbai, Maharashtra 400053',
    },
    {
      label: 'U.S. Office',
      address:
        'Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California 94583, United States of America',
    },
  ];

  return (
    <footer style={{ background: '#0d0f1a', color: '#fff', padding: '56px 40px 28px', width: '100%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 40,
            marginBottom: 40,
          }}
        >

          {/* Brand / Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', textAlign: 'left' }}>
            <img
              src="/assets/Logo-MFI.png"
              alt="Mindframe India Logo"
              style={{ height: 100, width: 'auto', objectFit: 'contain', display: 'block' }}
            />

            <div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 6px', lineHeight: 1.4 }}>
                Leading Advertising Agency in Mumbai
              </h3>
              <p style={{ fontSize: 12, color: goldColor, fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
                Our Commitment Is To Give Value To Your Business And Help You Soar Beyond The Horizons Of Success.
              </p>
            </div>

            <div style={{ fontSize: 12, color: '#aaa' }}>
              <p style={{ margin: '0 0 4px' }}>
                Mob: <span style={{ color: '#fff' }}>+91 9892000733 / +91 9167830733</span>
              </p>
              <p style={{ margin: 0 }}>
                Email: <span style={{ color: '#fff' }}>info@mindframeindia.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#fff', margin: '0 0 16px', paddingBottom: 8, borderBottom: `1px solid ${goldColor}` }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((item) => (
                <li key={item.to} style={{ marginBottom: 10, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: goldColor, fontSize: 10, marginTop: 2, flexShrink: 0 }}>○</span>
                  {item.external ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#bbb', fontSize: 13, textDecoration: 'none', lineHeight: 1.4 }}
                      onMouseEnter={(e) => (e.target.style.color = goldColor)}
                      onMouseLeave={(e) => (e.target.style.color = '#bbb')}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.to}
                      style={{ color: '#bbb', fontSize: 13, textDecoration: 'none', lineHeight: 1.4 }}
                      onMouseEnter={(e) => (e.target.style.color = goldColor)}
                      onMouseLeave={(e) => (e.target.style.color = '#bbb')}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#fff', margin: '0 0 16px', paddingBottom: 8, borderBottom: `1px solid ${goldColor}` }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service, i) => (
                <li key={i} style={{ marginBottom: 10, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: goldColor, fontSize: 10, marginTop: 2, flexShrink: 0 }}>○</span>
                  <Link
                    href={service.to}
                    style={{ color: '#bbb', fontSize: 13, textDecoration: 'none', lineHeight: 1.4 }}
                    onMouseEnter={(e) => (e.target.style.color = goldColor)}
                    onMouseLeave={(e) => (e.target.style.color = '#bbb')}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#fff', margin: '0 0 16px', paddingBottom: 8, borderBottom: `1px solid ${goldColor}` }}>
              Our Locations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {locations.map((loc, i) => (
                <div key={i}>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: goldColor, margin: '0 0 4px' }}>
                    {loc.label}
                  </p>
                  <p style={{ fontSize: 12, color: '#999', lineHeight: 1.55, margin: 0 }}>
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #2a2d3a', margin: '0 0 20px' }} />

        {/* Bottom Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: '#c9a84c', margin: 0 }}>
            © {currentYear} Mindframe India. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <SocialLink href="https://www.facebook.com/mindframeindiapvtltd">
              <FaFacebook size={14} />
            </SocialLink>
            <SocialLink href="https://x.com/MindFrameIndia">
              <FaXTwitter size={14} />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/mindframeindia">
              <FaInstagram size={14} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/mind-frame-india">
              <FaLinkedinIn size={14} />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCQDHao37b1_WlbiU2z4Kt9Q">
              <FaYoutube size={14} />
            </SocialLink>
          </div>
        </div>

      </div>
    </footer>
  );
}



