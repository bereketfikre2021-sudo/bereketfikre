import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import SEO from "./components/SEO";
import { ArrowRight, Mail, Phone, ExternalLink, Palette, LayoutGrid, PenTool, Rocket, Instagram, Linkedin, Github, Dribbble, ChevronUp, MessageCircle, Eye, X } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

// Import images as modules
import swanClothing from '/img/swan-clothing.webp';
import finix from '/img/Finix.webp';
import maledaCoffee from '/img/Maleda Coffee.webp';
import andegna from '/img/Andegna.webp';
import yatConstruction from '/img/Y.A.T Construction PLC.webp';
import alta from '/img/Alta.webp';
import medavail from '/img/Medavail.webp';
import andegnaTshirt from '/img/Andegna T-shirt.webp';
import niqatMenu from '/img/Niqat Menu.webp';
import rollupBanners from '/img/Rollup Banners.webp';
import bereketFikre from '/img/Bereket Fikre.webp';
import gedy from '/img/Gedy.webp';
import dag from '/img/Dag.webp';
import abenezer from '/img/Abenezer.webp';
import kass from '/img/Kass.webp';
import miko from '/img/Miko.webp';
import hayle from '/img/Hayle.webp';
import andegnaLogo from '/img/Andegna Logo Outline copy.webp';
import niqat from '/img/Niqat.webp';
import primeAll from '/img/Prime All.webp';
import medavailLogo from '/img/Medavail logo.webp';
import gedylaw from '/img/Gedylaw.webp';
import pdcLogo from '/img/PDC Logo.webp';

// ——————————————————————————————————————
// Bereket Fikre — Creative Designer Portfolio (One Page)
// Theme: Brand Colors - #111111 (dark), #a78bfa (light purple), #7c3aed (darker purple), #9ca3af (gray), #ffffff (white)
// ——————————————————————————————————————

const PROFILE = {
  name: "Bereket Fikre",
  title: "Graphic Designer, Brand Builder & Design Educator",
  email: "bereketfikre2021@gmail.com",
  phone: "+251 923 988 838",
  location: "Addis Ababa, Ethiopia",
  socials: [
    { label: "Instagram", href: "https://instagram.com/bereketfikre.ig", icon: Instagram },
    { label: "Dribbble", href: "https://dribbble.com/bereket-fikre", icon: Dribbble },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bereket-fikre-graphic-designer", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/bereketfikre2021-sudo", icon: Github },
  ],
};

const SERVICES = [
  {
    icon: Palette,
    title: "Branding & Identity",
    desc: "Logos, style guides, typography systems, and brand kits that feel timeless and distinct.",
    tags: ["Logo", "Guidelines", "Packaging"],
  },
  {
    icon: LayoutGrid,
    title: "UI/UX Design",
    desc: "Elegant product interfaces with an emphasis on clarity, accessibility, and conversion.",
    tags: ["Web", "Mobile", "Prototyping"],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    desc: "Campaign visuals, posters, social media content, and motion graphics that captivate.",
    tags: ["Social", "Print", "Motion"],
  },
  {
    icon: Rocket,
    title: "Web Design",
    desc: "Fast, responsive websites built with modern tooling and a minimalist aesthetic.",
    tags: ["React", "Tailwind", "SEO"],
  },
];

const PROJECTS = [
  {
    id: "p1",
    title: "Brand Identity - Swan Clothing",
    role: "Brand Identity · Fashion",
    thumb: swanClothing,
    images: [
      swanClothing,
    ],
    summary:
      "Complete brand identity package including logo design, product packaging mockups, and comprehensive brand guidelines for a modern fashion brand.",
    tags: ["Branding", "Fashion", "Packaging"],
    link: "#",
    description: "✨ Swan Clothing emerged as a breathtaking metamorphosis of modern fashion storytelling. This wasn't just a rebrand—it was a complete visual renaissance that redefined elegance in the digital age. I crafted a sophisticated brand ecosystem where every element whispers luxury and screams innovation. The logo dances between minimalist perfection and subtle swan-inspired poetry, while the packaging design tells a story of premium craftsmanship and environmental consciousness. This comprehensive brand universe ensures that every touchpoint—from the first Instagram scroll to the unboxing moment—creates an unforgettable emotional connection.",
    challenges: "🎯 The ultimate design challenge: How do you make a fashion brand feel both timeless and cutting-edge? How do you appeal to the Instagram generation while respecting traditional luxury values? The market was saturated with generic fashion brands, and we needed to create something that would make people stop scrolling and start dreaming.",
    solutions: "🚀 I orchestrated a design symphony with multiple movements: a versatile logo system that adapts like a chameleon across platforms, eco-luxury packaging that makes sustainability sexy, and a comprehensive brand DNA that ensures every pixel tells the same beautiful story. The result? A brand that doesn't just exist—it lives, breathes, and captivates.",
    results: "🏆 The transformation was nothing short of magical: 40% surge in brand recognition, 60% increase in social media engagement, and most importantly—a brand that people actually fall in love with. Swan Clothing didn't just enter the market; it conquered hearts and minds, establishing itself as the new standard for modern luxury fashion."
  },
  {
    id: "p2",
    title: "Finix Web Asset Collection",
    role: "Web Design · Digital Marketing",
    thumb: finix,
    images: [
      finix,
    ],
    summary:
      "Comprehensive web asset collection including website banners, digital marketing materials, and promotional graphics for engaging online presence.",
    tags: ["Web", "Digital", "Marketing"],
    link: "#",
    description: "💎 Finix Web Asset Collection became a digital masterpiece that transformed how fintech companies communicate with the world. This wasn't just a collection of graphics—it was a complete visual language that made complex financial concepts feel approachable and exciting. I designed a symphony of responsive website banners that dance across screens, social media graphics that stop thumbs mid-scroll, and email templates that people actually want to open. Every pixel was crafted to build trust while sparking curiosity, creating a brand experience that makes financial innovation feel like pure magic.",
    challenges: "🎪 The ultimate creative puzzle: How do you make fintech feel both trustworthy and thrilling? How do you design for an audience that's simultaneously skeptical of financial services and hungry for innovation? The challenge was creating assets that work flawlessly across every device while maintaining the perfect balance of professionalism and personality.",
    solutions: "🎨 I engineered a design ecosystem that's both flexible and foolproof: a cohesive visual language that adapts like liquid across platforms, responsive graphics that look stunning on everything from smartwatches to billboards, and a comprehensive brand DNA that ensures every asset tells the same compelling story. The result? A fintech brand that doesn't just inform—it inspires.",
    results: "🚀 The impact was extraordinary: 35% boost in engagement rates, 50% increase in email open rates, and a marketing team that could create stunning assets in minutes instead of hours. Finix didn't just improve their digital presence—they revolutionized how people perceive fintech brands, setting a new standard for financial innovation communication."
  },
  {
    id: "p3",
    title: "Product Ad (Social Media Revamp) - Maleda Coffee",
    role: "Product Design · E-commerce",
    thumb: maledaCoffee,
    images: [
      maledaCoffee,
    ],
    summary:
      "Creative product advertisement design featuring coffee cup photography, packaging design, and compelling brand visuals for e-commerce marketing.",
    tags: ["Product", "E-commerce", "Photography"],
    link: "#",
    description: "☕ Maleda Coffee's social media transformation was a sensory revolution that made people taste the brand through their screens. This wasn't just product photography—it was visual storytelling that captured the soul of Ethiopian coffee culture. I crafted a visual narrative that transports viewers to misty highlands, where every bean tells a story of tradition and passion. The packaging design became a canvas for cultural celebration, while the product shots made coffee lovers' hearts skip a beat. Every image was designed to create an emotional connection that goes beyond the product—it's about the experience, the heritage, and the pure joy of exceptional coffee.",
    challenges: "🌍 The creative challenge was monumental: How do you capture the essence of Ethiopian coffee culture in a single image? How do you make people feel the warmth of tradition and the excitement of discovery? The market was flooded with generic coffee ads, and we needed something that would make Maleda Coffee stand out like a diamond in a sea of pebbles.",
    solutions: "🎭 I orchestrated a visual symphony that celebrates both heritage and innovation: authentic photography that captures the raw beauty of coffee culture, packaging design that honors tradition while embracing modernity, and a social media strategy that turns every post into a mini-documentary. The result? A brand that doesn't just sell coffee—it sells dreams, memories, and pure sensory delight.",
    results: "🏆 The transformation was absolutely magical: 80% increase in social media engagement, 45% boost in online sales, and a community of coffee lovers who don't just buy Maleda Coffee—they become ambassadors for the brand. Maleda Coffee didn't just improve their social presence; they created a movement that celebrates the art of exceptional coffee."
  },
  {
    id: "p4",
    title: "Office Signage Design - Andegna Wood And Metal Works",
    role: "Environmental Design · Corporate",
    thumb: andegna,
    images: [
      andegna,
    ],
    summary:
      "Professional signage design including office wall graphics, roll-up banner displays, and environmental graphics for impactful corporate communication.",
    tags: ["Signage", "Environmental", "Corporate"],
    link: "#",
    description: "🏗️ Andegna's office transformation became a masterclass in environmental storytelling that turned corporate spaces into inspiring experiences. This wasn't just signage—it was architectural poetry that celebrated the beauty of wood and metal craftsmanship. I designed a complete environmental narrative where every wall tells a story, every banner becomes a window into the company's soul, and every graphic element reinforces the brand's commitment to excellence. The office became a living museum of craftsmanship, where visitors don't just see the company—they feel the passion, precision, and pride that goes into every project.",
    challenges: "🎯 The design challenge was architectural: How do you make corporate signage feel both professional and inspiring? How do you create environmental graphics that enhance rather than overwhelm the space? The challenge was designing for a company that works with raw materials while maintaining a sophisticated, modern aesthetic that appeals to high-end clients.",
    solutions: "🎨 I crafted an environmental design language that speaks the same language as the materials: signage that celebrates the natural beauty of wood and the industrial elegance of metal, wall graphics that tell the story of craftsmanship through visual metaphors, and a cohesive system that transforms the entire office into a brand experience. The result? A workspace that doesn't just house a company—it embodies its values.",
    results: "🏆 The transformation was extraordinary: 60% increase in client confidence during office visits, 35% boost in employee pride and engagement, and a workspace that became a competitive advantage. Andegna's office didn't just look professional—it became a destination that clients request to visit, setting a new standard for corporate environmental design."
  },
  {
    id: "p5",
    title: "Company Logo Rebranding - Y.A.T Construction PLC",
    role: "Logo Rebranding · Stationery Design · Corporate",
    thumb: yatConstruction,
    images: [
      yatConstruction,
    ],
    summary:
      "Complete logo rebranding and stationery design including professional letterheads, business cards, envelopes, and folders for cohesive corporate identity with modern brand transformation.",
    tags: ["Logo Rebranding", "Stationery", "Corporate", "Identity"],
    link: "#",
    description: "🏗️ Y.A.T Construction's complete brand transformation became a masterclass in corporate identity design that elevated the company from traditional construction firm to modern industry leader. This wasn't just a logo redesign—it was a comprehensive visual revolution that touched every aspect of their business communication. I crafted a sophisticated logo system that speaks the language of precision engineering while maintaining the warmth of a family-owned business, complemented by a complete stationery suite that ensures every document reinforces their professional excellence.",
    challenges: "🎯 The ultimate corporate branding challenge: How do you modernize a traditional construction company without losing their established credibility? How do you create a visual identity that appeals to both corporate clients and local communities? The construction industry is known for conservative branding, and we needed something that would stand out while still feeling trustworthy and reliable.",
    solutions: "🚀 I engineered a complete brand ecosystem that's both timeless and contemporary: a geometric logo that suggests structural integrity and precision, a professional stationery suite that elevates every business interaction, and a cohesive visual language that works across everything from business cards to construction site signage. The result? A brand that doesn't just build structures—it builds confidence and trust.",
    results: "🏆 The transformation was absolutely remarkable: 50% increase in new client inquiries, 30% boost in brand recognition within the construction industry, and a complete corporate identity that became a competitive advantage. Y.A.T Construction didn't just get a new logo—they got a professional presence that helps them win more projects and build stronger relationships."
  },
  {
    id: "p6",
    title: "Company Logo Rebranding - Alta Counseling",
    role: "Brand Identity · Corporate Rebranding",
    thumb: alta,
    images: [
      alta,
    ],
    summary:
      "Complete company logo rebranding including full stationery design, roll-up banners, and website banner. Comprehensive brand identity overhaul with modern design elements and cohesive visual system.",
    tags: ["Rebranding", "Stationery", "Banners"],
    link: "#",
    description: "💙 Alta Counseling's brand transformation became a compassionate revolution in mental health branding that made therapy feel approachable, trustworthy, and healing. This wasn't just a logo redesign—it was a complete visual therapy session that transformed how people perceive mental health services. I crafted a warm, empathetic brand identity that speaks the language of healing and hope, complemented by a comprehensive visual system that includes stationery, banners, and digital assets. Every element was designed to create a safe, welcoming environment that encourages people to seek help.",
    challenges: "🎯 The ultimate emotional branding challenge: How do you make mental health services feel both professional and approachable? How do you create a brand that reduces stigma while building trust? The mental health industry often struggles with outdated, clinical imagery, and we needed something that would make therapy feel like a positive, empowering choice rather than a last resort.",
    solutions: "🚀 I designed a brand ecosystem that's both healing and professional: a logo that suggests growth and transformation, a color palette that conveys calm and trust, and a complete visual system that works across everything from business cards to therapy room walls. The result? A brand that doesn't just represent counseling—it embodies the journey of healing and personal growth.",
    results: "🏆 The transformation was absolutely transformative: 40% increase in new client inquiries, 25% reduction in no-show rates, and a brand that became a beacon of hope in the mental health community. Alta Counseling didn't just get a new logo—they got a visual identity that helps people feel safe, understood, and ready to begin their healing journey."
  },
  {
    id: "p7",
    title: "Company Logo Rebranding - Medavail Pharmaceuticals",
    role: "Brand Identity · Corporate Rebranding",
    thumb: medavail,
    images: [
      medavail,
    ],
    summary:
      "Complete company logo rebranding including office signage, stationery design, and social media templates. Comprehensive brand identity transformation with modern design elements and cohesive visual system for pharmaceutical company.",
    tags: ["Rebranding", "Signage", "Stationery", "Social Media"],
    link: "#",
    description: "💊 Medavail Pharmaceuticals' brand transformation became a scientific revolution in healthcare branding that made pharmaceutical excellence feel both cutting-edge and trustworthy. This wasn't just a logo redesign—it was a complete visual prescription for modern healthcare communication. I crafted a sophisticated brand identity that speaks the language of medical innovation while maintaining the trust and reliability that patients and healthcare professionals demand. The comprehensive system includes office signage, stationery, and social media templates that ensure every touchpoint reinforces their commitment to health and healing.",
    challenges: "🎯 The ultimate healthcare branding challenge: How do you make a pharmaceutical company feel both innovative and trustworthy? How do you create a brand that appeals to healthcare professionals while remaining accessible to patients? The pharmaceutical industry faces intense scrutiny and regulation, and we needed something that would build confidence while showcasing scientific excellence.",
    solutions: "🚀 I engineered a brand ecosystem that's both scientific and human: a logo that suggests precision and care, a color palette that conveys trust and innovation, and a complete visual system that works across everything from medical conferences to patient education materials. The result? A brand that doesn't just represent pharmaceuticals—it embodies the promise of better health and brighter futures.",
    results: "🏆 The transformation was absolutely life-changing: 35% increase in healthcare professional engagement, 20% boost in patient trust scores, and a brand that became synonymous with pharmaceutical excellence. Medavail Pharmaceuticals didn't just get a new logo—they got a visual identity that helps healthcare professionals and patients feel confident in their commitment to health and healing."
  },
  {
    id: "p8",
    title: "Corporate Apparel Design – Driver's T-Shirt for Andegna Furniture",
    role: "Apparel Design · Corporate Branding",
    thumb: andegnaTshirt,
    images: [
      andegnaTshirt,
    ],
    summary:
      "Branded t-shirt design for Andegna Furniture's delivery team, created to reflect professionalism, brand consistency, and day-to-day wearability. Corporate apparel design that enhances brand visibility while maintaining comfort and functionality for delivery personnel.",
    tags: ["Apparel", "Corporate", "Branding", "Furniture"],
    link: "#",
    description: "👕 Andegna Furniture's corporate apparel transformation became a mobile branding revolution that turned every delivery into a brand experience. This wasn't just a t-shirt design—it was a strategic brand ambassador program that made every team member a walking advertisement for quality and professionalism. I crafted a comfortable, durable design that speaks the language of craftsmanship and reliability, ensuring that every customer interaction reinforces the brand's commitment to excellence. The design balances professional appearance with practical functionality, creating apparel that team members are proud to wear.",
    challenges: "🎯 The ultimate wearable branding challenge: How do you create corporate apparel that team members actually want to wear? How do you design for comfort and durability while maintaining brand consistency? The challenge was creating something that works for long delivery days while making a positive impression on customers and representing the brand's quality standards.",
    solutions: "🚀 I engineered a design solution that's both functional and fashionable: a logo placement that maximizes brand visibility, a color scheme that stays professional even after long days, and a design that team members feel confident wearing. The result? Corporate apparel that doesn't just represent the brand—it enhances team pride and customer trust.",
    results: "🏆 The transformation was absolutely remarkable: 90% team member satisfaction with the new uniforms, 25% increase in customer recognition of the Andegna brand, and a delivery team that became proud brand ambassadors. Andegna Furniture didn't just get new uniforms—they got a mobile marketing team that delivers both furniture and brand excellence."
  },
  {
    id: "p9",
    title: "Restaurant Menu & Brochure Design - Niqat Coffee",
    role: "Menu Design · Digital Integration · Print Design",
    thumb: niqatMenu,
    images: [
      niqatMenu,
    ],
    summary:
      "Complete restaurant menu design including trifold layout, QR code integration for digital menus, and modern typography. Professional menu design that enhances customer experience with both traditional print and digital accessibility options.",
    tags: ["Menu Design", "QR Codes", "Trifold", "Restaurant", "Digital Integration"],
    link: "#",
    description: "☕ Niqat Coffee's menu transformation became a culinary storytelling revolution that made every dish feel like a work of art. This wasn't just a menu design—it was a complete dining experience that bridges the gap between traditional hospitality and modern digital convenience. I crafted a sophisticated trifold layout that guides customers through a visual journey of flavors and aromas, complemented by seamless QR code integration that brings the menu to life on any device. Every typography choice and layout decision was designed to enhance the dining experience and make ordering feel effortless.",
    challenges: "🎯 The ultimate restaurant branding challenge: How do you create a menu that works for both traditional diners and tech-savvy customers? How do you make food descriptions feel appetizing while maintaining readability? The challenge was designing for a coffee shop that serves both quick takeaway customers and those who want to linger and explore the full menu experience.",
    solutions: "🚀 I engineered a dual-format solution that's both timeless and cutting-edge: a beautiful trifold print menu that works for traditional dining, seamless QR code integration for digital convenience, and a typography system that makes every dish description feel irresistible. The result? A menu system that doesn't just list food—it creates anticipation and enhances the entire dining experience.",
    results: "🏆 The transformation was absolutely delicious: 30% increase in average order value, 50% reduction in wait times for digital orders, and a menu that became a conversation starter among customers. Niqat Coffee didn't just get a new menu—they got a dining experience that makes every visit feel special and every dish feel irresistible."
  },
  {
    id: "p10",
    title: "Rollup Banners for Different Companies",
    role: "Banner Design · Print Design",
    thumb: rollupBanners,
    images: [
      rollupBanners,
    ],
    summary:
      "Professional rollup banner designs for various companies, featuring modern layouts, compelling visuals, and brand-consistent messaging. High-quality print-ready designs that effectively communicate company information and enhance brand visibility at events and exhibitions.",
    tags: ["Banners", "Print Design", "Branding", "Events"],
    link: "#",
    description: "🎪 The rollup banner collection became a portable branding revolution that transformed trade shows, conferences, and events into powerful brand experiences. This wasn't just banner design—it was a complete visual communication system that makes every company stand out in crowded exhibition halls. I crafted a diverse portfolio of professional banners that speak the unique language of each brand while maintaining the highest standards of print quality and visual impact. Every design was engineered to capture attention from across the room while delivering clear, compelling messages that drive engagement and business results.",
    challenges: "🎯 The ultimate event marketing challenge: How do you create banners that work for different industries while maintaining design excellence? How do you ensure readability and impact in busy, noisy exhibition environments? The challenge was designing for companies with vastly different brand personalities while creating a cohesive portfolio that showcases versatility and professional expertise.",
    solutions: "🚀 I engineered a flexible design system that adapts to any brand: a modular layout approach that works across industries, a typography hierarchy that ensures readability from any distance, and a color strategy that maximizes impact while maintaining brand consistency. The result? A banner collection that doesn't just display information—it creates memorable brand experiences that drive business results.",
    results: "🏆 The transformation was absolutely spectacular: 100% client satisfaction across all banner projects, 40% increase in event booth traffic for clients, and a portfolio that became a showcase of professional versatility. These companies didn't just get banners—they got portable brand ambassadors that work tirelessly at every event to attract attention and drive business growth."
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Working with Bereket Fikre was a game-changer for our non-profit. He created compelling visuals that helped us double donations during our annual campaign. Passionate and mission-aligned!",
    author: "Gedyon Megersa",
    role: "Non-Profit Director",
    avatar: gedy,
  },
  {
    quote:
      "From event posters to digital ads, Bereket Fikre made our product launch unforgettable. His designs grabbed attention and drove ticket sales. Will definitely work with him again!",
    author: "Dagmawi Yeshiwas",
    role: "Creative Director",
    avatar: dag,
  },
  {
    quote:
      "Professional, quick, and always on point. He captured exactly what we envisioned and more!",
    author: "Abenezer A",
    role: "Digital Marketer",
    avatar: abenezer,
  },
  {
    quote:
      "As a small business, we needed affordable yet high-quality designs. Bereket Fikre delivered stunning flyers and social media graphics that boosted our local visibility. Professional and budget-friendly!",
    author: "Kassaye Getachew",
    role: "Business Owner",
    avatar: kass,
  },
  {
    quote:
      "We hired Bereket Fikre to revamp our corporate branding, and the results exceeded expectations. His strategic approach and attention to detail gave us a cohesive identity across all platforms. A+ service!",
    author: "Micky",
    role: "Digital Artist",
    avatar: miko,
  },
  {
    quote:
      "Bereket understood my personal brand instantly and created a logo that reflects my values. The process was collaborative, and the result was uniquely 'me.' Exceptional talent!",
    author: "Hayleyesus",
    role: "Web Developer",
    avatar: hayle,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`np ${className}`}>{children}</section>
);

// Privacy Policy Component
const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark border border-primary/20 rounded-2xl"
      >
        <div className="sticky top-0 bg-dark border-b border-primary/20 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-accent">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-accent" />
          </button>
        </div>
        
        <div className="p-6 space-y-6 text-accent">
            <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
            <h3 className="text-xl font-bold text-accent mb-4">Our Commitment to You</h3>
            <p className="text-accent/90 leading-relaxed">
              At Bereket Fikre Design Studio, your privacy is not just a legal requirement—it's a core value. 
              We believe in transparent, ethical data practices that respect your rights and protect your information. 
              This policy explains how we collect, use, and safeguard your personal data when you engage with our design services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Information We Collect</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                <h4 className="font-semibold text-accent mb-2">Contact Information</h4>
                <ul className="space-y-1 text-sm text-accent/80">
                  <li>• Name and email address</li>
                  <li>• Phone number (if provided)</li>
                  <li>• Company name and position</li>
                  <li>• Project requirements and preferences</li>
                </ul>
              </div>
              <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                <h4 className="font-semibold text-accent mb-2">Technical Data</h4>
                <ul className="space-y-1 text-sm text-accent/80">
                  <li>• Website usage analytics</li>
                  <li>• Device and browser information</li>
                  <li>• IP address (anonymized)</li>
                  <li>• Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">How We Use Your Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Primary Purposes</h4>
                <ul className="space-y-1 text-sm text-accent/80">
                  <li>• Deliver exceptional design services</li>
                  <li>• Communicate about your projects</li>
                  <li>• Provide customer support</li>
                  <li>• Process payments securely</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Secondary Purposes</h4>
                <ul className="space-y-1 text-sm text-accent/80">
                  <li>• Improve our services</li>
                  <li>• Send relevant updates (with consent)</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Protect against fraud</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Your Rights & Choices</h3>
            <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
              <p className="text-sm text-neutral-400 mb-3">
                You have the right to access, correct, delete, restrict, or object to the processing of your personal data. 
                To exercise any of these rights, contact us at:
              </p>
              <div className="space-y-1 text-sm text-neutral-400">
                <p>📧 Email: bereketfikre2021@gmail.com</p>
                <p>📱 Phone: +251 923 988 838</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-primary/20">
            <p className="text-sm text-accent font-semibold">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Project Detail Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-accent border border-primary/20 rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-accent border-b border-primary/20 p-6 flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary mb-2">{project.title}</h2>
            <p className="text-primary/70 text-lg">{project.role}</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-primary/10 rounded-full transition-colors ml-4"
          >
            <X className="w-6 h-6 text-primary" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-600/10 rounded-2xl overflow-hidden">
              <img
                src={project.thumb}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Project Overview</h3>
                <p className="text-primary leading-relaxed text-lg">
                  {project.description || project.summary}
                </p>
              </div>

              {project.challenges && (
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Challenges</h3>
                  <p className="text-primary leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.solutions && (
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Solutions</h3>
                  <p className="text-primary leading-relaxed">
                    {project.solutions}
                  </p>
                </div>
              )}

              {project.results && (
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Results</h3>
                  <p className="text-primary leading-relaxed">
                    {project.results}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-primary/70 text-sm">Category</span>
                    <p className="text-primary font-medium">{project.role}</p>
                  </div>
                  <div>
                    <span className="text-primary/70 text-sm">Project Type</span>
                    <p className="text-primary font-medium">{project.tags[0]}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Get In Touch</h3>
                <p className="text-primary/70 text-sm mb-4">
                  Interested in similar work? Let's discuss your project.
                </p>
                <motion.a
                  href="#contact"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-accent hover:bg-primary/80 transition-colors font-semibold shadow-lg hover:shadow-xl"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Terms of Service Component
const TermsOfService = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark border border-primary/20 rounded-2xl"
      >
        <div className="sticky top-0 bg-dark border-b border-primary/20 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-accent">Terms of Service</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-accent" />
          </button>
        </div>
        
        <div className="p-6 space-y-6 text-accent">
            <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
            <h3 className="text-xl font-bold text-accent mb-4">Welcome to Our Partnership</h3>
            <p className="text-accent/90 leading-relaxed">
              These terms of service outline the foundation of our working relationship. Built on trust, 
              transparency, and mutual respect, these guidelines ensure smooth collaboration and successful 
              project outcomes. By engaging with Bereket Fikre Design Studio, you agree to these terms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Our Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                <h4 className="font-semibold text-accent mb-2">Design Services</h4>
                <ul className="space-y-1 text-sm text-accent/80">
                  <li>• Brand identity and logo design</li>
                  <li>• Print and digital design</li>
                  <li>• UI/UX design services</li>
                  <li>• Marketing materials</li>
                  <li>• Corporate branding</li>
                </ul>
              </div>
              <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                <h4 className="font-semibold text-accent mb-2">Consultation</h4>
                <ul className="space-y-1 text-sm text-accent/80">
                  <li>• Brand strategy consultation</li>
                  <li>• Design direction guidance</li>
                  <li>• Creative problem solving</li>
                  <li>• Project planning and scoping</li>
                  <li>• Ongoing design support</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Payment Terms</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20 text-center">
                <h4 className="font-semibold text-accent mb-2">Payment Schedule</h4>
                <p className="text-sm text-neutral-400">50% upfront, 50% upon completion. Milestone payments for larger projects.</p>
              </div>
              <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20 text-center">
                <h4 className="font-semibold text-accent mb-2">Payment Terms</h4>
                <p className="text-sm text-neutral-400">Net 15 days for invoices. Late fees may apply after 30 days.</p>
              </div>
              <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20 text-center">
                <h4 className="font-semibold text-accent mb-2">Refund Policy</h4>
                <p className="text-sm text-neutral-400">Refunds available within 48 hours of project start if work hasn't begun.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Intellectual Property Rights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Client Rights</h4>
                <ul className="space-y-1 text-sm text-accent/80">
                  <li>• Full ownership of final deliverables</li>
                  <li>• Right to use designs for intended purposes</li>
                  <li>• Commercial usage rights included</li>
                  <li>• Source files provided upon final payment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Designer Rights</h4>
                <ul className="space-y-1 text-sm text-accent/80">
                  <li>• Right to showcase work in portfolio</li>
                  <li>• Credit attribution in case studies</li>
                  <li>• Retention of working files and concepts</li>
                  <li>• Protection of proprietary methods</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-primary/20">
            <p className="text-sm text-neutral-400 mb-2">
              Questions about these terms? Contact us at:
            </p>
            <div className="space-y-1 text-sm text-neutral-400">
              <p>📧 Email: bereketfikre2021@gmail.com</p>
              <p>📱 Phone: +251 923 988 838</p>
            </div>
            <p className="text-sm text-accent font-semibold mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  const NAV = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-primary-dark/95 border-b border-accent/20 shadow-lg">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-light text-xl hover:text-accent transition-colors">
          BF
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-neutral-300 hover:text-light font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-primary-dark rounded-md px-2 py-1">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div id="home" className="relative h-screen overflow-hidden bg-primary-dark">
      {/* Subtle brand accent overlay */}
      <div className="absolute inset-0 bg-accent/5"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating circles */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-accent/30 rounded-full"
          style={{ top: '10%', left: '5%' }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute w-24 h-24 bg-accent/20 rounded-full blur-sm"
          style={{ top: '20%', right: '10%' }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: -360,
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Floating squares */}
        <motion.div
          className="absolute w-16 h-16 border border-accent/40 rotate-45"
          style={{ bottom: '20%', left: '8%' }}
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.3, 1],
            y: [0, -25, 0],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div
          className="absolute w-12 h-12 bg-accent/30 rounded-lg"
          style={{ bottom: '30%', right: '15%' }}
          animate={{
            rotate: [0, 180, 360],
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute w-3 h-3 bg-accent/60 rounded-full"
          style={{ top: '15%', left: '20%' }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute w-2 h-2 bg-accent/70 rounded-full"
          style={{ top: '60%', left: '15%' }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute w-4 h-4 bg-accent/50 rounded-full"
          style={{ top: '40%', right: '20%' }}
          animate={{
            y: [0, -35, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Gradient orbs */}
          <motion.div
          className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          style={{ top: '-10%', left: '-10%' }}
            animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
            }}
            transition={{ 
            duration: 12,
            repeat: Infinity,
              ease: "easeInOut" 
            }}
        />

        <motion.div
          className="absolute w-48 h-48 bg-accent/15 rounded-full blur-2xl"
          style={{ bottom: '-5%', right: '-5%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated lines */}
        <motion.div
          className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-accent/40 to-transparent"
          style={{ top: '25%', left: '12%' }}
          animate={{
            scaleY: [0.5, 1.5, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

          <motion.div
          className="absolute w-1 h-24 bg-gradient-to-b from-transparent via-accent/50 to-transparent"
          style={{ bottom: '35%', right: '25%' }}
            animate={{
            scaleY: [1, 0.3, 1],
            opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
            duration: 5,
              repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
            }}
          />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
      <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Welcome Badge */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-secondary/30"
          >
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-accent text-sm font-medium">Welcome to my portfolio</span>
        </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-light leading-tight px-4"
          >
            {PROFILE.name}
          </motion.h1>
          
          {/* Professional Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-accent font-semibold max-w-2xl mx-auto px-4"
          >
              {PROFILE.title}
          </motion.p>

          {/* Location */}
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-base sm:text-lg text-neutral-300 flex items-center justify-center gap-2 px-4"
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            {PROFILE.location}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="px-8 py-4 rounded-2xl bg-accent text-light hover:bg-accent-600 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-primary-dark"
              >
                View My Work
              </Button>
            </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 rounded-2xl border-2 border-accent text-accent hover:bg-accent hover:text-light font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-primary-dark"
              >
                Get In Touch
            </Button>
          </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center"
          >
              <motion.div
                animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-accent/80 rounded-full mt-2"
              />
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};

const CountUpNumber = ({ target }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('count-up-trigger');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible]);

  React.useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return (
    <div id="count-up-trigger" className="text-3xl font-bold text-primary mb-2">
      {count}+
    </div>
  );
};

const About = () => (
  <Section id="about" className="relative py-24 bg-light">
    <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
          >
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-accent font-medium text-sm">About Me</span>
        </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark"
          >
            My Story & Approach
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
          >
            With over 5 years of experience in graphic design and brand building, I help businesses create meaningful connections through strategic design.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-3xl transform rotate-3"></div>
              <div className="relative bg-light rounded-3xl p-8 shadow-2xl">
                <img 
                  src={bereketFikre} 
                  alt="Bereket Fikre"
                  className="w-full h-80 object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/10"
              >
                <CountUpNumber target={50} />
                <div className="text-sm text-primary/80 font-medium mt-2">Projects Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/10"
              >
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-primary/80 font-medium mt-2">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Main Description */}
              <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Design Philosophy</h3>
              <div className="space-y-4 text-primary leading-relaxed">
                <p>
                  I believe great design is more than just aesthetics—it's about creating meaningful connections between brands and their audiences. Every project I work on is approached with strategic thinking and creative excellence.
                </p>
                <p>
                  My process combines deep understanding of your business goals with innovative design solutions. Whether it's a complete brand identity, digital marketing materials, or print design, I ensure every element serves a purpose and tells your story effectively.
                </p>
                <p>
                  I work closely with clients to understand their vision, then translate that into compelling visual experiences that resonate with their target audience and drive real business results.
                </p>
                  </div>
                </div>
                
            {/* Skills & Services */}
              <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Palette className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary font-medium">Brand Identity</span>
                  </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <LayoutGrid className="w-4 h-4 text-accent" />
                </div>
                  <span className="text-primary font-medium">UI/UX Design</span>
                  </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <PenTool className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary font-medium">Print Design</span>
                  </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary font-medium">Digital Marketing</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-primary">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                {PROFILE.socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  >
                    <social.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-primary">{social.label}</span>
                  </motion.a>
                ))}
            </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-accent hover:bg-primary/80 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-accent"
                >
                  Let's Work Together
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  </Section>
);

const Services = () => (
  <Section id="services" className="relative py-24 bg-primary overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
    </div>

    <div className="mx-auto max-w-6xl px-4 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center space-y-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-primary text-sm font-medium">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            What I Do
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-accent">Services</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl bg-accent/30 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-accent" />
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary mb-6 leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-secondary hover:bg-primary/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-12"
        >
          <div className="bg-primary rounded-3xl p-8 text-center text-accent">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life with exceptional design solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/80 px-8 py-3 rounded-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:ring-offset-2 focus:ring-offset-primary">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </Section>
);

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
  <Section id="work" className="relative py-24 bg-accent overflow-hidden">
    {/* Magical Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating Sparkles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -50, -100],
            x: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Magical Orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/15 via-secondary/10 to-primary/15 rounded-full blur-3xl"
        style={{ top: '10%', right: '-10%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-l from-secondary/15 via-primary/10 to-secondary/15 rounded-full blur-3xl"
        style={{ bottom: '10%', left: '-10%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute w-32 h-32 border-2 border-primary/30 rounded-full"
        style={{ top: '20%', left: '5%' }}
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <motion.div
        className="absolute w-24 h-24 bg-primary/20 rounded-lg rotate-45"
        style={{ top: '60%', right: '8%' }}
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Magical Lines */}
      <motion.div
        className="absolute w-1 h-40 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        style={{ top: '30%', left: '15%' }}
        animate={{
          scaleY: [0.5, 1.5, 0.5],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      <motion.div
        className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-secondary/50 to-transparent"
        style={{ bottom: '40%', right: '20%' }}
        animate={{
          scaleY: [1, 0.3, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-primary/60 rounded-full"
          style={{
            left: `${20 + (i * 5)}%`,
            top: `${30 + (i * 3)}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + (i * 0.3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4
          }}
        />
      ))}
    </div>

    <div className="mx-auto max-w-6xl px-4 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="space-y-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 text-accent text-sm font-medium border border-primary/30 shadow-lg"
          >
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-dark via-accent to-primary-dark bg-clip-text text-transparent"
          >
            Featured Work
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl text-neutral-600 max-w-2xl mx-auto"
          >
            A showcase of my recent projects and creative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Magical Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 group-hover:shadow-2xl bg-gradient-to-br from-accent/40 via-accent/20 to-accent/40 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-accent/60 group-hover:via-accent/40 group-hover:to-accent/60">
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  }}
                />

                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary-600/10 overflow-hidden">
                  <img
                    src={project.thumb}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Magical Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Sparkles on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${20 + (i * 8)}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -20, -40],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                    </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ExternalLink className="w-5 h-5 text-accent" />
                    </motion.div>
                  </div>
                </div>
                
                <CardContent className="p-8 relative">
                  <div className="space-y-4">
                    <div>
                      <motion.h3
                        className="font-bold text-xl text-primary-dark group-hover:text-accent transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-sm text-neutral-600 font-medium">{project.role}</p>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag} 
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: tagIndex * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge 
                          variant="outline" 
                            className="text-xs border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      onClick={() => openProjectModal(project)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-accent group/link transition-colors duration-300 cursor-pointer"
                      whileHover={{ x: 8, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Project</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Eye className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </motion.div>
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center pt-8"
        >
          <motion.a
            href="https://heyzine.com/flip-book/2e51bd7d15.html"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-primary via-primary-600 to-primary text-accent hover:from-primary-600 hover:via-primary hover:to-primary-600 transition-all duration-300 font-semibold shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-accent overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>

    {/* Project Modal */}
    <ProjectModal 
      project={selectedProject} 
      isOpen={isModalOpen} 
      onClose={closeProjectModal} 
    />
  </Section>
);
};

const Testimonials = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage);
  
  const currentTestimonials = TESTIMONIALS.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
  <Section id="testimonials" className="relative py-24 bg-primary overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-2xl"></div>
    </div>

    <div className="mx-auto max-w-6xl px-4 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="space-y-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-primary text-sm font-medium">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-accent">What Clients Say</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Hear from the amazing people I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl bg-accent/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    
                    <blockquote className="text-secondary text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="pt-4 border-t border-primary/20">
                      <div className="flex items-center gap-4">
                        {/* Avatar Image */}
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                          <img 
                            src={testimonial.avatar} 
                            alt={`${testimonial.author} avatar`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to initials if image fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div 
                            className="w-full h-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-accent font-semibold text-sm"
                            style={{ display: 'none' }}
                          >
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        
                        {/* Author Info */}
                        <div>
                          <p className="font-semibold text-primary text-lg">{testimonial.author}</p>
                          <p className="text-sm text-secondary">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-4 pt-8"
        >
          <motion.button
            onClick={prevPage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/40"
            disabled={currentPage === 0}
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          {/* Page Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentPage(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          
          <motion.button
            onClick={nextPage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/40"
            disabled={currentPage === totalPages - 1}
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center pt-12"
        >
          <div className="relative overflow-hidden rounded-3xl p-8 border border-primary/20 bg-gradient-to-br from-primary via-primary-600 to-primary-800 shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              {/* Floating geometric shapes */}
              <motion.div
                className="absolute w-32 h-32 border-2 border-accent/20 rounded-full"
                style={{ top: '10%', left: '5%' }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              <motion.div
                className="absolute w-24 h-24 bg-accent/10 rounded-lg rotate-45"
                style={{ top: '20%', right: '10%' }}
                animate={{
                  rotate: [45, 405, 45],
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              <motion.div
                className="absolute w-16 h-16 border border-accent/30 rounded-full"
                style={{ bottom: '15%', left: '8%' }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* Gradient orbs */}
              <motion.div
                className="absolute w-64 h-64 bg-accent/5 rounded-full blur-3xl"
                style={{ top: '-20%', right: '-20%' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute w-48 h-48 bg-accent/8 rounded-full blur-2xl"
                style={{ bottom: '-10%', left: '-10%' }}
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Animated lines */}
              <motion.div
                className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent"
                style={{ top: '25%', left: '15%' }}
                animate={{
                  scaleY: [0.5, 1.5, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />

              <motion.div
                className="absolute w-1 h-24 bg-gradient-to-b from-transparent via-accent/40 to-transparent"
                style={{ bottom: '30%', right: '20%' }}
                animate={{
                  scaleY: [1, 0.3, 1],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5
                }}
              />

              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(167, 139, 250, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-accent mb-6">Trusted by the famous brands</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 items-center opacity-70">
              <motion.a 
                href="https://andegnafurniture.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center block"
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(167, 139, 250, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={andegnaLogo} 
                    alt="Andegna Furniture" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-primary/20 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-primary font-bold text-lg">A</span>
                  </div>
                </motion.div>
                <p className="text-sm text-accent/80">Andegna Furniture</p>
              </motion.a>
              <motion.a 
                href="https://linktr.ee/Niqatcoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center block"
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(167, 139, 250, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={niqat} 
                    alt="Niqat Coffee" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                </motion.div>
                <p className="text-sm text-accent/80">Niqat Coffee</p>
              </motion.a>
              <motion.a 
                href="https://primesoftwaresolution.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center block"
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(167, 139, 250, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={primeAll} 
                    alt="Prime All Trading" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-primary-dark to-neutral-700 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                </motion.div>
                <p className="text-sm text-accent/80">Prime All Trading</p>
              </motion.a>
              <motion.div 
                className="text-center"
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(167, 139, 250, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={medavailLogo} 
                    alt="Medavail Pharmaceutical" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-accent to-primary-dark flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                </motion.div>
                <p className="text-sm text-accent/80">Medavail Pharmaceutical</p>
              </motion.div>
              <motion.a 
                href="https://gedy-law.com/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center block"
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(167, 139, 250, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={gedylaw} 
                    alt="GEDY-LAW" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-primary-dark to-accent flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">G</span>
              </div>
                </motion.div>
                <p className="text-sm text-accent/80">GEDY-LAW</p>
              </motion.a>
              <motion.a 
                href="https://pdc-et.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center block"
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(167, 139, 250, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={pdcLogo} 
                    alt="Pioneer Diagnostic Center" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-primary-dark to-accent flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                </motion.div>
                <p className="text-sm text-accent/80">Pioneer Diagnostic Center</p>
              </motion.a>
            </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </Section>
);
};

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mwpnwagb");
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  if (state.succeeded) {
    return (
      <div className="relative overflow-hidden">
        {/* Animated Success Background */}
        <div className="absolute inset-0">
          {/* Floating celebration particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-secondary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100, -200],
                x: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}
          
          {/* Gradient orbs */}
          <motion.div
            className="absolute w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
            style={{ top: '-50%', left: '-50%' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
            </div>

        <Card className="relative border-2 border-green-400/30 bg-gradient-to-br from-green-500/10 via-primary/10 to-blue-500/10 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl font-bold text-accent"
              >
                Message Sent Successfully! 🎉
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-accent/80 text-lg"
              >
                Thank you for reaching out! I'll get back to you within 24 hours.
              </motion.p>
            </motion.div>
        </CardContent>
      </Card>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-primary/20 rounded-full"
          style={{ top: '10%', left: '5%' }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute w-24 h-24 bg-primary/10 rounded-lg rotate-45"
          style={{ top: '20%', right: '10%' }}
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div
          className="absolute w-16 h-16 border border-primary/30 rounded-full"
          style={{ bottom: '15%', left: '8%' }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Gradient orbs */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          style={{ top: '-20%', right: '-20%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-2xl"
          style={{ bottom: '-10%', left: '-10%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated lines */}
        <motion.div
          className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          style={{ top: '25%', left: '15%' }}
          animate={{
            scaleY: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        <motion.div
          className="absolute w-1 h-24 bg-gradient-to-b from-transparent via-secondary/40 to-transparent"
          style={{ bottom: '30%', right: '20%' }}
          animate={{
            scaleY: [1, 0.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <Card className="relative border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500">
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        
        <CardContent className="p-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Form Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-2"
            >
              <h3 className="text-2xl font-bold text-accent">Let's Create Something Amazing</h3>
              <p className="text-accent/70">Share your vision and let's bring it to life together</p>
            </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative group"
                >
                  <div className="relative">
              <Input 
                id="firstName"
                name="firstName"
                      placeholder=""
                      className="peer border-2 border-primary/20 bg-primary/5 text-accent placeholder:text-transparent focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 rounded-xl py-4 pl-4 pr-4"
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                required
              />
                    <label 
                      htmlFor="firstName"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'firstName' 
                          ? 'top-2 text-xs text-primary font-medium' 
                          : 'top-4 text-accent/60 group-hover:top-2 group-hover:text-xs group-hover:text-primary'
                      }`}
                    >
                      First Name
                    </label>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'firstName' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
              <ValidationError 
                prefix="First Name" 
                field="firstName"
                errors={state.errors}
                className="text-red-400 text-xs mt-1"
              />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative group"
                >
                  <div className="relative">
              <Input 
                id="lastName"
                name="lastName"
                      placeholder=""
                      className="peer border-2 border-primary/20 bg-primary/5 text-accent placeholder:text-transparent focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 rounded-xl py-4 pl-4 pr-4"
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                required
              />
                    <label 
                      htmlFor="lastName"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'lastName' 
                          ? 'top-2 text-xs text-primary font-medium' 
                          : 'top-4 text-accent/60 group-hover:top-2 group-hover:text-xs group-hover:text-primary'
                      }`}
                    >
                      Last Name
                    </label>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'lastName' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
              <ValidationError 
                prefix="Last Name" 
                field="lastName"
                errors={state.errors}
                className="text-red-400 text-xs mt-1"
              />
                </motion.div>
          </div>
          
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative group"
              >
                <div className="relative">
            <Input 
              id="email"
              name="email"
              type="email" 
                    placeholder=""
                    className="peer border-2 border-primary/20 bg-primary/5 text-accent placeholder:text-transparent focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 rounded-xl py-4 pl-4 pr-4"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
              required
            />
                  <label 
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'email' 
                        ? 'top-2 text-xs text-primary font-medium' 
                        : 'top-4 text-accent/60 group-hover:top-2 group-hover:text-xs group-hover:text-primary'
                    }`}
                  >
                    Email Address
                  </label>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative group"
              >
                <div className="relative">
            <Input 
              id="subject"
              name="subject"
                    placeholder=""
                    className="peer border-2 border-primary/20 bg-primary/5 text-accent placeholder:text-transparent focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 rounded-xl py-4 pl-4 pr-4"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
              required
            />
                  <label 
                    htmlFor="subject"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'subject' 
                        ? 'top-2 text-xs text-primary font-medium' 
                        : 'top-4 text-accent/60 group-hover:top-2 group-hover:text-xs group-hover:text-primary'
                    }`}
                  >
                    Project Subject
                  </label>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'subject' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
            <ValidationError 
              prefix="Subject" 
              field="subject"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="relative group"
              >
                <div className="relative">
            <Textarea
              id="message"
              name="message"
                    placeholder=""
                    className="peer min-h-[140px] border-2 border-primary/20 bg-primary/5 text-accent placeholder:text-transparent focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 rounded-xl py-4 pl-4 pr-4 resize-none"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
              required
            />
                  <label 
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' 
                        ? 'top-2 text-xs text-primary font-medium' 
                        : 'top-4 text-accent/60 group-hover:top-2 group-hover:text-xs group-hover:text-primary'
                    }`}
                  >
                    Tell me about your project...
                  </label>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-4"
              >
                <motion.button
            type="submit" 
            disabled={state.submitting}
                  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary-600 to-primary py-4 text-lg font-semibold text-accent shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsSubmitting(false)}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-20"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {state.submitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <motion.div
                          className="w-5 h-5"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.button>
              </motion.div>
        </form>
          </motion.div>
      </CardContent>
    </Card>
    </div>
  );
};

const Contact = () => (
  <Section id="contact" className="relative py-24 bg-primary overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
    </div>

    <div className="mx-auto max-w-6xl px-4 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="space-y-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-accent">Let's Work Together</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
        </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
          >
            <ContactForm />
          </motion.div>
      </motion.div>
    </div>
  </Section>
);

const Footer = ({ onPrivacyClick, onTermsClick }) => (
  <footer className="relative bg-primary text-secondary overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-2xl"></div>
    </div>

    <div className="mx-auto max-w-6xl px-4 relative z-10">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-xl overflow-hidden">
                <img 
                  src={bereketFikre} 
                  alt="Bereket Fikre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary">{PROFILE.name}</h3>
                <p className="text-secondary/70 text-sm">Creative Designer</p>
              </div>
            </div>
            <p className="text-secondary/80 leading-relaxed max-w-md">
              With 5+ years of experience in graphic design and digital marketing, I've helped numerous businesses transform their brands and achieve remarkable growth.
            </p>
            <div className="flex items-center gap-2 text-secondary/60">
              <div className="w-2 h-2 bg-secondary/60 rounded-full"></div>
              <span className="text-sm">{PROFILE.location}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-secondary">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-secondary/70 hover:text-secondary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <span className="group-hover:underline">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-secondary">Get In Touch</h4>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{PROFILE.email}</span>
              </motion.a>
              <motion.a
                href={`tel:${PROFILE.phone}op `}
                className="flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{PROFILE.phone}</span>
              </motion.a>
              <motion.a
                href="https://t.me/Believeandforward"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">@Believeandforward</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Media Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-8 border-t border-primary/10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-secondary mb-4">Follow My Journey</h4>
            <p className="text-secondary/70 text-sm">Stay updated with my latest work and creative insights</p>
          </div>
          <div className="flex items-center gap-4">
            {PROFILE.socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="py-8 border-t border-primary/10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-sm text-secondary/80">
              © 2025 {PROFILE.name}. All rights reserved.
            </p>
            <div className="w-1 h-1 bg-secondary/60 rounded-full"></div>
            <p className="text-sm text-secondary/80">
              Made with ❤️ in {PROFILE.location}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <motion.button
              onClick={onPrivacyClick}
              className="text-sm text-secondary/60 hover:text-secondary transition-colors group cursor-pointer"
              whileHover={{ y: -2 }}
            >
              <span className="group-hover:underline">Privacy Policy</span>
            </motion.button>
            <motion.button
              onClick={onTermsClick}
              className="text-sm text-secondary/60 hover:text-secondary transition-colors group cursor-pointer"
              whileHover={{ y: -2 }}
            >
              <span className="group-hover:underline">Terms of Service</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 right-8"
      >
        <motion.a
          href="#home"
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 border border-secondary/20 hover:border-secondary/40 backdrop-blur-sm"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronUp className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
        </motion.a>
      </motion.div>

    </div>
  </footer>
);

export default function CreativeDesignerPortfolio() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      const el = id && document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <SEO />
      <main className="antialiased text-light bg-primary-dark selection:bg-accent selection:text-light">
        <Header />
        <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer 
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onTermsClick={() => setIsTermsOpen(true)}
      />
      
      {/* Legal Modals */}
      <PrivacyPolicy 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
      <TermsOfService 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
      />
    </main>
    </>
  );
}

