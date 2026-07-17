'use client'

/**
 * Blogs Page
 * Display all published blogs with pagination and search
 */

import { useState, useEffect } from 'react';
import blogService from '@/services/blogService';
import BlogCard from '@/components/BlogCard';
import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);
  
  // const categories = ['Marketing', 'Social Media', 'SEO', 'Content', 'Design'];
    const categories = ['Marketing', 'Social Media'];


  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await blogService.getAllBlogs(page, 9, search, '', category);
        setBlogs(response.data.blogs);
        setTotalPages(response.data.pages);
        setTotalBlogs(response.data.total || response.data.blogs.length);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [page, search, category]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <>
      <SEO 
        title={seoConfig.blogs.title}
        description={seoConfig.blogs.description}
        keywords={seoConfig.blogs.keywords}
        path={seoConfig.blogs.path}
      />
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .bl-hero {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        .bl-hero img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 40%;
        }
        .bl-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.48) 100%);
          display: flex; align-items: center; justify-content: center; flex-direction: column;
        }
        .bl-breadcrumb {
          position: absolute; top: 20px; left: 0; right: 0;
          text-align: center; font-size: 11px;
          letter-spacing: 2.5px; color: rgba(255,255,255,0.6);
          text-transform: uppercase;
        }
        .bl-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 800; color: #fff;
          letter-spacing: -1.5px; line-height: 1.15;
          text-align: center; max-width: 860px; padding: 0 24px;
        }
        .bl-hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(13px, 1.8vw, 18px);
          color: #b08d57; margin-top: 16px;
          letter-spacing: 4px; text-transform: uppercase;
        }
        .bl-hero-sub-text {
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.70);
          max-width: 540px; text-align: center;
          line-height: 1.75; margin-top: 14px;
          padding: 0 24px;
        }

        /* ── SEARCH & FILTER BAR ── */
        .bl-filter-wrap {
          background: #fff;
          border-bottom: 1px solid #e8e2d9;
          padding: 36px 60px;
        }
        .bl-filter-inner {
          max-width: 1200px; margin: 0 auto;
        }
        .bl-search-row {
          display: flex; gap: 12px; margin-bottom: 24px;
        }
        .bl-search-input {
          flex: 1; padding: 12px 18px;
          border: 1px solid #d4cdc4; border-radius: 2px;
          font-size: 13.5px; font-family: 'DM Sans', sans-serif;
          color: #333; outline: none;
          transition: border-color 0.2s;
        }
        .bl-search-input:focus { border-color: #b08d57; }
        .bl-search-input::placeholder { color: #aaa; }
        .bl-search-btn {
          padding: 12px 32px;
          background: #b08d57; color: #fff;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          border: none; cursor: pointer; border-radius: 2px;
          transition: background 0.25s, transform 0.2s;
          white-space: nowrap;
        }
        .bl-search-btn:hover { background: #9a7842; transform: translateY(-1px); }

        /* Filter label */
        .bl-filter-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px; font-weight: 600;
          color: #1a1510; margin-bottom: 14px;
          letter-spacing: 0.3px;
        }
        .bl-cats {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .bl-cat-btn {
          padding: 8px 20px;
          border: 1px solid #d4cdc4;
          background: transparent;
          font-size: 11px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #666; cursor: pointer; border-radius: 2px;
          transition: all 0.22s;
          font-family: 'DM Sans', sans-serif;
        }
        .bl-cat-btn:hover { border-color: #b08d57; color: #b08d57; }
        .bl-cat-btn.active {
          background: #b08d57; border-color: #b08d57;
          color: #fff;
        }

        /* ── RESULTS INFO ── */
        .bl-results-info {
          max-width: 1200px; margin: 0 auto;
          padding: 28px 60px 0;
          font-size: 13px; color: #888; font-weight: 300;
        }
        .bl-results-info strong { color: #b08d57; font-weight: 600; }

        /* ── CONTENT AREA ── */
        .bl-content {
          max-width: 1200px; margin: 0 auto;
          padding: 32px 60px 80px;
        }

        /* ── BLOGS GRID ── */
        .bl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 60px;
        }

        /* ── PAGINATION ── */
        .bl-pagination {
          display: flex; align-items: center;
          justify-content: center; gap: 6px;
          flex-wrap: wrap; margin-top: 16px;
        }
        .bl-page-info {
          font-size: 12px; color: #888; font-weight: 300;
          margin-right: 16px; letter-spacing: 0.5px;
        }
        .bl-page-info strong { color: #b08d57; font-weight: 600; }
        .bl-pg-btn {
          padding: 9px 18px;
          border: 1px solid #d4cdc4;
          background: #fff; color: #555;
          font-size: 11px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          cursor: pointer; border-radius: 2px;
          transition: all 0.22s;
          font-family: 'DM Sans', sans-serif;
        }
        .bl-pg-btn:hover:not(:disabled) { border-color: #b08d57; color: #b08d57; }
        .bl-pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .bl-pg-num {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid #d4cdc4;
          background: #fff; color: #555;
          font-size: 12px; font-weight: 500;
          cursor: pointer; border-radius: 2px;
          transition: all 0.22s;
          font-family: 'DM Sans', sans-serif;
        }
        .bl-pg-num:hover { border-color: #b08d57; color: #b08d57; }
        .bl-pg-num.active {
          background: #b08d57; border-color: #b08d57;
          color: #fff; font-weight: 700;
        }
        .bl-pg-ellipsis {
          font-size: 13px; color: #aaa;
          padding: 0 4px; line-height: 36px;
        }

        /* ── EMPTY STATE ── */
        .bl-empty {
          text-align: center; padding: 80px 24px;
        }
        .bl-empty-icon {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px; color: #e8e2d9;
          margin-bottom: 20px; line-height: 1;
        }
        .bl-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px; font-weight: 600;
          color: #1a1510; margin-bottom: 10px;
        }
        .bl-empty-sub {
          font-size: 13.5px; color: #888;
          font-weight: 300; margin-bottom: 28px;
        }
        .bl-clear-btn {
          padding: 13px 36px;
          background: #b08d57; color: #fff;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          border: none; cursor: pointer; border-radius: 2px;
          transition: background 0.25s;
          font-family: 'DM Sans', sans-serif;
        }
        .bl-clear-btn:hover { background: #9a7842; }

        /* ── CTA STRIP ── */
        .bl-cta {
          background: #1a1510;
          padding: 64px 60px;
          text-align: center;
          margin-top: 20px;
        }
        .bl-cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700; color: #fff;
          margin-bottom: 14px; line-height: 1.2;
        }
        .bl-cta-heading em { font-style: italic; color: #b08d57; }
        .bl-cta-sub {
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.60);
          margin-bottom: 32px; max-width: 480px;
          margin-left: auto; margin-right: auto;
          line-height: 1.75;
        }
        .bl-cta-btn {
          display: inline-block; padding: 15px 40px;
          background: #b08d57; color: #fff;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.25s, transform 0.2s;
          border-radius: 2px;
        }
        .bl-cta-btn:hover { background: #9a7842; transform: translateY(-2px); }

        /* ── LOADING ── */
        .bl-loading {
          display: flex; justify-content: center;
          padding: 60px 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .bl-grid { grid-template-columns: repeat(2, 1fr); }
          .bl-filter-wrap { padding: 32px 24px; }
          .bl-content { padding: 32px 24px 60px; }
          .bl-results-info { padding: 24px 24px 0; }
          .bl-cta { padding: 48px 24px; }
        }
        @media (max-width: 640px) {
          .bl-grid { grid-template-columns: 1fr; gap: 20px; }
          .bl-hero { height: 320px; }
          .bl-search-row { flex-direction: column; }
          .bl-search-btn { width: 100%; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="bl-hero">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=85"
          alt="Mind Frame India Blog"
        />
        <div className="bl-hero-overlay">
          <div className="bl-hero-title">Our Digital Marketing Blog</div>
          <div className="bl-hero-subtitle">INSIGHTS · STRATEGIES · TRENDS</div>
          <p className="bl-hero-sub-text">
            Insights, strategies, and tips to help your business succeed in the digital landscape.
          </p>
        </div>
      </div>

      {/* ── SEARCH & FILTER ── */}
      <div className="bl-filter-wrap">
        <div className="bl-filter-inner">
          <form onSubmit={handleSearch} className="bl-search-row">
            <input
              type="text"
              placeholder="Search blogs by title or content..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bl-search-input"
            />
            <button type="submit" className="bl-search-btn">Search</button>
          </form>

          <div className="bl-filter-label">Filter by Category</div>
          <div className="bl-cats">
            <button
              className={`bl-cat-btn${category === '' ? ' active' : ''}`}
              onClick={() => { setCategory(''); setPage(1); }}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`bl-cat-btn${category === cat ? ' active' : ''}`}
                onClick={() => { setCategory(cat); setPage(1); }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESULTS INFO ── */}
      {blogs.length > 0 && (
        <div className="bl-results-info">
          Showing <strong>{blogs.length}</strong> of <strong>{totalBlogs}</strong> articles
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <div className="bl-content">

        {loading ? (
          <div className="bl-loading"><Loading /></div>
        ) : blogs.length > 0 ? (
          <>
            {/* Grid */}
            <div className="bl-grid">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bl-pagination">
                <span className="bl-page-info">
                  Page <strong>{page}</strong> of <strong>{totalPages}</strong>
                </span>

                <button
                  className="bl-pg-btn"
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                >
                  ← Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const show =
                    pageNum <= 2 ||
                    pageNum > totalPages - 2 ||
                    (pageNum >= page - 1 && pageNum <= page + 1);

                  const showEllipsisBefore = pageNum === 3 && page > 4;
                  const showEllipsisAfter = pageNum === totalPages - 2 && page < totalPages - 3;

                  if (!show) return null;

                  return (
                    <span key={pageNum} style={{ display: 'contents' }}>
                      {showEllipsisBefore && <span className="bl-pg-ellipsis">···</span>}
                      <button
                        className={`bl-pg-num${page === pageNum ? ' active' : ''}`}
                        onClick={() => setPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                      {showEllipsisAfter && <span className="bl-pg-ellipsis">···</span>}
                    </span>
                  );
                })}

                <button
                  className="bl-pg-btn"
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <div className="bl-empty">
            <div className="bl-empty-icon">✦</div>
            <div className="bl-empty-title">No articles found</div>
            <p className="bl-empty-sub">Try adjusting your search or category filter</p>
            <button
              className="bl-clear-btn"
              onClick={() => { setSearch(''); setCategory(''); setPage(1); }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* ── CTA STRIP ── */}
      {!loading && blogs.length > 0 && (
        <div className="bl-cta">
          <h3 className="bl-cta-heading">
            Interested in Our <em>Services?</em>
          </h3>
          <p className="bl-cta-sub">
            Explore our digital marketing services and let's grow your business together.
          </p>
          <a href="/contact-us" className="bl-cta-btn">Contact Us Today</a>
        </div>
      )}
      </div>
    </>
  );
}


