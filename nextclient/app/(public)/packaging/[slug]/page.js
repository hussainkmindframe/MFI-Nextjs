'use client'

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState, use } from 'react';


const gold = '#c9a84c';

const packagingData = {
  'food-box-packaging': {
    title: 'Food Box Packaging',
    desc: 'Creative packaging design for food delivery brands — bold colors, custom typography, and eco-friendly materials.',
    category: 'Design, Packaging, Our Work',
    date: 'January 10, 2024',
    images: ['/assets/package/pack1.png'],
  },
  'vitamin-serum-bottles': {
    title: 'Vitamin Serum Bottles',
    desc: 'Mysticity serum range — frosted glass, gold foiling, and minimalist label design for premium skincare.',
    category: 'Design, Skincare, Our Work',
    date: 'February 18, 2024',
    images: ['/assets/package/pack2.png'],
  },
  'fmcg-product-range': {
    title: 'FMCG Product Range',
    desc: 'End-to-end packaging for a dairy and snacks FMCG brand — shelf-ready, vibrant, retailer compliant.',
    category: 'Design, FMCG, Our Work',
    date: 'March 22, 2024',
    images: ['/assets/package/pack3.png'],
  },
  'nutrition-supplements': {
    title: 'Nutrition Supplements',
    desc: 'Soul Nutritions — cohesive range across slim, strength, and super greens SKUs.',
    category: 'Design, Health, Our Work',
    date: 'April 5, 2024',
    images: ['/assets/package/pack4.png'],
  },
  'skincare-bottle-range': {
    title: 'Skincare Bottle Range',
    desc: 'Clean, minimal aesthetic — white base, pastel accents, botanical-inspired label design.',
    category: 'Design, Skincare, Our Work',
    date: 'May 14, 2024',
    images: ['/assets/package/pack5.png'],
  },
};

export default function PackagingDetail({ params }) {
  // Naya
const { slug } = use(params);
const product = packagingData[slug];

  const [activeImg, setActiveImg] = useState(0);

  if (!product) return notFound();

  return (
    <div style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#fff' }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: '1px solid #eee', padding: '12px 40px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#999' }}>
        <Link href="/" style={{ color: '#999', textDecoration: 'none' }}>Home</Link>
        <span>›</span>
        <span>Design</span>
        <span>›</span>
        <span>Packaging</span>
        <span>›</span>
        <span style={{ color: '#333' }}>{product.title}</span>
      </div>

      {/* Main Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 'calc(100vh - 45px)',
      }}>

        {/* Left: Image */}
        <div style={{ background: '#f5f5f5', position: 'relative', minHeight: 500 }}>
          <img
            src={product.images[activeImg]}
            alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
          />

          {/* Thumbnails if multiple */}
          {product.images.length > 1 && (
            <div style={{ position: 'absolute', bottom: 16, left: 16, display: 'flex', gap: 8 }}>
              {product.images.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: 56, height: 56, overflow: 'hidden', borderRadius: 4, cursor: 'pointer',
                    border: `2px solid ${i === activeImg ? gold : '#fff'}`,
                  }}
                >
                  <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          <h1 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 900, color: '#1a1a1a', margin: '0 0 32px', lineHeight: 1.2 }}>
            {product.title}
          </h1>

          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.9, margin: '0 0 48px' }}>
            {product.desc}
          </p>

          <div style={{ borderTop: '1px solid #eee', paddingTop: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a', margin: '0 0 6px', letterSpacing: 1, textTransform: 'uppercase' }}>Date:</p>
              <p style={{ fontSize: 13, color: '#777', margin: 0 }}>{product.date}</p>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a', margin: '0 0 6px', letterSpacing: 1, textTransform: 'uppercase' }}>Category:</p>
              <p style={{ fontSize: 13, color: '#999', margin: 0 }}>{product.category}</p>
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <Link href="/" style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: gold,
              color: '#fff',
              textDecoration: 'none',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}>
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}