import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import headerBg from '../../assets/01.avif';

const Mechanical = () => {
    return (
        <div className="page-wrapper fade-in">
            {/* Page Header */}
            <header className="page-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <h1 className="page-title">Mechanical Engineering</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <ChevronRight size={14} /> <span>Mechanical</span>
                    </div>
                </div>
            </header>

            <div className="container page-content-wrapper">
                <main className="main-article">
                    <h2 className="section-heading">Mechanical Engineering – Automotive Design & Development</h2>
                    <p className="lead-text">
                        At Gentriks Technologies, we provide end-to-end Mechanical Engineering and Automotive Design solutions, transforming ideas into fully engineered, production-ready products. Our expertise spans the complete development lifecycle of two-wheelers such as bikes and scooters, covering everything from initial concept and dimensional planning to final manufacturable designs.
                    </p>

                    <p>
                        Our engineering team applies advanced design methodologies and industry-standard practices to create high-performance, reliable, and cost-optimized automotive components and systems. Starting from scratch, we define precise measurements, select suitable materials, develop robust structures, and ensure seamless integration of all mechanical subsystems. Every design is validated to meet performance, safety, and manufacturability requirements.
                    </p>

                    <p>
                        We bridge theoretical engineering principles with real-world application to deliver solutions that are durable, efficient, and production-ready. Whether it is chassis design, powertrain integration, body components, or subsystem assemblies, Gentriks Technologies delivers engineering excellence at every stage of development.
                    </p>

                    <h2 className="section-heading">Our Core Mechanical & Automotive Capabilities</h2>
                    <ul className="feature-list strategy-list">
                        <li><CheckCircle size={18} className="list-icon" /> Conceptual Design & Product Development</li>
                        <li><CheckCircle size={18} className="list-icon" /> Complete Bike & Scooter Design (Concept to Final Model)</li>
                        <li><CheckCircle size={18} className="list-icon" /> Structural, Thermal & Performance Analysis</li>
                        <li><CheckCircle size={18} className="list-icon" /> Mechanism & System Design</li>
                        <li><CheckCircle size={18} className="list-icon" /> DFM (Design for Manufacturing)</li>
                        <li><CheckCircle size={18} className="list-icon" /> DFA (Design for Assembly)</li>
                    </ul>

                    <p>
                        At Gentriks Technologies, collaboration is at the core of our process. We work closely with our clients to understand functional requirements, design constraints, and business objectives. This ensures the final automotive solution not only performs flawlessly but is also optimized for manufacturing efficiency, cost control, and faster time-to-market.
                    </p>

                    <h2 className="section-heading">Why Choose Us</h2>
                    <ul className="feature-list abilities-list two-col-list">
                        <li><CheckCircle size={18} className="list-icon" /> Industry Expertise</li>
                        <li><CheckCircle size={18} className="list-icon" /> Cutting-edge Tools</li>
                        <li><CheckCircle size={18} className="list-icon" /> Cost Optimization</li>
                        <li><CheckCircle size={18} className="list-icon" /> Rapid Turnaround</li>
                        <li><CheckCircle size={18} className="list-icon" /> Quality Assurance</li>
                        <li><CheckCircle size={18} className="list-icon" /> Scalable Solutions</li>
                    </ul>
                </main>

                <aside className="sidebar">
                    <div className="sidebar-widget services-widget">
                        <h3 className="widget-title">Mechanical Engineering</h3>
                        <ul className="sidebar-links">
                            <li><a href="/mechanical" className="active">Mechanical Engineering</a></li>
                            <li><a href="/mechanical/product-design">Product Design & Drafting</a></li>
                            <li><a href="/reverse-engineering">Reverse Engineering</a></li>
                            <li><a href="/value-engineering">Value Engineering</a></li>
                        </ul>
                    </div>
                </aside>
            </div>

            <section className="section faq-section bg-secondary">
                <div className="container">
                    <h2 className="section-title text-center">FAQs: Mechanical Engineering</h2>
                    <div className="faq-grid">
                        <details className="faq-item">
                            <summary>What industries do you serve?</summary>
                            <p>We serve a diverse range of industries including Automotive, Aerospace, Industrial Machinery, and Consumer Goods.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Can you handle complex assembly designs?</summary>
                            <p>Yes, our team is proficient in managing large and complex assemblies, ensuring proper fit, tolerance, and functionality.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mechanical;
