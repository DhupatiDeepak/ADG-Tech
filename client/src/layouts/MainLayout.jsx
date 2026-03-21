import React from 'react';
import GlassNavbar from '../components/GlassNavbar';
import { motion } from 'framer-motion';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen selection:bg-[#2563EB] selection:text-white">
      <GlassNavbar />
      
      <main className="flex-grow pt-32 px-6">
        {children}
      </main>

      <footer className="py-20 mt-20 border-t border-slate-200/60 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-32">
            <div className="max-w-sm">
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter text-[#0F172A]">ADG TECH.</h2>
              <p className="text-[#64748B] text-base md:text-lg leading-relaxed font-medium">
                Next-generation engineering solutions for complex mechanical and digital challenges. Built for innovators, by innovators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full lg:w-auto">
              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-widest text-[#0369A1] font-bold mb-2">Social</span>
                <a href="#" className="text-[#64748B] hover:text-[#0369A1] font-medium transition-colors">Twitter</a>
                <a href="#" className="text-[#64748B] hover:text-[#0369A1] font-medium transition-colors">LinkedIn</a>
                <a href="#" className="text-[#64748B] hover:text-[#0369A1] font-medium transition-colors">GitHub</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-widest text-[#0369A1] font-bold mb-2">Company</span>
                <a href="#" className="text-[#64748B] hover:text-[#0369A1] font-medium transition-colors">About</a>
                <a href="#" className="text-[#64748B] hover:text-[#0369A1] font-medium transition-colors">Careers</a>
                <a href="#" className="text-[#64748B] hover:text-[#0369A1] font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="mt-32 pt-12 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">© 2026 ADG Technologies. All rights reserved.</p>
            <div className="flex gap-8 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-[#0369A1] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#0369A1] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
