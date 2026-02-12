import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';
import AnimatedSection from '../components/AnimatedSection';
import ImageWithFallback from '../components/ImageWithFallback';
import './Work.css';

const projects = [
    {
        id: 1,
        title: "Global Tile Distributor Portal",
        category: "B2B",
        description: "A centralized B2B platform managing orders for over 500 dealers across 3 continents.",
        tags: ["B2B Portal", "ERP Integration", "React"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        stats: "300% efficiency gain"
    },
    {
        id: 2,
        title: "Luxury Stone Ecommerce",
        category: "Ecommerce",
        description: "High-performance online store with advanced filtering and 3D product visualization capabilities.",
        tags: ["Ecommerce", "3D Visualization", "UX Design"],
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
        stats: "2x conversion rate"
    },
    {
        id: 3,
        title: "Warehouse Management System",
        category: "Internal Tools",
        description: "Custom internal tool for real-time inventory tracking and automated restocking alerts.",
        tags: ["Inventory System", "Dashboard", "Real-time Data"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        stats: "Zero stockouts"
    },
    {
        id: 4,
        title: "AR Tile Visualizer App",
        category: "Mobile App",
        description: "Mobile application allowing customers to preview tile patterns in their actual rooms.",
        tags: ["Mobile App", "Augmented Reality", "Customer Tool"],
        image: "https://images.unsplash.com/photo-1516321497487-e288fb1971d2?auto=format&fit=crop&w=800&q=80",
        stats: "50k+ downloads"
    },
    {
        id: 5,
        title: "Architectural Catalog Platform",
        category: "B2B",
        description: "Digital catalog system for architects to specify and download technical assets.",
        tags: ["Digital Catalog", "Document Management", "Web App"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
        stats: "10k+ specs generated"
    },
    {
        id: 6,
        title: "Construction CRM Integration",
        category: "Internal Tools",
        description: "Seamless synchronization between field sales tablets and central CRM database.",
        tags: ["CRM", "System Integration", "Offline Sync"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        stats: "100% data accuracy"
    }
];

const Work = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Ecommerce', 'B2B', 'Internal Tools', 'Mobile App'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="page-work">
            <section className="work-hero">
                <Hero3D />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <AnimatedSection>
                        <h1 className="hero-title">Driving <span className="highlight">Digital Impact</span></h1>
                        <p className="hero-subtitle">Explore how we've helped industry leaders transform their businesses through technology.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats Section */}
            <div className="container">
                <div className="work-stats-bar">
                    <AnimatedSection delay={0.1}>
                        <div className="stat-item">
                            <span className="stat-value">$500M+</span>
                            <span className="stat-label">Client Revenue Enabled</span>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="stat-item">
                            <span className="stat-value">150+</span>
                            <span className="stat-label">Projects Delivered</span>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <div className="stat-item">
                            <span className="stat-value">12</span>
                            <span className="stat-label">Global Awards</span>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <div className="container section-spacer">
                {/* Filters */}
                <AnimatedSection>
                    <div className="filter-bar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <AnimatedSection key={project.id} delay={index * 0.1}>
                            <div className="project-card">
                                <div className="project-image-wrapper">
                                    <ImageWithFallback src={project.image} alt={project.title} loading="lazy" />
                                    <div className="project-overlay">
                                        <Link to={`/work/case-study-${project.id}`} className="view-case-btn">
                                            View Case Study <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                    <div className="project-stat-badge">{project.stats}</div>
                                </div>
                                <div className="project-content">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            <section className="cta-section bg-secondary">
                <div className="container">
                    <AnimatedSection>
                        <h2>See what we can do for you</h2>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                            Get a Quote <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Work;
