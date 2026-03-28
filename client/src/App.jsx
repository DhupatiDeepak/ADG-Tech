import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import CursorGlow from './components/CursorGlow';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import DepartmentsPage from './pages/DepartmentsPage';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const location = useLocation();
  const { isDark } = useTheme();

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <ScrollProgress />
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
      <CursorGlow />
      <ScrollToTop />
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </div>
  );
};

export default App;
