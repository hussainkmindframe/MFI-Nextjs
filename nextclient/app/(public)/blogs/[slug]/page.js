'use client'

/**
 * Single Blog Page
 */

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import blogService from '@/services/blogService';
import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import { getBlogSEOData, createArticleSchema } from '@/config/seoConfig';
import { formatDate } from '@/utils/formatters';

export default function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await blogService.getBlogBySlug(slug);
        setBlog(response.data.blog);
      } catch (error) {
        setError('Failed to load blog');
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
        <Loading />
      </div>
    );

  if (error)
    return (
      <div style={styles.stateWrap}>
        <div style={styles.errorBox}>{error}</div>
        <Link href="/blogs" style={styles.backLink}>← Back to Blogs</Link>
      </div>
    );

  if (!blog)
    return (
      <div style={styles.stateWrap}>
        <p style={{ color: '#888', fontSize: '15px', marginBottom: '16px' }}>Blog not found.</p>
        <Link href="/blogs" style={styles.backLink}>← Back to Blogs</Link>
      </div>
    );

  return (
    <>
      {blog && (
        <SEO 
          title={getBlogSEOData(blog).title}
          description={getBlogSEOData(blog).description}
          keywords={getBlogSEOData(blog).keywords}
          path={getBlogSEOData(blog).path}
          image={getBlogSEOData(blog).image}
          type="article"
          structured={createArticleSchema(blog)}
        />
      )}
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO IMAGE ── */
        .sb-hero {
          position: relative;
          width: 100%; height: 480px;
          overflow: hidden; background: #111;
        }
        .sb-hero img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
        }
        .sb-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.18) 0%,
            rgba(0,0,0,0.55) 100%
          );
        }

        /* ── ARTICLE WRAP ── */
        .sb-article {
          max-width: 860px;
          margin: 0 auto;
          padding: 64px 40px 80px;
        }

        /* ── BACK LINK ── */
        .sb-back {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: #b08d57; text-decoration: none;
          margin-bottom: 36px;
          transition: opacity 0.2s;
        }
        .sb-back:hover { opacity: 0.7; }

        /* ── CATEGORY BADGE ── */
        .sb-category {
          display: inline-block;
          font-size: 10px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #b08d57;
          border: 1px solid rgba(176,141,87,0.4);
          padding: 5px 14px; margin-bottom: 20px;
        }

        /* ── TITLE ── */
        .sb-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 700; color: #1a1510;
          line-height: 1.2; margin-bottom: 28px;
          letter-spacing: -0.5px;
        }

        /* ── META ROW ── */
        .sb-meta {
          display: flex; flex-wrap: wrap;
          align-items: center; gap: 0;
          border-top: 1px solid #e8e2d9;
          border-bottom: 1px solid #e8e2d9;
          padding: 16px 0; margin-bottom: 36px;
        }
        .sb-meta-item {
          font-size: 12px; font-weight: 400;
          color: #888; letter-spacing: 0.3px;
          padding-right: 20px; margin-right: 20px;
          border-right: 1px solid #e8e2d9;
        }
        .sb-meta-item:last-child {
          border-right: none; padding-right: 0; margin-right: 0;
        }
        .sb-meta-item strong { color: #555; font-weight: 600; }

        /* ── GOLD DIVIDER ── */
        .sb-gold-line {
          width: 48px; height: 2px;
          background: #b08d57; margin-bottom: 28px;
        }

        /* ── DESCRIPTION ── */
        .sb-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 400; font-style: italic;
          color: #555; line-height: 1.75;
          margin-bottom: 40px;
          padding-left: 20px;
          border-left: 3px solid #b08d57;
        }

        /* ── TAGS ── */
        .sb-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 40px;
        }
        .sb-tag {
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #b08d57; background: rgba(176,141,87,0.08);
          border: 1px solid rgba(176,141,87,0.25);
          padding: 5px 14px; border-radius: 2px;
        }

        /* ── PROSE CONTENT ── */
        .sb-prose {
          font-size: 15px; font-weight: 300;
          color: #444; line-height: 1.95;
          margin-bottom: 56px;
        }
        .sb-prose h1, .sb-prose h2, .sb-prose h3,
        .sb-prose h4, .sb-prose h5, .sb-prose h6 {
          font-family: 'Cormorant Garamond', serif;
          color: #1a1510; font-weight: 700;
          margin: 40px 0 16px; line-height: 1.25;
        }
        .sb-prose h2 { font-size: 28px; }
        .sb-prose h3 { font-size: 22px; }
        .sb-prose p { margin-bottom: 20px; }
        .sb-prose ul, .sb-prose ol {
          padding-left: 24px; margin-bottom: 20px;
        }
        .sb-prose li { margin-bottom: 8px; }
        .sb-prose a { color: #b08d57; text-decoration: underline; }
        .sb-prose strong { font-weight: 600; color: #333; }
        .sb-prose em { font-style: italic; }
        .sb-prose blockquote {
          border-left: 3px solid #b08d57;
          padding: 12px 24px; margin: 28px 0;
          background: rgba(176,141,87,0.04);
          font-style: italic; color: #666;
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
        }
        .sb-prose img {
          max-width: 100%; border-radius: 4px;
          margin: 28px 0; display: block;
        }
        .sb-prose hr {
          border: none; border-top: 1px solid #e8e2d9;
          margin: 36px 0;
        }

        /* ── CTA STRIP ── */
        .sb-cta {
          background: #1a1510;
          padding: 52px 48px;
          text-align: center;
          border-radius: 3px;
        }
        .sb-cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700; color: #fff;
          margin-bottom: 12px; line-height: 1.25;
        }
        .sb-cta-heading em { font-style: italic; color: #b08d57; }
        .sb-cta-sub {
          font-size: 13.5px; font-weight: 300;
          color: rgba(255,255,255,0.55);
          margin-bottom: 28px; line-height: 1.75;
          max-width: 420px; margin-left: auto; margin-right: auto;
        }
        .sb-cta-btn {
          display: inline-block; padding: 14px 36px;
          background: #b08d57; color: #fff;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          text-decoration: none; border-radius: 2px;
          transition: background 0.25s, transform 0.2s;
        }
        .sb-cta-btn:hover { background: #9a7842; transform: translateY(-2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .sb-hero { height: 300px; }
          .sb-article { padding: 48px 24px 60px; }
          .sb-cta { padding: 40px 24px; }
          .sb-meta { gap: 12px; }
          .sb-meta-item { border-right: none; padding-right: 0; margin-right: 0; }
        }
      `}</style>

      {/* ── HERO IMAGE ── */}
      <div className="sb-hero">
        <img src={blog.image} alt={blog.title} />
        <div className="sb-hero-overlay" />
      </div>

      {/* ── ARTICLE ── */}
      <article className="sb-article">

        {/* Back */}
        <Link href="/blogs" className="sb-back">← Back to Blogs</Link>

        {/* Category */}
        {blog.category && (
          <div className="sb-category">{blog.category}</div>
        )}

        {/* Title */}
        {/* <h1 className="sb-title">{blog.title}</h1> */}

        {/* Meta */}
        <div className="sb-meta">
          <div className="sb-meta-item">
            By <strong>{blog.author || 'Admin'}</strong>
          </div>
          <div className="sb-meta-item">{formatDate(blog.createdAt)}</div>
          {blog.views !== undefined && (
            <div className="sb-meta-item">{blog.views} views</div>
          )}
        </div>

        {/* Gold line */}
        <div className="sb-gold-line" />

        {/* Description */}
        {blog.description && (
          <h1 className="sb-title">{blog.description}</h1>
        )}

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="sb-tags">
            {blog.tags.map((tag) => (
              <span key={tag} className="sb-tag">#{tag}</span>
            ))}
          </div>
        )}

        {/* Content */}
        <div
          className="sb-prose"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* CTA */}
        <div className="sb-cta">
          <h3 className="sb-cta-heading">
            Want more <em>insights?</em>
          </h3>
          <p className="sb-cta-sub">
            Explore our other articles and stay updated with the latest digital marketing trends.
          </p>
          <Link href="/blogs" className="sb-cta-btn">Read More Articles</Link>
        </div>

      </article>
      </div>
    </>
  );
}

const styles = {
  stateWrap: {
    maxWidth: '600px',
    margin: '80px auto',
    padding: '0 24px',
    textAlign: 'center',
  },
  errorBox: {
    background: '#fdf2f2',
    border: '1px solid #f5c6c6',
    color: '#c0392b',
    padding: '14px 20px',
    fontSize: '13.5px',
    marginBottom: '20px',
    borderRadius: '2px',
  },
  backLink: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#b08d57',
    textDecoration: 'none',
  },
};
