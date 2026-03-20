import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import headerBg from '../assets/02.jpg';
import feaContentImg from '../assets/15.jpg';

const FEAServices = () => {
    return (
        <div className="page-wrapper fade-in">
            {/* Page Header */}
            <header className="page-header" style={{ backgroundImage: `url(${feaContentImg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <h1 className="page-title">FEA Services</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <ChevronRight size={14} /> <span>FEA Services</span>
                    </div>
                </div>
            </header>

            <div className="container page-content-wrapper">
                <main className="main-article">
                    <p className="lead-text">
                        At Gentriks Technologies, we offer comprehensive Finite Element Analysis (FEA) services to evaluate, validate, and optimize mechanical designs under real-world conditions. Our simulations help identify potential failures early in the design cycle, reducing physical testing costs and improving product reliability.
                    </p>

                    <p>
                        We apply advanced FEA techniques to analyze structural strength, deformation, fatigue, thermal behavior, and stress distribution across components and assemblies. By accurately predicting how products will perform under various loads and operating conditions, we enable informed design decisions and performance improvements.
                    </p>

                    <p>
                        Our FEA-driven approach supports product development across industries, including automotive, industrial equipment, and consumer products. Whether validating a new design or improving an existing one, Gentriks Technologies ensures that every model meets safety, durability, and compliance requirements.
                    </p>

                    <h2 className="section-heading">Our Core FEA Capabilities</h2>
                    <ul className="feature-list strategy-list">
                        <li><CheckCircle size={18} className="list-icon" /> Structural & Stress Analysis</li>
                        <li><CheckCircle size={18} className="list-icon" /> Static, Dynamic & Fatigue Analysis</li>
                        <li><CheckCircle size={18} className="list-icon" /> Thermal & Thermo-Mechanical Analysis</li>
                        <li><CheckCircle size={18} className="list-icon" /> Modal & Vibration Analysis</li>
                        <li><CheckCircle size={18} className="list-icon" /> Design Optimization through Simulation</li>
                        <li><CheckCircle size={18} className="list-icon" /> Correlation with Testing & Standards</li>
                    </ul>

                    <div className="my-12 rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                        <img
                            src={headerBg}
                            alt="FEA Services"
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <p>
                        At Gentriks Technologies, we work closely with clients to understand functional loads, boundary conditions, and performance targets. This collaborative approach ensures that every FEA study delivers accurate insights, optimized designs, and reduced development risk, aligned with engineering and business objectives.
                    </p>
                </main>

                <aside className="sidebar">
                    <div className="sidebar-widget services-widget">
                        <h3 className="widget-title">FEA Services</h3>
                        <ul className="sidebar-links">
                            <li><a href="/fea-services" className="active">FEA Services</a></li>
                            <li><a href="/fea-services/static-analysis">Static Analysis</a></li>
                            <li><a href="/fea-services/thermal-analysis">Thermal Analysis</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default FEAServices;
