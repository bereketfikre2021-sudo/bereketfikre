// Dynamic sitemap generator for SEO optimization
class SitemapGenerator {
  constructor() {
    this.baseUrl = '';
    this.pages = [];
    this.priorities = {
      homepage: 1.0,
      about: 0.8,
      services: 0.9,
      portfolio: 0.9,
      contact: 0.7,
      blog: 0.6,
      project: 0.8
    };
    this.changeFrequencies = {
      homepage: 'weekly',
      about: 'monthly',
      services: 'monthly',
      portfolio: 'weekly',
      contact: 'monthly',
      blog: 'daily',
      project: 'monthly'
    };
  }

  // Initialize with base URL
  init(baseUrl) {
    this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.generateDefaultPages();
  }

  // Generate default pages
  generateDefaultPages() {
    this.pages = [
      {
        url: '/',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: this.changeFrequencies.homepage,
        priority: this.priorities.homepage,
        type: 'homepage'
      },
      {
        url: '/#about',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: this.changeFrequencies.about,
        priority: this.priorities.about,
        type: 'about'
      },
      {
        url: '/#services',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: this.changeFrequencies.services,
        priority: this.priorities.services,
        type: 'services'
      },
      {
        url: '/#work',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: this.changeFrequencies.portfolio,
        priority: this.priorities.portfolio,
        type: 'portfolio'
      },
      {
        url: '/#contact',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: this.changeFrequencies.contact,
        priority: this.priorities.contact,
        type: 'contact'
      }
    ];
  }

  // Add a page to the sitemap
  addPage(pageData) {
    const page = {
      url: pageData.url,
      lastmod: pageData.lastmod || new Date().toISOString().split('T')[0],
      changefreq: pageData.changefreq || this.changeFrequencies[pageData.type] || 'monthly',
      priority: pageData.priority || this.priorities[pageData.type] || 0.5,
      type: pageData.type || 'page',
      images: pageData.images || []
    };

    // Check if page already exists
    const existingIndex = this.pages.findIndex(p => p.url === page.url);
    if (existingIndex >= 0) {
      this.pages[existingIndex] = page;
    } else {
      this.pages.push(page);
    }

    return page;
  }

  // Add project pages
  addProject(projectData) {
    const projectPage = {
      url: `/#work/${projectData.slug}`,
      lastmod: projectData.lastmod || new Date().toISOString().split('T')[0],
      changefreq: this.changeFrequencies.project,
      priority: this.priorities.project,
      type: 'project',
      images: projectData.images || []
    };

    return this.addPage(projectPage);
  }

  // Add blog post
  addBlogPost(postData) {
    const blogPage = {
      url: `/#blog/${postData.slug}`,
      lastmod: postData.lastmod || new Date().toISOString().split('T')[0],
      changefreq: this.changeFrequencies.blog,
      priority: this.priorities.blog,
      type: 'blog',
      images: postData.images || []
    };

    return this.addPage(blogPage);
  }

  // Generate XML sitemap
  generateXML() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
    xml += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

    this.pages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${this.baseUrl}${page.url}</loc>\n`;
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;

      // Add images if present
      if (page.images && page.images.length > 0) {
        page.images.forEach(image => {
          xml += '    <image:image>\n';
          xml += `      <image:loc>${this.baseUrl}${image.url}</image:loc>\n`;
          if (image.caption) {
            xml += `      <image:caption>${this.escapeXML(image.caption)}</image:caption>\n`;
          }
          if (image.title) {
            xml += `      <image:title>${this.escapeXML(image.title)}</image:title>\n`;
          }
          xml += '    </image:image>\n';
        });
      }

      xml += '  </url>\n';
    });

    xml += '</urlset>';
    return xml;
  }

  // Generate robots.txt content
  generateRobotsTxt() {
    let robots = `User-agent: *\n`;
    robots += `Allow: /\n`;
    robots += `Disallow: /admin/\n`;
    robots += `Disallow: /private/\n`;
    robots += `Disallow: /api/\n`;
    robots += `\n`;
    robots += `Sitemap: ${this.baseUrl}/sitemap.xml\n`;
    robots += `Sitemap: ${this.baseUrl}/sitemap-images.xml\n`;
    
    return robots;
  }

  // Generate sitemap index
  generateSitemapIndex() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    xml += '  <sitemap>\n';
    xml += `    <loc>${this.baseUrl}/sitemap.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += '  </sitemap>\n';
    xml += '  <sitemap>\n';
    xml += `    <loc>${this.baseUrl}/sitemap-images.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += '  </sitemap>\n';
    xml += '</sitemapindex>';
    return xml;
  }

  // Generate image sitemap
  generateImageSitemap() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
    xml += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

    this.pages.forEach(page => {
      if (page.images && page.images.length > 0) {
        xml += '  <url>\n';
        xml += `    <loc>${this.baseUrl}${page.url}</loc>\n`;
        
        page.images.forEach(image => {
          xml += '    <image:image>\n';
          xml += `      <image:loc>${this.baseUrl}${image.url}</image:loc>\n`;
          if (image.caption) {
            xml += `      <image:caption>${this.escapeXML(image.caption)}</image:caption>\n`;
          }
          if (image.title) {
            xml += `      <image:title>${this.escapeXML(image.title)}</image:title>\n`;
          }
          xml += '    </image:image>\n';
        });
        
        xml += '  </url>\n';
      }
    });

    xml += '</urlset>';
    return xml;
  }

  // Escape XML special characters
  escapeXML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Get all pages
  getPages() {
    return this.pages;
  }

  // Get pages by type
  getPagesByType(type) {
    return this.pages.filter(page => page.type === type);
  }

  // Update page last modified date
  updatePageLastMod(url, lastmod = null) {
    const page = this.pages.find(p => p.url === url);
    if (page) {
      page.lastmod = lastmod || new Date().toISOString().split('T')[0];
    }
  }

  // Remove page
  removePage(url) {
    this.pages = this.pages.filter(page => page.url !== url);
  }

  // Clear all pages
  clear() {
    this.pages = [];
  }

  // Export sitemap data as JSON
  exportJSON() {
    return {
      baseUrl: this.baseUrl,
      pages: this.pages,
      generatedAt: new Date().toISOString()
    };
  }

  // Import sitemap data from JSON
  importJSON(data) {
    this.baseUrl = data.baseUrl || '';
    this.pages = data.pages || [];
  }
}

// Create global instance
const sitemapGenerator = new SitemapGenerator();

// Auto-initialize with current domain
if (typeof window !== 'undefined') {
  sitemapGenerator.init(window.location.origin);
}

export default sitemapGenerator;
export { SitemapGenerator };
