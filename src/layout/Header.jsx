import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import MegaMenu from '../components/MegaMenu';
import { navData } from '../data/navigation'; // Assuming this maps to our data structure
import './Layout.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // For Desktop GSAP Menu
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const location = useLocation();
    const hoverTimeoutRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setActiveMobileDropdown(null);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        setActiveMobileDropdown(null);
    };

    // Desktop Hover Handlers
    const handleMouseEnter = (index) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 300); // Increased delay for better stability
    };

    const toggleMobileDropdown = (index, e) => {
        e.preventDefault();
        setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
    };

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
            <div className="header-container" onMouseLeave={handleMouseLeave}>
                <Link to="/" className="logo" onClick={closeMenu}>
                    Tiles <span className="it-highlight">IT</span> Solutions
                </Link>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation */}
                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        {navData?.map((item, index) => {
                            if (!item) return null;
                            return (
                                <li
                                    key={index}
                                    className="nav-item"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                >
                                    <Link
                                        to={item.path || '#'}
                                        className={`nav-link ${item.path ? (isActive(item.path) ? 'active' : '') : ''}`}
                                        onClick={(e) => {
                                            if (item.path && item.path !== '/') e.preventDefault();
                                            else closeMenu();
                                        }}
                                    >
                                        {item.title || 'Untitled'}
                                        <ChevronDown
                                            size={16}
                                            className={`desktop-only transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                                            style={{ marginTop: '2px' }}
                                        />
                                        <div
                                            className="mobile-only"
                                            style={{ marginLeft: 'auto', padding: '0 1rem' }}
                                            onClick={(e) => toggleMobileDropdown(index, e)}
                                        >
                                            <ChevronDown size={16} />
                                        </div>
                                    </Link>

                                    {/* Desktop Mega Menu */}
                                    <div className="desktop-only">
                                        <MegaMenu
                                            items={item.columns}
                                            isOpen={activeDropdown === index}
                                            onClose={closeMenu}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                        />
                                    </div>

                                    {/* Mobile Accordion Menu */}
                                    <div className={`dropdown-menu ${activeMobileDropdown === index ? 'mobile-open' : ''} mobile-only`}>
                                        {item.columns?.flatMap(col => col.items || []).filter(sub => sub && sub.path).map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                to={subItem.path}
                                                className="dropdown-link"
                                                onClick={closeMenu}
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                </li>
                            );
                        })}
                        <li className="mobile-only"><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>

                <Link to="/contact" className="contact-btn desktop-only">
                    Request Consultation
                </Link>
            </div>
        </header>
    );
};

export default Header;
