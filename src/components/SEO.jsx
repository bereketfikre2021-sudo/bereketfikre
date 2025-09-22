import React, { useEffect } from 'react';

const SEO = ({ 
  title = "Bereket Fikre - Creative Designer & Brand Builder | UI/UX Expert | Addis Ababa",
  description = "Professional Creative Designer specializing in UI/UX design, brand identity, graphic design, and digital marketing. Based in Addis Ababa, Ethiopia. Transform your brand with stunning visual solutions.",
  keywords = "creative designer, UI/UX designer, brand designer, graphic designer, web designer, logo design, brand identity, digital marketing, Addis Ababa, Ethiopia, portfolio, freelance designer",
  image = "https://bereketfikre.com/img/Bereket%20Fikre.webp",
  url = "https://bereketfikre.com",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector);
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Bereket Fikre');
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Bereket Fikre Portfolio', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:creator', '@bereketfikre', true);
    updateMetaTag('twitter:site', '@bereketfikre', true);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
    
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything visible
};

export default SEO;
