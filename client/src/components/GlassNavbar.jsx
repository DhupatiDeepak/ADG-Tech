import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layout, Mail, ChevronDown, ChevronRight, Settings, Globe, Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const GlassNavbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [openSubDropdown, setOpenSubDropdown] = React.useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={16} /> },
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: <Layout size={16} />,
      dropdown: [
        { 
          name: 'Mechanical', 
          subItems: ['Mechanical Design', 'Manufacturing'] 
        },
        { 
          name: 'Web services', 
          subItems: ['Websites Designing', 'Websites Deployment', 'End to End Websites Services'] 
        }
      ]
    },
  ];

  return (
    <nav className="glass-nav" onMouseLeave={() => { setOpenDropdown(null); setOpenSubDropdown(null); }}>
      <div className="flex items-center justify-between md:justify-start gap-6 px-4 w-full">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group border-r border-black/5 pr-6 py-1">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-black text-xs group-hover:bg-[#0369A1] transition-all duration-300 transform group-hover:rotate-12">
            A
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-black tracking-tighter uppercase text-black">ADG Tech.</span>
            <span className="text-[7px] font-bold tracking-[0.2em] uppercase text-[#0369A1]">Engineering</span>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const hasDropdown = !!item.dropdown;
            
            return (
              <div 
                key={item.path} 
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.name)}
              >
                <Link 
                  to={item.path}
                  className="relative px-5 py-2.5 flex items-center gap-2 group transition-all duration-300 rounded-full"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-black/5 rounded-full -z-10 border border-black/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`transition-colors duration-300 ${isActive ? 'text-black font-bold' : 'text-[var(--text-secondary)] group-hover:text-black font-medium'}`}>
                    {item.icon}
                  </span>
                  <span className={`text-[11px] uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-black font-bold' : 'text-[var(--text-secondary)] group-hover:text-black font-semibold'}`}>
                    {item.name}
                  </span>
                  {hasDropdown && (
                    <ChevronDown size={12} className={`transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''} ${isActive ? 'text-black' : 'text-[var(--text-secondary)]'}`} />
                  )}
                </Link>

                {/* Dropdown Level 1 */}
                <AnimatePresence>
                  {hasDropdown && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl border border-black/5 rounded-2xl shadow-2xl p-2 z-50 overflow-visible"
                    >
                      {item.dropdown.map((dropItem) => (
                        <div 
                          key={dropItem.name}
                          className="relative"
                          onMouseEnter={() => setOpenSubDropdown(dropItem.name)}
                        >
                          <button 
                            className="w-full flex items-center justify-between px-4 py-3 text-[11px] uppercase tracking-wider font-bold text-slate-700 hover:bg-black/5 hover:text-black rounded-xl transition-all group"
                          >
                            <span className="flex items-center gap-2">
                              {dropItem.name === 'Mechanical' ? <Settings size={14} /> : <Globe size={14} />}
                              {dropItem.name}
                            </span>
                            <ChevronRight size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </button>

                          {/* Dropdown Level 2 */}
                          <AnimatePresence>
                            {openSubDropdown === dropItem.name && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="absolute top-0 left-full ml-2 w-56 bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl shadow-2xl p-2"
                              >
                                {dropItem.subItems.map((subItem) => (
                                  <Link
                                    key={subItem}
                                    to="/dashboard"
                                    className="block px-4 py-3 text-[10px] uppercase tracking-wider font-semibold text-slate-600 hover:bg-black/5 hover:text-black rounded-xl transition-all"
                                  >
                                    {subItem}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          
          <div className="w-[1px] h-4 bg-[var(--border-color)] mx-2" />
          
          <button 
            onClick={scrollToContact}
            className="px-5 py-2.5 flex items-center gap-2 text-[var(--text-secondary)] hover:text-black transition-all group rounded-full hover:bg-black/5"
          >
            <Mail size={16} className="group-hover:scale-110 transition-transform" />
            <span className="text-[11px] uppercase tracking-widest font-semibold text-color-inherit">Contact Us</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <div key={item.path} className="flex flex-col">
                  <Link 
                    to={item.path}
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                    className="flex justify-between items-center p-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-black/5"
                  >
                    <span className="flex items-center gap-2">{item.icon} {item.name}</span>
                    {item.dropdown && (
                      <ChevronDown size={14} className={openDropdown === item.name ? "rotate-180 transition-transform" : "transition-transform"} onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === item.name ? null : item.name); }} />
                    )}
                  </Link>
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col pl-4 mt-2 gap-2 overflow-hidden"
                      >
                        {item.dropdown.map((dropItem) => (
                          <div key={dropItem.name}>
                            <div className="uppercase text-[10px] font-bold text-slate-400 p-2 flex items-center gap-2">
                              {dropItem.name === 'Mechanical' ? <Settings size={12} /> : <Globe size={12} />}
                              {dropItem.name}
                            </div>
                            <div className="flex flex-col pl-4 gap-1">
                              {dropItem.subItems.map((subItem) => (
                                <Link
                                  key={subItem}
                                  to="/dashboard"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-xs font-semibold text-slate-600 p-2 hover:bg-black/5 rounded-lg"
                                >
                                  {subItem}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <button 
                onClick={() => { scrollToContact(); setIsMobileMenuOpen(false); }}
                className="mt-4 p-3 rounded-xl bg-[#0369A1] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                <Mail size={16} /> Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default GlassNavbar;
