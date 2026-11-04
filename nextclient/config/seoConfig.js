/**
 * SEO Configuration
 * Contains SEO metadata for all pages in the application
 * Uses react-helmet-async for meta tag management
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mindframeindia.com';

export const seoConfig = {
  // Main Pages
  home: {
    title: 'Digital Marketing & Advertising Agency in India | Mindframe India',
    description:
      'Leading digital marketing & advertising agency in India offering web development, mobile app development, branding, SEO, and media buying. Grow your business with Mindframe.',
    keywords:
      'digital marketing agency, advertising agency India, web development, mobile app development, branding services, media buying, SEO company, digital marketing services',
    path: '/',
    type: 'website',
  },

  about: {
    title: 'About Mindframe India - Our Mission, Vision & Expert Team',
    description:
      'Learn about Mindframe India - our mission to transform brands through digital innovation, our expert team, and how we help businesses succeed in the digital landscape.',
    keywords: 'about mindframe, digital marketing company, creative agency, our team, company story, advertising agency india',
    path: '/about-us',
    type: 'website',
  },

  contact: {
    title: 'Contact Mindframe India - Get in Touch with Our Team',
    description:
      'Contact Mindframe India today for digital marketing, advertising, web development, and creative services. Reach out to discuss your project with our experts.',
    keywords: 'contact mindframe, get in touch, digital marketing consultation, advertising agency contact, mindframe support',
    path: '/contact-us',
    type: 'website',
  },

  blogs: {
    title: 'Digital Marketing & SEO Blog - Mindframe India',
    description:
      'Read the latest insights, tips, and strategies on digital marketing, SEO, social media marketing, content strategy, and creative design from Mindframe India experts.',
    keywords:
      'digital marketing blog, SEO blog, social media marketing tips, content strategy, marketing insights, digital advertising trends',
    path: '/blogs',
    type: 'website',
  },

  ourWork: {
    title: 'Creative Communication and Advertising Campaigns in Mumbai',
    description:
      'Explore our award-winning digital marketing and advertising campaigns. See how Mindframe helps brands achieve their goals through creative solutions.',
    keywords:
      'portfolio, case studies, marketing campaigns, advertising campaigns, our work, success stories, campaign examples',
    path: '/creative-communication-and-advertising-campaigns',
    type: 'website',
  },

  testimonial: {
    title: 'Client Testimonials & Success Stories - Mindframe India',
    description:
      'Read testimonials from our satisfied clients. Discover why brands trust Mindframe India for digital marketing, advertising, and creative services.',
    keywords: 'client testimonial, success stories, client reviews, feedback, client satisfaction, case studies',
    path: '/testimonial',
    type: 'website',
  },

  newsroom: {
    title: 'Newsroom & Press Releases - Mindframe India',
    description:
      'Latest news, press releases, media coverage, and industry updates from Mindframe India - your source for digital marketing and advertising news.',
    keywords: 'news, press release, media coverage, newsroom, industry news, announcements, mindframe updates',
    path: '/news-room',
    type: 'website',
  },

  careers: {
    title: 'Careers at Mindframe India - Join Our Creative Team',
    description:
      'Join Mindframe India! Explore exciting career opportunities in digital marketing, design, development, and creative services. Build your future with us.',
    keywords: 'careers, jobs, employment opportunities, digital marketing jobs, design jobs, development jobs, mindframe careers',
    path: '/careers',
    type: 'website',
  },

  // team: {
  //   title: 'Our Team - Meet the Mindframe India Experts',
  //   description:
  //     'Meet the talented and experienced team at Mindframe India. Discover the creative minds behind our successful campaigns and innovative solutions.',
  //   keywords: 'our team, team members, experts, staff, creative team, leadership, mindframe team',
  //   path: '/our-team',
  //   type: 'website',
  // },

  privacy: {
    title: 'Privacy Policy - Mindframe India',
    description: 'Mindframe India Privacy Policy. Learn how we collect, use, protect, and manage your personal information and data.',
    keywords: 'privacy policy, data protection, privacy terms, data policy, personal information, terms and conditions',
    path: '/privacy',
    type: 'website',
  },


    disclaimer: {
    title: 'Beware of Fraudulent Activities - Mindframe India',
    description: 'Mindframe India Disclaimer. Learn about the risks of fraudulent activities and how to protect yourself.',
    keywords: 'disclaimer, fraud, scams, protection, awareness, mindframe',
    path: '/disclaimer',
    type: 'website',
  },


  // Services
  services: {
    webDevelopment: {
      title: 'Professional Web Development Services - Mindframe India',
      description:
        'Custom web development services for responsive, fast, and SEO-friendly websites. Mindframe builds scalable web solutions that drive business growth.',
      keywords:
        'web development, website design, responsive design, web design, custom websites, web development company, website development services',
      path: '/services/website-development',
      type: 'website',
    },

    appDevelopment: {
      title: 'Mobile App Development Services - iOS & Android | Mindframe',
      description:
        'Custom iOS and Android mobile app development. Mindframe creates user-friendly, feature-rich applications that enhance user engagement and drive business results.',
      keywords:
        'mobile app development, iOS app development, Android app development, app development company, custom app development, app design',
      path: '/services/best-mobile-app-development-company-in-mumbai',
      type: 'website',
    },

    brandIdentity: {
      title: 'Brand Identity & Logo Design Services - Mindframe India',
      description:
        'Professional brand identity and logo design services. Mindframe creates memorable, unique brands that stand out in the market and resonate with your audience.',
      keywords: 'logo design, brand identity, branding, logo creation, visual identity, brand design, graphic design, brand strategy',
      path: '/services/branding-agency-in-mumbai',
      type: 'website',
    },

    brandServices: {
      title: 'Comprehensive Brand Services - Strategy & Positioning | Mindframe',
      description:
        'Complete brand services including brand strategy, positioning, development, and brand experience. Mindframe helps build strong brands that grow your business.',
      keywords: 'brand services, brand strategy, brand positioning, branding services, brand development, brand consulting',
      path: '/services/leading-branding-companies-in-mumbai',
      type: 'website',
    },

    atl: {
      title: 'Above The Line (ATL) Advertising Services - Mindframe India',
      description:
        'ATL advertising services including TV, radio, print, and outdoor advertising. Reach mass audiences effectively with Mindframe strategic ATL campaigns.',
      keywords: 'ATL advertising, above the line, TV advertising, radio advertising, print advertising, outdoor advertising, mass media advertising',
      path: '/services/atl',
      type: 'website',
    },

    btl: {
      title: 'Below The Line (BTL) Marketing Services - Mindframe India',
      description:
        'BTL marketing for targeted audience engagement, event marketing, activations, and promotional campaigns. Mindframe creates memorable experiences that drive conversions.',
      keywords: 'BTL marketing, below the line, promotional marketing, event marketing, targeted advertising, activations, consumer engagement',
      path: '/services/btl-advertising-services-in-mumbai',
      type: 'website',
    },

    mediaBuying: {
      title: 'Strategic Media Buying Services - Maximize Your ROI | Mindframe',
      description:
        'Expert media buying services to maximize advertising reach and ROI across multiple channels. Mindframe negotiates best rates for optimal ad placement.',
      keywords: 'media buying, ad placement, media planning, advertising media, media strategy, programmatic advertising, media negotiation',
      path: '/services/media-buying-agency-in-mumbai',
      type: 'website',
    },

    publicRelations: {
      title: 'Public Relations & PR Services - Mindframe India',
      description:
        'Professional PR services for brand reputation management, media relations, press releases, and corporate communications. Build trust and credibility with Mindframe.',
      keywords: 'public relations, PR services, media relations, crisis management, reputation management, press releases, corporate communication',
      path: '/services/pr-agency-in-mumbai',
      type: 'website',
    },

    digitalMarketing: {
      title: 'Digital Marketing Services - SEO, SEM & More | Mindframe India',
      description:
        'Comprehensive digital marketing services including SEO, SEM, social media marketing, email marketing, and content marketing. Grow online with Mindframe.',
      keywords:
        'digital marketing, online marketing, internet marketing, digital advertising, SEO services, SEM, social media marketing, email marketing, content marketing',
      path: '/services/digital-marketing-agency-in-mumbai',
      type: 'website',
    },

    marketingBranding: {
      title: 'Marketing & Branding Solutions - Integrated Approach | Mindframe',
      description:
        'Integrated marketing and branding solutions to build strong brands and drive sustainable business growth. Mindframe combines strategy with creative execution.',
      keywords: 'marketing branding, brand marketing, integrated marketing, marketing solutions, brand growth, marketing strategy, marketing campaigns',
      path: '/services/unlocking-the-power-of-innovative-c-mind-frame-india',
      type: 'website',
    },

    customizeCampaign: {
      title: 'Customized Campaign Design & Strategy - Mindframe India',
      description:
        'Custom campaign design services tailored to your brand goals, target audience, and marketing objectives. Mindframe creates campaigns that deliver results.',
      keywords: 'campaign design, custom campaigns, marketing campaigns, campaign strategy, campaign development, advertising campaigns, creative campaigns',
      path: '/services/advertising-campaign-designing',
      type: 'website',
    },

    advertisingServices: {
      title: 'Full-Spectrum Advertising Services - Mindframe India',
      description:
        'Comprehensive advertising services including creative campaigns, media buying, brand promotion, and strategic planning across all channels. Partner with Mindframe.',
      keywords:
        'advertising services, ad creation, advertising agency, ad campaigns, marketing advertising, creative advertising, brand advertising, promotional advertising',
      path: '/services/top-digital-marketing-agency-in-india',
      type: 'website',
    },

    creativeDesign: {
      title: 'Creative Design Services - Graphic Design, UI/UX | Mindframe',
      description:
        'Professional creative design services including graphic design, UI/UX design, and visual content creation. Mindframe transforms ideas into stunning visuals.',
      keywords: 'graphic design, creative design, UI design, UX design, visual design, design services, branding design, web design, print design',
      path: '/services/creative-design-agency-in-mumbai',
      type: 'website',
    },

    augmentedReality: {
      title: 'Augmented Reality Solutions - Immersive Experiences | Mindframe',
      description:
        'Innovative AR technology solutions for immersive brand experiences and interactive marketing campaigns. Mindframe brings brands to life with AR technology.',
      keywords: 'augmented reality, AR technology, AR solutions, immersive marketing, interactive experiences, AR apps, virtual experiences',
      path: '/services/augmented-reality-and-virtual-reality',
      type: 'website',
    },

    animation: {
      title: 'Animation & Video Production Services - Mindframe India',
      description:
        'Professional animation and video production services for engaging content, brand storytelling, and compelling visual communication. Create impact with Mindframe.',
      keywords:
        'animation, video production, animated videos, motion graphics, video animation, corporate videos, explainer videos, 3D animation, video marketing',
      path: '/services/2d-and-3d-animation-services',
      type: 'website',
    },

    television: {
      title: 'Television Advertising Agency - TV Commercials | Mindframe',
      description:
        'Professional television advertising services for creating compelling commercials and broadcast campaigns. Mindframe brings your brand message to TV audiences.',
      keywords:
        'television advertising, TV commercials, broadcast advertising, TV ads, television agency, commercial production, TV media buying, broadcast campaigns',
      path: '/services/best-television-advertising-agency-in-mumbai-tv-ads-campaigns',
      type: 'website',
    },
  },
};

/**
 * Get SEO data for a page
 */
export const getSEOData = (page) => {
  const keys = page.split('.');
  let data = seoConfig;

  for (const key of keys) {
    data = data[key];
    if (!data) return null;
  }

  return data;
};

/**
 * Get blog SEO data
 */
export const getBlogSEOData = (blog) => ({
  title: blog.title,
  description: blog.excerpt || blog.description?.substring(0, 160),
  keywords: blog.category || 'digital marketing, blog',
  path: `/blogs/${blog.slug || blog._id}`,
  type: 'article',
  image: blog.image || `${BASE_URL}/default-blog-image.png`,
});




export const createArticleSchema = (blog) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: blog.title,
  description: blog.excerpt || blog.description,
  image: blog.image,
  datePublished: blog.createdAt,
  dateModified: blog.updatedAt || blog.createdAt,
  author: {
    '@type': 'Person',
    name: blog.author || 'Mindframe India',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mindframe India',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${BASE_URL}/blogs/${blog.slug || blog._id}`,
  },
});