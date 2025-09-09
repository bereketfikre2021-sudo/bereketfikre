import React, { useEffect } from 'react';

const SEO = ({ 
  title = "Bereket Fikre - Creative Designer Portfolio",
  description = "Professional Creative Designer specializing in UI/UX design, brand identity, graphic design, and digital marketing. Based in Addis Ababa, Ethiopia.",
  keywords = "graphic design, UI/UX design, brand identity, logo design, web design, creative designer, Ethiopia, Addis Ababa",
  image = "/img/Bereket Fikre.webp",
  url = "https://bereketfikre.com"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);

  return null; // This component doesn't render anything visible
};

export default SEO;
