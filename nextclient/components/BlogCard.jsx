'use client'

import Link from 'next/link';
import { formatDate, truncateText } from '@/utils/formatters';

export default function BlogCard({ blog }) {
  return (
    <>
      <style>{`

        .bc-card {
          position: relative;
          background: #fff;
          border: 1px solid #e8e2d9;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          transition: box-shadow 0.35s ease, transform 0.35s ease;
          cursor: pointer;
        }
        .bc-card:hover {
          box-shadow: 0 12px 48px rgba(176, 141, 87, 0.13);
          transform: translateY(-4px);
        }

        /* Image */
        .bc-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #f2ede6;
        }
        .bc-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .bc-card:hover .bc-img-wrap img {
          transform: scale(1.06);
        }

        /* Gold overlay strip on hover */
        .bc-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(26, 21, 16, 0.45) 100%);
        }

        /* Featured badge */
        .bc-featured {
          position: absolute;
          top: 14px; left: 14px;
          z-index: 2;
          background: #b08d57;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 12px;
        }

        /* Category pill on image bottom */
        .bc-category {
          position: absolute;
          bottom: 14px; left: 14px;
          z-index: 2;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          border: 1px solid rgba(255,255,255,0.45);
          padding: 4px 12px;
          backdrop-filter: blur(4px);
          background: rgba(0,0,0,0.18);
        }

        /* Body */
        .bc-body {
          padding: 24px 24px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          border-top: 3px solid #b08d57;
        }

        /* Tags */
        .bc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }
        .bc-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #b08d57;
          border: 1px solid #e2d5be;
          padding: 3px 10px;
          background: #fdf8f0;
        }

        /* Title */
        .bc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a1510;
          line-height: 1.3;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s;
        }
        .bc-card:hover .bc-title {
          color: #b08d57;
        }

        /* Description */
        .bc-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #6b6058;
          line-height: 1.8;
          margin-bottom: 20px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Meta row */
        .bc-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid #ede8e0;
          margin-top: auto;
        }
        .bc-meta-left {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .bc-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #a09080;
          letter-spacing: 0.3px;
        }
        .bc-views {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 300;
          color: #b8aca0;
          letter-spacing: 0.5px;
        }

        /* Read more */
        .bc-read {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #b08d57;
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s, gap 0.2s;
        }
        .bc-read:hover {
          border-bottom-color: #b08d57;
          gap: 10px;
        }
        .bc-read-arrow {
          font-size: 14px;
          transition: transform 0.2s;
        }
        .bc-read:hover .bc-read-arrow {
          transform: translateX(3px);
        }

        /* Gold accent line left side on hover */
        .bc-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #b08d57;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.35s ease;
        }
        .bc-card:hover::before {
          transform: scaleY(1);
        }
      `}</style>

      <div className="bc-card">
        {/* Image */}
        <div className="bc-img-wrap">
          <img src={blog.image} alt={blog.title} />
          {blog.featured && <span className="bc-featured">★ Featured</span>}
          {blog.category && <span className="bc-category">{blog.category}</span>}
        </div>

        {/* Body */}
        <div className="bc-body">
          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="bc-tags">
              {blog.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="bc-tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Title */}
          {/* <h3 className="bc-title">{blog.title}</h3> */}

          {/* Description */}
          {/* <h3 className="bc-desc">{truncateText(blog.description, 120)}</h3> */}
         <h3 className="bc-title">{truncateText(blog.description, 120)}</h3>


          {/* Meta */}
          <div className="bc-meta">
            <div className="bc-meta-left">
              <span className="bc-date">{formatDate(blog.createdAt)}</span>
              <span className="bc-views">{blog.views} views</span>
            </div>
            <Link href={`/blogs/${blog.slug}`} className="bc-read">
              Read More <span className="bc-read-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}