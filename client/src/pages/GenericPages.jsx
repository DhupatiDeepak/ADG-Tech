import React from "react";
import toast from "react-hot-toast";

/* ================= SCAN TO CAD ================= */

import scanFooterImg from "../assets/19.png";
import scanImg15 from "../assets/15.png";
import scanImg16 from "../assets/16.png";
import scanImg17 from "../assets/17.png";
import scanImg19 from "../assets/19.jpg";
import { ChevronRight } from 'lucide-react';

/* ================= 3D SCAN TO CAD ================= */

export const ScanToCAD = () => {
    return (
        <div className="page-wrapper fade-in">
            {/* Page Header */}
            <header className="page-header" style={{ backgroundImage: `url(${scanFooterImg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <h1 className="page-title">3D Scan to CAD</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <ChevronRight size={14} /> <span>Services</span> <ChevronRight size={14} /> <span>3D Scan to CAD</span>
                    </div>
                </div>
            </header>

            <div className="container page-content-wrapper">
                <main className="main-article w-full">
                    <p className="lead-text">
                        At Gentriks Technologies, we provide accurate and reliable 3D Scan to CAD services, converting physical objects into precise digital models. This process enables faster design validation, modification, and manufacturing by bridging the gap between real-world components and CAD-based engineering workflows.
                    </p>

                    <p>
                        We utilize advanced 3D scanning techniques combined with expert CAD modeling to capture complex geometries, freeform surfaces, and fine details with high accuracy. The scanned data is processed and transformed into clean, editable parametric CAD models that meet industry standards and manufacturing requirements.
                    </p>

                    <p>
                        Our 3D Scan to CAD solutions are ideal for part replication, design improvement, reverse engineering, and quality inspection. Whether dealing with legacy components, complex shapes, or unavailable design data, Gentriks Technologies ensures dependable CAD outputs ready for analysis, redesign, or production.
                    </p>

                    <h2 className="section-heading">Our Core 3D Scan to CAD Capabilities</h2>
                    <ul className="feature-list strategy-list">
                        {[
                            "3D Scanning & Point Cloud Processing",
                            "Mesh Cleanup & Surface Reconstruction",
                            "Parametric CAD Modeling",
                            "Solid & Freeform Surface Conversion",
                            "Dimensional Validation & Tolerance Check",
                            "DFM & DFA Ready CAD Output"
                        ].map((item, index) => (
                            <li key={index}><ChevronRight size={18} className="list-icon" /> {item}</li>
                        ))}
                    </ul>

                    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                            <img src={scanImg15} alt="3D Scan to CAD Process 1" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                            <img src={scanImg16} alt="3D Scan to CAD Process 2" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                            <img src={scanImg17} alt="3D Scan to CAD Process 3" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                       
                    </div>

                    <p>
                        At Gentriks Technologies, we follow a collaborative and detail-oriented approach, working closely with clients to understand accuracy requirements, functional intent, and downstream use cases. This ensures that every Scan-to-CAD solution delivers precision, reliability, and manufacturing readiness, aligned with project goals and timelines.
                    </p>
                </main>
            </div>
        </div>
    );
};