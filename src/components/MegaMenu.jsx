import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';
import './MegaMenu.css';

const MegaMenu = ({ items, isOpen, onClose, onMouseEnter }) => {
    const menuRef = useRef(null);

    useGSAP(() => {
        // ... (GSAP logic keeps the same)
        if (isOpen) {
            gsap.fromTo(menuRef.current,
                { opacity: 0, y: 10, visibility: 'hidden' },
                { opacity: 1, y: 0, visibility: 'visible', duration: 0.3, ease: 'power2.out' }
            );

            gsap.fromTo('.mega-menu-column',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1 }
            );
        } else {
            gsap.to(menuRef.current, {
                opacity: 0,
                y: 10,
                visibility: 'hidden',
                duration: 0.2
            });
        }
    }, { dependencies: [isOpen] });

    if (!isOpen) return null;

    return (
        <div
            className="mega-menu-wrapper"
            ref={menuRef}
            onMouseEnter={onMouseEnter}
        >
            <div className="mega-menu-container">
                {items?.map((column, colIndex) => (
                    <div key={colIndex} className="mega-menu-column">
                        <h4 className="column-heading">{column.heading}</h4>
                        <ul className="column-list">
                            {column.items?.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => `mega-menu-link ${isActive ? 'active' : ''}`}
                                        onClick={onClose}
                                    >
                                        <span className="link-icon">
                                            {item.icon && <item.icon size={18} />}
                                        </span>
                                        <span className="link-text">{item.title}</span>
                                        <ChevronRight size={14} className="link-arrow" />
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
