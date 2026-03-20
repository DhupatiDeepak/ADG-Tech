import React from 'react';
import { ChevronRight } from 'lucide-react';

const PortfolioPage = () => {
    return (
        <div className="page-wrapper fade-in">
            <header className="page-header" style={{ background: 'linear-gradient(to right, #1e293b, #0f172a)' }}>
                <div className="container page-header-content">
                    <h1 className="page-title">Portfolio</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <ChevronRight size={14} /> <span>Portfolio</span>
                    </div>
                </div>
            </header>

            <div className="container page-content-wrapper">
                <main className="main-article w-full">
                    {/* Contact Section from Footer */}

                </main>
            </div>
        </div>
    );
};

export default PortfolioPage;
