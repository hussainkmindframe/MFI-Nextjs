"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";

const gold = "#c9a84c";
const goldLight = "#e8c87a";

const portfolioData = {

  // ── Packaging ──────────────────────────────────────────────────────────────
  "oishi-oishi-packagin-design": {
    title: "Oishi oishi Packaging Design",
    desc: "Oishi Oishi Packaging Design: Bringing Flavor to Life with Every Box",
    category: "Design, Our Work",
    date: "December 6, 2023",
    images: ["/assets/package/pack1.png", "/assets/package/osh2.jpg", "/assets/package/osh3.jpg"],
  },
  "sqiinful-packaging-design": {
    title: "Sqiinful Packaging Design",
    desc: "Creative Packaging Design for Sqiinful.",
    category: "Design, Our Work",
    date: "December 6, 2023",
    images: ["/assets/package/pack2.png", "/assets/package/sqp2.jpg", "/assets/package/sqp3.jpg", "/assets/package/sqp4.jpg", "/assets/package/sqp5.jpg", "/assets/package/sqp6.jpg", "/assets/package/sqp7.jpg", "/assets/package/sqp8.jpg"],
  },
  "mysticity-packaging-design": {
    title: "Mysticity Packaging Design",
    desc: "Creative Packaging Design for Mysticity: Making a Lasting Impression.",
    category: "Design, Our Work",
    date: "September 16, 2024",
    images: ["/assets/package/pack3.png", "/assets/package/mp2.png", "/assets/package/mp3.png", "/assets/package/mp4.png", "/assets/package/mp5.png", "/assets/package/mp6.png", "/assets/package/mp7.png", "/assets/package/mp8.png", "/assets/package/mp9.png"],
  },
  "jgf-packaging-design": {
    title: "JGF Packaging Design",
    desc: "Bringing JGF's Vision to Life Through Packaging Design.",
    category: "Design, Our Work",
    date: "September 16, 2024",
    images: ["/assets/package/pack4.png", "/assets/package/jg2.png", "/assets/package/jg3.png", "/assets/package/jg4.png", "/assets/package/jg5.png", "/assets/package/jg6.png", "/assets/package/jg7.png", "/assets/package/jg8.png", "/assets/package/jg9.png", "/assets/package/jg10.png", "/assets/package/jg11.png", "/assets/package/jg12.png", "/assets/package/jg13.png"],
  },
  "soul-packaging-design": {
    title: "Soul Packaging Design",
    desc: "Transforming Soul with Captivating Packaging Design.",
    category: "Design, Our Work",
    date: "September 18, 2024",
    images: ["/assets/package/pack5.png", "/assets/package/so2.jpg", "/assets/package/so3.jpg", "/assets/package/so4.jpg", "/assets/package/so5.jpg", "/assets/package/so6.jpg", "/assets/package/so7.jpg", "/assets/package/so8.jpg", "/assets/package/so9.jpg", "/assets/package/so10.jpg", "/assets/package/so11.jpg"],
  },

  // ── Catalogue ──────────────────────────────────────────────────────────────
  "earthbased-catalogue-design": {
    title: "Earthbased Catalogue Design",
    desc: "Showcasing Earthbased: Creative Catalogue Design That Captures Eyes",
    category: "Design, Magazine, Our Work",
    date: "November 22, 2023",
    images: ["/assets/catalogue/cat1.jpg", "/assets/catalogue/earth2.jpg", "/assets/catalogue/earth3.jpg", "/assets/catalogue/earth4.jpg", "/assets/catalogue/earth5.jpg", "/assets/catalogue/earth6.jpg"],
  },
  "imperial-decor-catalogue-design-2": {
    title: "Magnum Catalogue Design",
    desc: "Crafting a Secure Look for Magnum with Sleek Catalogue Design.",
    category: "Design, Brochure, Our Work",
    date: "November 22, 2023",
    images: ["/assets/catalogue/cat2.jpg", "/assets/catalogue/mg2.jpg", "/assets/catalogue/mg3.jpg", "/assets/catalogue/mg4.jpg", "/assets/catalogue/mg5.jpg", "/assets/catalogue/mg6.jpg", "/assets/catalogue/mg7.jpg", "/assets/catalogue/mg8.jpg"],
  },
  "my-beauty-world-catalogue-design": {
    title: "My Beauty World Catalogue Design",
    desc: "My Beauty World Catalogue: Showcasing Beauty in Every Page.",
    category: "Design, Magazine, Our Work",
    date: "November 22, 2023",
    images: ["/assets/catalogue/cat3.jpg", "/assets/catalogue/mb2.jpg", "/assets/catalogue/mb3.jpg", "/assets/catalogue/mb4.jpg", "/assets/catalogue/mb4-1.jpg", "/assets/catalogue/mb5.jpg", "/assets/catalogue/mb5-1.jpg", "/assets/catalogue/mb6.jpg", "/assets/catalogue/mb7.jpg", "/assets/catalogue/mb8.jpg", "/assets/catalogue/mb9.jpg"],
  },
  "donear-catalogue-design": {
    title: "Donear Catalogue Design",
    desc: "Visualizing Donear's Products Through Innovative Catalogue Design.",
    category: "Design, Magazine, Our Work",
    date: "November 22, 2023",
    images: ["/assets/catalogue/cat4.jpg", "/assets/catalogue/dev2-1.jpg", "/assets/catalogue/dev3-1.jpg", "/assets/catalogue/dev4-1.jpg", "/assets/catalogue/dev5-1.jpg", "/assets/catalogue/dev6-1.jpg", "/assets/catalogue/dev7-1.jpg"],
  },
  "bwb-catalogue-design": {
    title: "BWB Catalogue Design",
    desc: "Designing Impactful Catalogue for BWB: A Creative Approach.",
    category: "Design, Magazine, Our Work",
    date: "November 22, 2023",
    images: ["/assets/catalogue/cat5.jpg", "/assets/catalogue/bwb2.png", "/assets/catalogue/bwb3.png", "/assets/catalogue/bwb4.png", "/assets/catalogue/bwb5.png", "/assets/catalogue/bwb6.png", "/assets/catalogue/bwb7.png"],
  },
  "mysticity-catalogue-design": {
    title: "Mysticity Catalogue Design",
    desc: "Showcasing Mysticity's Skin Products with Innovative Catalogue Design.",
    category: "Design, Magazine, Our Work",
    date: "November 22, 2023",
    images: ["/assets/catalogue/cat6.jpg", "/assets/catalogue/ms2.jpg", "/assets/catalogue/ms3.jpg", "/assets/catalogue/ms4.jpg", "/assets/catalogue/ms5.jpg", "/assets/catalogue/ms6.jpg", "/assets/catalogue/ms7.jpg", "/assets/catalogue/ms8.jpg"],
  },
  "imperial-decor-catalogue-design": {
    title: "Imperial Decor Catalogue Design",
    desc: "Imperial Decor: Crafting Timeless Catalogue Designs with Style.",
    category: "Design, Magazine, Our Work",
    date: "November 22, 2023",
    images: ["/assets/catalogue/cat7.jpg", "/assets/catalogue/dec2.jpg", "/assets/catalogue/dec3.jpg", "/assets/catalogue/dec4.jpg", "/assets/catalogue/dec5.jpg"],
  },
  "sqiinful-catalogue-design": {
    title: "Sqiinful Catalogue Design",
    desc: "Elevating Sqiinful with Innovative Catalogue Design Solution.",
    category: "Design, Magazine, Our Work",
    date: "November 22, 2023",
    images: ["/assets/catalogue/cat8.jpg", "/assets/catalogue/sq2-1.jpg", "/assets/catalogue/sq3-1.jpg", "/assets/catalogue/sq4-1.jpg", "/assets/catalogue/sq5-1.jpg", "/assets/catalogue/sq6-1.jpg", "/assets/catalogue/sq7-1.jpg"],
  },

  // ── Our Work (Creative Communication & Advertising) ───────────────────────
  "dil-se-rock": {
    title: "Dil Se Rock",
    desc: "A bold and energetic packaging design for Dil Se Rock — capturing the spirit of music and culture through creative visual communication.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk1.png"],
  },
  "ummeed": {
    title: "Ummeed",
    desc: "Ummeed — a powerful creative campaign spreading hope and awareness through compelling visual storytelling.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk3.png"],
  },
  "supreme-furnitures": {
    title: "Supreme Furnitures",
    desc: "Supreme Furnitures — a creative event and branding design that showcases premium furniture through impactful visual communication.",
    category: "Design, Hoarding, Our Work",
    date: "2023",
    images: ["/assets/work/wrk4.png"],
  },
  "tots-couture-week-registration-campaign": {
    title: "Tots Couture Week (Registration Campaign)",
    desc: "In-mall display campaign targeting Mumbai parents for the Tots Couture Week audition event — bold, playful, and attention-grabbing design.",
    category: "Design, Hoarding, Our Work",
    date: "2023",
    images: ["/assets/work/wrk5.jpg"],
  },
  "metro-grande-gudi-padwa-outdoor-campaign": {
    title: "Metro Grande - Gudi Padwa (Outdoor Campaign)",
    desc: "A festive outdoor hoarding campaign for Metro Grande celebrating Gudi Padwa — vibrant, celebratory, and strategically placed across Mumbai.",
    category: "Design, Hoarding, Our Work",
    date: "2023",
    images: ["/assets/work/wrk6.jpg"],
  },
  "metro-grande-plus-kya-hai-outdoor-campaign": {
    title: "Metro Grande: Plus Kya Hai? (Outdoor Campaign)",
    desc: "An engaging outdoor campaign for Metro Grande asking 'Plus Kya Hai?' — creating curiosity and driving footfall through strategic hoarding placement.",
    category: "Design, Hoarding, Our Work",
    date: "2023",
    images: ["/assets/work/wrk7.jpg"],
  },
  "metro-grande-200-outdoor-campaign": {
    title: "Metro Grande 200+ Outdoor Campaign",
    desc: "Metro Grande's 200+ outdoor hoarding campaign — large-scale real estate advertising across Mumbai with bold, impactful creative communication.",
    category: "Design, Hoarding, Our Work",
    date: "2023",
    images: ["/assets/work/wrk9.jpg"],
  },
  "metro-grande-blockbuster-outdoor-campaign": {
    title: "Metro Grande Blockbuster Outdoor Campaign",
    desc: "Bringing Metro Grande's Vision to Life Through Blockbuster Outdoor Campaign — massive scale, high-impact real estate advertising.",
    category: "Design, Hoarding, Our Work",
    date: "2023",
    images: ["/assets/work/wrk10.jpg"],
  },
  "nesco-hoardings-food-beverages-hospitality": {
    title: "Nesco Hoardings – Food & Beverages, Hospitality Industry",
    desc: "Strategic hoarding advertising for the food, beverages, and hospitality industry at Nesco — capturing the right audience at the right place.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk14.jpg"],
  },
  "pd-ramadan-food-photoshoot": {
    title: "PD Ramadan Food Photoshoot",
    desc: "A visually rich food photoshoot for PD during Ramadan — capturing the essence of the festive season through warm tones and authentic food styling.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk16.jpg"],
  },
  "metro-grande-200-outdoor-campaign-2": {
    title: "Metro Grande 200+ Outdoor Campaign",
    desc: "Another milestone outdoor campaign for Metro Grande — 200+ hoardings placed strategically across Mumbai for maximum real estate brand visibility.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk18.jpg"],
  },
  "metro-grande-blockbuster-outdoor-campaign-2": {
    title: "Metro Grande Blockbuster Outdoor Campaign",
    desc: "A blockbuster-scale outdoor advertising campaign for Metro Grande real estate — bold creative, strategic placement, and maximum impact.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk19.jpg"],
  },
  "travel-industry": {
    title: "Travel Industry",
    desc: "Creative advertising and branding solutions for the travel industry — inspiring wanderlust through stunning visuals and strategic communication.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk24.jpg"],
  },
  "lifestyle-and-luxury": {
    title: "Lifestyle and Luxury",
    desc: "Premium lifestyle and luxury brand communication — elegant design, refined aesthetics, and aspirational visual storytelling.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk25.jpg"],
  },
  "travel-industry-2": {
    title: "Travel Industry",
    desc: "Creative branding and advertising for travel brands — evoking the joy of exploration through compelling design and photography.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk26.jpg"],
  },
  "food-and-beverages": {
    title: "Food & Beverages",
    desc: "Mouth-watering creative communication for food and beverage brands — vibrant, appetizing, and strategically designed to drive consumer engagement.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk27.jpg"],
  },
  "magazine-advertising-fmcg": {
    title: "Magazine Advertising for FMCG Industry",
    desc: "High-impact magazine advertising for FMCG brands — editorial-quality design that stands out on the page and in the minds of consumers.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk28.jpg"],
  },
  "fmcg-otc-campaign": {
    title: "FMCG / OTC Campaign",
    desc: "A strategic FMCG and OTC campaign — consumer-centric creative communication designed to drive awareness, trial, and purchase.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk29.jpg"],
  },
  "creative-designing-food-beverages": {
    title: "Creative Designing for Food & Beverages",
    desc: "Creative design solutions for food and beverage brands — from packaging to print, every touchpoint crafted to delight and engage consumers.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk30.jpg"],
  },
  "ooh-advertising-food-beverages-hospitality": {
    title: "OOH Advertising for Food & Beverages, Hospitality Industry",
    desc: "Out-of-home advertising for the food, beverages, and hospitality sector — bold outdoor creatives that command attention in high-traffic locations.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk31.jpg"],
  },
  "brand-awareness-healthcare": {
    title: "Brand Awareness For HealthCare Industry",
    desc: "Impactful brand awareness campaigns for the healthcare industry — clear, trustworthy, and empathetic communication designed to build credibility.",
    category: "Design, Our Work",
    date: "2023",
    images: ["/assets/work/wrk32.jpg"],
  },
};

// ─── Styles ────────────────────────────────────────────────────────────────
const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .portfolio-page {
    font-family: Georgia, serif;
    background: #fff;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    min-height: 600px;
  }

  .image-panel {
    background: #f0f0f0;
    overflow: hidden;
    height: 100%;
  }

  .carousel-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .image-track {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  .image-slide {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
  }

  .image-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .arrow-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    background: rgba(255,255,255,0.9);
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 22px;
    color: #1a1a1a;
    box-shadow: 0 2px 14px rgba(0,0,0,0.18);
    transition: background 0.2s, color 0.2s;
    line-height: 1;
    user-select: none;
  }

  .arrow-btn:hover { background: ${gold}; color: #fff; }
  .arrow-btn.prev  { left: 14px; }
  .arrow-btn.next  { right: 14px; }

  .img-counter {
    position: absolute;
    top: 14px;
    right: 14px;
    background: rgba(0,0,0,0.5);
    color: #fff;
    font-size: 11px;
    font-family: Georgia, serif;
    letter-spacing: 1px;
    padding: 4px 11px;
    border-radius: 20px;
    z-index: 20;
    user-select: none;
  }

  .dot-row {
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 20;
    flex-wrap: wrap;
    max-width: 80%;
    justify-content: center;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    flex-shrink: 0;
  }

  .dot.active {
    background: ${gold};
    transform: scale(1.4);
  }

  .details-panel {
    padding: 64px 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
    height: 100%;
  }

  .product-title {
    font-size: clamp(22px, 2.5vw, 34px);
    font-weight: 900;
    color: #1a1a1a;
    margin: 0 0 28px;
    line-height: 1.2;
  }

  .product-desc {
    font-size: 14px;
    color: #555;
    line-height: 1.9;
    margin: 0 0 40px;
  }

  .meta-section {
    border-top: 1px solid #eee;
    padding-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .meta-label {
    font-size: 11px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .meta-value     { font-size: 13px; color: #777; margin: 0; }
  .meta-value.cat { color: #999; }

  .back-btn {
    display: inline-block;
    margin-top: 40px;
    padding: 12px 28px;
    background: ${gold};
    color: #fff;
    text-decoration: none;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: background 0.2s, transform 0.15s;
    border-radius: 2px;
    align-self: flex-start;
  }

  .back-btn:hover {
    background: ${goldLight};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .portfolio-grid {
      grid-template-columns: 1fr;
      height: auto;
      min-height: unset;
    }

    .image-panel {
      height: 75vw;
      max-height: 460px;
      min-height: 260px;
    }

    .arrow-btn       { width: 36px; height: 36px; font-size: 18px; }
    .arrow-btn.prev  { left: 10px; }
    .arrow-btn.next  { right: 10px; }
    .img-counter     { font-size: 10px; top: 10px; right: 10px; }

    .details-panel {
      padding: 32px 20px 48px;
      height: auto;
      overflow-y: visible;
    }

    .product-title { font-size: clamp(20px, 6vw, 28px); margin-bottom: 16px; }
    .product-desc  { margin-bottom: 28px; font-size: 13.5px; }

    .back-btn {
      margin-top: 32px;
      align-self: stretch;
      text-align: center;
      padding: 14px 24px;
      font-size: 12px;
    }

    .meta-section { gap: 16px; padding-top: 20px; }
  }

  @media (max-width: 400px) {
    .details-panel { padding: 24px 16px 40px; }
    .product-title { font-size: 19px; }
    .dot           { width: 7px; height: 7px; }
  }
`;

// ─── Image Carousel ────────────────────────────────────────────────────────
function ImageCarousel({ images, title }) {
  const [activeImg, setActiveImg] = useState(0);
  const total = images.length;

  const prev = () => setActiveImg((i) => (i - 1 + total) % total);
  const next = () => setActiveImg((i) => (i + 1) % total);

  const [touchStart, setTouchStart] = useState(null);
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <div className="image-panel">
      <div className="carousel-wrapper" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="image-track" style={{ transform: `translateX(-${activeImg * 100}%)` }}>
          {images.map((src, i) => (
            <div className="image-slide" key={i}>
              <img src={src} alt={`${title} — view ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button className="arrow-btn prev" onClick={prev} aria-label="Previous">&#8249;</button>
            <button className="arrow-btn next" onClick={next} aria-label="Next">&#8250;</button>
            <span className="img-counter">{activeImg + 1} / {total}</span>
            <div className="dot-row">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === activeImg ? " active" : ""}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function PortfolioDetail({ params }) {
  const { slug } = use(params);
  const product = portfolioData[slug];

  if (!product) return notFound();

  return (
    <>
      <style>{styles}</style>
      <div className="portfolio-page">
        <div className="portfolio-grid">
          <ImageCarousel images={product.images} title={product.title} />
          <div className="details-panel">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-desc">{product.desc}</p>
            <div className="meta-section">
              <div>
                <p className="meta-label">Date:</p>
                <p className="meta-value">{product.date}</p>
              </div>
              <div>
                <p className="meta-label">Category:</p>
                <p className="meta-value cat">{product.category}</p>
              </div>
            </div>
            <Link href="/creative-communication-and-advertising-campaigns" className="back-btn">
              ← Back to Our Work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}