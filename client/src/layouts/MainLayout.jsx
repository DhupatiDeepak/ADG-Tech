import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Github } from 'lucide-react';

const MainLayout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-xl italic leading-none">A</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">ADG TECH</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            <NavLink to="/" active={location.pathname === '/'}>Solutions</NavLink>
            <NavLink to="/dashboard" active={location.pathname === '/dashboard'}>Platform</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/company">Company</NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Modern Footer */}
      <footer className="bg-[#0b1222] border-t border-slate-800/50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm leading-none italic">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">ADG TECH</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Next-generation engineering solutions for complex mechanical and digital challenges. Built for innovators, by innovators.
              </p>
            </div>
            {/* Simple footer links */}
            <div>
              <h4 className="text-white font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Security</a></li>
                <li><a href="#" className="hover:text-blue-400">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:row justify-between items-center text-slate-500 text-xs">
            <p>© 2026 ADG Technologies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, children, active }) => (
  <Link 
    to={to} 
    className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-2 
    ${active ? 'text-white' : 'text-slate-400 hover:text-white'}`}
  >
    {children}
    {active && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
    )}
  </Link>
);

export default MainLayout;
