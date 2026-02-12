import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCart,
    Briefcase,
    Package,
    Database,
    Calculator,
    Box,
    TrendingUp,
    LifeBuoy,
    ArrowRight,
    Zap,
    Cpu,
    CheckCircle
} from 'lucide-react';
import Hero3D from '../components/Hero3D';
import AnimatedSection from '../components/AnimatedSection';
import './Solutions.css';

const solutionsData = [
    {
        category: "Core Commerce",
        items: [
            {
                icon: ShoppingCart,
                title: "Ecommerce Platforms",
                description: "High-performance storefronts built for speed and conversion.",
                features: ["Headless Architecture", "PWA Ready", "Global Payments"]
            },
            {
                icon: Briefcase,
                title: "B2B Dealer Portals",
                description: "Self-service portals that empower your wholesale network.",
                features: ["Custom Pricing", "Bulk Ordering", "Account Management"]
            }
        ]
    },
    {
        category: "Operations & Data",
        items: [
            {
                icon: Package,
                title: "Inventory Sync",
                description: "Real-time connection between physical stock and digital sales.",
                features: ["Multi-warehouse", "Low Stock Alerts", "Automated Routing"]
            },
            {
                icon: Database,
                title: "ERP Integration",
                description: "Seamless data flow between your website and backend systems.",
                features: ["SAP / NetSuite", "Microsoft Dynamics", "Salesforce"]
            }
        ]
    },
    {
        category: "Customer Experience",
        items: [
            {
                icon: Box,
                title: "3D Visualizers",
                description: "Immersive product interaction with AR and 3D web viewers.",
                features: ["Room Scenes", "Product Configurator", "AR Try-on"]
            },
            {
                icon: Calculator,
                title: "Smart Calculators",
                description: "Utility tools that help customers purchase with confidence.",
                features: ["Area Estimation", "Material Usage", "Cost Projection"]
            }
        ]
    }
];

const Solutions = () => {
    return (
        <div className="page-solutions">
            <section className="solutions-hero">
                <Hero3D />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <AnimatedSection>
                        <span className="badge">Our Expertise</span>
                        <h1 className="hero-title">Digital Solutions for the <span className="highlight">Modern Enterprise</span></h1>
                        <p className="hero-subtitle">End-to-end capabilities designed to transform your business operations and customer experience.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary">Start a Project <ArrowRight size={18} /></Link>
                            <Link to="/work" className="btn btn-secondary">View Case Studies</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <div className="container section-spacer">
                {solutionsData.map((section, idx) => (
                    <div key={idx} className="solution-category">
                        <AnimatedSection>
                            <h2 className="category-title">{section.category}</h2>
                            <div className="solutions-grid">
                                {section.items.map((item, i) => (
                                    <div key={i} className="solution-card-detail">
                                        <div className="card-icon-bg">
                                            <item.icon size={32} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <ul className="feature-list">
                                            {item.features.map((f, k) => (
                                                <li key={k}><CheckCircle size={14} className="check-icon" /> {f}</li>
                                            ))}
                                        </ul>
                                        <Link to={`/solutions/${item.title.toLowerCase().replace(/ /g, '-')}`} className="learn-more">
                                            Explore <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                ))}
            </div>

            <section className="cta-section">
                <div className="container">
                    <AnimatedSection scale>
                        <div className="cta-box">
                            <h2>Submit Your Challenge</h2>
                            <p>Have a unique problem? We love building custom solutions.</p>
                            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
