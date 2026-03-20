import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import headerBg from '../../assets/05.jpg';
import imgGallery1 from '../../assets/22.png';
import imgGallery2a from '../../assets/23_01.png';
import imgGallery2b from '../../assets/23.1.png';
import imgGallery3 from '../../assets/13.png';
import imgGallery4 from '../../assets/12.png';
import imgGallery5 from '../../assets/14.png';
import imgGallery6 from '../../assets/24.png';
import imgGallery7 from '../../assets/25.png';
import imgGallery8 from '../../assets/26.png';

const ProductDesign = () => {
    return (
        <div className="page-wrapper fade-in">
            {/* Page Header */}
            <header className="page-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <h1 className="page-title">Product Design & Drafting</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <ChevronRight size={14} /> <span>Mechanical</span> <ChevronRight size={14} /> <span>Product Design & Drafting</span>
                    </div>
                </div>
            </header>

            <div className="container page-content-wrapper">
                <main className="main-article">
                    <p className="lead-text">
                        At Gentriks Technologies, we deliver precise and innovative Product Design & Drafting services that transform ideas into detailed, manufacturable designs. Our approach ensures that every product is engineered with accuracy, functionality, and production feasibility from the very beginning.
                        <br /><br />
                        We specialize in creating high-quality 2D and 3D CAD models, detailed engineering drawings, and fully defined product specifications that meet industry standards. From concept sketches to final production drawings, we ensure clarity, accuracy, and consistency across all design stages.
                    </p>

                    <p>
                        Our team combines creative product thinking with strong engineering fundamentals to develop designs that are ergonomic, efficient, and optimized for manufacturing and assembly. Whether it’s consumer products, mechanical components, enclosures, or industrial equipment, we provide design documentation that serves as a reliable foundation for production.
                    </p>

                    <h2 className="section-heading">Our Core Product Design & Drafting Capabilities</h2>
                    <ul className="feature-list strategy-list">
                        <li><CheckCircle size={18} className="list-icon" /> Concept Product Design & Visualization</li>
                        <li><CheckCircle size={18} className="list-icon" /> 2D Drafting & Detailed Engineering Drawings</li>
                        <li><CheckCircle size={18} className="list-icon" /> 3D CAD Modeling & Assembly Design</li>
                        <li><CheckCircle size={18} className="list-icon" /> GD&T (Geometric Dimensioning & Tolerancing)</li>
                        <li><CheckCircle size={18} className="list-icon" /> Material Specification & Bill of Materials (BOM)</li>
                        <li><CheckCircle size={18} className="list-icon" /> Design for Manufacturing (DFM) & Assembly (DFA)</li>
                    </ul>

                    {/* Image Gallery */}
                    {/* Product Design Section */}
                    <div className="mb-8 mt-12 inline-block">
                        <h1 className="text-3xl md:text-6xl font-bold text-white mb-2">Product Drafting</h1>
                        <br></br>
                        <div className="h-1 bg-pink-500 w-full rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                            <img src={imgGallery1} alt="Product Design 1" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <br></br>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                            <img src={imgGallery2a} alt="Product Design 2a" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <br></br>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                            <img src={imgGallery2b} alt="Product Design 2b" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <br></br>
                    </div>

                    {/* Product Drafting Section */}
                    <div className="mb-8 mt-12 inline-block">
                        <br></br>
                        <h1 className="text-3xl md:text-6xl font-bold text-white mb-2">Product Design</h1>
                        <br></br>
                        <div className="h-1 bg-pink-500 w-full rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                            <img src={imgGallery3} alt="Product Design 3" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <br></br>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                            <img src={imgGallery4} alt="Product Design 4" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <br></br>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                            <img src={imgGallery5} alt="Product Design 5" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <br></br>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                            <img src={imgGallery6} alt="Product Design 6" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <br></br>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                            <img src={imgGallery7} alt="Product Design 7" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <br></br>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                            <img src={imgGallery8} alt="Product Design 8" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    </div>

                    <p>
                        At Gentriks Technologies, we follow a collaborative design process, working closely with clients to understand product intent, functional requirements, and manufacturing constraints. This ensures that every drawing and design not only meets technical standards but also supports cost efficiency, quality, and faster product development cycles.
                    </p>

                </main>

                <aside className="sidebar">
                    <div className="sidebar-widget services-widget">
                        <h3 className="widget-title">Mechanical Engineering</h3>
                        <ul className="sidebar-links">
                            <li><a href="/mechanical">Mechanical Engineering</a></li>
                            <li><a href="/mechanical/product-design" className="active">Product Design & Drafting</a></li>
                            <li><a href="/reverse-engineering">Reverse Engineering</a></li>
                            <li><a href="/value-engineering">Value Engineering</a></li>
                        </ul>
                    </div>
                    {/* Add more widgets or CTA if needed */}
                </aside>
            </div>

            {/* FAQ Section Placeholder - User requested FAQ but didn't provide text, using visible text from screenshots if possible or generic */}
            <section className="section faq-section bg-secondary">
                <div className="container">
                    <h2 className="section-title text-center">FAQs: Product Design and Drafting Services</h2>
                    <div className="faq-grid">
                        <details className="faq-item">
                            <summary>What is Product Design and Drafting, and why is it important?</summary>
                            <p>It converts concepts into precise 2D drawings and 3D CAD models, ensuring design accuracy and smooth manufacturing.</p>
                        </details>
                        <details className="faq-item">
                            <summary>What industries benefit from Product Design and Drafting Services?</summary>
                            <p>Automotive, Aerospace, Manufacturing, Medical Devices, and Consumer Electronics efficiently utilize these services.</p>
                        </details>
                        <details className="faq-item">
                            <summary>What software does Gentriks Technologies use?</summary>
                            <p>We use industry-standard software like SolidWorks, AutoCAD, CATIA, and NX to deliver high-quality designs.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDesign;
