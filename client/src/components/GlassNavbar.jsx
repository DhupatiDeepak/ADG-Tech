import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layout, Mail, Settings, Globe, Menu, X, Sun, Moon, ChevronDown, ChevronRight, Wrench, Factory, ScanLine, BrainCircuit, Bot, Code, CircuitBoard } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/aibunt_logo.png';

const GlassNavbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [openDropdown, setOpenDropdown] = React.useState(null);

  // Close dropdown & mobile menu on every route change
  React.useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={15} /> },
    { name: 'About Us', path: '/about', icon: <Globe size={15} /> },
    { 
      name: 'Departments', 
      path: '/departments', 
      icon: <Layout size={15} />,
      isMegaMenu: true,
      columns: [
        {
          title: 'MECHANICAL & AUTO',
          color: '#85b53d',
          subItems: [
            { name: 'Mechanical Design', id: 'mechanical', icon: <Wrench size={16}/>, desc: 'CAD/CAM, Reverse Engineering, DFM' },
            { name: 'Manufacturing & Fabrication', id: 'manufacturing', icon: <Factory size={16}/>, desc: 'Vendor platform, production & assembly' },
            { name: 'Inspection & Quality with AI', id: 'inspection', icon: <ScanLine size={16}/>, desc: 'AI visual inspection & QA docs' }
          ]
        },
        {
          title: 'ARTIFICIAL INTELLIGENCE',
          color: '#10b981',
          subItems: [
            { name: 'Design Automation with AI', id: 'design-ai', icon: <BrainCircuit size={16}/>, desc: '2D→3D, BOM, Generative Design' },
            { name: 'Robotics & AI', id: 'robotics', icon: <Bot size={16}/>, desc: 'Vision, SLAM, Digital Twin, Robot Arms' }
          ]
        },
        {
          title: 'SOFTWARE & TECH',
          color: '#06b6d4',
          subItems: [
            { name: 'Web & Software Services', id: 'software', icon: <Code size={16}/>, desc: 'Web apps, ERP, AI chatbots, cloud' },
            { name: 'ECD Services', id: 'ecd', icon: <CircuitBoard size={16}/>, desc: 'PCB, PLC, SCADA, Embedded systems' }
          ]
        }
      ]
    },
    { name: 'Projects', path: '/projects', icon: <Settings size={15} /> },
    { name: 'Careers', path: '/careers', icon: <Settings size={15} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav 
        className="glass-nav" 
        style={{ minWidth: 'max-content' }}
        onMouseLeave={() => { setOpenDropdown(null); setHoveredItem(null); }}
      >
        <div className="flex items-center justify-between md:justify-start gap-2 px-3 w-full">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group py-1 mr-4">
            <img 
              src={logo} 
              alt="AI Bunt Logo" 
              className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 logo-blend" 
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem(item.name);
                  if (item.isMegaMenu) setOpenDropdown(item.name);
                }}
              >
                <Link
                  to={item.path}
                  className="relative px-4 py-2.5 flex items-center gap-2 group transition-all duration-300 rounded-full"
                >
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ 
                        background: 'var(--accent-soft)', 
                        border: '1px solid var(--border-strong)',
                        boxShadow: '0 0 15px var(--accent-soft)'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive(item.path) && hoveredItem === item.name && (
                    <motion.div
                      layoutId="hover-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  <span
                    className="transition-all duration-300"
                    style={{ color: isActive(item.path) ? 'var(--accent)' : 'var(--text-secondary)' }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="text-[13px] uppercase tracking-[0.2em] font-black transition-all duration-300 group-hover:tracking-[0.25em]"
                    style={{ color: isActive(item.path) ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                  >
                    {item.name}
                  </span>
                  {item.isMegaMenu && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--text-muted)' }}
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {item.isMegaMenu && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-3 p-6 rounded-[2rem] z-50 overflow-hidden"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-2xl)',
                        backdropFilter: 'blur(30px)',
                        minWidth: '800px'
                      }}
                    >
                      <div className="grid grid-cols-3 gap-6 relative z-10">
                        {item.columns.map((col, idx) => (
                          <div key={idx} className="flex flex-col gap-4">
                            <h4 
                              className="text-[11px] font-[1000] uppercase tracking-[0.3em] pb-3 border-b border-[var(--border-color)]"
                              style={{ color: col.color }}
                            >
                              {col.title}
                            </h4>
                            <div className="flex flex-col gap-2">
                              {col.subItems.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  to={`/departments#${sub.id}`}
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setTimeout(() => {
                                      const el = document.getElementById(sub.id);
                                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }, 100);
                                  }}
                                  className="group/item flex items-center gap-3 py-3 px-3 rounded-2xl transition-all hover:bg-white/5 border border-transparent hover:border-white/10"
                                >
                                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover/item:scale-110"
                                    style={{ background: `${col.color}18`, color: col.color }}>
                                    {sub.icon}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[12px] font-black uppercase tracking-wide text-[var(--text-primary)] group-hover/item:text-[var(--accent)] transition-colors leading-tight">
                                      {sub.name}
                                    </span>
                                    <span className="text-[10px] opacity-40 font-medium leading-tight mt-0.5">{sub.desc}</span>
                                  </div>
                                  <ChevronRight size={12} className="ml-auto opacity-0 group-hover/item:opacity-60 transition-all -translate-x-1 group-hover/item:translate-x-0" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Accent BG Glow */}
                      <div 
                        className="absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] opacity-10 rounded-full"
                        style={{ background: 'var(--accent)' }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="w-px h-4 mx-2" style={{ background: 'var(--border-color)' }} />

            <Link
              to="/contact"
              className="relative px-4 py-2.5 flex items-center gap-2 rounded-full transition-all duration-300 group"
              style={{ color: isActive('/contact') ? 'var(--accent)' : 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-soft)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '';
                e.currentTarget.style.color = isActive('/contact') ? 'var(--accent)' : 'var(--text-secondary)';
              }}
            >
              {isActive('/contact') && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ 
                    background: 'var(--accent-soft)', 
                    border: '1px solid var(--border-strong)',
                    boxShadow: '0 0 15px var(--accent-soft)'
                  }}
                />
              )}
              <Mail size={15} />
              <span className="text-[11px] uppercase tracking-widest font-bold">Contact</span>
            </Link>

            <div className="w-px h-4 mx-2" style={{ background: 'var(--border-color)' }} />

            <motion.button
              onClick={toggleTheme}
              className="theme-toggle"
              whileTap={{ scale: 0.85 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {isDark ? <Sun size={15} /> : <Moon size={15} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile UI */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button onClick={toggleTheme} className="theme-toggle" whileTap={{ scale: 0.85 }}>
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>
            <button
              className="p-2 rounded-full transition-all duration-200"
              style={{ color: 'var(--text-primary)', background: 'var(--accent-soft)' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden rounded-b-2xl"
              style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-card)' }}
            >
              <div className="flex flex-col p-3 gap-1">
                {navItems.map((item) => (
                  <div key={item.path} className="flex flex-col">
                    <Link
                      to={item.path}
                      onClick={() => !item.isMegaMenu && setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl font-bold uppercase tracking-widest text-[11px]"
                      style={{ 
                        color: isActive(item.path) ? 'var(--accent)' : 'var(--text-primary)',
                        background: isActive(item.path) ? 'var(--accent-soft)' : 'transparent'
                      }}
                    >
                      <span className="flex items-center gap-3">{item.icon} {item.name}</span>
                      {item.isMegaMenu && (
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDropdown(openDropdown === item.name ? null : item.name);
                          }}
                        />
                      )}
                    </Link>
                    
                    {/* Mobile Dropdown Sub-Items */}
                    <AnimatePresence>
                      {item.isMegaMenu && openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col pl-8 gap-1 overflow-hidden"
                        >
                          {item.columns.map((col, idx) => (
                            <div key={idx} className="py-2">
                              <div className="text-[9px] font-black opacity-40 uppercase tracking-widest mb-1">{col.title}</div>
                              {col.subItems.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  to={item.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-1.5 text-[11px] font-bold text-[var(--text-secondary)]"
                                >
                                  {sub}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 p-3 rounded-xl text-white font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-teal))' }}
                >
                  <Mail size={15} /> Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default GlassNavbar;
