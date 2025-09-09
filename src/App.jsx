import React, { useState } from "react";on
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone, ExternalLink, Palette, LayoutGrid, PenTool, Rocket, Instagram, Linkedin, Github, Dribbble, ChevronUp, MessageCircle, Eye, X } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

// ——————————————————————————————————————
// Bereket Fikre — Creative Designer Portfolio (One Page)
// Theme: Navy Blue (#000F33) and Broken White (#F8F4EF)
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
    thumb: "./img/swan-clothing.webp",
    images: [
      "./img/swan-clothing.webp",
    ],
    summary:
      "Complete brand identity package including logo design, product packaging mockups, and comprehensive brand guidelines for a modern fashion brand.",
    tags: ["Branding", "Fashion", "Packaging"],
    link: "#",
  },
  {
    id: "p2",
    title: "Finix Web Asset Collection",
    role: "Web Design · Digital Marketing",
    thumb: "./img/Finix.webp",
    images: [
      "./img/Finix.webp",
    ],
    summary:
      "Comprehensive web asset collection including website banners, digital marketing materials, and promotional graphics for engaging online presence.",
    tags: ["Web", "Digital", "Marketing"],
    link: "#",
  },
  {
    id: "p3",
    title: "Product Ad (Social Media Revamp) - Maleda Coffee",
    role: "Product Design · E-commerce",
    thumb: "./img/Maleda Coffee.webp",
    images: [
      "./img/Maleda Coffee.webp",
    ],
    summary:
      "Creative product advertisement design featuring coffee cup photography, packaging design, and compelling brand visuals for e-commerce marketing.",
    tags: ["Product", "E-commerce", "Photography"],
    link: "#",
  },
  {
    id: "p4",
    title: "Office Signage Design - Andegna Wood And Metal Works",
    role: "Environmental Design · Corporate",
    thumb: "./img/Andegna.webp",
    images: [
      "./img/Andegna.webp",
    ],
    summary:
      "Professional signage design including office wall graphics, roll-up banner displays, and environmental graphics for impactful corporate communication.",
    tags: ["Signage", "Environmental", "Corporate"],
    link: "#",
  },
  {
    id: "p5",
    title: "Company Logo Rebranding - Y.A.T Construction PLC",
    role: "Logo Rebranding · Stationery Design · Corporate",
    thumb: "./img/Y.A.T Construction PLC.webp",
    images: [
      "./img/Y.A.T Construction PLC.webp",
    ],
    summary:
      "Complete logo rebranding and stationery design including professional letterheads, business cards, envelopes, and folders for cohesive corporate identity with modern brand transformation.",
    tags: ["Logo Rebranding", "Stationery", "Corporate", "Identity"],
    link: "#",
  },
  {
    id: "p6",
    title: "Company Logo Rebranding - Alta Counseling",
    role: "Brand Identity · Corporate Rebranding",
    thumb: "./img/Alta.webp",
    images: [
      "./img/Alta.webp",
    ],
    summary:
      "Complete company logo rebranding including full stationery design, roll-up banners, and website banner. Comprehensive brand identity overhaul with modern design elements and cohesive visual system.",
    tags: ["Rebranding", "Stationery", "Banners"],
    link: "#",
  },
  {
    id: "p7",
    title: "Company Logo Rebranding - Medavail Pharmaceuticals",
    role: "Brand Identity · Corporate Rebranding",
    thumb: "./img/Medavail.webp",
    images: [
      "./img/Medavail.webp",
    ],
    summary:
      "Complete company logo rebranding including office signage, stationery design, and social media templates. Comprehensive brand identity transformation with modern design elements and cohesive visual system for pharmaceutical company.",
    tags: ["Rebranding", "Signage", "Stationery", "Social Media"],
    link: "#",
  },
  {
    id: "p8",
    title: "Corporate Apparel Design – Driver's T-Shirt for Andegna Furniture",
    role: "Apparel Design · Corporate Branding",
    thumb: "./img/Andegna T-shirt.webp",
    images: [
      "./img/Andegna T-shirt.webp",
    ],
    summary:
      "Branded t-shirt design for Andegna Furniture's delivery team, created to reflect professionalism, brand consistency, and day-to-day wearability. Corporate apparel design that enhances brand visibility while maintaining comfort and functionality for delivery personnel.",
    tags: ["Apparel", "Corporate", "Branding", "Furniture"],
    link: "#",
  },
  {
    id: "p9",
    title: "Restaurant Menu & Brochure Design - Niqat Coffee",
    role: "Menu Design · Digital Integration · Print Design",
    thumb: "./img/Niqat Menu.webp",
    images: [
      "./img/Niqat Menu.webp",
    ],
    summary:
      "Complete restaurant menu design including trifold layout, QR code integration for digital menus, and modern typography. Professional menu design that enhances customer experience with both traditional print and digital accessibility options.",
    tags: ["Menu Design", "QR Codes", "Trifold", "Restaurant", "Digital Integration"],
    link: "#",
  },
  {
    id: "p10",
    title: "Rollup Banners for Different Companies",
    role: "Banner Design · Print Design",
    thumb: "./img/Rollup Banners.webp",
    images: [
      "./img/Rollup Banners.webp",
    ],
    summary:
      "Professional rollup banner designs for various companies, featuring modern layouts, compelling visuals, and brand-consistent messaging. High-quality print-ready designs that effectively communicate company information and enhance brand visibility at events and exhibitions.",
    tags: ["Banners", "Print Design", "Branding", "Events"],
    link: "#",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Working with Bereket Fikre was a game-changer for our non-profit. He created compelling visuals that helped us double donations during our annual campaign. Passionate and mission-aligned!",
    author: "Gedyon Megersa",
    role: "Non-Profit Director",
    avatar: "./img/Gedy.webp",
  },
  {
    quote:
      "From event posters to digital ads, Bereket Fikre made our product launch unforgettable. His designs grabbed attention and drove ticket sales. Will definitely work with him again!",
    author: "Dagmawi Yeshiwas",
    role: "Creative Director",
    avatar: "./img/Dag.webp",
  },
  {
    quote:
      "Professional, quick, and always on point. He captured exactly what we envisioned and more!",
    author: "Abenezer A",
    role: "Digital Marketer",
    avatar: "./img/Abenezer.webp",
  },
  {
    quote:
      "As a small business, we needed affordable yet high-quality designs. Bereket Fikre delivered stunning flyers and social media graphics that boosted our local visibility. Professional and budget-friendly!",
    author: "Kassaye Getachew",
    role: "Business Owner",
    avatar: "./img/Kass.webp",
  },
  {
    quote:
      "We hired Bereket Fikre to revamp our corporate branding, and the results exceeded expectations. His strategic approach and attention to detail gave us a cohesive identity across all platforms. A+ service!",
    author: "Micky",
    role: "Digital Artist",
    avatar: "./img/Miko.webp",
  },
  {
    quote:
      "Bereket understood my personal brand instantly and created a logo that reflects my values. The process was collaborative, and the result was uniquely 'me.' Exceptional talent!",
    author: "Hayleyesus",
    role: "Web Developer",
    avatar: "./img/Hayle.webp",
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
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-[#8AEA92]/20 rounded-2xl"
      >
        <div className="sticky top-0 bg-black border-b border-[#8AEA92]/20 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#8AEA92]">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#8AEA92]/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[#8AEA92]" />
          </button>
        </div>
        
        <div className="p-6 space-y-6 text-[#F8F4EF]">
          <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#8AEA92]/20">
            <h3 className="text-xl font-bold text-[#8AEA92] mb-4">Our Commitment to You</h3>
            <p className="text-[#F8F4EF]/90 leading-relaxed">
              At Bereket Fikre Design Studio, your privacy is not just a legal requirement—it's a core value. 
              We believe in transparent, ethical data practices that respect your rights and protect your information. 
              This policy explains how we collect, use, and safeguard your personal data when you engage with our design services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#8AEA92] mb-4">Information We Collect</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-xl p-4 border border-[#8AEA92]/20">
                <h4 className="font-semibold text-[#8AEA92] mb-2">Contact Information</h4>
                <ul className="space-y-1 text-sm text-[#F8F4EF]/80">
                  <li>• Name and email address</li>
                  <li>• Phone number (if provided)</li>
                  <li>• Company name and position</li>
                  <li>• Project requirements and preferences</li>
                </ul>
              </div>
              <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-xl p-4 border border-[#8AEA92]/20">
                <h4 className="font-semibold text-[#8AEA92] mb-2">Technical Data</h4>
                <ul className="space-y-1 text-sm text-[#F8F4EF]/80">
                  <li>• Website usage analytics</li>
                  <li>• Device and browser information</li>
                  <li>• IP address (anonymized)</li>
                  <li>• Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#8AEA92] mb-4">How We Use Your Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-[#8AEA92] mb-2">Primary Purposes</h4>
                <ul className="space-y-1 text-sm text-[#F8F4EF]/80">
                  <li>• Deliver exceptional design services</li>
                  <li>• Communicate about your projects</li>
                  <li>• Provide customer support</li>
                  <li>• Process payments securely</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#8AEA92] mb-2">Secondary Purposes</h4>
                <ul className="space-y-1 text-sm text-[#F8F4EF]/80">
                  <li>• Improve our services</li>
                  <li>• Send relevant updates (with consent)</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Protect against fraud</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#8AEA92] mb-4">Your Rights & Choices</h3>
            <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-xl p-4 border border-[#8AEA92]/20">
              <p className="text-sm text-[#F8F4EF]/80 mb-3">
                You have the right to access, correct, delete, restrict, or object to the processing of your personal data. 
                To exercise any of these rights, contact us at:
              </p>
              <div className="space-y-1 text-sm text-[#F8F4EF]/80">
                <p>📧 Email: bereketfikre2021@gmail.com</p>
                <p>📱 Phone: +251 923 988 838</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-[#8AEA92]/20">
            <p className="text-sm text-[#8AEA92] font-semibold">Last updated: {new Date().toLocaleDateString()}</p>
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
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-[#8AEA92]/20 rounded-2xl"
      >
        <div className="sticky top-0 bg-black border-b border-[#8AEA92]/20 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#8AEA92]">Terms of Service</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#8AEA92]/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[#8AEA92]" />
          </button>
        </div>
        
        <div className="p-6 space-y-6 text-[#F8F4EF]">
          <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#8AEA92]/20">
            <h3 className="text-xl font-bold text-[#8AEA92] mb-4">Welcome to Our Partnership</h3>
            <p className="text-[#F8F4EF]/90 leading-relaxed">
              These terms of service outline the foundation of our working relationship. Built on trust, 
              transparency, and mutual respect, these guidelines ensure smooth collaboration and successful 
              project outcomes. By engaging with Bereket Fikre Design Studio, you agree to these terms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#8AEA92] mb-4">Our Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-xl p-4 border border-[#8AEA92]/20">
                <h4 className="font-semibold text-[#8AEA92] mb-2">Design Services</h4>
                <ul className="space-y-1 text-sm text-[#F8F4EF]/80">
                  <li>• Brand identity and logo design</li>
                  <li>• Print and digital design</li>
                  <li>• UI/UX design services</li>
                  <li>• Marketing materials</li>
                  <li>• Corporate branding</li>
                </ul>
              </div>
              <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-xl p-4 border border-[#8AEA92]/20">
                <h4 className="font-semibold text-[#8AEA92] mb-2">Consultation</h4>
                <ul className="space-y-1 text-sm text-[#F8F4EF]/80">
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
            <h3 className="text-xl font-bold text-[#8AEA92] mb-4">Payment Terms</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-xl p-4 border border-[#8AEA92]/20 text-center">
                <h4 className="font-semibold text-[#8AEA92] mb-2">Payment Schedule</h4>
                <p className="text-sm text-[#F8F4EF]/80">50% upfront, 50% upon completion. Milestone payments for larger projects.</p>
              </div>
              <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-xl p-4 border border-[#8AEA92]/20 text-center">
                <h4 className="font-semibold text-[#8AEA92] mb-2">Payment Terms</h4>
                <p className="text-sm text-[#F8F4EF]/80">Net 15 days for invoices. Late fees may apply after 30 days.</p>
              </div>
              <div className="bg-[#8AEA92]/5 backdrop-blur-sm rounded-xl p-4 border border-[#8AEA92]/20 text-center">
                <h4 className="font-semibold text-[#8AEA92] mb-2">Refund Policy</h4>
                <p className="text-sm text-[#F8F4EF]/80">Refunds available within 48 hours of project start if work hasn't begun.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#8AEA92] mb-4">Intellectual Property Rights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-[#8AEA92] mb-2">Client Rights</h4>
                <ul className="space-y-1 text-sm text-[#F8F4EF]/80">
                  <li>• Full ownership of final deliverables</li>
                  <li>• Right to use designs for intended purposes</li>
                  <li>• Commercial usage rights included</li>
                  <li>• Source files provided upon final payment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#8AEA92] mb-2">Designer Rights</h4>
                <ul className="space-y-1 text-sm text-[#F8F4EF]/80">
                  <li>• Right to showcase work in portfolio</li>
                  <li>• Credit attribution in case studies</li>
                  <li>• Retention of working files and concepts</li>
                  <li>• Protection of proprietary methods</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-[#8AEA92]/20">
            <p className="text-sm text-[#F8F4EF]/80 mb-2">
              Questions about these terms? Contact us at:
            </p>
            <div className="space-y-1 text-sm text-[#F8F4EF]/80">
              <p>📧 Email: bereketfikre2021@gmail.com</p>
              <p>📱 Phone: +251 923 988 838</p>
            </div>
            <p className="text-sm text-[#8AEA92] font-semibold mt-4">Last updated: {new Date().toLocaleDateString()}</p>
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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-[#000000]/90 border-b border-[#8AEA92]/20">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-[#8AEA92] text-lg">
          BF
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#8AEA92]/80 hover:text-[#8AEA92]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button size="sm" className="relative rounded-2xl bg-[#8AEA92] text-[#000000] hover:bg-[#80ADA0] transition-all duration-300 group shadow-[0_0_20px_rgba(138,234,146,0.6)] hover:shadow-[0_0_30px_rgba(138,234,146,0.8)] hover:shadow-[0_0_40px_rgba(138,234,146,0.4)]">
              <span className="relative z-10">Contact</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Subtle brand accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8AEA92]/10 to-[#80ADA0]/10"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating circles */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-[#8AEA92]/20 rounded-full"
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
          className="absolute w-24 h-24 bg-gradient-to-br from-[#8AEA92]/15 to-[#80ADA0]/15 rounded-full blur-sm"
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
          className="absolute w-16 h-16 border border-[#8AEA92]/30 rotate-45"
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
          className="absolute w-12 h-12 bg-[#80ADA0]/20 rounded-lg"
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
          className="absolute w-3 h-3 bg-[#8AEA92]/40 rounded-full"
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
          className="absolute w-2 h-2 bg-[#80ADA0]/50 rounded-full"
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
          className="absolute w-4 h-4 bg-[#8AEA92]/30 rounded-full"
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
          className="absolute w-64 h-64 bg-gradient-to-br from-[#8AEA92]/5 to-[#80ADA0]/5 rounded-full blur-3xl"
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
          className="absolute w-48 h-48 bg-gradient-to-br from-[#80ADA0]/8 to-[#8AEA92]/8 rounded-full blur-2xl"
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
          className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-[#8AEA92]/30 to-transparent"
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
          className="absolute w-1 h-24 bg-gradient-to-b from-transparent via-[#80ADA0]/40 to-transparent"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="w-2 h-2 bg-[#8AEA92] rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Welcome to my portfolio</span>
        </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-4"
          >
            {PROFILE.name}
          </motion.h1>
          
          {/* Professional Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-[#8AEA92] font-semibold max-w-2xl mx-auto px-4"
          >
              {PROFILE.title}
          </motion.p>

          {/* Location */}
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-base sm:text-lg text-white/80 flex items-center justify-center gap-2 px-4"
          >
            <div className="w-1.5 h-1.5 bg-[#8AEA92] rounded-full"></div>
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
                className="px-8 py-4 rounded-2xl bg-[#8AEA92] text-[#000000] hover:bg-[#80ADA0] font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                className="px-8 py-4 rounded-2xl border-2 border-[#8AEA92] text-[#8AEA92] hover:bg-[#8AEA92] hover:text-[#000000] font-semibold text-lg transition-all duration-300"
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
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
              <motion.div
                animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
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
    <div id="count-up-trigger" className="text-3xl font-bold text-[#8AEA92] mb-2">
      {count}+
    </div>
  );
};

const About = () => (
  <Section id="about" className="relative py-24 bg-white">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8AEA92]/10 border border-[#8AEA92]/20"
          >
            <div className="w-2 h-2 bg-[#8AEA92] rounded-full"></div>
            <span className="text-[#8AEA92] font-medium text-sm">About Me</span>
        </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#000000]"
          >
            My Story & Approach
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[#000000]/70 max-w-3xl mx-auto"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#8AEA92] to-[#80ADA0] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="./img/Bereket Fikre.webp" 
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
                className="text-center p-6 bg-[#8AEA92]/5 rounded-2xl border border-[#8AEA92]/10"
              >
                <CountUpNumber target={50} />
                <div className="text-sm text-[#000000]/70 font-medium mt-2">Projects Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center p-6 bg-[#8AEA92]/5 rounded-2xl border border-[#8AEA92]/10"
              >
                <div className="text-4xl font-bold text-[#8AEA92]">5+</div>
                <div className="text-sm text-[#000000]/70 font-medium mt-2">Years Experience</div>
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
              <h3 className="text-2xl font-bold text-[#000000]">Design Philosophy</h3>
              <div className="space-y-4 text-[#000000]/80 leading-relaxed">
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
              <h3 className="text-2xl font-bold text-[#000000]">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-4 bg-[#8AEA92]/5 rounded-xl">
                  <div className="w-8 h-8 bg-[#8AEA92] rounded-lg flex items-center justify-center">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#000000] font-medium">Brand Identity</span>
                  </div>
                <div className="flex items-center gap-3 p-4 bg-[#8AEA92]/5 rounded-xl">
                  <div className="w-8 h-8 bg-[#8AEA92] rounded-lg flex items-center justify-center">
                    <LayoutGrid className="w-4 h-4 text-white" />
                </div>
                  <span className="text-[#000000] font-medium">UI/UX Design</span>
                  </div>
                <div className="flex items-center gap-3 p-4 bg-[#8AEA92]/5 rounded-xl">
                  <div className="w-8 h-8 bg-[#8AEA92] rounded-lg flex items-center justify-center">
                    <PenTool className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#000000] font-medium">Print Design</span>
                  </div>
                <div className="flex items-center gap-3 p-4 bg-[#8AEA92]/5 rounded-xl">
                  <div className="w-8 h-8 bg-[#8AEA92] rounded-lg flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#000000] font-medium">Digital Marketing</span>
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
              <h4 className="text-lg font-semibold text-[#000000]">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                {PROFILE.socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#8AEA92]/10 hover:bg-[#8AEA92]/20 border border-[#8AEA92]/20 hover:border-[#8AEA92]/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  >
                    <social.icon className="w-4 h-4 text-[#8AEA92] group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-[#000000]">{social.label}</span>
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
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#8AEA92] text-[#000000] hover:bg-[#80ADA0] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
  <Section id="services" className="relative py-24 bg-gradient-to-b from-[#8AEA92] to-white overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#000000]/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-[#000000]/10 to-transparent rounded-full blur-2xl"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#000000]/20 text-[#8AEA92] text-sm font-medium">
            <div className="w-2 h-2 bg-[#8AEA92] rounded-full"></div>
            What I Do
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#000000]">Services</h2>
          <p className="text-xl text-[#000000]/80 max-w-2xl mx-auto">
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
              <Card className="h-full border-[#000000]/20 hover:border-[#000000]/40 transition-all duration-300 group-hover:shadow-xl bg-white/30 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#000000] to-[#333333] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-[#8AEA92]" />
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-[#000000] transition-colors text-[#000000]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000]/80 mb-6 leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs border-[#000000]/30 text-[#000000]/80 hover:bg-[#000000]/10 transition-colors"
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
          <div className="bg-gradient-to-r from-[#000000] to-[#333333] rounded-3xl p-8 text-center text-[#8AEA92]">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-[#8AEA92]/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life with exceptional design solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-[#8AEA92] text-[#000000] hover:bg-[#80ADA0] px-8 py-3 rounded-2xl font-semibold">
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

const Work = () => (
  <Section id="work" className="relative py-24 bg-gradient-to-b from-white to-[#8AEA92] overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#000000]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-[#000000]/10 to-transparent rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#000000]/20 text-[#8AEA92] text-sm font-medium">
            <div className="w-2 h-2 bg-[#8AEA92] rounded-full"></div>
            Portfolio
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#000000]">Featured Work</h2>
          <p className="text-xl text-[#000000]/80 max-w-2xl mx-auto">
            A showcase of my recent projects and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden border-[#000000]/20 hover:border-[#000000]/40 transition-all duration-300 group-hover:shadow-2xl bg-white/30 backdrop-blur-sm">
                <div className="relative aspect-video bg-gradient-to-br from-[#000000]/10 to-[#333333]/10 overflow-hidden">
                  <img
                    src={project.thumb}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-[#8AEA92] rounded-full flex items-center justify-center shadow-lg">
                      <ExternalLink className="w-4 h-4 text-[#000000]" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-xl text-[#000000] group-hover:text-[#000000]/80 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#000000]/60 font-medium">{project.role}</p>
                    </div>
                    <p className="text-[#000000]/80 leading-relaxed">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="text-xs border-[#000000]/30 text-[#000000]/80 hover:bg-[#000000]/10 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#000000] hover:text-[#000000]/70 group/link"
                      whileHover={{ x: 5 }}
                    >
                      View Project 
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#000000] text-[#8AEA92] hover:bg-[#333333] transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </Section>
);

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
  <Section id="testimonials" className="relative py-24 bg-gradient-to-b from-[#8AEA92] to-white overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-[#000000]/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-tl from-[#000000]/10 to-transparent rounded-full blur-2xl"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#000000]/20 text-[#8AEA92] text-sm font-medium">
            <div className="w-2 h-2 bg-[#8AEA92] rounded-full"></div>
            Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#000000]">What Clients Say</h2>
          <p className="text-xl text-[#000000]/80 max-w-2xl mx-auto">
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
              <Card className="h-full border-[#000000]/20 hover:border-[#000000]/40 transition-all duration-300 group-hover:shadow-xl bg-white/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-[#000000] to-[#333333] rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#8AEA92]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    
                    <blockquote className="text-[#000000]/90 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="pt-4 border-t border-[#000000]/20">
                      <div className="flex items-center gap-4">
                        {/* Avatar Image */}
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#8AEA92] flex-shrink-0">
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
                            className="w-full h-full bg-gradient-to-br from-[#8AEA92] to-[#000000] flex items-center justify-center text-white font-semibold text-sm"
                            style={{ display: 'none' }}
                          >
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        
                        {/* Author Info */}
                        <div>
                          <p className="font-semibold text-[#000000] text-lg">{testimonial.author}</p>
                          <p className="text-sm text-[#000000]/60">{testimonial.role}</p>
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
            className="p-3 rounded-full bg-[#000000]/10 hover:bg-[#000000]/20 transition-all duration-300 border border-[#000000]/20 hover:border-[#000000]/40"
            disabled={currentPage === 0}
          >
            <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    ? 'bg-[#000000] scale-125' 
                    : 'bg-[#000000]/30 hover:bg-[#000000]/50'
                }`}
              />
            ))}
          </div>
          
          <motion.button
            onClick={nextPage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-[#000000]/10 hover:bg-[#000000]/20 transition-all duration-300 border border-[#000000]/20 hover:border-[#000000]/40"
            disabled={currentPage === totalPages - 1}
          >
            <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="bg-[#8AEA92] rounded-3xl p-8 border border-[#000000]/20">
              <h3 className="text-2xl font-bold text-[#000000] mb-6">Trusted by the famous brands</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 items-center opacity-70">
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
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#80ADA0] rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-[#8AEA92]/20 hover:shadow-xl hover:shadow-[#8AEA92]/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(138, 234, 146, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="./img/Andegna Logo Outline copy.webp" 
                    alt="Andegna Furniture" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-[#000000]/20 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-[#000000] font-bold text-lg">A</span>
                  </div>
                </motion.div>
                <p className="text-sm text-[#000000]/80">Andegna Furniture</p>
              </motion.div>
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
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#80ADA0] rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-[#8AEA92]/20 hover:shadow-xl hover:shadow-[#8AEA92]/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(138, 234, 146, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="./img/Niqat.webp" 
                    alt="Niqat Coffee" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-[#8B4513] to-[#D2691E] flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                </motion.div>
                <p className="text-sm text-[#000000]/80">Niqat Coffee</p>
              </motion.div>
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
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#80ADA0] rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-[#8AEA92]/20 hover:shadow-xl hover:shadow-[#8AEA92]/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(138, 234, 146, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="./img/Prime All.webp" 
                    alt="Prime All Trading" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-[#000000] to-[#333333] flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                </motion.div>
                <p className="text-sm text-[#000000]/80">Prime All Trading</p>
              </motion.div>
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
                  className="w-16 h-16 bg-[#80ADA0] rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-[#8AEA92]/20 hover:shadow-xl hover:shadow-[#8AEA92]/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(138, 234, 146, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="./img/Medavail logo.webp" 
                    alt="Medavail Pharmaceutical" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-[#8AEA92] to-[#000000] flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                </motion.div>
                <p className="text-sm text-[#000000]/80">Medavail Pharmaceutical</p>
              </motion.div>
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
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#80ADA0] rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-[#8AEA92]/20 hover:shadow-xl hover:shadow-[#8AEA92]/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(138, 234, 146, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="./img/Gedylaw.webp" 
                    alt="GEDY-LAW" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-[#000000] to-[#8AEA92] flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">G</span>
              </div>
                </motion.div>
                <p className="text-sm text-[#000000]/80">GEDY-LAW</p>
              </motion.div>
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
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#80ADA0] rounded-full mx-auto mb-2 overflow-hidden shadow-lg shadow-[#8AEA92]/20 hover:shadow-xl hover:shadow-[#8AEA92]/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(138, 234, 146, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="./img/PDC Logo.webp" 
                    alt="Pioneer Diagnostic Center" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-[#000000] to-[#8AEA92] flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                </motion.div>
                <p className="text-sm text-[#000000]/80">Pioneer Diagnostic Center</p>
              </motion.div>
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
  
  if (state.succeeded) {
    return (
      <Card className="border-[#8AEA92]/20 bg-[#8AEA92]/10 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#000000]">Message Sent!</h3>
            <p className="text-[#000000]/80 text-lg">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-[#8AEA92]/20 bg-[#8AEA92]/10 backdrop-blur-sm">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input 
                id="firstName"
                name="firstName"
                placeholder="First Name" 
                className="border-[#8AEA92]/20 bg-[#8AEA92]/5 text-[#000000] placeholder:text-[#000000]/60 focus:border-[#8AEA92]/40" 
                required
              />
              <ValidationError 
                prefix="First Name" 
                field="firstName"
                errors={state.errors}
                className="text-red-400 text-xs mt-1"
              />
            </div>
            <div>
              <Input 
                id="lastName"
                name="lastName"
                placeholder="Last Name" 
                className="border-[#8AEA92]/20 bg-[#8AEA92]/5 text-[#000000] placeholder:text-[#000000]/60 focus:border-[#8AEA92]/40" 
                required
              />
              <ValidationError 
                prefix="Last Name" 
                field="lastName"
                errors={state.errors}
                className="text-red-400 text-xs mt-1"
              />
            </div>
          </div>
          
          <div>
            <Input 
              id="email"
              name="email"
              type="email" 
              placeholder="Email" 
              className="border-[#8AEA92]/20 bg-[#8AEA92]/5 text-[#000000] placeholder:text-[#000000]/60 focus:border-[#8AEA92]/40" 
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
          </div>
          
          <div>
            <Input 
              id="subject"
              name="subject"
              placeholder="Subject" 
              className="border-[#8AEA92]/20 bg-[#8AEA92]/5 text-[#000000] placeholder:text-[#000000]/60 focus:border-[#8AEA92]/40" 
              required
            />
            <ValidationError 
              prefix="Subject" 
              field="subject"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
          </div>
          
          <div>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              className="min-h-[140px] border-[#8AEA92]/20 bg-[#8AEA92]/5 text-[#000000] placeholder:text-[#000000]/60 focus:border-[#8AEA92]/40"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={state.submitting}
            className="w-full rounded-2xl bg-[#8AEA92] text-[#000000] hover:bg-[#80ADA0] disabled:opacity-50 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const Contact = () => (
  <Section id="contact" className="relative py-24 bg-gradient-to-b from-[#8AEA92] to-[#000000] overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#8AEA92]/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-[#8AEA92]/20 to-transparent rounded-full blur-2xl"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8AEA92]/20 text-[#8AEA92] text-sm font-medium">
            <div className="w-2 h-2 bg-[#8AEA92] rounded-full"></div>
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#000000]">Let's Work Together</h2>
          <p className="text-xl text-[#000000]/90 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#8AEA92]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#8AEA92]/20">
              <h3 className="text-2xl font-bold text-[#8AEA92] mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#8AEA92]/5 hover:bg-[#8AEA92]/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8AEA92] to-[#80ADA0] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#000000]" />
                  </div>
                  <div>
                    <p className="text-[#8AEA92]/80 text-sm">Email</p>
                    <p className="text-[#8AEA92] font-medium">{PROFILE.email}</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href={`tel:${PROFILE.phone}`}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#8AEA92]/5 hover:bg-[#8AEA92]/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8AEA92] to-[#80ADA0] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#000000]" />
                  </div>
                  <div>
                    <p className="text-[#8AEA92]/80 text-sm">Phone</p>
                    <p className="text-[#8AEA92] font-medium">{PROFILE.phone}</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://t.me/Believeandforward"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#8AEA92]/5 hover:bg-[#8AEA92]/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8AEA92] to-[#80ADA0] rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#000000]" />
                  </div>
                  <div>
                    <p className="text-[#8AEA92]/80 text-sm">Telegram</p>
                    <p className="text-[#8AEA92] font-medium">@Believeandforward</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="bg-[#8AEA92]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#8AEA92]/20">
              <h3 className="text-2xl font-bold text-[#8AEA92] mb-6">Follow Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROFILE.socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-2xl bg-[#8AEA92]/5 hover:bg-[#8AEA92]/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 text-[#8AEA92] group-hover:scale-110 transition-transform" />
                    <span className="text-[#8AEA92] font-medium text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </Section>
);

const Footer = ({ onPrivacyClick, onTermsClick }) => (
  <footer className="relative bg-black text-[#8AEA92] overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8AEA92]/20 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-[#8AEA92]/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-tl from-[#8AEA92]/5 to-transparent rounded-full blur-2xl"></div>
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
              <div className="w-12 h-12 bg-gradient-to-br from-[#8AEA92] to-[#80ADA0] rounded-xl overflow-hidden">
                <img 
                  src="./img/Bereket Fikre.webp" 
                  alt="Bereket Fikre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#8AEA92]">{PROFILE.name}</h3>
                <p className="text-[#8AEA92]/70 text-sm">Creative Designer</p>
              </div>
            </div>
            <p className="text-[#8AEA92]/80 leading-relaxed max-w-md">
              With 5+ years of experience in graphic design and digital marketing, I've helped numerous businesses transform their brands and achieve remarkable growth.
            </p>
            <div className="flex items-center gap-2 text-[#8AEA92]/60">
              <div className="w-2 h-2 bg-[#8AEA92]/40 rounded-full"></div>
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
            <h4 className="text-lg font-semibold text-[#8AEA92]">Quick Links</h4>
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
                  className="block text-[#8AEA92]/70 hover:text-[#8AEA92] transition-colors group"
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
            <h4 className="text-lg font-semibold text-[#8AEA92]">Get In Touch</h4>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 text-[#8AEA92]/70 hover:text-[#8AEA92] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{PROFILE.email}</span>
              </motion.a>
              <motion.a
                href={`tel:${PROFILE.phone}op `}
                className="flex items-center gap-3 text-[#8AEA92]/70 hover:text-[#8AEA92] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{PROFILE.phone}</span>
              </motion.a>
              <motion.a
                href="https://t.me/Believeandforward"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#8AEA92]/70 hover:text-[#8AEA92] transition-colors group"
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
        className="py-8 border-t border-[#8AEA92]/10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#8AEA92] mb-4">Follow My Journey</h4>
            <p className="text-[#8AEA92]/70 text-sm">Stay updated with my latest work and creative insights</p>
          </div>
          <div className="flex items-center gap-4">
            {PROFILE.socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-2xl bg-[#8AEA92]/5 hover:bg-[#8AEA92]/10 transition-all duration-300 border border-[#8AEA92]/10 hover:border-[#8AEA92]/20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-[#8AEA92] group-hover:scale-110 transition-transform" />
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
        className="py-8 border-t border-[#8AEA92]/10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#8AEA92]/80">
              © 2025 {PROFILE.name}. All rights reserved.
            </p>
            <div className="w-1 h-1 bg-[#8AEA92]/40 rounded-full"></div>
            <p className="text-sm text-[#8AEA92]/80">
              Made with ❤️ in {PROFILE.location}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <motion.button
              onClick={onPrivacyClick}
              className="text-sm text-[#8AEA92]/60 hover:text-[#8AEA92] transition-colors group cursor-pointer"
              whileHover={{ y: -2 }}
            >
              <span className="group-hover:underline">Privacy Policy</span>
            </motion.button>
            <motion.button
              onClick={onTermsClick}
              className="text-sm text-[#8AEA92]/60 hover:text-[#8AEA92] transition-colors group cursor-pointer"
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
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#8AEA92]/10 hover:bg-[#8AEA92]/20 transition-all duration-300 border border-[#8AEA92]/20 hover:border-[#8AEA92]/40 backdrop-blur-sm"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronUp className="w-5 h-5 text-[#8AEA92] group-hover:scale-110 transition-transform" />
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
    <main className="antialiased text-[#000F33] bg-[#F8F4EF] selection:bg-[#000F33] selection:text-[#F8F4EF]">
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
  );
}

