import React from 'react';
import { ChevronRight } from 'lucide-react';
import scanHeaderBg from '../../assets/19.png';

const ReverseEngineering = () => {

    return (
        <div className="page-wrapper fade-in">
            {/* Page Header */}
            <header className="page-header" style={{ backgroundImage: `url(${scanHeaderBg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <h1 className="page-title">Reverse Engineering</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <ChevronRight size={14} /> <span>Mechanical</span> <ChevronRight size={14} /> <span>Reverse Engineering</span>
                    </div>
                </div>
            </header>

            <div className="container page-content-wrapper">
                <main className="main-article">
                    <p className="lead-text">
                        At Gentriks Technologies, we offer advanced Mechanical Reverse Engineering solutions to recreate, analyze, and enhance existing components and systems. Our services enable organizations to convert physical parts or legacy designs into accurate digital models that are ready for redesign, optimization, or manufacturing.
                    </p>

                    <p>
                        We utilize precise measurement techniques and advanced CAD tools to capture exact geometries and dimensions of existing components. Whether the objective is part replication, performance improvement, cost reduction, or design modernization, we ensure that every reconstructed model meets functional and manufacturing requirements.
                    </p>

                    <p>
                        Our reverse engineering process bridges the gap between physical products and digital design. By combining practical inspection with engineering expertise, we deliver accurate 3D CAD models, detailed drawings, and manufacturable data that align with current industry standards. This approach is especially valuable for obsolete parts, undocumented components, and design validation.
                    </p>

                    <h2 className="section-heading">Our Core Reverse Engineering Capabilities</h2>
                    <ul className="feature-list strategy-list">
                        {[
                            "Physical Part Measurement & Data Capture",
                            "3D CAD Reconstruction & Surface Modeling",
                            "2D Drawing Creation & Documentation",
                            "Design Validation & Tolerance Analysis",
                            "Design Optimization & Material Substitution",
                            "DFM & DFA for Re-Manufacturing"
                        ].map((item, index) => (
                            <li key={index}><ChevronRight size={18} className="list-icon" /> {item}</li>
                        ))}
                    </ul>

                    {/* Image Gallery / Features */}


                    <p>
                        At Gentriks Technologies, we work closely with our clients to understand the purpose and constraints of each reverse engineering project. This collaborative approach ensures the final output is not just a copy, but an improved, reliable, and production-ready design tailored to modern manufacturing processes and business goals.
                    </p>

                    <h2 className="section-heading">Why Choose Us</h2>
                    <ul className="feature-list abilities-list two-col-list">
                        {[
                            "Industry Expertise",
                            "Cutting-edge Tools",
                            "Cost Optimization",
                            "Rapid Turnaround",
                            "Quality Assurance",
                            "Scalable Solutions"
                        ].map((item, index) => (
                            <li key={index}><ChevronRight size={18} className="list-icon" /> {item}</li>
                        ))}
                    </ul>
                </main>

                <aside className="sidebar">
                    <div className="sidebar-widget services-widget">
                        <h3 className="widget-title">Mechanical Engineering</h3>
                        <ul className="sidebar-links">
                            <li><a href="/mechanical">Mechanical Engineering</a></li>
                            <li><a href="/mechanical/product-design">Product Design & Drafting</a></li>
                            <li><a href="/reverse-engineering" className="active">Reverse Engineering</a></li>
                            <li><a href="/value-engineering">Value Engineering</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ReverseEngineering;
