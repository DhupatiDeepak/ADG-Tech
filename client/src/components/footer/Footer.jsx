import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container footer-grid">
                    <div className="footer-col about">
                        <h3>About Us</h3>
                        <p>
                            We are a premier engineering services provider, delivering innovative solutions in CAD, FEA, and product design.
                            Our commitment to excellence drives your success.
                        </p>
                        <a href="#about" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                    </div>

                    <div className="footer-col links">
                        <h3>Our Services</h3>
                        <ul>
                            <li><a href="#product-design"><i className="fas fa-angle-right"></i> Product Design</a></li>
                            <li><a href="#reverse-engineering"><i className="fas fa-angle-right"></i> Reverse Engineering</a></li>
                            <li><a href="#static-analysis"><i className="fas fa-angle-right"></i> Static Analysis</a></li>
                            <li><a href="#thermal-analysis"><i className="fas fa-angle-right"></i> Thermal Analysis</a></li>
                            <li><a href="#joinery"><i className="fas fa-angle-right"></i> Joinery Drawings</a></li>
                        </ul>
                    </div>

                    <div className="footer-col contacts">
                        <h3>Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <a
                                    href="https://www.google.com/maps/place/People+Tech+Group/@17.4483524,78.3726706,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93cfef34a9e1:0x9ebd6ff137acb6f1!8m2!3d17.4483524!4d78.3752455!16s%2Fg%2F1ptvsnb4m?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'inherit', textDecoration: 'none' }}
                                >
                                    <i className="fas fa-map-marker-alt" style={{ marginTop: '5px' }}></i>
                                    <span>People Tech Group,<br /> HITEC City, Hyderabad</span>
                                </a>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>info@gentriks.com</span>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <span>+91 9951593345</span>
                            </li>
                            <li>
                                <i className="fas fa-clock"></i>
                                <span>Mon - Fri: 10:00 AM - 7:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} <strong>Gentriks Technologies</strong>. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
