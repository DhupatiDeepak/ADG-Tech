import React from 'react';
import GlassNavbar from '../components/GlassNavbar';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import logo from '../assets/aibunt_logo.png';

const MainLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <GlassNavbar />

      <main className="flex-grow pt-32 px-6">
        {children}
      </main>

      <footer
        className="py-16 mt-16"
        style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-32">
            <div className="max-w-md">
              <span className="text-xs uppercase tracking-[0.2em] font-black mb-6 block" style={{ color: 'var(--accent)' }}>
                Contact Us
              </span>
              
              <div className="flex flex-col items-start gap-4 mb-6">
                <img 
                  src={logo} 
                  alt="AI Bunt Logo" 
                  className="w-24 h-24 object-contain shadow-lg rounded-xl bg-white p-2" 
                />
                <div>
                  <h2 className="text-xl md:text-2xl font-black tracking-tight leading-none" style={{ color: 'var(--text-primary)' }}>
                    AI Bunt Technical Industrial
                  </h2>
                  <h2 className="text-xl md:text-2xl font-black tracking-tight leading-none mt-1" style={{ color: 'var(--text-primary)' }}>
                    Services Pvt Ltd
                  </h2>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3 text-sm font-semibold group cursor-default">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-primary)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300 shadow-[var(--shadow-sm)]" style={{ color: 'var(--accent)' }}>
                    <Globe size={15} />
                  </div>
                  <span style={{ color: 'var(--text-muted)' }}>Website:</span>
                  <a href="https://www.aibunt.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>www.aibunt.com</a>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold group cursor-default">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-primary)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300 shadow-[var(--shadow-sm)]" style={{ color: 'var(--accent)' }}>
                    <Mail size={15} />
                  </div>
                  <span style={{ color: 'var(--text-muted)' }}>Email:</span>
                  <a href="mailto:info@aibunt.com" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>info@aibunt.com</a>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold group cursor-default">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-primary)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300 shadow-[var(--shadow-sm)]" style={{ color: 'var(--accent)' }}>
                    <Phone size={15} />
                  </div>
                  <span style={{ color: 'var(--text-muted)' }}>Phone:</span>
                  <a href="tel:+919951593345" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>+91 9951593345</a>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold group cursor-default">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-primary)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300 shadow-[var(--shadow-sm)]" style={{ color: 'var(--accent)' }}>
                    <MapPin size={15} />
                  </div>
                  <span style={{ color: 'var(--text-muted)' }}>Location:</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Hyderabad</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
                <span className="text-[10px] uppercase tracking-widest font-bold block mb-1" style={{ color: 'var(--text-muted)' }}>Tagline</span>
                <p className="text-sm font-black italic tracking-wide" style={{ color: 'var(--text-primary)' }}>
                  Aibunt – Where Engineering Meets Artificial Intelligence
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full lg:w-auto">
              {[
                { label: 'Social', links: ['Twitter', 'LinkedIn', 'GitHub'] },
                { label: 'Company', links: ['About', 'Careers', 'Contact'] },
                { label: 'Services', links: ['Web Dev', 'Mobile Apps', 'AI/ML'] },
              ].map((col) => (
                <div key={col.label} className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: 'var(--accent)' }}>{col.label}</span>
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-sm font-medium transition-all duration-200 hover:translate-x-1"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
            style={{ borderTop: '1px solid var(--border-color)' }}
          >
            <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>
              © 2026 AI Bunt. All rights reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors duration-200"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
