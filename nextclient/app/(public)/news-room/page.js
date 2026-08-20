"use client";
import Link from "next/link";
import { useState } from "react";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seoConfig";
const bannerImage = "/assets/news-room/banner.jpg";
const img1 = "/assets/news-room/2016-1.jpg";
const img2 = "/assets/news-room/2016-2.jpg";
const img3 = "/assets/news-room/2017-1.jpg";
const img4 = "/assets/news-room/2017-2.jpg";
const img5 = "/assets/news-room/2018-1.jpg";
const img6 = "/assets/news-room/2018-2.jpg";
const img7 = "/assets/news-room/2018-3.png";
const img8 = "/assets/news-room/2020.png";
const img9 = "/assets/news-room/2021-1.png";
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

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#faf8f5",
    minHeight: "100vh",
  },
};

export const newsData = {
  2024: [
    {
      id: 1,
      slug: "a-timeless-anthem-8-years-counting",
      title: "A Timeless Anthem: 8 Years & Counting…",
      year: "2024",
      category: "Brand Campaign",
      image: img25,
      images: [img25],
      desc: "Eight years ago, Mind Frame India created a campaign that transcended advertising — it became a cultural moment. As we mark another milestone year, we look back at how this timeless anthem continues to resonate with audiences across India, proving that truly great creative work only grows stronger with time. From the initial brief to the final execution, this is the story of a campaign built to last.",
    },
    {
      id: 2,
      slug: "mind-frame-india-tots-couture-week",
      title: "Mind Frame India Secures Fashion Week Brand Mandate for TOTS Couture Week",
      year: "2024",
      category: "Fashion, Brand Mandate",
      image: img24,
      images: [img24],
      desc: "Mind Frame India has secured the brand mandate for TOTS Couture Week — one of India's most anticipated children's fashion events. From strategy and creative direction to digital campaigns and on-ground activation, our team is driving end-to-end brand communication for this landmark fashion property, bringing together India's top designers and the next generation of style.",
    },
    {
      id: 3,
      slug: "mind-frame-india-wins-rirasa",
      title: "Mind Frame India Wins Rirasa: Elevating Luxury Indian Fashion to New Heights",
      year: "2024",
      category: "Luxury Fashion, Brand Strategy",
      image: img23,
      images: [img23],
      desc: "Rirasa — a luxury Indian fashion label rooted in heritage craft — has chosen Mind Frame India as its brand and marketing partner. Our mandate encompasses brand positioning, digital storytelling, and luxury market communication. The challenge: to translate centuries-old craft traditions into a contemporary luxury narrative that resonates with today's discerning consumer while honoring the artisans behind every creation.",
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
      desc: "The post-pandemic real estate landscape demanded a complete rethink of how developers connect with buyers. Mind Frame India stepped in to revamp the digital presence of multiple realty brands — rebuilding trust, repositioning properties, and deploying data-driven campaigns that drove qualified leads and record site visits in a transformed market environment.",
    },
    {
      id: 5,
      slug: "revamping-jayashri-gaytri-foods-bhopal-to-new-york",
      title: "Revamping Jayashri Gaytri Foods Pvt Ltd – From Bhopal to New York",
      year: "2023",
      category: "FMCG, Brand Revamp",
      image: img21,
      images: [img21],
      desc: "A homegrown food brand from Bhopal with global ambitions — that was our brief. Mind Frame India undertook a comprehensive brand revamp for Jayashri Gaytri Foods Pvt Ltd, reimagining everything from packaging and visual identity to digital strategy. The result: a brand ready to compete on international shelves, from the streets of Bhopal to the aisles of New York.",
    },
    {
      id: 6,
      slug: "influencer-campaigns-kolorr",
      title: "Mind Frame India's Influencer Campaigns Propel Kolorr to New Heights",
      year: "2023",
      category: "Influencer Marketing, D2C",
      image: img20,
      images: [img20],
      desc: "Kolorr needed to break through the noise in India's crowded beauty and lifestyle space. Mind Frame India designed and executed a multi-tier influencer campaign strategy — from mega influencers for reach to micro-creators for authentic engagement. The campaigns delivered exponential growth in brand awareness, social following, and direct-to-consumer sales.",
    },
    {
      id: 7,
      slug: "nesco-foods-qsr-launches-gourmet-craft",
      title: "Mind Frame India Transforms Nesco Foods With Successful QSR Launches & Branding of Gourmet Craft",
      year: "2023",
      category: "F&B, QSR Branding",
      image: img19,
      images: [img19],
      desc: "Nesco Foods' ambition to launch multiple QSR outlets required a brand partner who understood both food culture and consumer behavior. Mind Frame India developed the complete brand identity, launch campaigns, and marketing playbook for Gourmet Craft — Nesco's flagship QSR brand — driving successful openings and building a loyal customer base from day one.",
    },
    {
      id: 8,
      slug: "barter-strategy-persian-darbar",
      title: "Mind Frame India's Barter Strategy Delivers Massive Reach for Persian Darbar",
      year: "2023",
      category: "F&B, Influencer Marketing",
      image: img18,
      images: [img18],
      desc: "With a limited marketing budget but an extraordinary product, Persian Darbar needed creativity over cash. Mind Frame India devised a strategic influencer barter programme — bringing top food bloggers and content creators to experience and share the Persian Darbar story. The result was massive organic reach, authentic storytelling, and a significant uplift in footfall and brand sentiment.",
    },
    {
      id: 9,
      slug: "transforming-geeta-aluminium-strategic-branding",
      title: "Transforming Geeta Aluminium: A Case Study of Strategic Branding Success",
      year: "2023",
      category: "B2B, Brand Strategy",
      image: img17,
      images: [img17],
      desc: "Geeta Aluminium had decades of manufacturing excellence — but a brand that hadn't kept pace with their growth. Mind Frame India undertook a full strategic branding exercise: market research, brand architecture, visual identity redesign, and a B2B communication strategy. The transformation positioned Geeta Aluminium as a premium, trusted partner in the aluminium industry.",
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
      desc: "Selling out concerts for Arijit Singh and the legendary Pankaj Udhas Ji in Arizona required precision digital marketing targeting the Indian diaspora across North America. Mind Frame India crafted geo-targeted campaigns, community outreach, and social media strategies that drove ticket sales to sell-out levels — connecting the Indian community abroad with the music they love.",
    },
    {
      id: 11,
      slug: "nawazuddin-siddiqui-bharat-agri-kisan-app",
      title: "Mind Frame India Chooses Nawazuddin Siddiqui for Bharat Agri Kisan App Campaign",
      year: "2022",
      category: "AgriTech, Celebrity Campaign",
      image: img15,
      images: [img15],
      desc: "For the Bharat Agri Kisan App campaign, Mind Frame India made a bold creative choice — casting Nawazuddin Siddiqui as the face of the brand. His authentic connection to rural India and his massive reach made him the perfect voice to communicate the app's promise to India's farming community. The campaign drove significant app downloads and brand credibility.",
    },
    {
      id: 12,
      slug: "thane-realty-four-competing-brands",
      title: "Mind Frame India Takes Thane Realty by Storm With Strategic Campaigns for Four Competing Brands",
      year: "2022",
      category: "Real Estate, Multi-Brand Strategy",
      image: img14,
      images: [img14],
      desc: "Managing campaigns for four competing real estate brands in the same market is a creative and strategic challenge few agencies attempt. Mind Frame India did it — developing distinct brand voices, positioning strategies, and campaign territories for each developer in Thane, ensuring maximum market coverage without cannibalisation.",
    },
    {
      id: 13,
      slug: "shreyas-prarthana-west-pioneer-metro-grande",
      title: "Roping in Celebrity Couple Shreyas & Prarthana for West Pioneer's Metro Grande",
      year: "2022",
      category: "Real Estate, Celebrity Endorsement",
      image: img13,
      images: [img13],
      desc: "Celebrity couple Shreyas Talpade and Prarthana Behere became the face of West Pioneer's Metro Grande — a casting decision that brought warmth, familiarity, and aspirational appeal to the campaign. Mind Frame India conceptualised and executed the complete campaign, from TVC to digital, creating a brand story that resonated deeply with the target homebuyer.",
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
      desc: "Mahatta Art — one of India's storied art institutions — chose Mind Frame India to drive its digital marketing mandate. Our team developed a content and community strategy that brought Mahatta's rich artistic legacy to new audiences online, growing their digital presence and driving engagement with art lovers across the country.",
    },
    {
      id: 15,
      slug: "ayuska-avadh-organic-life",
      title: "Creating a Landmark AYUSKA by Avadh: Your Organic Life Begins Here",
      year: "2021",
      category: "Real Estate, Wellness Branding",
      image: img11,
      images: [img11],
      desc: "AYUSKA by Avadh is not just a residential project — it is a wellness philosophy. Mind Frame India created the complete brand identity and launch campaign for this landmark development, weaving together organic living, Ayurvedic principles, and modern luxury into a cohesive brand narrative that set it apart in the competitive Mumbai real estate market.",
    },
    {
      id: 16,
      slug: "hdfc-largest-retail-webinar",
      title: "Mind Frame India Powers HDFC's Largest Retail Webinar to Unprecedented Success",
      year: "2021",
      category: "BFSI, Digital Event",
      image: img10,
      images: [img10],
      desc: "When HDFC set out to host its largest-ever retail investor webinar, Mind Frame India was trusted to make it happen. From promotional campaigns and registration drives to live digital support, our team ensured record attendance and engagement — setting a new benchmark for digital investor education events in the BFSI sector.",
    },
    {
      id: 17,
      slug: "ayuska-avadh-crafting-longevity-real-estate",
      title: "Ayuska by Avadh: Crafting Longevity in Real Estate Marketing",
      year: "2021",
      category: "Real Estate, Brand Strategy",
      image: img9,
      images: [img9],
      desc: "Building long-term brand equity in real estate requires more than launch campaigns — it demands sustained storytelling. Mind Frame India's ongoing strategy for Ayuska by Avadh focused on building community, nurturing leads through the long sales cycle, and creating content that kept the brand top-of-mind for buyers making one of the most important decisions of their lives.",
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
      desc: "Even as the travel industry navigated unprecedented challenges in 2020, Mind Frame India helped travel brands stay relevant, connected, and ready for recovery. Through innovative content strategies, virtual experiences, and future-focused campaigns, we kept audiences dreaming — and brands thriving — until the world was ready to travel again.",
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
      desc: "Supreme needed a creative jolt — a campaign that would cut through category clutter and re-establish the brand's relevance with modern consumers. Mind Frame India delivered a vibrant, high-energy campaign that reignited consumer interest, drove retail visibility, and gave the brand a bold new creative direction.",
    },
    {
      id: 20,
      slug: "how-mind-frame-won-supreme-furniture-mandate",
      title: "How Mind Frame India Won the Supreme Furniture Mandate",
      year: "2018",
      category: "Furniture, Brand Strategy",
      image: img6,
      images: [img6, img5],
      desc: "Winning the Supreme Furniture mandate was the result of a compelling strategic pitch that demonstrated Mind Frame India's deep understanding of the furniture category, the competitive landscape, and the Supreme consumer. This is the inside story of how we earned the trust of one of India's leading furniture brands.",
    },
    {
      id: 21,
      slug: "innovative-campaign-aditya-birla-memorial-hospital",
      title: "Mind Frame India's Innovative Campaign for Aditya Birla Memorial Hospital",
      year: "2018",
      category: "Healthcare, Brand Campaign",
      image: img7,
      images: [img7, img3, img4],
      desc: "Healthcare advertising demands a delicate balance of empathy, credibility, and hope. Mind Frame India's campaign for Aditya Birla Memorial Hospital achieved all three — combining powerful patient stories with medical expertise to create communication that informed, inspired, and built deep trust in the hospital's capabilities.",
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
      desc: "In the campaign conceptualised by Mind Frame India, Aditya Birla Memorial Hospital launched 'Ummeed' — a message of hope for cancer patients and their families. The campaign humanised cancer care, celebrated the strength of survivors, and positioned ABMH as a beacon of hope in one of life's most challenging journeys.",
    },
    {
      id: 23,
      slug: "javed-ali-music-director-ummeed-cancer-awareness",
      title: "Javed Ali Marks Debut as Music Director for Ummeed Cancer Awareness Campaign",
      year: "2017",
      category: "Healthcare, Music, Social Campaign",
      image: img4,
      images: [img4, img3, img1, img2],
      desc: "Renowned playback singer Javed Ali stepped behind the mic in a new role — music director — for the Ummeed cancer awareness campaign by Aditya Birla Memorial Hospital. Mind Frame India brought this collaboration to life, creating an anthem that moved audiences across India and gave the Ummeed campaign its emotional core.",
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
      desc: "Ummeed began with a simple but profound idea: that hope is the most powerful medicine. Mind Frame India's compassionate campaign for Aditya Birla Memorial Hospital shone a light on the human side of cancer care — the doctors who never give up, the families who stand together, and the patients who fight every day. This is the story of a campaign that touched a nation.",
    },
    {
      id: 25,
      slug: "ummeed-journey-behind-music-cancer-awareness-abmh",
      title: "Ummeed: The Journey Behind the Music – Raising Cancer Awareness for ABMH",
      year: "2016",
      category: "Healthcare, Music, Social Campaign",
      image: img2,
      images: [img2, img1, img3, img4],
      desc: "Behind every great campaign is a story of collaboration, creativity, and conviction. Ummeed's musical journey — from the first note to the final mix — brought together some of India's finest musical talent in service of a cause that matters. Mind Frame India takes you behind the scenes of the making of the Ummeed anthem for Aditya Birla Memorial Hospital.",
    },
  ],
};

const years = [2024, 2023, 2022, 2021, 2020, 2018, 2017, 2016];

export default function NewsRoom() {
  const [openYears, setOpenYears] = useState({ 2024: true });

  const toggle = (year) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <>
      <SEO
        title={seoConfig.newsroom.title}
        description={seoConfig.newsroom.description}
        keywords={seoConfig.newsroom.keywords}
        path={seoConfig.newsroom.path}
      />
      <div style={styles.page}>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          .hero-title-black {
            font-family: 'Playfair Display', serif;
            font-size: clamp(56px, 10vw, 120px);
            font-weight: 900;
            color: #111;
            line-height: 1;
            letter-spacing: -2px;
          }
          .hero-title-gold {
            font-family: 'Playfair Display', serif;
            font-size: clamp(56px, 10vw, 120px);
            font-weight: 700;
            color: #b08d57;
            line-height: 1;
            letter-spacing: -2px;
          }

          /* KEY FIX: scroll-outer clips overflow so cards don't get cut,
             and padding-bottom makes room for the scrollbar */
          .scroll-outer {
            overflow: hidden;
          }

          .scroll-track {
            display: flex;
            gap: 20px;
            overflow-x: auto;
            /* padding: top right bottom left */
            /* right padding ensures last card fully visible */
            padding: 6px 24px 20px 0;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
            scrollbar-color: #b08d57 #f0ece4;
          }

          .scroll-track::-webkit-scrollbar { height: 4px; }
          .scroll-track::-webkit-scrollbar-thumb { background: #b08d57; border-radius: 2px; }
          .scroll-track::-webkit-scrollbar-track { background: #f0ece4; }

          .news-card {
            position: relative;
            border-radius: 6px;
            overflow: hidden;
            cursor: pointer;
            /* Fixed size — never shrink below this */
            flex: 0 0 300px;
            width: 300px;
            height: 200px;
            transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease;
          }

          .news-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 18px 48px rgba(0,0,0,0.2);
          }

          .news-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94);
          }

          .news-card:hover img {
            transform: scale(1.08);
          }

          .card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(10,8,5,0.85) 0%, rgba(10,8,5,0.1) 55%, transparent 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: flex-end;
            padding: 16px;
          }

          .news-card:hover .card-overlay {
            opacity: 1;
          }

          .card-overlay-text {
            color: #fff;
            font-family: 'DM Sans', sans-serif;
            font-size: 13px;
            font-weight: 400;
            line-height: 1.4;
          }

          .year-row {
            border-top: 1px solid #e0d9ce;
            padding: 18px 0;
            cursor: pointer;
            transition: background 0.2s;
            user-select: none;
          }

          .year-row:hover .year-label {
            color: #b08d57;
          }

          .year-label {
            font-family: 'DM Sans', sans-serif;
            font-size: 13px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #555;
            transition: color 0.2s;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .year-label.open {
            color: #1a1510;
            font-weight: 500;
          }

          .accordion-body {
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease;
          }

          /* ── Mobile ── */
          @media (max-width: 600px) {
            .news-card {
              flex: 0 0 200px;
              width: 200px;
              height: 140px;
            }
            .hero-section { height: 240px !important; }
            .scroll-track {
              gap: 14px;
              padding: 6px 16px 20px 0;
            }
          }

          @media (max-width: 380px) {
            .news-card {
              flex: 0 0 170px;
              width: 170px;
              height: 120px;
            }
          }
        `}</style>

        {/* HERO BANNER */}
        <div
          className="hero-section"
          style={{
            position: "relative",
            height: "360px",
            overflow: "hidden",
            background: "#1a1510",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${bannerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.35,
              filter: "grayscale(100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(250,248,245,0.55) 0%, rgba(250,248,245,0.15) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              zIndex: 2,
              flexWrap: "wrap",
              padding: "0 24px",
            }}
          >
            <span className="hero-title-black">News</span>
            <span className="hero-title-gold">Room</span>
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "40px 24px 80px",
          }}
        >
          {years.map((year, i) => {
            const isOpen = !!openYears[year];
            const items = newsData[year] || [];
            return (
              <div key={year}>
                {/* Year Row */}
                <div className="year-row" onClick={() => toggle(year)}>
                  <div className={`year-label ${isOpen ? "open" : ""}`}>
                    <span
                      style={{
                        fontSize: "18px",
                        color: isOpen ? "#b08d57" : "#aaa",
                        lineHeight: 1,
                        width: "20px",
                        textAlign: "center",
                      }}
                    >
                      {isOpen ? "—" : "+"}
                    </span>
                    {year} Newsroom
                  </div>
                </div>

                {/* Accordion Body */}
                <div
                  className="accordion-body"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {/* scroll-outer prevents the cards from being clipped by overflow:hidden on accordion-body */}
                  <div className="scroll-outer">
                    <div className="scroll-track">
                      {items.map((item) => (
                        <Link
                          key={item.id}
                          href={`/news-room/${item.slug}`}
                          style={{ textDecoration: "none", display: "block", flexShrink: 0 }}
                        >
                          <div className="news-card">
                            <img src={item.image} alt={item.title} />
                            <div className="card-overlay">
                              <p className="card-overlay-text">{item.title}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {i === years.length - 1 && (
                  <div style={{ borderTop: "1px solid #e0d9ce" }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}