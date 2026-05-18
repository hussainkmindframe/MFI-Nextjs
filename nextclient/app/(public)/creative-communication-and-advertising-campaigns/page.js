'use client'

import { useState } from "react";
import Link from "next/link";
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const projects = [
  {
    id: 1,
    slug: "dil-se-rock",
    title: "Dil Se Rock",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: '/assets/work/wrk1.png',
  },
  {
    id: 2,
    slug: "mysticity-packaging-design",
    title: "Mysticity Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: '/assets/work/wrk2.jpg',
  },
  {
    id: 3,
    slug: "ummeed",
    title: "Ummeed",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: '/assets/work/wrk3.png',
  },
  {
    id: 4,
    slug: "supreme-furnitures",
    title: "Supreme Furnitures",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Events",
    image: '/assets/work/wrk4.png',
  },
  {
    id: 5,
    slug: "tots-couture-week-registration-campaign",
    title: "Tots Couture Week (Registration Campaign)",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Campaign",
    image: '/assets/work/wrk5.jpg',
  },
  {
    id: 6,
    slug: "metro-grande-gudi-padwa-outdoor-campaign",
    title: "Metro Grande - Gudi Padwa (Outdoor Campaign)",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk6.jpg',
  },
  {
    id: 7,
    slug: "metro-grande-plus-kya-hai-outdoor-campaign",
    title: "Metro Grande: Plus Kya Hai? (Outdoor Campaign)",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk7.jpg',
  },
  {
    id: 8,
    slug: "soul-packaging-design",
    title: "Soul Packaging Design",
    category: "DESIGN · HOARDING · BRANDING · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk8.jpg',
  },
  {
    id: 9,
    slug: "metro-grande-200-outdoor-campaign",
    title: "Metro Grande 200+ Outdoor Campaign",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk9.jpg',
  },
  {
    id: 10,
    slug: "metro-grande-blockbuster-outdoor-campaign",
    title: "Metro Grande Blockbuster Outdoor Campaign",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk10.jpg',
  },
  {
    id: 11,
    slug: "oishi-oishi-packagin-design",
    title: "Oishi Oishi Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: '/assets/work/wrk11.png',
  },
  {
    id: 12,
    slug: "sqiinful-packaging-design",
    title: "Sqiinful Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: '/assets/work/wrk12.png',
  },
  {
    id: 13,
    slug: "sqiinful-catalogue-design",
    title: "Sqiinful Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: '/assets/work/wrk13.jpg',
  },
  {
    id: 14,
    slug: "nesco-hoardings-food-beverages-hospitality",
    title: "Nesco Hoardings – Advertising for Food & Beverages, Hospitality Industry",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: '/assets/work/wrk14.jpg',
  },
  {
    id: 15,
    slug: "donear-catalogue-design",
    title: "Donear Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk15.jpg',
  },
  {
    id: 16,
    slug: "pd-ramadan-food-photoshoot",
    title: "PD Ramadan Food Photoshoot",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk16.jpg',
  },
  {
    id: 17,
    slug: "imperial-decor-catalogue-design-2",
    title: "Magnum Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: '/assets/work/wrk17.jpg',
  },
  {
    id: 18,
    slug: "metro-grande-200-outdoor-campaign-2",
    title: "Metro Grande 200+ Outdoor Campaign",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: '/assets/work/wrk18.jpg',
  },
  {
    id: 19,
    slug: "metro-grande-blockbuster-outdoor-campaign-2",
    title: "Metro Grande Blockbuster Outdoor Campaign",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: '/assets/work/wrk19.jpg',
  },
  {
    id: 20,
    slug: "my-beauty-world-catalogue-design",
    title: "My Beauty World Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: '/assets/work/wrk20.jpg',
  },
  {
    id: 21,
    slug: "oishi-oishi-packagin-design",
    title: "Oishi Oishi Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: '/assets/work/wrk21.jpg',
  },
  {
    id: 22,
    slug: "earthbased-catalogue-design",
    title: "EarthBased Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: '/assets/work/wrk22.jpg',
  },
  {
    id: 23,
    slug: "imperial-decor-catalogue-design",
    title: "Imperial Decor Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk23.jpg',
  },
  {
    id: 24,
    slug: "travel-industry",
    title: "Travel Industry",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk24.jpg',
  },
  {
    id: 25,
    slug: "lifestyle-and-luxury",
    title: "Lifestyle and Luxury",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: '/assets/work/wrk25.jpg',
  },
  {
    id: 26,
    slug: "travel-industry-2",
    title: "Travel Industry",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: '/assets/work/wrk26.jpg',
  },
  {
    id: 27,
    slug: "food-and-beverages",
    title: "Food & Beverages",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: '/assets/work/wrk27.jpg',
  },
  {
    id: 28,
    slug: "magazine-advertising-fmcg",
    title: "Magazine Advertising for FMCG Industry",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: '/assets/work/wrk28.jpg',
  },
  {
    id: 29,
    slug: "fmcg-otc-campaign",
    title: "FMCG / OTC Campaign",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: '/assets/work/wrk29.jpg',
  },
  {
    id: 30,
    slug: "creative-designing-food-beverages",
    title: "Creative Designing for Food & Beverages",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: '/assets/work/wrk30.jpg',
  },
  {
    id: 31,
    slug: "ooh-advertising-food-beverages-hospitality",
    title: "OOH Advertising for Food & Beverages, Hospitality Industry",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk31.jpg',
  },
  {
    id: 32,
    slug: "brand-awareness-healthcare",
    title: "Brand Awareness For HealthCare Industry",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: '/assets/work/wrk32.jpg',
  },
];

const tags = ["All", "Packaging", "Campaign", "Outdoor", "Events"];

const tagColors = {
  Packaging: "#b08d57",
  Campaign: "#7a9e7e",
  Outdoor: "#5b7fa6",
  Events: "#a0748a",
  All: "#888",
};

export default function OurWork() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tag === activeTag);

  return (
    <>
      <SEO
        title={seoConfig.ourWork.title}
        description={seoConfig.ourWork.description}
        keywords={seoConfig.ourWork.keywords}
        path={seoConfig.ourWork.path}
      />
      <div style={styles.page}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

          * { box-sizing: border-box; margin: 0; padding: 0; }

          .project-card {
            background: #fff;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            position: relative;
            transition: box-shadow 0.3s ease;
            text-decoration: none;
            display: block;
            color: inherit;
          }

          .project-card:hover {
            box-shadow: 0 12px 40px rgba(0,0,0,0.13);
          }

          .card-img-wrap {
            overflow: hidden;
            position: relative;
          }

          .card-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            display: block;
            transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .project-card:hover .card-img {
            transform: scale(1.06);
          }

          .hover-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(20,15,10,0.72) 0%, rgba(20,15,10,0.1) 60%, transparent 100%);
            opacity: 0;
            transition: opacity 0.35s ease;
            display: flex;
            align-items: flex-end;
            padding: 20px;
            pointer-events: none;
          }

          .project-card:hover .hover-overlay {
            opacity: 1;
          }

          .hover-cta {
            color: #fff;
            font-family: 'DM Sans', sans-serif;
            font-size: 13px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            border-bottom: 1px solid rgba(255,255,255,0.6);
            padding-bottom: 2px;
          }

          .filter-btn {
            font-family: 'DM Sans', sans-serif;
            font-size: 12px;
            letter-spacing: 1.4px;
            text-transform: uppercase;
            padding: 7px 18px;
            border-radius: 2px;
            border: 1px solid #ccc;
            background: transparent;
            cursor: pointer;
            transition: all 0.22s ease;
            color: #888;
          }

          .filter-btn:hover {
            border-color: #b08d57;
            color: #b08d57;
          }

          .filter-btn.active {
            background: #b08d57;
            border-color: #b08d57;
            color: #fff;
          }

          .work-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }

          @media (max-width: 900px) {
            .work-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .card-img {
              height: 180px !important;
            }
          }

          @media (max-width: 560px) {
            .work-grid {
              grid-template-columns: 1fr !important;
              padding: 0 16px 60px !important;
            }
            .card-img {
              height: 220px !important;
            }
            .work-header {
              padding: 40px 16px 24px !important;
            }
            .work-filters {
              padding: 0 16px !important;
              gap: 8px !important;
            }
            .filter-btn {
              font-size: 11px !important;
              padding: 6px 13px !important;
            }
          }
        `}</style>

        {/* Header */}
        <div className="work-header" style={styles.header}>
          <p style={styles.subheading}>Mind Frame India's</p>
          <h1 style={styles.heading}>
            Creative Communication
            <br />& Advertising Campaigns
          </h1>
          <div style={styles.divider} />
        </div>

        {/* Filter Tabs */}
        <div className="work-filters" style={styles.filters}>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="work-grid">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio-item/${project.slug}`}
              className="project-card"
            >
              <div className="card-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img"
                />
                <div className="hover-overlay">
                  <span className="hover-cta">View Project</span>
                </div>
              </div>

              <div style={styles.cardBody}>
                <span
                  style={{
                    ...styles.tag,
                    background: tagColors[project.tag] + "18",
                    color: tagColors[project.tag],
                    borderColor: tagColors[project.tag] + "40",
                  }}
                >
                  {project.tag}
                </span>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardCategory}>{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#faf8f5",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "64px 24px 32px",
  },
  subheading: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#b08d57",
    marginBottom: "10px",
  },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.25,
    marginBottom: "20px",
  },
  divider: {
    width: "48px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 40px",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    maxWidth: "1100px",
    margin: "0 auto 40px",
    padding: "0 24px",
  },
  cardBody: {
    padding: "16px 18px 20px",
    background: "#fff",
  },
  tag: {
    display: "inline-block",
    fontSize: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    padding: "3px 10px",
    borderRadius: "2px",
    border: "1px solid",
    marginBottom: "10px",
    fontWeight: 500,
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.4,
    marginBottom: "8px",
  },
  cardCategory: {
    fontSize: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#b08d57",
    fontWeight: 400,
  },
};