import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import LiveBackground from './components/LiveBackground';

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <Toaster 
        position="top-center" 
        toastOptions={{ 
          style: { 
            background: '#FFFFFF', 
            color: '#0F172A',
            border: '1px solid rgba(15,23,42,0.05)',
            borderRadius: '1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          } 
        }} 
      />
      <LiveBackground />
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </div>
  );
};

export default App;
