'use client'

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState, use } from 'react';


const gold = '#c9a84c';

const catalogueData = {
  'fashion-lookbook': {
    title: 'Fashion Lookbook',
    desc: 'Premium fashion catalogue design for apparel brands — editorial layouts, bold typography, and luxury print finishes.',
    category: 'Design, Fashion, Our Work',
    date: 'January 15, 2024',
    images: ['/assets/catalogue/cat1.jpg'],
  },
  'product-brochure': {
    title: 'Product Brochure',
    desc: 'Elegant open brochure layout for product showcasing — clean grid, high-quality imagery, and concise copy.',
    category: 'Design, Brochure, Our Work',
    date: 'March 10, 2024',
    images: ['/assets/catalogue/cat2.jpg'],
  },
  'pet-product-catalog': {
    title: 'Pet Product Catalog',
    desc: 'Delivering happiness and care for your pets — warm color palette, playful design, and clear product hierarchy.',
    category: 'Design, Catalogue, Our Work',
    date: 'February 5, 2024',
    images: ['/assets/catalogue/cat3.jpg'],
  },
  'beauty-catalogue': {
    title: 'Beauty Catalogue',
    desc: 'Luxury beauty and skincare catalogue design — elegant layouts with gold accents and premium product photography.',
    category: 'Design, Beauty, Our Work',
    date: 'April 20, 2024',
    images: ['/assets/catalogue/cat4.jpg'],
  },
  'skincare-range': {
    title: 'Skincare Range',
    desc: 'Minimalist skincare product catalogue design — clean white space, botanical accents, and sophisticated typography.',
    category: 'Design, Skincare, Our Work',
    date: 'May 8, 2024',
    images: ['/assets/catalogue/cat5.jpg'],
  },
  'beauty-magazine': {
    title: 'Beauty Magazine',
    desc: 'Editorial magazine spread for beauty brands — bold fashion-forward layouts with striking visual hierarchy.',
    category: 'Design, Magazine, Our Work',
    date: 'November 22, 2023',
    images: ['/assets/catalogue/cat6.jpg'],
  },
  'furniture-catalogue': {
    title: 'Furniture Catalogue',
    desc: 'Interior and furniture product brochure design — lifestyle photography, warm tones, and room-setting visuals.',
    category: 'Design, Furniture, Our Work',
    date: 'June 14, 2024',
    images: ['/assets/catalogue/cat7.jpg'],
  },
  'hardware-catalogue': {
    title: 'Hardware Catalogue',
    desc: 'Solid brass mortise & pulls — product index design with precise technical layouts and premium finish photography.',
    category: 'Design, Hardware, Our Work',
    date: 'July 3, 2024',
    images: ['/assets/catalogue/cat8.jpg'],
  },
};

export default function CatalogueDetail({ params }) {
// Naya
const { slug } = use(params);
const product = catalogueData[slug];
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
        <span>Catalogue</span>
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