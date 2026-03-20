import React from 'react';
import { ChevronRight, CheckCircle, BarChart2, Activity, Thermometer } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import headerBg from '../../assets/03.jpg';

const data = [
    { name: 'Stress Analysis', value: 85, fullMark: 100 },
    { name: 'Thermal', value: 70, fullMark: 100 },
    { name: 'Vibration', value: 60, fullMark: 100 },
    { name: 'Fatigue', value: 90, fullMark: 100 },
];

const StaticAnalysis = () => {
    return (
        <div className="page-wrapper fade-in">
            <header className="page-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <h1 className="page-title">Static Analysis</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <ChevronRight size={14} /> <span>FEA Services</span> <ChevronRight size={14} /> <span>Static Analysis</span>
                    </div>
                </div>
            </header>

            <div className="container page-content-wrapper">
                <main className="main-article">
                    <p className="lead-text">
                        At Gentriks Technologies, we provide precise and reliable Static Analysis services to evaluate the strength and structural integrity of components and assemblies under static loading conditions. Our analysis helps ensure that designs can safely withstand applied forces without excessive deformation or failure.
                    </p>

                    <p>
                        We assess stress distribution, strain, displacement, and safety factors by applying realistic load cases and boundary conditions. Static analysis is a critical step in validating designs during early and mid-stage product development, allowing potential issues to be identified and corrected before manufacturing.
                    </p>

                    <p>
                        Our simulations support informed engineering decisions across industries such as automotive, industrial machinery, and consumer products. By validating designs against expected loads, Gentriks Technologies helps improve durability, optimize material usage, and enhance overall product reliability.
                    </p>

                    <h2 className="section-heading">Our Core Static Analysis Capabilities</h2>
                    <ul className="feature-list strategy-list">
                        <li><CheckCircle size={18} className="list-icon" /> Linear & Non-Linear Static Analysis</li>
                        <li><CheckCircle size={18} className="list-icon" /> Stress, Strain & Displacement Evaluation</li>
                        <li><CheckCircle size={18} className="list-icon" /> Safety Factor & Load Capacity Assessment</li>
                        <li><CheckCircle size={18} className="list-icon" /> Material Behavior & Yield Analysis</li>
                        <li><CheckCircle size={18} className="list-icon" /> Design Validation & Optimization</li>
                        <li><CheckCircle size={18} className="list-icon" /> Compliance with Engineering Standards</li>
                    </ul>

                    <p>
                        At Gentriks Technologies, we work collaboratively with clients to understand load conditions, constraints, and performance requirements. This ensures that every static analysis delivers accurate results, robust designs, and reduced engineering risk, aligned with both technical and business objectives.
                    </p>

                </main>

                <aside className="sidebar">
                    <div className="sidebar-widget services-widget">
                        <h3 className="widget-title">FEA Services</h3>
                        <ul className="sidebar-links">
                            <li><a href="/fea-services">General FEA</a></li>
                            <li><a href="/fea-services/static-analysis" className="active">Static Analysis</a></li>
                            <li><a href="/fea-services/thermal-analysis">Thermal Analysis</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default StaticAnalysis;
