import React from 'react';
import Navbar from './Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
