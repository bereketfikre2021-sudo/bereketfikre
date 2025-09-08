import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone, ExternalLink, Palette, LayoutGrid, PenTool, Rocket, Instagram, Linkedin, Github, Dribbble, ChevronUp, MessageCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

// ——————————————————————————————————————
// Bereket Fikre — Creative Designer Portfolio (One Page)
// Brand Colors: Black (#000000) - Primary, Mint Green (#8AEA92) - Secondary, White (#FFFFFF) - Background
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
    avatar: "/img/testimonial-1.jpg", // Add your testimonial avatar image here
  },
  {
    quote:
      "Clean, fast, and beautiful. Our product finally feels intuitive. Highly recommend working with him.",
    author: "Nahom A.",
    role: "Founder, Nimbus SaaS",
    avatar: "/img/testimonial-2.jpg", // Add your testimonial avatar image here
  },
  {
    quote:
      "Professional process and exceptional results. The brand kit elevated our presence everywhere.",
    author: "Beti T.",
    role: "CEO, Fikir Studio",
    avatar: "/img/testimonial-3.jpg", // Add your testimonial avatar image here
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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-[#000000]/90 border-b border-[#FFF44F]/20">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-[#FFF44F] text-lg">
          BF
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#FFF44F]/80 hover:text-[#FFF44F] transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button size="sm" className="rounded-2xl bg-[#FFF44F] text-[#000000] hover:bg-[#FFF44F]/90 transition-colors">Contact</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <Section id="home" className="relative pt-24 pb-32 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 -z-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8AEA92] to-white"></div>
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-[#000000]/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-[#000000]/10 rounded-lg"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-[#000000]/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#000000]/30 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#000000]/30 to-transparent"></div>
    </div>

    <div className="mx-auto max-w-6xl px-4 relative z-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="text-center space-y-8"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative mx-auto w-32 h-32 mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#333333] rounded-full"></div>
          <div className="absolute inset-2 bg-[#8AEA92] rounded-full overflow-hidden">
            <img 
              src="/img/Bereket Fikre.webp" 
              alt="Bereket Fikre - Creative Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-br from-[#000000]/30 to-transparent rounded-full blur-xl"></div>
        </motion.div>

        <div className="space-y-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold tracking-tight text-[#000000]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {PROFILE.name.split(' ').map((word, index) => (
              <motion.span
                key={word}
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
              >
                {word}
                {index < PROFILE.name.split(' ').length - 1 && ' '}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-3xl text-[#000000]/80 max-w-3xl mx-auto font-light">
              {PROFILE.title}
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-[#000000]/60">
              <div className="w-2 h-2 bg-[#000000] rounded-full"></div>
              <span>{PROFILE.location}</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 pt-8"
        >
          {PROFILE.socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#000000]/10 hover:bg-[#000000]/20 transition-all duration-300 border border-[#000000]/20 hover:border-[#000000]/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
            >
              <social.icon className="w-4 h-4 text-[#000000] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-[#000000]">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="pt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="group rounded-2xl bg-[#000000] text-[#8AEA92] hover:bg-[#333333] px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Let's Work Together
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#000000]/60"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-[#000000]/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-[#000000] rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </Section>
);

const About = () => (
  <Section id="about" className="relative py-24 bg-gradient-to-b from-white to-[#8AEA92] overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #000000 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, #000000 2px, transparent 2px)`,
        backgroundSize: '60px 60px'
      }}></div>
    </div>

    <div className="mx-auto max-w-6xl px-4 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center space-y-12"
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
            About Me
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#000000]">Creative Vision</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-[#000000]/90 leading-relaxed"
          >
            <p className="text-xl">
              I'm a creative designer passionate about crafting meaningful experiences through thoughtful design. 
              With expertise in UI/UX, branding, and graphic design, I help businesses tell their stories in 
              compelling and visually striking ways.
            </p>
            <p>
              Based in Addis Ababa, Ethiopia, I work with clients globally to create designs that not only 
              look beautiful but also drive results. My approach combines strategic thinking with creative 
              execution to deliver solutions that resonate with audiences and achieve business goals.
            </p>
            
            {/* Skills/Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-4 rounded-2xl bg-[#000000]/20 border border-[#000000]/30"
              >
                <div className="text-3xl font-bold text-[#8AEA92] mb-2">50+</div>
                <div className="text-sm text-[#000000]/80">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center p-4 rounded-2xl bg-[#000000]/20 border border-[#000000]/30"
              >
                <div className="text-3xl font-bold text-[#8AEA92] mb-2">3+</div>
                <div className="text-sm text-[#000000]/80">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#000000]/20 to-transparent rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#000000]/10 to-transparent rounded-full blur-xl"></div>
            
            {/* Main Content Card */}
            <div className="relative bg-[#8AEA92] rounded-3xl p-8 shadow-2xl border border-[#000000]/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#000000] to-[#333333] rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-[#8AEA92]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#000000]">Design Philosophy</h3>
                    <p className="text-sm text-[#000000]/70">Minimalism meets functionality</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#000000] rounded-full"></div>
                    <span className="text-[#000000]/80">User-centered design approach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#000000] rounded-full"></div>
                    <span className="text-[#000000]/80">Strategic brand development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#000000] rounded-full"></div>
                    <span className="text-[#000000]/80">Modern, clean aesthetics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#000000] rounded-full"></div>
                    <span className="text-[#000000]/80">Results-driven solutions</span>
                  </div>
                </div>
              </div>
            </div>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div className="grid md:grid-cols-2 gap-12">
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
            href="#contact"
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

const Testimonials = () => (
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

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
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

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center pt-12"
        >
          <div className="bg-[#8AEA92] rounded-3xl p-8 border border-[#000000]/20">
            <h3 className="text-2xl font-bold text-[#000000] mb-6">Trusted by Amazing Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#000000]/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-[#000000] font-bold text-lg">K</span>
                </div>
                <p className="text-sm text-[#000000]/80">Kofi Co.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#000000]/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-[#000000] font-bold text-lg">N</span>
                </div>
                <p className="text-sm text-[#000000]/80">Nimbus SaaS</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#000000]/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-[#000000] font-bold text-lg">F</span>
                </div>
                <p className="text-sm text-[#000000]/80">Fikir Studio</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#000000]/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-[#000000] font-bold text-lg">+</span>
                </div>
                <p className="text-sm text-[#000000]/80">More</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </Section>
);

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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
              <div className="grid grid-cols-2 gap-4">
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

const Footer = () => (
  <footer className="relative bg-gradient-to-b from-[#000000] to-[#333333] text-[#8AEA92] overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8AEA92]/20 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-[#8AEA92]/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-tl from-[#8AEA92]/5 to-transparent rounded-full blur-2xl"></div>
    </div>

    <div className="mx-auto max-w-6xl px-4 relative z-10">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="grid md:grid-cols-4 gap-12">
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
                  src="/img/Bereket Fikre.webp" 
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
              Creating meaningful experiences through thoughtful design. Let's bring your vision to life with exceptional creativity and strategic thinking.
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
                href={`tel:${PROFILE.phone}`}
                className="flex items-center gap-3 text-[#8AEA92]/70 hover:text-[#8AEA92] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{PROFILE.phone}</span>
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
              © 2024 {PROFILE.name}. All rights reserved.
            </p>
            <div className="w-1 h-1 bg-[#8AEA92]/40 rounded-full"></div>
            <p className="text-sm text-[#8AEA92]/80">
              Made with ❤️ in {PROFILE.location}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <motion.a
              href="#home"
              className="text-sm text-[#8AEA92]/60 hover:text-[#8AEA92] transition-colors group"
              whileHover={{ y: -2 }}
            >
              <span className="group-hover:underline">Privacy Policy</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="text-sm text-[#8AEA92]/60 hover:text-[#8AEA92] transition-colors group"
              whileHover={{ y: -2 }}
            >
              <span className="group-hover:underline">Terms of Service</span>
            </motion.a>
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

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-[#000000] text-[#8AEA92] hover:bg-[#333333] transition-colors shadow-lg z-50"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

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
    <main className="antialiased text-[#000000] bg-white selection:bg-[#000000] selection:text-[#8AEA92]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

