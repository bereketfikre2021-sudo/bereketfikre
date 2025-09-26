import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Work",
      caseStudies: "Case Studies",
      blog: "Blog",
      testimonials: "Testimonials",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      name: "Bereket Fikre",
      title: "Creative Designer, Brand Builder & Design Educator",
      description: "I transform ideas into stunning visual experiences that captivate audiences and drive business growth. Specializing in UI/UX design, brand identity, and digital marketing solutions.",
      cta1: "View My Work",
      cta2: "Get In Touch"
    },
    // About Section
    about: {
      badge: "About Me",
      title: "Crafting Digital Experiences That Matter",
      description: "With a passion for design and a keen eye for detail, I create visual solutions that not only look beautiful but also solve real business problems. My approach combines creativity with strategy to deliver results that exceed expectations.",
      stats: {
        projects: "Projects Completed",
        clients: "Happy Clients",
        years: "Years Experience"
      }
    },
    // Services Section
    services: {
      badge: "Services",
      title: "What I Do",
      subtitle: "Comprehensive Design Solutions",
      description: "From concept to completion, I provide end-to-end design services that help businesses stand out in today's competitive market.",
      items: {
        branding: {
          title: "Branding & Visual Identity Design",
          description: "Brand identity solutions including logo design, guidelines, business cards & templates.",
          tags: ["Logo Design", "Brand Guidelines", "Business Cards", "Brand Collateral"]
        },
        marketing: {
          title: "Marketing & Social Media Design",
          description: "Engaging social media graphics, digital ads, flyers, posters, and campaign visuals that drive results.",
          tags: ["Social Media", "Digital Ads", "Flyers", "Campaign Visuals"]
        },
        web: {
          title: "Web & UI/UX Design",
          description: "Modern website layouts, app interfaces, landing pages, and custom icon sets with user-centered design.",
          tags: ["Website UI", "App Design", "Landing Pages", "Icons"]
        },
        packaging: {
          title: "Packaging & Label Design",
          description: "Eye-catching product packaging concepts, label designs, and professional mockups for presentation.",
          tags: ["Packaging", "Labels", "Mockups", "Product Design"]
        },
        motion: {
          title: "Motion & Multimedia Graphics",
          description: "Dynamic animated social media posts, video thumbnails, presentation templates, and infographic animations.",
          tags: ["Animation", "Video Graphics", "Presentations", "Infographics"]
        },
        custom: {
          title: "Custom Graphic Design",
          description: "Tailored infographics, pitch decks, event branding, and custom templates for your specific needs.",
          tags: ["Infographics", "Pitch Decks", "Event Branding", "Templates"]
        }
      }
    },
    // Work Section
    work: {
      badge: "Portfolio",
      title: "Featured Work",
      subtitle: "A showcase of my recent projects and creative solutions",
      viewAll: "View All Projects"
    },
    // Case Studies Section
    caseStudies: {
      badge: "Case Studies",
      title: "Detailed Project Case Studies",
      subtitle: "Dive deep into my design process, challenges faced, and the measurable results achieved for each project.",
      viewCaseStudy: "View Case Study"
    },
    // Blog Section
    blog: {
      badge: "Design Insights",
      title: "Latest from the Design Blog",
      subtitle: "Discover design insights, industry trends, and behind-the-scenes stories from my creative journey. Learn from real projects and stay ahead of the curve.",
      readArticle: "Read Article",
      subscribe: "Subscribe Free",
      newsletter: {
        title: "Stay Ahead of Design Trends",
        description: "Join 500+ designers getting weekly insights, free templates, and exclusive content.",
        placeholder: "Enter your email address",
        incentives: {
          templates: {
            title: "Free Design Templates",
            description: "Get 5 professional design templates worth $50"
          },
          content: {
            title: "Exclusive Content",
            description: "Access to behind-the-scenes design processes"
          },
          community: {
            title: "Design Community",
            description: "Join 500+ designers in our private community"
          },
          insights: {
            title: "Weekly Insights",
            description: "Get the latest design trends and tips every week"
          }
        }
      }
    },
    // Testimonials Section
    testimonials: {
      badge: "Testimonials",
      title: "What Clients Say",
      subtitle: "Don't just take my word for it. Here's what clients have to say about working with me."
    },
    // Contact Section
    contact: {
      title: "Let's Work Together",
      description: "Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        success: "Thank you! Your message has been sent successfully."
      }
    },
    // Footer
    footer: {
      description: "Creating meaningful connections through strategic design. Let's bring your vision to life.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      location: "Location",
      social: "Follow Me",
      copyright: "© 2024 Bereket Fikre. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    // Common
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      getStarted: "Get Started",
      viewProject: "View Project",
      watchVideo: "Watch Video",
      download: "Download",
      share: "Share",
      close: "Close",
      next: "Next",
      previous: "Previous",
      loading: "Loading...",
      error: "Something went wrong. Please try again."
    }
  },
  am: {
    // Navigation
    nav: {
      home: "መነሻ",
      about: "ስለኔ",
      services: "አገልግሎቶች",
      work: "ስራ",
      caseStudies: "የጉዳይ ጥናቶች",
      blog: "ብሎግ",
      testimonials: "ምስክርነቶች",
      contact: "አግኙን"
    },
    // Hero Section
    hero: {
      greeting: "ሰላም፣ እኔ",
      name: "በረከት ፍቅረ",
      title: "የፈጠራ ዲዛይነር፣ የምርት ስም ገንቢ እና የዲዛይን አስተማሪ",
      description: "አስተሳሰቦችን ወደ አስደናቂ የምስል ልምዶች እቀይራለሁ። በ UI/UX ዲዛይን፣ የምርት ስም ማንነት እና የዲጂታል ግብይት መፍትሄዎች ላይ ተለይቼ እሰራለሁ።",
      cta1: "ስራዬን ይመልከቱ",
      cta2: "አግኙን"
    },
    // About Section
    about: {
      badge: "ስለኔ",
      title: "አስፈላጊ የሆኑ ዲጂታል ልምዶችን መፍጠር",
      description: "ለዲዛይን ትርፍ እና ለዝርዝር ትኩረት በመስጠት፣ የሚያምሩ ብቻ ሳይሆኑ እውነተኛ የንግድ ችግሮችን የሚፈቱ የምስል መፍትሄዎችን እፈጥራለሁ።",
      stats: {
        projects: "የተጠናቀቁ ፕሮጀክቶች",
        clients: "ደስተኛ ደንበኞች",
        years: "የልምድ ዓመታት"
      }
    },
    // Services Section
    services: {
      badge: "አገልግሎቶች",
      title: "ምን እሰራለሁ",
      subtitle: "የተሟላ የዲዛይን መፍትሄዎች",
      description: "ከፅንሰ-ሀሳብ እስከ ማጠናቀቅ፣ በዛሬው ውድድር የተሞላ ገበያ ውስጥ ንግዶች እንዲቆጠሩ የሚረዱ አገልግሎቶችን እሰጣለሁ።",
      items: {
        branding: {
          title: "የምርት ስም እና የምስል ማንነት ዲዛይን",
          description: "ሎጎ ዲዛይን፣ መመሪያዎች፣ የንግድ ካርዶች እና አብነቶችን የሚያካተቱ የምርት ስም ማንነት መፍትሄዎች።",
          tags: ["ሎጎ ዲዛይን", "የምርት ስም መመሪያዎች", "የንግድ ካርዶች", "የምርት ስም ተያያዥ"]
        },
        marketing: {
          title: "የግብይት እና የማህበራዊ ሚዲያ ዲዛይን",
          description: "የሚያስደስቱ የማህበራዊ ሚዲያ ግራፊክስ፣ ዲጂታል ማስታወቂያዎች፣ ፊልሞች፣ ፖስተሮች እና ውጤት የሚሰጡ የዘመቻ ምስሎች።",
          tags: ["ማህበራዊ ሚዲያ", "ዲጂታል ማስታወቂያዎች", "ፊልሞች", "የዘመቻ ምስሎች"]
        },
        web: {
          title: "የድር ገጽ እና UI/UX ዲዛይን",
          description: "ዘመናዊ የድር ገጽ አቀማመጦች፣ የመተግበሪያ በይነገጾች፣ የማረፊያ ገጾች እና በተጠቃሚ-ተማከለ ዲዛይን የተሰሩ ልዩ አዶዎች።",
          tags: ["የድር ገጽ UI", "የመተግበሪያ ዲዛይን", "የማረፊያ ገጾች", "አዶዎች"]
        },
        packaging: {
          title: "የማሸጊያ እና የመለያ ዲዛይን",
          description: "የሚስቡ የምርት ማሸጊያ ፅንሰ-ሀሳቦች፣ የመለያ ዲዛይኖች እና ለአቀራረብ የሙያ ሞክ-አፕስ።",
          tags: ["ማሸጊያ", "መለያዎች", "ሞክ-አፕስ", "የምርት ዲዛይን"]
        },
        motion: {
          title: "የእንቅስቃሴ እና የማህበራዊ ሚዲያ ግራፊክስ",
          description: "የሚንቀሳቀሱ የማህበራዊ ሚዲያ ልጥፎች፣ የቪዲዮ ማስታወሻዎች፣ የአቀራረብ አብነቶች እና የመረጃ ግራፊክ አኒሜሽኖች።",
          tags: ["አኒሜሽን", "የቪዲዮ ግራፊክስ", "አቀራረቦች", "መረጃ ግራፊክስ"]
        },
        custom: {
          title: "ልዩ የግራፊክ ዲዛይን",
          description: "ለተለያዩ ፍላጎቶችዎ የተሟሉ መረጃ ግራፊክስ፣ ፒች ዲክስ፣ የክስተት የምርት ስም እና ልዩ አብነቶች።",
          tags: ["መረጃ ግራፊክስ", "ፒች ዲክስ", "የክስተት የምርት ስም", "አብነቶች"]
        }
      }
    },
    // Work Section
    work: {
      badge: "ፖርትፎሊዮ",
      title: "የተመረጠ ስራ",
      subtitle: "የአሁኑ ፕሮጀክቶቼ እና የፈጠራ መፍትሄዎች ማሳያ",
      viewAll: "ሁሉንም ፕሮጀክቶች ይመልከቱ"
    },
    // Case Studies Section
    caseStudies: {
      badge: "የጉዳይ ጥናቶች",
      title: "ዝርዝር የፕሮጀክት ጉዳይ ጥናቶች",
      subtitle: "የዲዛይን ሂደቴ፣ የተጋጠሙ ችግሮች እና ለእያንዳንዱ ፕሮጀክት የተገኙ የሚለካ ውጤቶች ውስጥ ጥልቅ ይግቡ።",
      viewCaseStudy: "የጉዳይ ጥናት ይመልከቱ"
    },
    // Blog Section
    blog: {
      badge: "የዲዛይን ግንዛቤዎች",
      title: "ከዲዛይን ብሎግ የቅርብ ጊዜ",
      subtitle: "የዲዛይን ግንዛቤዎች፣ የኢንዱስትሪ አዝማሚያዎች እና ከፈጠራ ጉዞዬ የተገኙ የበስተጀርባ ታሪኮችን ይፈልጉ።",
      readArticle: "ጽሑፍ ያንብቡ",
      subscribe: "ነፃ ይመዝገቡ",
      newsletter: {
        title: "የዲዛይን አዝማሚያዎች ቀድመው ይሁኑ",
        description: "500+ ዲዛይነሮች ከሳምንታዊ ግንዛቤዎች፣ ነፃ አብነቶች እና ልዩ ይዘት ጋር ይቀላቀሉ።",
        placeholder: "የኢሜል አድራሻዎን ያስገቡ",
        incentives: {
          templates: {
            title: "ነፃ የዲዛይን አብነቶች",
            description: "50 ዶላር ዋጋ ያላቸው 5 የሙያ ዲዛይን አብነቶች ያግኙ"
          },
          content: {
            title: "ልዩ ይዘት",
            description: "ወደ የበስተጀርባ ዲዛይን ሂደቶች መዳረሻ"
          },
          community: {
            title: "የዲዛይን ማህበረሰብ",
            description: "500+ ዲዛይነሮች ባለው የእኛ የግል ማህበረሰብ ውስጥ ይቀላቀሉ"
          },
          insights: {
            title: "የሳምንት ግንዛቤዎች",
            description: "የቅርብ ጊዜ የዲዛይን አዝማሚያዎች እና ምክሮችን በየሳምንቱ ያግኙ"
          }
        }
      }
    },
    // Testimonials Section
    testimonials: {
      badge: "ምስክርነቶች",
      title: "ደንበኞች ምን ይላሉ",
      subtitle: "ከኔ ቃል ብቻ አይያዙ። ደንበኞች ከኔ ጋር ስለመስራታቸው ምን እንደሚሉ ይመልከቱ።"
    },
    // Contact Section
    contact: {
      title: "አብረን እንስራ",
      description: "አስተሳሰቦችዎን ወደ ሕይወት ለማምጣት ዝግጁ ነዎት? ስለ ፕሮጀክትዎ መስማት እፈልጋለሁ እና አስደናቂ ነገር እንዴት መፍጠር እንደምንችል እንወያይ።",
      form: {
        firstName: "የመጀመሪያ ስም",
        lastName: "የአባት ስም",
        email: "የኢሜል አድራሻ",
        subject: "ርዕስ",
        message: "መልዕክትዎ",
        submit: "መልዕክት ላክ",
        success: "አመሰግናለሁ! መልዕክትዎ በተሳካ ሁኔታ ተልኳል።"
      }
    },
    // Footer
    footer: {
      description: "በስትራቴጂክ ዲዛይን በሚፈጠሩ ትርጉም ያላቸው ግንኙነቶች። ራዕይዎን ወደ ሕይወት እናምጣ።",
      quickLinks: "ፈጣን አገናኞች",
      services: "አገልግሎቶች",
      contact: "አግኙን",
      email: "ኢሜል",
      phone: "ስልክ",
      location: "አካባቢ",
      social: "አስከተልኝ",
      copyright: "© 2024 በረከት ፍቅረ። ሁሉም መብቶች የተጠበቁ ናቸው።",
      privacy: "የግላዊነት ፖሊሲ",
      terms: "የአገልግሎት ውሎች"
    },
    // Common
    common: {
      readMore: "ተጨማሪ ያንብቡ",
      learnMore: "ተጨማሪ ይማሩ",
      getStarted: "ጀምር",
      viewProject: "ፕሮጀክት ይመልከቱ",
      watchVideo: "ቪዲዮ ይመልከቱ",
      download: "ያውርዱ",
      share: "አጋራ",
      close: "ዝጋ",
      next: "ቀጣይ",
      previous: "ቀዳሚ",
      loading: "በመጫን ላይ...",
      error: "አንድ ነገር ተሳስቷል። እባክዎ እንደገና ይሞክሩ።"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get saved language from localStorage or detect from browser
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    } else if (translations[browserLanguage]) {
      setLanguage(browserLanguage);
    } else {
      setLanguage('en'); // Default to English
    }
  }, []);

  useEffect(() => {
    // Save language preference
    localStorage.setItem('language', language);
    
    // Update document language
    document.documentElement.lang = language;
    
    // Update document direction for RTL languages if needed
    if (language === 'ar' || language === 'he') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setIsLoading(true);
      setLanguage(newLanguage);
      
      // Simulate loading time for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  };

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, param) => params[param] || match);
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
      t,
      isLoading,
      availableLanguages: Object.keys(translations)
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
