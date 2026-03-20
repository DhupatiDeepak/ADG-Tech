import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import headerBg from '../../assets/09.png';
import valueImg1 from '../../assets/09.png';
import valueImg2 from '../../assets/10.jpg';
import valueImg3 from '../../assets/04.jpg';

const ValueEngineering = () => {
    return (
        <div className="page-wrapper fade-in">
            {/* Page Header */}
            <header className="page-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <h1 className="page-title">Value Engineering</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <ChevronRight size={14} /> <span>Mechanical</span> <ChevronRight size={14} /> <span>Value Engineering</span>
                    </div>
                </div>
            </header>

            <div className="container page-content-wrapper">
                <main className="main-article">
                    <p className="lead-text">
                        At Gentriks Technologies, our Value Engineering services focus on maximizing product performance while minimizing cost—without compromising quality, reliability, or functionality. We systematically analyze designs, materials, and manufacturing processes to identify opportunities for optimization and improvement.
                    </p>

                    <p>
                        Our approach evaluates every component and subsystem to determine its true functional value. By rethinking design choices, material selection, and production methods, we help organizations achieve cost efficiency, improved manufacturability, and enhanced product performance. Value Engineering is applied across the product lifecycle, from early concept stages to existing production models.
                    </p>

                    <p>
                        We combine engineering expertise with practical manufacturing insight to deliver solutions that are technically sound and economically viable. Whether the goal is weight reduction, cost optimization, material substitution, or process simplification, Gentriks Technologies ensures measurable value gains for every project.
                    </p>

                    <h2 className="section-heading">Our Core Value Engineering Capabilities</h2>
                    <ul className="feature-list strategy-list">
                        <li><CheckCircle size={18} className="list-icon" /> Design Optimization & Cost Reduction</li>
                        <li><CheckCircle size={18} className="list-icon" /> Material Analysis & Substitution</li>
                        <li><CheckCircle size={18} className="list-icon" /> Component & Assembly Simplification</li>
                        <li><CheckCircle size={18} className="list-icon" /> Performance vs. Cost Trade-off Analysis</li>
                        <li><CheckCircle size={18} className="list-icon" /> Design for Manufacturing (DFM) & Assembly (DFA)</li>
                        <li><CheckCircle size={18} className="list-icon" /> Lifecycle Cost & Reliability Improvement</li>
                    </ul>

                    {/* Image Gallery */}
                    <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-blue-500/10 group h-80">
                            <img src={valueImg1} alt="Value Engineering Analysis" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-blue-500/10 group h-80">
                            <img src={valueImg2} alt="Cost Reduction Strategy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-blue-500/10 group h-80">
                            <img src={valueImg3} alt="Value Engineering Process" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    </div>

                    <p>
                        At Gentriks Technologies, we work collaboratively with clients to understand functional requirements, budget constraints, and market goals. This partnership ensures that every value-engineered solution delivers maximum functionality, improved efficiency, and faster return on investment, aligned with both technical and business objectives.
                    </p>
                </main>

                <aside className="sidebar">
                    <div className="sidebar-widget services-widget">
                        <h3 className="widget-title">Mechanical Engineering</h3>
                        <ul className="sidebar-links">
                            <li><a href="/mechanical">Mechanical Engineering</a></li>
                            <li><a href="/mechanical/product-design">Product Design & Drafting</a></li>
                            <li><a href="/reverse-engineering">Reverse Engineering</a></li>
                            <li><a href="/value-engineering" className="active">Value Engineering</a></li>
                        </ul>
                    </div>
                </aside>
            </div>

            <section className="section faq-section bg-secondary">
                <div className="container">
                    <h2 className="section-title text-center">FAQs: Value Engineering</h2>
                    <div className="faq-grid">
                        <details className="faq-item">
                            <summary>When should Value Engineering be applied?</summary>
                            <p>It is most effective during the early design stages, but can be applied at any point in the product lifecycle to improve value.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Does cutting costs mean lower quality?</summary>
                            <p>No. Our Value Engineering process specifically targets unnecessary costs that do not contribute to quality, ensuring the product remains high-performing.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ValueEngineering;
