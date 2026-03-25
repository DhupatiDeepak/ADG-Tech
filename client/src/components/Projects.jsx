import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

const projects = [
  {
    title: "AI Automation System",
    desc: "Smart AI system with voice, IoT integration, and advanced neural intelligence tailored for industrial automation.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Web App Platform",
    desc: "A custom full-stack web application platform engineered with a modern, futuristic UI/UX to maximize user engagement.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Mechanical Design",
    desc: "Advanced CAD solutions combining cutting-edge robotics engineering and precision mechanical design.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      {/* Optional: Add a title for the section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
             style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border-color)' }}>
          Portfolio
        </div>
        <h2 className="text-4xl md:text-5xl font-[1000] uppercase tracking-tighter" style={{ color: 'var(--text-primary)' }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`project-card ${
            index % 2 === 0 ? "normal" : "reverse"
          }`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* IMAGE */}
          <div className="project-image">
            <motion.img 
              src={project.img} 
              alt={project.title} 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* CONTENT */}
          <div className="project-content">
            <h2 className="tracking-tight">{project.title}</h2>
            <p>{project.desc}</p>
            <button>View Project</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
