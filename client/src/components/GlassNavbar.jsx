import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layout, Mail, ChevronDown, ChevronRight, Settings, Globe } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const GlassNavbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [openSubDropdown, setOpenSubDropdown] = React.useState(null);

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
      <div className="flex items-center gap-6 px-4">
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

        {/* Nav Items */}
        <div className="flex items-center gap-1">
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
    </nav>
  );
};

export default GlassNavbar;
