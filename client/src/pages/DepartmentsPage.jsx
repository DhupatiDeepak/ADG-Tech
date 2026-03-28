import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Cpu, Code, ArrowRight, ChevronDown, ChevronUp, Factory, ScanLine, CircuitBoard, Bot, Bike } from "lucide-react";

const departments = [
  {
    id: "mechanical",
    icon: <Settings size={36}/>,
    color: "#10B981",
    title: "Mechanical Design",
    subtitle: "Precision Engineering & CAD",
    desc: "End-to-end mechanical design and engineering services using advanced CAD/CAM tools, delivering precise components and assemblies for industrial applications.",
    services: [
      { name: "2D & 3D CAD Modeling", detail: "SolidWorks, AutoCAD, CATIA, Fusion 360" },
      { name: "Product Design", detail: "From concept to manufacturing-ready drawings" },
      { name: "Reverse Engineering", detail: "3D scanning to accurate CAD models" },
      { name: "GD&T & Tolerancing", detail: "Precise dimensional specifications" },
      { name: "Design for Manufacturing (DFM)", detail: "Cost-effective, machinable designs" },
      { name: "Assembly Drawings", detail: "BOM, exploded views, technical documentation" }
    ]
  },
  {
    id: "ebike",
    icon: <Bike size={36}/>,
    color: "#D946EF",
    title: "Electric Bike Design",
    subtitle: "Modern e-Bike Engineering",
    desc: "Complete end-to-end design and engineering for electric mobility. We specialize in e-bike chassis, battery integration, and high-performance component design using CATIA and SolidWorks.",
    services: [
      { name: "Chassis & Frame Design", detail: "Lightweight, high-strength frame geometry" },
      { name: "Battery Pack Integration", detail: "Optimized spatial management for power cells" },
      { name: "Drivetrain Engineering", detail: "Motor mounting and power transmission CAD" },
      { name: "Component CAD (CATIA)", detail: "High-precision detailed design of all bike parts" },
      { name: "Suspension Geometry", detail: "Dynamic analysis and mount point design" },
      { name: "Prototyping & DFM", detail: "Manufacturing-ready drawings for batch production" }
    ]
  },
  {
    id: "design-ai",
    icon: <Cpu size={36}/>,
    color: "#85B53D",
    title: "Design Automation with AI",
    subtitle: "AI-Powered Engineering Intelligence",
    desc: "We transform traditional engineering workflows using AI — automating designs, cost estimation and quality checks through intelligent, use-case-driven solutions.",
    services: [
      { name: "2D Drawing → 3D Model using AI", detail: "Convert flat drawings to full 3D models automatically" },
      { name: "Auto BOM Generation", detail: "Instant Bill of Materials from AI design analysis" },
      { name: "Cost Estimation using AI", detail: "Smart, accurate production cost prediction" },
      { name: "Vastu Layout Recognition", detail: "AI-assisted spatial and structural layout analysis" },
      { name: "Brick Calculation Automation", detail: "Automated material quantity calculations" },
      { name: "Drawing Error Detection", detail: "AI-based quality checks for CAD drawings" },
      { name: "Design Optimization using AI", detail: "Topology optimization and weight reduction" },
      { name: "Generative Design", detail: "AI-generated design variants for optimal performance" }
    ]
  },
  {
    id: "robotics",
    icon: <Bot size={36}/>,
    color: "#06B6D4",
    title: "Robotics & AI",
    subtitle: "Intelligent Automation Systems",
    desc: "Building the next generation of autonomous systems — from humanoid robots to industrial automation, powered by cutting-edge AI and computer vision.",
    services: [
      { name: "Humanoid Robot Mechanical Design", detail: "Full kinematic and structural robot design" },
      { name: "Robot Simulation", detail: "ROS, Gazebo, and digital twin environments" },
      { name: "Computer Vision", detail: "Object detection, tracking and recognition systems" },
      { name: "Voice Assistant (Raspberry Pi)", detail: "Edge AI speech interfaces for embedded systems" },
      { name: "Autonomous Navigation", detail: "SLAM, path planning and obstacle avoidance" },
      { name: "AI Model Training", detail: "Custom ML models for industrial use cases" },
      { name: "Digital Twin", detail: "Real-time virtual replicas of physical systems" },
      { name: "Predictive Maintenance AI", detail: "Prevent failures before they happen" },
      { name: "Industrial Robot Integration", detail: "PLC, SCADA and robot arm integration" }
    ]
  },
  {
    id: "manufacturing",
    icon: <Factory size={36}/>,
    color: "#F59E0B",
    title: "Manufacturing & Fabrication",
    subtitle: "Buyer–Vendor Platform & Production",
    desc: "A smart platform connecting clients to the right manufacturers — we manage the entire production journey with a 10–20% commission-based scalable model.",
    services: [
      { name: "Vendor Development", detail: "Curated network of certified manufacturers" },
      { name: "Manufacturing Outsourcing", detail: "End-to-end production management" },
      { name: "Fabrication Services", detail: "Sheet Metal, Machining, Welding, Turning" },
      { name: "Prototype Manufacturing", detail: "Rapid physical prototyping from CAD" },
      { name: "Batch Production", detail: "Small and large scale batch management" },
      { name: "3D Printing Services", detail: "FDM, SLA prototypes for validation" },
      { name: "Laser / Waterjet Cutting", detail: "High-precision material cutting services" },
      { name: "Assembly Services", detail: "Sub-assembly and final assembly management" }
    ]
  },
  {
    id: "inspection",
    icon: <ScanLine size={36}/>,
    color: "#8B5CF6",
    title: "Inspection & Quality with AI",
    subtitle: "AI-Powered Quality Assurance",
    desc: "Combining traditional metrology with AI-powered vision systems to deliver fast, accurate and fully documented quality assurance for manufactured parts.",
    services: [
      { name: "2D Drawing Inspection", detail: "Automated vs. manual drawing comparison" },
      { name: "Quality Inspection Reports", detail: "Detailed, professional QA documentation" },
      { name: "Weld Inspection", detail: "Visual and AI-based weld quality analysis" },
      { name: "Dimensional Inspection", detail: "CMM, vernier and 3D scan comparison" },
      { name: "AI Visual Inspection", detail: "Camera-based defect detection on production lines" },
      { name: "Defect Detection using AI", detail: "Real-time surface defect classification" },
      { name: "Root Cause Analysis", detail: "Systematic failure investigation and reporting" },
      { name: "Failure Analysis", detail: "Material and process failure diagnostics" },
      { name: "QA Documentation", detail: "PPAP, FMEA, control plans and MSA" }
    ]
  },
  {
    id: "software",
    icon: <Code size={36}/>,
    color: "#EC4899",
    title: "Web & Software Services",
    subtitle: "Full-Stack Digital Products",
    desc: "Building high-performance digital products tailored for engineering and manufacturing businesses — from websites to AI-integrated enterprise software.",
    services: [
      { name: "Website Development", detail: "Modern, premium business websites" },
      { name: "Web Applications", detail: "Custom SaaS and business tools" },
      { name: "Cloud Applications", detail: "Azure, AWS, GCP deployment & architecture" },
      { name: "AI Web Apps", detail: "LLM-powered tools, chatbots and automation" },
      { name: "CAD Automation Software", detail: "Custom tools to automate engineering workflows" },
      { name: "ERP for Manufacturing", detail: "ERP systems tailored for small manufacturers" },
      { name: "Mobile Apps", detail: "Cross-platform iOS and Android applications" },
      { name: "AI Chatbots & Trade Bots", detail: "Intelligent automated assistants for business" },
      { name: "Hosting & Domain Services", detail: "End-to-end deployment and maintenance" }
    ]
  },
  {
    id: "ecd",
    icon: <CircuitBoard size={36}/>,
    color: "#F97316",
    title: "ECD Services",
    subtitle: "Electrical, Control & Design",
    desc: "Delivering robust electrical and control design engineering for industrial automation, embedded systems and electronic product development.",
    services: [
      { name: "PCB Design & Layout", detail: "Schematic to production-ready PCB files" },
      { name: "Embedded Systems", detail: "Arduino, Raspberry Pi, STM32 based systems" },
      { name: "Control System Design", detail: "PLC programming, HMI and SCADA systems" },
      { name: "Electrical Wiring Drawings", detail: "Panel layouts, single-line diagrams" },
      { name: "IoT Integration", detail: "Sensor networks and cloud data pipelines" },
      { name: "Industrial Automation", detail: "Factory automation and motor control systems" }
    ]
  }
];

const DeptCard = ({ dept }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={dept.id} className="scroll-mt-32">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden group hover:border-[var(--accent)]/30 transition-all duration-500"
    >
      {/* Header */}
      <div className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Icon + Title */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500"
              style={{ background: `${dept.color}15`, color: dept.color, border: `1px solid ${dept.color}30` }}>
              {dept.icon}
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 block mb-1">{dept.subtitle}</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter" style={{ color: 'var(--text-primary)' }}>{dept.title}</h2>
          </div>

          {/* Desc + Toggle */}
          <div className="flex-1">
            <p className="text-base opacity-60 font-medium leading-relaxed mb-6 max-w-2xl">{dept.desc}</p>

            {/* Service Tags Preview */}
            <div className="flex flex-wrap gap-2 mb-4">
              {dept.services.slice(0, 4).map((s, i) => (
                <span key={i} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: `${dept.color}12`, color: dept.color }}>
                  {s.name}
                </span>
              ))}
              {dept.services.length > 4 && (
                <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full opacity-40 border border-[var(--border-color)]">
                  +{dept.services.length - 4} more
                </span>
              )}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all"
              style={{ color: dept.color }}
            >
              {expanded ? "Hide Services" : "View All Services"}
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Services Grid */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 md:px-10 pb-10 border-t border-[var(--border-color)]">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 mt-8 mb-6">Complete Service List</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dept.services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/40 hover:bg-[var(--bg-primary)]/70 hover:scale-[1.03] hover:shadow-xl transition-all cursor-default group/item"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform" style={{ background: dept.color }} />
                      <h4 className="font-black uppercase text-sm md:text-base tracking-widest leading-none">{service.name}</h4>
                    </div>
                    <p className="text-sm opacity-70 font-medium leading-relaxed ml-5">{service.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    </div>
  );
};

const sections = [
  {
    title: "Mechanical & Auto",
    color: "#10B981",
    ids: ["mechanical", "ebike", "manufacturing"]
  },
  {
    title: "Artificial Intelligence",
    color: "#85B53D",
    ids: ["design-ai", "robotics", "inspection"]
  },
  {
    title: "Software & Tech",
    color: "#06B6D4",
    ids: ["software", "ecd"]
  }
];

const DepartmentsPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Specialized Business Units
          </span>
          <h1 className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter mb-8 leading-none">
            Our <span className="gradient-text">Departments</span>
          </h1>
          <p className="text-xl opacity-70 font-medium leading-relaxed max-w-3xl mx-auto">
            Seven core pillars of engineering excellence — mechanical precision, AI intelligence, and full-stack digital delivery, all under one roof.
          </p>
        </motion.div>

        {/* Sectioned Departments */}
        <div className="space-y-24">
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-12">
              <div className="flex items-center gap-6">
                <h3 className="text-[11px] font-[1000] uppercase tracking-[0.5em] whitespace-nowrap" style={{ color: section.color }}>
                  {section.title}
                </h3>
                <div className="h-px w-full opacity-20" style={{ background: section.color }} />
              </div>
              
              <div className="space-y-8">
                {section.ids.map(id => {
                  const dept = departments.find(d => d.id === id);
                  return dept ? <DeptCard key={dept.id} dept={dept} /> : null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage;
