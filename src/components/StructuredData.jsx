import React from 'react';

const StructuredData = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": data.name,
          "jobTitle": data.jobTitle,
          "description": data.description,
          "url": data.url,
          "image": data.image,
          "sameAs": data.socialProfiles || [],
          "worksFor": {
            "@type": "Organization",
            "name": data.company || "Freelance"
          },
          "knowsAbout": data.skills || [],
          "award": data.awards || [],
          "alumniOf": data.education || []
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "logo": data.logo,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": data.phone,
            "contactType": "customer service",
            "email": data.email
          },
          "address": data.address,
          "sameAs": data.socialProfiles || []
        };

      case 'portfolio':
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "dateCreated": data.dateCreated,
          "genre": data.genre || "Portfolio",
          "keywords": data.keywords || [],
          "image": data.images || []
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Person",
            "name": data.provider
          },
          "serviceType": data.serviceType,
          "areaServed": data.areaServed || "Worldwide",
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": data.currency || "USD"
          }
        };

      case 'project':
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "image": data.images || [],
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "dateCreated": data.dateCreated,
          "dateModified": data.dateModified,
          "genre": "Project",
          "keywords": data.keywords || [],
          "client": data.client,
          "technologies": data.technologies || []
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions.map(qa => ({
            "@type": "Question",
            "name": qa.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": qa.answer
            }
          }))
        };

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Service",
            "name": data.serviceName
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data.rating,
            "bestRating": 5
          },
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "reviewBody": data.review,
          "datePublished": data.datePublished
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
};

// Predefined structured data components
export const PersonStructuredData = ({ personData }) => (
  <StructuredData type="person" data={personData} />
);

export const OrganizationStructuredData = ({ orgData }) => (
  <StructuredData type="organization" data={orgData} />
);

export const PortfolioStructuredData = ({ portfolioData }) => (
  <StructuredData type="portfolio" data={portfolioData} />
);

export const ServiceStructuredData = ({ serviceData }) => (
  <StructuredData type="service" data={serviceData} />
);

export const ProjectStructuredData = ({ projectData }) => (
  <StructuredData type="project" data={projectData} />
);

export const BreadcrumbStructuredData = ({ breadcrumbData }) => (
  <StructuredData type="breadcrumb" data={breadcrumbData} />
);

export const FAQStructuredData = ({ faqData }) => (
  <StructuredData type="faq" data={faqData} />
);

export const ReviewStructuredData = ({ reviewData }) => (
  <StructuredData type="review" data={reviewData} />
);

export default StructuredData;
