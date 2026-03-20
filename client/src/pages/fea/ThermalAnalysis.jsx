import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import headerBg from '../../assets/04.jpg';

const data = [
    { time: '0s', temp: 25 },
    { time: '10s', temp: 45 },
    { time: '20s', temp: 120 },
    { time: '30s', temp: 180 },
    { time: '40s', temp: 240 },
    { time: '50s', temp: 230 },
    { time: '60s', temp: 210 },
];

const ThermalAnalysis = () => {
    return (
        <div className="page-wrapper fade-in">
            <header className="page-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <h1 className="page-title">Thermal Analysis</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <ChevronRight size={14} /> <span>FEA Services</span> <ChevronRight size={14} /> <span>Thermal Analysis</span>
                    </div>
                </div>
            </header>

            <div className="container page-content-wrapper">
                <main className="main-article">
                    <p className="lead-text">
                        At Gentriks Technologies, we provide advanced Thermal Analysis services to evaluate heat transfer, temperature distribution, and thermal performance of mechanical components and systems. Our simulations help ensure that designs operate safely and efficiently under real-world thermal conditions.
                    </p>

                    <p>
                        We analyze heat generation, conduction, convection, and radiation effects to predict temperature rise, thermal stresses, and potential failure risks. Thermal analysis is essential for validating designs used in automotive, electronics, industrial machinery, and high-performance applications where temperature control is critical.
                    </p>

                    <p>
                        By integrating thermal simulations early in the design cycle, Gentriks Technologies enables optimized material selection, improved cooling strategies, and enhanced product reliability. Our approach reduces overheating risks, improves performance, and extends product life.
                    </p>

                    <h2 className="section-heading">Our Core Thermal Analysis Capabilities</h2>
                    <ul className="feature-list strategy-list">
                        <li><CheckCircle size={18} className="list-icon" /> Steady-State & Transient Thermal Analysis</li>
                        <li><CheckCircle size={18} className="list-icon" /> Heat Transfer & Temperature Distribution Studies</li>
                        <li><CheckCircle size={18} className="list-icon" /> Thermal Stress & Thermo-Mechanical Coupling</li>
                        <li><CheckCircle size={18} className="list-icon" /> Cooling System & Heat Sink Optimization</li>
                        <li><CheckCircle size={18} className="list-icon" /> Material Thermal Property Evaluation</li>
                        <li><CheckCircle size={18} className="list-icon" /> Compliance with Thermal Performance Standards</li>
                    </ul>

                    <p>
                        At Gentriks Technologies, we collaborate closely with clients to understand operating conditions, heat loads, and performance targets. This ensures that every thermal analysis delivers accurate insights, optimized designs, and reliable thermal performance, aligned with engineering and business objectives.
                    </p>

                </main>

                <aside className="sidebar">
                    <div className="sidebar-widget services-widget">
                        <h3 className="widget-title">FEA Services</h3>
                        <ul className="sidebar-links">
                            <li><a href="/fea-services">General FEA</a></li>
                            <li><a href="/fea-services/static-analysis">Static Analysis</a></li>
                            <li><a href="/fea-services/thermal-analysis" className="active">Thermal Analysis</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ThermalAnalysis;
