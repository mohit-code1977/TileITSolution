import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import './Layout.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top-grid">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <Link to="/" className="footer-logo">Tiles <span className="it-highlight">IT</span> Solutions</Link>
                        <p className="footer-desc">
                            Premium Digital Solutions for Business Growth.
                            We transform complex challenges into scalable, high-performance digital reality.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-links-col">
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link to="/solutions/ecommerce-catalog">Ecommerce & Catalog</Link></li>
                            <li><Link to="/solutions/b2b-portals">B2B Dealer Portals</Link></li>
                            <li><Link to="/solutions/erp-integration">ERP & CRM Integration</Link></li>
                            <li><Link to="/solutions/digital-growth">Digital Growth Strategies</Link></li>
                            <li><Link to="/solutions/mobile-apps">Mobile App Development</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/approach">Our Approach</Link></li>
                            <li><Link to="/work">Success Stories</Link></li>
                            <li><Link to="/about/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-contact-col">
                        <h4>Contact</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="icon" />
                                <span>123 Innovation Dr, Suite 400<br />Tech City, CA 90210</span>
                            </li>
                            <li>
                                <Phone size={18} className="icon" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li>
                                <Mail size={18} className="icon" />
                                <span>hello@tilesitsolutions.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Tiles <span className="it-highlight">IT</span> Solutions. All rights reserved.</p>
                    <div className="legal-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className="separator">•</span>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
