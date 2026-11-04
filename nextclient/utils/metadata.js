/**
 * SEO Metadata Helper
 * Converts seoConfig to Next.js metadata format
 */

export function generateMetadata(seoData) {
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: process.env.NEXT_PUBLIC_BASE_URL + seoData.path,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: process.env.NEXT_PUBLIC_BASE_URL + seoData.path,
      type: seoData.type || 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@mindframeindia',
      creator: '@mindframeindia',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
