import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import LiveBackground from './components/LiveBackground';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  const location = useLocation();
  const { isDark } = useTheme();

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '1rem',
            boxShadow: 'var(--shadow-xl)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
          }
        }}
      />
      <ParticleBackground />
      <CursorGlow />
      <LiveBackground />
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </div>
  );
};

export default App;
