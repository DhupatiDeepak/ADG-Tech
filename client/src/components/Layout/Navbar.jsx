import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Mechanical',
            path: '/mechanical',
            type: 'dropdown',
            items: [
                { name: 'Mechanical Engineering', path: '/mechanical' },
                { name: 'Product Design & Drafting', path: '/mechanical/product-design' },
                { name: 'Reverse Engineering', path: '/reverse-engineering' },
                { name: 'Value Engineering', path: '/value-engineering' }
            ]
        },
        {
            name: 'FEA Services',
            path: '/fea-services',
            type: 'dropdown',
            items: [
                { name: 'FEA Services', path: '/fea-services' },
                { name: 'Static Analysis', path: '/fea-services/static-analysis' },
                { name: 'Thermal Analysis', path: '/fea-services/thermal-analysis' }
            ]
        },
        { name: 'AI Projects', path: '/ai-projects' },
        { name: '3D Scan to CAD', path: '/scan-to-cad' },
        { name: 'Portfolio', path: '/portfolio' },
    ];

    const handleMouseEnter = (name) => {
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img src={logo} alt="GenTricks Technologies" className="h-4 w-auto object-contain" />
                </NavLink>



                {/* Desktop Menu */}
                <div className="nav-menu desktop-only">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="nav-item-wrapper"
                            onMouseEnter={() => item.type === 'dropdown' && handleMouseEnter(item.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavLink
                                to={item.path}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''} ${item.type === 'dropdown' ? 'dropdown-trigger' : ''}`
                                }
                            >
                                {item.name}
                                {item.type === 'dropdown' && <ChevronDown size={14} className="dropdown-icon" />}
                            </NavLink>

                            {/* Dropdown Menu */}
                            {item.type === 'dropdown' && (
                                <div className={`dropdown-menu ${activeDropdown === item.name ? 'show' : ''}`}>
                                    {item.items.map((subItem) => (
                                        <NavLink
                                            key={subItem.name}
                                            to={subItem.path}
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                            className="dropdown-item"
                                        >
                                            {subItem.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="nav-actions desktop-only">
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-toggle-container mobile-only">
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="menu-toggle"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Simplified for now) */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="container mobile-menu-container">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            <NavLink
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `mobile-nav-link ${isActive ? 'active' : ''}`
                                }
                            >
                                {item.name}
                            </NavLink>
                            {/* Mobile submenus could be added here */}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
