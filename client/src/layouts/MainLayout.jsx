import React from 'react';
import { Link } from 'react-router-dom';
import GlassNavbar from '../components/GlassNavbar';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import logo from '../assets/aibunt_logo.png';
import MechanicalGear from '../components/MechanicalGear';

const MainLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Global Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated Blobs */}
        <div className="absolute top-[10%] -left-[5%] w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-[0.15] animate-pulse"
             style={{ background: 'var(--blob-1)' }} />
        <div className="absolute top-[40%] -right-[10%] w-[35vw] h-[35vw] rounded-full blur-[100px] opacity-[0.1] animate-pulse"
             style={{ background: 'var(--blob-2)', animationDelay: '2s' }} />
        <div className="absolute -bottom-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full blur-[110px] opacity-[0.12] animate-pulse"
             style={{ background: 'var(--blob-3)', animationDelay: '4s' }} />

        {/* Dynamic Gears */}
        <div className="absolute -top-12 -left-12 md:-top-20 md:-left-20 opacity-[0.08]">
          <MechanicalGear size={600} speed={0.4} color="var(--accent)" />
        </div>
        
        {/* Gear 2: Mobile Bottom-Right */}
        <div className="absolute bottom-20 -right-20 opacity-[0.1] md:hidden">
          <MechanicalGear size={400} speed={0.2} reverse color="var(--accent)" />
        </div>
        
        {/* Gear 2: Desktop Middle-Right */}
        <div className="absolute top-1/2 -right-40 transform -translate-y-1/2 opacity-[0.1] hidden md:block">
          <MechanicalGear size={800} speed={0.2} reverse color="var(--accent)" />
        </div>

        <div className="absolute -bottom-40 left-1/4 opacity-[0.08] hidden md:block">
          <MechanicalGear size={500} speed={0.6} color="var(--accent)" />
        </div>
      </div>

      <GlassNavbar />

      <main className="flex-grow relative z-10 pt-12">
        {children}
      </main>

      <footer
        className="py-24 mt-20 relative overflow-hidden"
        style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}
      >
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
           <div className="absolute top-10 -left-20">
              <MechanicalGear size={400} speed={0.8} color="var(--accent)" />
           </div>
           <div className="absolute bottom-10 -right-20 opacity-50">
              <MechanicalGear size={300} speed={0.4} reverse color="var(--accent)" />
           </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Column 1: Branding */}
            <div className="flex flex-col items-start gap-6">
              <img 
                src={logo} 
                alt="AI Bunt Logo" 
                className="w-24 h-24 object-contain logo-blend" 
              />
              <div>
                <h2 className="text-xl font-black tracking-tighter leading-none mb-1 uppercase">AI Bunt Technical</h2>
                <h2 className="text-xl font-black tracking-tighter leading-none uppercase opacity-80">Industrial Services</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mt-4 opacity-40">Precision Engineering <br/> Since 2026</p>
              </div>
            </div>

            {/* Column 2: Navigation & Services */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                 <span className="text-[10px] uppercase tracking-widest font-black text-[var(--accent)] mb-2">Company</span>
                 {['About', 'Careers', 'Contact', 'Projects'].map(link => (
                   <Link key={link} to={`/${link.toLowerCase()}`} className="text-sm font-bold opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all transform hover:translate-x-1 uppercase tracking-tighter">
                     {link}
                   </Link>
                 ))}
              </div>
              <div className="flex flex-col gap-4">
                 <span className="text-[10px] uppercase tracking-widest font-black text-[var(--accent)] mb-2">Departments</span>
                 {['Mechanical & Auto', 'Artifical Intelligence', 'Software & Tech', 'Robotics & AI', 'Cloud Services'].map(item => (
                   <Link 
                     key={item} 
                     to="/departments" 
                     className="text-sm font-bold opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all transform hover:translate-x-1 uppercase tracking-tighter"
                   >
                     {item}
                   </Link>
                 ))}
              </div>
            </div>

            {/* Column 3: Contact Details */}
            <div className="flex flex-col gap-10">
               <div className="flex flex-col gap-6">
                 <span className="text-[10px] uppercase tracking-widest font-black text-[var(--accent)] mb-2">Connect Now</span>
                 <div className="flex flex-col gap-6">
                    <a href="mailto:info@aibunt.com" className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] transition-all">
                          <Mail size={18} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Email Address</span>
                          <span className="text-sm font-black tracking-tight">info@aibunt.com</span>
                       </div>
                    </a>
                    <a href="tel:+919849091301" className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] transition-all">
                          <Phone size={18} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Phone Number</span>
                          <span className="text-sm font-black tracking-tight">+91 9849091301</span>
                       </div>
                    </a>
                    <div className="flex items-center gap-4 group cursor-default">
                       <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--accent)]">
                          <MapPin size={18} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Headquarters</span>
                          <span className="text-sm font-black tracking-tight">Hyderabad, IN</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          <div
            className="mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[var(--border-color)]"
          >
            <p className="text-[9px] uppercase tracking-[0.4em] font-black opacity-30">
              © 2026 AI Bunt. Absolute Precision Guaranteed.
            </p>
            <div className="flex gap-10">
              {['Privacy Policy', 'Terms'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[9px] uppercase tracking-[0.3em] font-black opacity-30 hover:opacity-100 hover:text-[var(--accent)] transition-all"
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
