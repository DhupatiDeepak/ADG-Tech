import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layout, Mail, ChevronDown, ChevronRight, Settings, Globe, Menu, X, Sun, Moon, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/aibunt_logo.png';

const GlassNavbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [openSubDropdown, setOpenSubDropdown] = React.useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeModal, setActiveModal] = React.useState(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={15} /> },
    { name: 'About Us', path: '#about', icon: <Globe size={15} /> },
    {
      name: 'Departments',
      path: '#',
      icon: <Layout size={15} />,
      isMegaMenu: true,
      columns: [
        {
          title: 'Mechanical & Auto',
          color: '#10B981', // Emerald
          subItems: ['Mechanical Design', 'Manufacturing & Fabrication', 'Inspection & Quality with AI']
        },
        {
          title: 'Artificial Intelligence',
          color: '#85B53D', // Leaf Green
          subItems: ['Design Automation with AI', 'Robotics & AI']
        },
        {
          title: 'Software & Tech',
          color: '#5A8424', // Darker Green
          subItems: ['Web & Software Services', 'ECD Services']
        }
      ]
    },
    { name: 'Projects', path: '/projects', icon: <Settings size={15} /> },
    { name: 'Clients', path: '#clients', icon: <Globe size={15} /> },
    { name: 'Careers', path: '#careers', icon: <Settings size={15} /> },
  ];

  return (
    <>
      <nav
        className="glass-nav"
        style={{ minWidth: 'max-content' }}
        onMouseLeave={() => { setOpenDropdown(null); setOpenSubDropdown(null); }}
      >
      <div className="flex items-center justify-between md:justify-start gap-2 px-3 w-full">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group py-1 mr-2">
          <img 
            src={logo} 
            alt="AI Bunt Logo" 
            className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const hasDropdown = !!item.dropdown || !!item.columns;

            return (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.name)}
              >
                <Link
                  to={item.path}
                  className="relative px-4 py-2.5 flex items-center gap-2 group transition-all duration-300 rounded-full"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ background: 'var(--accent-soft)', border: '1px solid var(--border-strong)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className="transition-all duration-300"
                    style={{ color: isActive ? 'var(--accent)' : 'var(--text-secondary)' }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-widest font-bold transition-all duration-300 group-hover:tracking-[0.15em]"
                    style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                  >
                    {item.name}
                  </span>
                  {hasDropdown && (
                    <ChevronDown
                      size={11}
                      className={`transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--text-muted)' }}
                    />
                  )}
                </Link>

                {/* Dropdown Level 1 */}
                <AnimatePresence>
                  {hasDropdown && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute top-full left-0 mt-2 rounded-2xl p-2 z-50 ${item.isMegaMenu ? 'w-[750px] flex gap-2' : 'w-56'}`}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-xl)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      {item.isMegaMenu ? (
                        item.columns.map((col, idx) => (
                          <div key={idx} className="flex-1 p-3 rounded-2xl transition-colors duration-300" style={{ background: `${col.color}15` }}>
                            <div className="flex items-center gap-2 mb-4 px-2">
                              <h4 className="text-[11px] font-black uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>{col.title}</h4>
                            </div>
                            <div className="flex flex-col gap-1.5">
                              {col.subItems.map((subItem) => (
                                <Link
                                  key={subItem}
                                  to="#"
                                  onClick={(e) => {
                                    if(subItem === 'Web & Software Services') {
                                      e.preventDefault();
                                      setActiveModal(subItem);
                                      setOpenDropdown(null);
                                    }
                                  }}
                                  className="block px-3 py-2.5 text-[12px] font-bold rounded-xl transition-all duration-200 group relative"
                                  style={{ color: 'var(--text-secondary)' }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-primary)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.boxShadow = 'none';
                                  }}
                                >
                                  {subItem}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        item.dropdown.map((dropItem) => (
                          <div key={dropItem.name} className="relative">
                            <Link
                              to="#"
                              className="w-full flex items-center justify-between px-4 py-3 text-[11px] uppercase tracking-wider font-bold rounded-xl transition-all duration-200 group"
                              style={{ color: 'var(--text-secondary)' }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--accent-soft)';
                                e.currentTarget.style.color = 'var(--text-primary)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '';
                                e.currentTarget.style.color = 'var(--text-secondary)';
                              }}
                            >
                              <span className="flex items-center gap-2">
                                {dropItem.name}
                              </span>
                              <ChevronRight size={11} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          </div>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Divider */}
          <div className="w-px h-4 mx-2" style={{ background: 'var(--border-color)' }} />

          {/* Contact */}
          <button
            onClick={scrollToContact}
            className="px-4 py-2.5 flex items-center gap-2 rounded-full transition-all duration-300 group"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-soft)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <Mail size={15} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-[11px] uppercase tracking-widest font-bold">Contact</span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 mx-2" style={{ background: 'var(--border-color)' }} />

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="theme-toggle"
            whileTap={{ scale: 0.85 }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
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

        {/* Mobile: Theme toggle + Menu */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden rounded-b-2xl"
            style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-card)' }}
          >
            <div className="flex flex-col p-3 gap-1">
              {navItems.map((item) => (
                <div key={item.path} className="flex flex-col">
                  <Link
                    to={item.path}
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                    className="flex justify-between items-center p-3 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all duration-200"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-soft)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = ''}
                  >
                    <span className="flex items-center gap-2">{item.icon}{item.name}</span>
                    {(item.dropdown || item.columns) && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                        onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === item.name ? null : item.name); }}
                        style={{ color: 'var(--text-muted)' }}
                      />
                    )}
                  </Link>
                  <AnimatePresence>
                    {(item.dropdown || item.columns) && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col pl-4 mt-1 gap-1 overflow-hidden"
                      >
                        {item.isMegaMenu ? (
                          item.columns.map((col, idx) => (
                            <div key={idx} className="mb-2">
                              <div className="uppercase text-[10px] font-black tracking-widest p-2" style={{ color: col.color }}>{col.title}</div>
                              <div className="flex flex-col pl-2 gap-1">
                                {col.subItems.map((sub) => (
                                  <Link
                                    key={sub}
                                    to="#"
                                    onClick={(e) => {
                                      if (sub === 'Web & Software Services') {
                                        e.preventDefault();
                                        setActiveModal(sub);
                                        setIsMobileMenuOpen(false);
                                      } else {
                                        setIsMobileMenuOpen(false);
                                      }
                                    }}
                                    className="text-[11px] font-semibold p-2 rounded-lg transition-all duration-200"
                                    style={{ color: 'var(--text-secondary)' }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-soft)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = ''}
                                  >
                                    {sub}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to="#"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-[11px] font-semibold p-2 rounded-lg transition-all duration-200"
                              style={{ color: 'var(--text-secondary)' }}
                              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-soft)'}
                              onMouseLeave={(e) => e.currentTarget.style.background = ''}
                            >
                              {dropItem.name}
                            </Link>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <button
                onClick={() => { scrollToContact(); setIsMobileMenuOpen(false); }}
                className="mt-2 p-3 rounded-xl text-white font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-teal))' }}
              >
                <Mail size={15} /> Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>

      {/* Web & Software Services Modal */}
      <AnimatePresence>
        {activeModal === 'Web & Software Services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop overlay */}
            <div 
              className="absolute inset-0 backdrop-blur-md"
              style={{ background: 'rgba(0, 0, 0, 0.6)' }}
              onClick={() => setActiveModal(null)}
            />
            
            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col md:flex-row"
              style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border-color)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
              }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}
              >
                <X size={20} />
              </button>

              {/* Left Side Image */}
              <div className="w-full md:w-2/5 h-48 md:h-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                  alt="Web & Software Services" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 md:p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight leading-tight">
                    Software & <br/><span style={{ color: 'var(--accent)' }}>Tech.</span>
                  </h3>
                </div>
              </div>

              {/* Right Side Matter */}
              <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-center relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
                <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 w-max relative z-10"
                     style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>
                  Department
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black mb-6 tracking-tight flex items-baseline gap-2 relative z-10" style={{ color: 'var(--text-primary)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.7em', fontFamily: 'monospace' }}>06.</span> 
                  Web & Software Services
                </h2>
                
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 relative z-10" style={{ color: 'var(--text-secondary)' }}>
                  Services Offered
                </h4>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 relative z-10 mt-2">
                  {[
                    "Website Development",
                    "Web Applications",
                    "Cloud Applications",
                    "AI Web Apps",
                    "CAD Automation Software",
                    "ERP for Small Manufacturing Companies",
                    "Mobile Apps",
                    "AI Chatbots and trade bots",
                    "Hosting & Domain Services"
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3 group cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-[2]" style={{ background: 'var(--accent)' }} />
                      <span className="text-[13px] font-semibold transition-colors duration-300 group-hover:text-green-400" style={{ color: 'var(--text-secondary)' }}>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 flex justify-end relative z-10" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <button 
                    onClick={() => {
                      setActiveModal(null);
                      const contactSection = document.getElementById('contact-section');
                      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-2.5 rounded-xl font-bold text-[12px] text-white uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(133,181,61,0.4)]"
                    style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-teal))' }}
                  >
                    Get Started
                  </button>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-green-500/10 rounded-full blur-[80px] z-0 pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlassNavbar;
