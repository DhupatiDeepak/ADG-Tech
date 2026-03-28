import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Globe, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tanuja Nursing Home",
    subtitle: "Clinic Management Web App",
    desc: "A full-stack clinic management system for hospital services, featuring online appointment booking, doctor selection, and patient record management.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1400",
    stack: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    color: "#10B981",
    link: "https://doctor-appointment-peach-three.vercel.app/",
    features: [
      { label: "Appointment Booking", detail: "Online scheduling with real-time availability." },
      { label: "Doctor Selection", detail: "Choose preferred doctor before booking." },
      { label: "Patient Records", detail: "Secure digital storage of patient data & visit history." },
      { label: "Responsive UI", detail: "User-friendly interface on all devices." },
      { label: "REST APIs", detail: "Smooth frontend-backend communication." }
    ]
  },
  {
    id: 2,
    title: "Godavari Ruchulu",
    subtitle: "Food Supply Web Application",
    desc: "A full-stack food supply platform for delivering homemade snacks and traditional Indian food items with an online ordering system.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1400",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    color: "#F59E0B",
    link: "https://zomato-8a47.vercel.app/",
    features: [
      { label: "Product Showcase", detail: "Snacks & food with price and descriptions." },
      { label: "Online Ordering", detail: "Simple and seamless order placement." },
      { label: "Order Management APIs", detail: "Backend APIs for order & product handling." },
      { label: "Dynamic Content", detail: "Database-driven real-time product updates." },
      { label: "Scalable Design", detail: "Built to grow with catalog and user base." }
    ]
  },
  {
    id: 3,
    title: "Software Engineer Portfolio",
    subtitle: "Personal Developer Portfolio",
    desc: "A modern, SEO-optimized personal portfolio website built with Next.js, showcasing projects, skills, certifications, and achievements.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1400",
    stack: ["React", "Next.js", "Node.js", "Vercel"],
    color: "#85B53D",
    link: "https://dhupatideepak.github.io/MyPortfolio/",
    features: [
      { label: "Full Portfolio Showcase", detail: "Projects, skills, certifications, achievements." },
      { label: "Modern Responsive UI", detail: "Smooth navigation and mobile-first design." },
      { label: "SEO Optimized", detail: "Next.js-powered performance and visibility." },
      { label: "Contact Integration", detail: "Contact form and project highlights." }
    ]
  },
  {
    id: 4,
    title: "Doctor Research Portfolio",
    subtitle: "Medical Research Professional Platform",
    desc: "A professional portfolio platform for a research-oriented doctor, highlighting publications, achievements, and specializations with a clean structured UI.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1400",
    stack: ["React", "Next.js", "Node.js"],
    color: "#06B6D4",
    link: "#",
    features: [
      { label: "Research Publications", detail: "Papers, journals, and studies listing." },
      { label: "Professional Profile", detail: "Experience, specialization and summary." },
      { label: "Clean Informative UI", detail: "Structured for credibility and trust." },
      { label: "Online Presence", detail: "Boosts visibility in the research field." }
    ]
  }
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden group hover:border-[var(--accent)]/30 transition-all duration-500"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

        {/* Image */}
        <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden flex-shrink-0">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center gap-5">

          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.35em] mb-1.5 block" style={{ color: project.color }}>
                {project.subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">{project.title}</h3>
            </div>
            {project.link !== '#' ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-[var(--border-color)] flex items-center justify-center flex-shrink-0 hover:border-[var(--accent)] transition-all group/btn"
                style={{ color: 'var(--text-secondary)' }}>
                <ArrowUpRight size={20} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" style={{ color: project.color }} />
              </a>
            ) : (
              <span className="text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-xl border border-[var(--border-color)] opacity-40 flex-shrink-0">
                Soon
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-base opacity-60 font-medium leading-relaxed">{project.desc}</p>

          {/* Stack badges — in content area */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg"
                style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Features — always visible */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: project.color }} />
                <div>
                  <p className="text-sm font-black uppercase tracking-wide leading-tight">{f.label}</p>
                  <p className="text-xs opacity-45 font-medium mt-0.5 leading-relaxed">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Live link */}
          {project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 w-fit shadow-xl"
              style={{ background: `${project.color}15`, color: project.color, border: `2px solid ${project.color}60` }}>
              <Globe size={18} /> EXPLORE LIVE PROJECT
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">
            Our Work
          </span>
          <h1 className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter mb-6 leading-none">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg opacity-60 font-medium max-w-2xl mx-auto leading-relaxed">
            Real-world products built with precision — from healthcare platforms to food delivery apps and professional portfolios.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
