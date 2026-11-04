'use client';
import { useEffect } from 'react';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mindframe India",
  "url": "https://mindframeindia.com",
  "logo": "https://mindframeindia.com/assets/favicon.png",
  "sameAs": [
    "https://www.facebook.com/mindframeindia",
    "https://twitter.com/mindframeindia",
    "https://www.instagram.com/mindframeindia",
    "https://www.linkedin.com/company/mindframe-india"
  ]
};

export default function SEO({ title, description, keywords, path, structured }) {
  useEffect(() => {
    if (title) document.title = title;
    
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', description);
      } else {
        meta = document.createElement('meta');
        meta.name = "description";
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
    
    if (keywords) {
      let meta = document.querySelector('meta[name="keywords"]');
      if (meta) {
        meta.setAttribute('content', keywords);
      } else {
        meta = document.createElement('meta');
        meta.name = "keywords";
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }
  }, [title, description, keywords, path]);

  return null;
}
