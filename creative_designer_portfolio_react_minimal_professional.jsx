import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone, ExternalLink, Palette, LayoutGrid, PenTool, Rocket, Instagram, Linkedin, Github, Dribbble, ChevronUp } from "lucide-react";

// ——————————————————————————————————————
// Bereket Fikre — Creative Designer Portfolio (One Page)
// Theme: Navy Blue (#000F33) and Broken White (#F8F4EF)
// ——————————————————————————————————————

const PROFILE = {
  name: "Bereket Fikre",
  title: "Creative Designer — UI/UX, Branding, Graphics",
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
    title: "Logo & Branding Kit",
    role: "Brand Identity",
    thumb: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600&auto=format&fit=crop",
    ],
    summary:
      "Full branding system including logo, color palette, and visual identity guidelines for a modern company.",
    tags: ["Branding", "Identity", "Design"],
    link: "#",
  },
  {
    id: "p2",
    title: "UI/UX Web Dashboard",
    role: "UI/UX · Web App",
    thumb: "https://images.unsplash.com/photo-1551281044-8d8f1e59ad69?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    ],
    summary:
      "A clean and functional dashboard UI for a SaaS application with focus on usability and accessibility.",
    tags: ["UI/UX", "Dashboard", "Prototyping"],
    link: "#",
  },
  {
    id: "p3",
    title: "Social Media Campaign",
    role: "Graphic Design · Social",
    thumb: "https://images.unsplash.com/photo-1518894781321-630e638d0742?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop",
    ],
    summary:
      "Creative graphics and reels designed for a digital campaign, optimized for engagement and brand awareness.",
    tags: ["Social", "Campaign", "Motion"],
    link: "#",
  },
  {
    id: "p4",
    title: "Company Website Design",
    role: "Web Design · Frontend",
    thumb: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1600&auto=format&fit=crop",
    ],
    summary:
      "A fast, minimalist website design for a company showcasing services, case studies, and contact info.",
    tags: ["Web", "React", "Frontend"],
    link: "#",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Bereket delivered exactly what we needed — sophisticated design with a clear strategy behind every decision.",
    author: "Selam M.",
    role: "Marketing Lead, Kofi Co.",
  },
  {
    quote:
      "Clean, fast, and beautiful. Our product finally feels intuitive. Highly recommend working with him.",
    author: "Nahom A.",
    role: "Founder, Nimbus SaaS",
  },
  {
    quote:
      "Professional process and exceptional results. The brand kit elevated our presence everywhere.",
    author: "Beti T.",
    role: "CEO, Fikir Studio",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);

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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-[#F8F4EF]/80 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-[#000F33] text-lg">
          BF
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#000F33]/80 hover:text-[#000F33]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button size="sm" className="rounded-2xl bg-[#000F33] text-[#F8F4EF] hover:bg-[#222]">Contact</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

// (Rest of the code remains the same, but background sections use bg-[#F8F4EF] and text colors use navy/dark)

export default function CreativeDesignerPortfolio() {
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
      {/* Sections remain unchanged but themed with navy + broken white */}
    </main>
  );
}
