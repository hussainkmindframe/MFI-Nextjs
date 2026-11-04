'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const NotFound = () => {
  const gold = "#c9a84c";
  const pathname = usePathname();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      background: '#fff',
      fontFamily: 'Georgia, serif'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{
          fontSize: '120px',
          fontWeight: 'bold',
          color: gold,
          margin: 0,
          lineHeight: 1
        }}>404</h1>
        <h2 style={{
          fontSize: '32px',
          color: '#1a1a1a',
          marginTop: '10px',
          marginBottom: '20px',
          letterSpacing: '1px'
        }}>Page Not Found</h2>
        <p style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '500px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          {searchQuery 
            ? `We couldn't find any page matching "${searchQuery}". Please try searching for a different service or section.`
            : "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
          }
        </p>
        <Link href="/" 
          style={{
            display: 'inline-block',
            padding: '15px 40px',
            backgroundColor: gold,
            color: '#fff',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(201, 168, 76, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#b0923f';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = gold;
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          BACK TO HOME
        </Link>
      </motion.div>
      
      <div style={{
        marginTop: '60px',
        width: '100px',
        height: '2px',
        backgroundColor: gold,
        opacity: 0.3
      }}></div>
    </div>
  );
};

export default NotFound;



