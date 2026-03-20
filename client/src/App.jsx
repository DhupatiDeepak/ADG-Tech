import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500/30">
      <Toaster 
        position="top-center" 
        toastOptions={{ 
          style: { 
            background: '#1e293b', 
            color: '#f1f5f9',
            border: '1px solid #334155'
          } 
        }} 
      />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default App;
