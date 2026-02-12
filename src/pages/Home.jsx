import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, BarChart3, Layers, Code, CheckCircle, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSection from '../components/AnimatedSection';
import LogoMarquee from '../components/LogoMarquee';
import Testimonials from '../components/Testimonials';
import ImageWithFallback from '../components/ImageWithFallback';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        // Dynamic Background Switch Logic
        const bgLayers = gsap.utils.toArray('.bg-layer');

        ScrollTrigger.create({
            trigger: ".hero",
            start: "bottom center",
            onEnter: () => {
                gsap.to(bgLayers[0], { opacity: 0, duration: 1 });
                gsap.to(bgLayers[1], { opacity: 1, duration: 1 });
                document.body.classList.add('dark-bg');
            },
            onLeaveBack: () => {
                gsap.to(bgLayers[0], { opacity: 1, duration: 1 });
                gsap.to(bgLayers[1], { opacity: 0, duration: 1 });
                document.body.classList.remove('dark-bg');
            }
        });

        // Parallax for Showcase Images
        gsap.utils.toArray('.showcase-item img').forEach(img => {
            gsap.fromTo(img,
                { y: -30 },
                {
                    y: 30,
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="page-home">
            {/* Multi-layered dynamic background */}
            <div className="dynamic-bg-container">
                <div
                    className="bg-layer"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920")',
                        opacity: 1 // Hero image starts visible
                    }}
                />
                <div
                    className="bg-layer"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920")',
                        opacity: 0 // Content image starts hidden
                    }}
                />
            </div>

            {/* Hero Section */}
            <section className="hero">
                <div className="container" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="hero-content">
                        <AnimatedSection animationType="fade-up">
                            <h1>Building Digital Bridges for Modern Business</h1>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <p className="hero-subtitle" style={{ margin: '0 auto var(--spacing-xl)', color: '#444444' }}>
                                We provide end-to-end digital solutions, from Ecommerce platforms to B2B portals and custom ERP integrations.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <div className="cta-group" style={{ justifyContent: 'center' }}>
                                <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: '#111111', color: 'white', borderRadius: '100px' }}>
                                    Start Your Project <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                                </Link>
                                <Link to="/work" className="btn btn-secondary" style={{ borderRadius: '100px', borderColor: '#111111', color: '#111111' }}>
                                    View Our Work
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Logo Marquee */}
            <LogoMarquee />

            {/* Services Overview */}
            <section className="section">
                <div className="container">
                    <AnimatedSection animationType="blur-in">
                        <div className="section-header" style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Solutions</h2>
                            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>Comprehensive technology services tailored to scale your operations.</p>
                        </div>
                    </AnimatedSection>

                    <div className="services-grid">
                        <AnimatedSection delay={0.1} className="service-card">
                            <ShoppingCart className="service-icon" size={32} />
                            <h3>Ecommerce & Catalog</h3>
                            <p>Robust online stores and digital catalogs designed for conversion and user experience.</p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2} className="service-card">
                            <Layers className="service-icon" size={32} />
                            <h3>B2B Dealer Portals</h3>
                            <p>Streamline wholesale operations with dedicated portals for your dealer network.</p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.3} className="service-card">
                            <Code className="service-icon" size={32} />
                            <h3>ERP & CRM Integration</h3>
                            <p>Seamlessly connect your frontend with backend systems like SAP, Salesforce, and Microsoft Dynamics.</p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.4} className="service-card">
                            <BarChart3 className="service-icon" size={32} />
                            <h3>Digital Growth</h3>
                            <p>Data-driven SEO and PPC strategies to increase visibility and drive qualified leads.</p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.5} className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/solutions" className="btn btn-secondary">Explore All Solutions</Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Horizontal Scroll / Horizontal Feature Section replacement */}
            <section className="section" style={{ background: 'var(--color-bg-secondary)', overflow: 'hidden' }}>
                <div className="container">
                    <AnimatedSection animationType="slide-right">
                        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Speed & Scalability Pattern</h2>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                    Our proprietary architecture ensures your applications load in under 1 second and can handle millions of requests without breaking a sweat.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                        <Zap color="#eab308" /> <span>Next.js & React Server Components</span>
                                    </li>
                                    <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                        <Zap color="#eab308" /> <span>Edge Computing & CDN</span>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <div style={{
                                    height: '400px',
                                    background: 'linear-gradient(45deg, var(--color-bg-primary), #334155)',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{ fontSize: '5rem', fontWeight: '900', color: 'rgba(255,255,255,0.1)' }}>FAST</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>


            {/* Visual Showcase Section */}
            <section className="section showcase-section" style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    <AnimatedSection animationType="zoom-out">
                        <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Architectural Impact</h2>
                            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                                witness the fusion of premium material aesthetics and cutting-edge digital integration in our latest success stories.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="showcase-grid">
                        <AnimatedSection delay={0.1} animationType="fade-up" className="showcase-item large">
                            <ImageWithFallback src="https://images.unsplash.com/photo-1512403735658-221b696c99ec?auto=format&fit=crop&q=80&w=1200" alt="Modern Interior" />
                            <div className="showcase-overlay">
                                <h3>Smart Showrooms</h3>
                                <p>Interactive digital catalogs for luxury flagships.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2} animationType="fade-up" className="showcase-item">
                            <ImageWithFallback src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" alt="Tech Office" />
                            <div className="showcase-overlay">
                                <h3>Enterprise Portals</h3>
                                <p>Seamless wholesale management.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.3} animationType="fade-up" className="showcase-item">
                            <ImageWithFallback src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" alt="Material Design" />
                            <div className="showcase-overlay">
                                <h3>Custom Calculators</h3>
                                <p>Precision engineering tools.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.4} animationType="fade-up" className="showcase-item">
                            <ImageWithFallback src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800" alt="Skyscraper" />
                            <div className="showcase-overlay">
                                <h3>Global Scalability</h3>
                                <p>Infrastructure built for the future.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.5} animationType="fade-up" className="showcase-item">
                            <ImageWithFallback src="https://images.unsplash.com/photo-1558227691-41ea78a1f631?auto=format&fit=crop&q=80&w=800" alt="Digital Warehouse" />
                            <div className="showcase-overlay">
                                <h3>Efficient Logistics</h3>
                                <p>Real-time inventory synchronization.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.6} animationType="fade-up" className="showcase-item">
                            <ImageWithFallback src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800" alt="Construction detail" />
                            <div className="showcase-overlay">
                                <h3>Precision Tiling</h3>
                                <p>Digital asset management for manufacturers.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.7} animationType="fade-up" className="showcase-item large">
                            <ImageWithFallback src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Modern Hall" />
                            <div className="showcase-overlay">
                                <h3>Architectural Flow</h3>
                                <p>Advanced visualization for large-scale interiors.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.8} animationType="fade-up" className="showcase-item">
                            <ImageWithFallback src="https://images.unsplash.com/photo-1518005020480-1097cbb4b0a2?auto=format&fit=crop&q=80&w=800" alt="Detail" />
                            <div className="showcase-overlay">
                                <h3>Material Science</h3>
                                <p>Interactive digital twins of physical samples.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="section features-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header" style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why Partner With Us?</h2>
                        </div>
                    </AnimatedSection>

                    <div className="features-grid">
                        <AnimatedSection delay={0.1} className="feature-item">
                            <h3><CheckCircle size={20} color="var(--color-accent)" /> Strategic Approach</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>We don't just build code; we understand your business goals first.</p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2} className="feature-item">
                            <h3><CheckCircle size={20} color="var(--color-accent)" /> Technical Excellence</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>Built on modern, scalable architectures designed for performance.</p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.3} className="feature-item">
                            <h3><CheckCircle size={20} color="var(--color-accent)" /> Full-Cycle Support</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>From discovery to deployment and ongoing maintenance.</p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Trusted by Industry Leaders</h2>
                    <Testimonials />
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <AnimatedSection scale>
                            <h2>Ready to Transform Your Business?</h2>
                            <p>Let's discuss how we can help you achieve your digital goals.</p>
                            <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
