"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";


// ── image imports ────────────────────────────────────────────────────────
const img1  = "/assets/news-room/2016-1.jpg";
const img2  = "/assets/news-room/2016-2.jpg";
const img3  = "/assets/news-room/2017-1.jpg";
const img4  = "/assets/news-room/2017-2.jpg";
const img5  = "/assets/news-room/2018-1.jpg";
const img6  = "/assets/news-room/2018-2.jpg";
const img7  = "/assets/news-room/2018-3.png";
const img8  = "/assets/news-room/2020.png";
const img9  = "/assets/news-room/2021-1.png";
const img10 = "/assets/news-room/2021-2.png";
const img11 = "/assets/news-room/2021-3.png";
const img12 = "/assets/news-room/2021-4.png";
const img13 = "/assets/news-room/2022-1.jpg";
const img14 = "/assets/news-room/2022-2.png";
const img15 = "/assets/news-room/2022-3.jpg";
const img16 = "/assets/news-room/2022-4.png";
const img17 = "/assets/news-room/2023-1.png";
const img18 = "/assets/news-room/2023-2.png";
const img19 = "/assets/news-room/2023-3.png";
const img20 = "/assets/news-room/2023-4.png";
const img21 = "/assets/news-room/2023-5.png";
const img22 = "/assets/news-room/2023-6.png";
const img23 = "/assets/news-room/2024-1.jpg";
const img24 = "/assets/news-room/2024-2.png";
const img25 = "/assets/news-room/2024-3.jpg";


// ── newsData ─────────────────────────────────────────────────────────────
const newsData = {
  2024: [
    {
      id: 1,
      slug: "a-timeless-anthem-8-years-counting",
      title: "A Timeless Anthem: 8 Years & Counting…",
      year: "2024",
      category: "Brand Campaign",
      image: img25,
      images: [img25],
      desc: "Eight years ago, Mind Frame India created a campaign that transcended advertising — it became a cultural moment. As we mark another milestone year, we look back at how this timeless anthem continues to resonate with audiences across India, proving that truly great creative work only grows stronger with time.",
    },
    {
      id: 2,
      slug: "mind-frame-india-tots-couture-week",
      title: "Mind Frame India Secures Fashion Week Brand Mandate for TOTS Couture Week",
      year: "2024",
      category: "Fashion, Brand Mandate",
      image: img24,
      images: [img24],
      desc: "Mind Frame India has secured the brand mandate for TOTS Couture Week — one of India's most anticipated children's fashion events. From strategy and creative direction to digital campaigns and on-ground activation, our team is driving end-to-end brand communication for this landmark fashion property.",
    },
    {
      id: 3,
      slug: "mind-frame-india-wins-rirasa",
      title: "Mind Frame India Wins Rirasa: Elevating Luxury Indian Fashion to New Heights",
      year: "2024",
      category: "Luxury Fashion, Brand Strategy",
      image: img23,
      images: [img23],
      desc: "Rirasa — a luxury Indian fashion label rooted in heritage craft — has chosen Mind Frame India as its brand and marketing partner. Our mandate encompasses brand positioning, digital storytelling, and luxury market communication.",
    },
  ],
  2023: [
    {
      id: 4,
      slug: "realty-brands-post-pandemic-digital-campaigns",
      title: "Mind Frame India Revamps Realty Brands Post-Pandemic with Strategic Digital Campaigns",
      year: "2023",
      category: "Real Estate, Digital Marketing",
      image: img22,
      images: [img22],
      desc: "The post-pandemic real estate landscape demanded a complete rethink of how developers connect with buyers. Mind Frame India stepped in to revamp the digital presence of multiple realty brands — rebuilding trust, repositioning properties, and deploying data-driven campaigns that drove qualified leads and record site visits.",
    },
    {
      id: 5,
      slug: "revamping-jayashri-gaytri-foods-bhopal-to-new-york",
      title: "Revamping Jayashri Gaytri Foods Pvt Ltd – From Bhopal to New York",
      year: "2023",
      category: "FMCG, Brand Revamp",
      image: img21,
      images: [img21],
      desc: "A homegrown food brand from Bhopal with global ambitions — that was our brief. Mind Frame India undertook a comprehensive brand revamp for Jayashri Gaytri Foods Pvt Ltd, reimagining everything from packaging and visual identity to digital strategy.",
    },
    {
      id: 6,
      slug: "influencer-campaigns-kolorr",
      title: "Mind Frame India's Influencer Campaigns Propel Kolorr to New Heights",
      year: "2023",
      category: "Influencer Marketing, D2C",
      image: img20,
      images: [img20],
      desc: "Kolorr needed to break through the noise in India's crowded beauty and lifestyle space. Mind Frame India designed and executed a multi-tier influencer campaign strategy that delivered exponential growth in brand awareness, social following, and direct-to-consumer sales.",
    },
    {
      id: 7,
      slug: "nesco-foods-qsr-launches-gourmet-craft",
      title: "Mind Frame India Transforms Nesco Foods With Successful QSR Launches & Branding of Gourmet Craft",
      year: "2023",
      category: "F&B, QSR Branding",
      image: img19,
      images: [img19],
      desc: "Nesco Foods' ambition to launch multiple QSR outlets required a brand partner who understood both food culture and consumer behavior. Mind Frame India developed the complete brand identity, launch campaigns, and marketing playbook for Gourmet Craft.",
    },
    {
      id: 8,
      slug: "barter-strategy-persian-darbar",
      title: "Mind Frame India's Barter Strategy Delivers Massive Reach for Persian Darbar",
      year: "2023",
      category: "F&B, Influencer Marketing",
      image: img18,
      images: [img18],
      desc: "With a limited marketing budget but an extraordinary product, Persian Darbar needed creativity over cash. Mind Frame India devised a strategic influencer barter programme that delivered massive organic reach and a significant uplift in footfall.",
    },
    {
      id: 9,
      slug: "transforming-geeta-aluminium-strategic-branding",
      title: "Transforming Geeta Aluminium: A Case Study of Strategic Branding Success",
      year: "2023",
      category: "B2B, Brand Strategy",
      image: img17,
      images: [img17],
      desc: "Geeta Aluminium had decades of manufacturing excellence — but a brand that hadn't kept pace with their growth. Mind Frame India undertook a full strategic branding exercise that positioned Geeta Aluminium as a premium, trusted partner in the aluminium industry.",
    },
  ],
  2022: [
    {
      id: 10,
      slug: "arijit-singh-pankaj-udhas-concerts-arizona",
      title: "Mind Frame India Drives Online Sales For Arijit Singh and Pankaj Udhas Ji Concerts in Arizona",
      year: "2022",
      category: "Entertainment, Event Marketing",
      image: img16,
      images: [img16],
      desc: "Selling out concerts for Arijit Singh and the legendary Pankaj Udhas Ji in Arizona required precision digital marketing targeting the Indian diaspora across North America. Mind Frame India's campaigns drove ticket sales to sell-out levels.",
    },
    {
      id: 11,
      slug: "nawazuddin-siddiqui-bharat-agri-kisan-app",
      title: "Mind Frame India Chooses Nawazuddin Siddiqui for Bharat Agri Kisan App Campaign",
      year: "2022",
      category: "AgriTech, Celebrity Campaign",
      image: img15,
      images: [img15],
      desc: "For the Bharat Agri Kisan App campaign, Mind Frame India made a bold creative choice — casting Nawazuddin Siddiqui as the face of the brand. His authentic connection to rural India made him the perfect voice to communicate the app's promise to India's farming community.",
    },
    {
      id: 12,
      slug: "thane-realty-four-competing-brands",
      title: "Mind Frame India Takes Thane Realty by Storm With Strategic Campaigns for Four Competing Brands",
      year: "2022",
      category: "Real Estate, Multi-Brand Strategy",
      image: img14,
      images: [img14],
      desc: "Managing campaigns for four competing real estate brands in the same market is a challenge few agencies attempt. Mind Frame India developed distinct brand voices and campaign territories for each developer in Thane, ensuring maximum market coverage without cannibalisation.",
    },
    {
      id: 13,
      slug: "shreyas-prarthana-west-pioneer-metro-grande",
      title: "Roping in Celebrity Couple Shreyas & Prarthana for West Pioneer's Metro Grande",
      year: "2022",
      category: "Real Estate, Celebrity Endorsement",
      image: img13,
      images: [img13],
      desc: "Celebrity couple Shreyas Talpade and Prarthana Behere became the face of West Pioneer's Metro Grande. Mind Frame India conceptualised and executed the complete campaign, creating a brand story that resonated deeply with the target homebuyer.",
    },
  ],
  2021: [
    {
      id: 14,
      slug: "digital-marketing-mandate-mahatta-art",
      title: "Mind Frame India Bags Digital Marketing Mandate for Mahatta Art",
      year: "2021",
      category: "Art & Culture, Digital Marketing",
      image: img12,
      images: [img12],
      desc: "Mahatta Art chose Mind Frame India to drive its digital marketing mandate. Our team developed a content and community strategy that brought Mahatta's rich artistic legacy to new audiences online, growing their digital presence significantly.",
    },
    {
      id: 15,
      slug: "ayuska-avadh-organic-life",
      title: "Creating a Landmark AYUSKA by Avadh: Your Organic Life Begins Here",
      year: "2021",
      category: "Real Estate, Wellness Branding",
      image: img11,
      images: [img11],
      desc: "AYUSKA by Avadh is not just a residential project — it is a wellness philosophy. Mind Frame India created the complete brand identity and launch campaign, weaving organic living and modern luxury into a cohesive narrative that set it apart in the Mumbai real estate market.",
    },
    {
      id: 16,
      slug: "hdfc-largest-retail-webinar",
      title: "Mind Frame India Powers HDFC's Largest Retail Webinar to Unprecedented Success",
      year: "2021",
      category: "BFSI, Digital Event",
      image: img10,
      images: [img10],
      desc: "When HDFC set out to host its largest-ever retail investor webinar, Mind Frame India was trusted to make it happen. From promotional campaigns to live digital support, our team ensured record attendance and set a new benchmark for digital investor education events.",
    },
    {
      id: 17,
      slug: "ayuska-avach-crafting-longevity-real-estate",
      title: "Ayuska by Avach: Crafting Longevity in Real Estate Marketing",
      year: "2021",
      category: "Real Estate, Brand Strategy",
      image: img9,
      images: [img9],
      desc: "Building long-term brand equity in real estate requires sustained storytelling. Mind Frame India's ongoing strategy for Ayuska by Avach focused on building community, nurturing leads through the long sales cycle, and keeping the brand top-of-mind for buyers.",
    },
  ],
  2020: [
    {
      id: 18,
      slug: "travel-brands-innovative-marketing-strategies",
      title: "Mind Frame India Elevates Travel Brands to New Heights With Innovative Marketing Strategies",
      year: "2020",
      category: "Travel & Tourism, Brand Marketing",
      image: img8,
      images: [img8],
      desc: "Even as the travel industry navigated unprecedented challenges in 2020, Mind Frame India helped travel brands stay relevant and connected through innovative content strategies, virtual experiences, and future-focused campaigns that kept audiences dreaming until the world was ready to travel again.",
    },
  ],
  2018: [
    {
      id: 19,
      slug: "supreme-market-presence-vibrant-campaign",
      title: "Mind Frame India Reignites Supreme's Market Presence with a Vibrant Campaign",
      year: "2018",
      category: "FMCG, Brand Campaign",
      image: img5,
      images: [img5, img6],
      desc: "Supreme needed a creative jolt — a campaign that would cut through category clutter and re-establish brand relevance with modern consumers. Mind Frame India delivered a vibrant, high-energy campaign that reignited consumer interest and drove retail visibility.",
    },
    {
      id: 20,
      slug: "how-mind-frame-won-supreme-furniture-mandate",
      title: "How Mind Frame India Won the Supreme Furniture Mandate",
      year: "2018",
      category: "Furniture, Brand Strategy",
      image: img6,
      images: [img6, img5],
      desc: "Winning the Supreme Furniture mandate was the result of a compelling strategic pitch demonstrating Mind Frame India's deep understanding of the furniture category, competitive landscape, and the Supreme consumer.",
    },
    {
      id: 21,
      slug: "innovative-campaign-aditya-birla-memorial-hospital",
      title: "Mind Frame India's Innovative Campaign for Aditya Birla Memorial Hospital",
      year: "2018",
      category: "Healthcare, Brand Campaign",
      image: img7,
      images: [img7, img3, img4],
      desc: "Healthcare advertising demands empathy, credibility, and hope. Mind Frame India's campaign for Aditya Birla Memorial Hospital combined powerful patient stories with medical expertise to create communication that informed, inspired, and built deep trust.",
    },
  ],
  2017: [
    {
      id: 22,
      slug: "aditya-birla-ummeed-cancer-hope-campaign",
      title: "Ummeed: Aditya Birla Memorial Hospital Gives Hope to Cancer Patients",
      year: "2017",
      category: "Healthcare, Social Campaign",
      image: img3,
      images: [img3, img4, img1, img2],
      desc: "In the campaign conceptualised by Mind Frame India, Aditya Birla Memorial Hospital launched 'Ummeed' — a message of hope for cancer patients and their families, humanising cancer care and positioning ABMH as a beacon of hope.",
    },
    {
      id: 23,
      slug: "javed-ali-music-director-ummeed-cancer-awareness",
      title: "Javed Ali Marks Debut as Music Director for Ummeed Cancer Awareness Campaign",
      year: "2017",
      category: "Healthcare, Music, Social Campaign",
      image: img4,
      images: [img4, img3, img1, img2],
      desc: "Renowned playback singer Javed Ali stepped into the role of music director for the Ummeed campaign by Aditya Birla Memorial Hospital. Mind Frame India brought this collaboration to life, creating an anthem that moved audiences across India.",
    },
  ],
  2016: [
    {
      id: 24,
      slug: "ummeed-illuminating-hope-cancer-abmh",
      title: "Ummeed: Illuminating Hope in the Journey Against Cancer",
      year: "2016",
      category: "Healthcare, Social Campaign",
      image: img1,
      images: [img1, img2, img3, img4],
      desc: "Ummeed began with a simple but profound idea: that hope is the most powerful medicine. Mind Frame India's compassionate campaign for Aditya Birla Memorial Hospital shone a light on the human side of cancer care — touching a nation with its message.",
    },
    {
      id: 25,
      slug: "ummeed-journey-behind-music-cancer-awareness-abmh",
      title: "Ummeed: The Journey Behind the Music – Raising Cancer Awareness for ABMH",
      year: "2016",
      category: "Healthcare, Music, Social Campaign",
      image: img2,
      images: [img2, img1, img3, img4],
      desc: "Behind every great campaign is a story of collaboration, creativity, and conviction. Ummeed's musical journey brought together some of India's finest talent in service of a cause that matters — and Mind Frame India takes you behind the scenes.",
    },
  ],
};

// ── flat lookup map: slug → item ──────────────────────────────────────────
const slugMap = {};
Object.values(newsData).forEach((items) =>
  items.forEach((item) => { slugMap[item.slug] = item; })
);

const gold = "#b08d57";

// ── Carousel ──────────────────────────────────────────────────────────────
function Carousel({ images, title }) {
  const [active, setActive] = useState(0);
  const total = images.length;
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const [touchStart, setTouchStart] = useState(null);
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <div className="nr-image-panel">
      <div
        className="nr-carousel-wrapper"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="nr-image-track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((src, i) => (
            <div className="nr-image-slide" key={i}>
              <img src={src} alt={`${title} — ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button className="nr-arrow prev" onClick={prev} aria-label="Previous">&#8249;</button>
            <button className="nr-arrow next" onClick={next} aria-label="Next">&#8250;</button>
            <span className="nr-counter">{active + 1} / {total}</span>
            <div className="nr-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`nr-dot${i === active ? " active" : ""}`}
                  onClick={() => setActive(i)}
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

// ── Page ──────────────────────────────────────────────────────────────────
export default function NewsRoomDetail({ params }) {
  const { slug } = use(params);
  const item = slugMap[slug];

  if (!item) return notFound();

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nr-page {
          font-family: 'DM Sans', sans-serif;
          background: #faf8f5;
          min-height: 100vh;
        }

        /* ── Desktop: side-by-side, full viewport height ── */
        .nr-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        /* ── Image Panel ── */
        .nr-image-panel {
          background: #111;
          overflow: hidden;
          /* On desktop, stretch to grid row height */
          position: sticky;
          top: 0;
          height: 100vh;
        }

        .nr-carousel-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .nr-image-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .nr-image-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
        }

        .nr-image-slide img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: white;
        }

        .nr-arrow {
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
        .nr-arrow:hover { background: ${gold}; color: #fff; }
        .nr-arrow.prev  { left: 14px; }
        .nr-arrow.next  { right: 14px; }

        .nr-counter {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(0,0,0,0.5);
          color: #fff;
          font-size: 11px;
          letter-spacing: 1px;
          padding: 4px 11px;
          border-radius: 20px;
          z-index: 20;
          user-select: none;
        }

        .nr-dots {
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

        .nr-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.45);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .nr-dot.active {
          background: ${gold};
          transform: scale(1.4);
        }

        /* ── Details Panel ── */
        .nr-details {
          padding: 64px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow-y: auto;
          background: #faf8f5;
        }

        .nr-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${gold};
          border: 1px solid ${gold};
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 20px;
          width: fit-content;
        }

        .nr-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 2.2vw, 30px);
          font-weight: 800;
          color: #1a1510;
          line-height: 1.3;
          margin-bottom: 24px;
        }

        .nr-desc {
          font-size: 14.5px;
          color: #666;
          line-height: 1.85;
          margin-bottom: 36px;
        }

        .nr-meta {
          border-top: 1px solid #e8e0d4;
          padding-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .nr-meta-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1a1510;
          margin-bottom: 4px;
        }

        .nr-meta-value {
          font-size: 13px;
          color: #888;
        }

        .nr-back {
          display: inline-block;
          padding: 12px 28px;
          background: ${gold};
          color: #fff;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border-radius: 2px;
          align-self: flex-start;
          transition: background 0.2s, transform 0.15s;
        }
        .nr-back:hover {
          background: #c9a84c;
          transform: translateY(-1px);
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .nr-grid {
            grid-template-columns: 1fr;
            min-height: unset;
          }

          /* On mobile the image panel is NOT sticky — it's a fixed-height block */
          .nr-image-panel {
            position: relative;
            height: 56vw;
            min-height: 220px;
            max-height: 420px;
          }

          .nr-arrow { width: 36px; height: 36px; font-size: 18px; }
          .nr-arrow.prev { left: 10px; }
          .nr-arrow.next { right: 10px; }

          .nr-details {
            padding: 32px 20px 56px;
            overflow-y: visible;
            justify-content: flex-start;
          }

          .nr-title {
            font-size: clamp(18px, 5.5vw, 26px);
          }

          .nr-back {
            align-self: stretch;
            text-align: center;
            padding: 14px 24px;
          }
        }
      `}</style>

      <div className="nr-page">
        <div className="nr-grid">
          <Carousel images={item.images} title={item.title} />

          <div className="nr-details">
            <span className="nr-tag">{item.year} Newsroom</span>
            <h1 className="nr-title">{item.title}</h1>
            <p className="nr-desc">{item.desc}</p>

            <div className="nr-meta">
              <div>
                <p className="nr-meta-label">Year</p>
                <p className="nr-meta-value">{item.year}</p>
              </div>
              <div>
                <p className="nr-meta-label">Category</p>
                <p className="nr-meta-value">{item.category}</p>
              </div>
            </div>

            <Link href="/news-room" className="nr-back">
              ← Back to Newsroom
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}