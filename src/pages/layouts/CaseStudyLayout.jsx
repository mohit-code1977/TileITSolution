import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import ImageWithFallback from '../../components/ImageWithFallback';

const CaseStudyLayout = ({ data }) => {
    const heroRef = useRef();

    useGSAP(() => {
        gsap.from(heroRef.current, { scale: 1.1, opacity: 0, duration: 1.5, ease: 'power2.out' });
    });

    return (
        <div className="case-study-layout">
            {/* Immersive Hero */}
            <div className="case-hero" style={{
                height: '80vh',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'end',
                color: 'white'
            }}>
                <div ref={heroRef} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${data.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1
                }} />

                <div className="container" style={{ paddingBottom: '4rem' }}>
                    <AnimatedSection>
                        <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem', color: '#eab308' }}>
                            {data.client || 'Client Success Story'}
                        </div>
                        <h1 style={{ fontSize: '4rem', fontWeight: '800', maxWidth: '800px', lineHeight: 1.1 }}>
                            {data.title}
                        </h1>
                    </AnimatedSection>
                </div>
            </div>

            {/* Stats Bar */}
            <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '3rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
                        {(data.stats || [['100%', 'Satisfaction'], ['2x', 'Growth'], ['3mo', 'Timeline']]).map(([val, label], i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: '700', color: '#eab308' }}>{val}</div>
                                    <div style={{ color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                    <div>
                        <AnimatedSection>
                            <h2>The Challenge</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                                {data.challenge || "Navigating complex digital landscapes requires more than just code. We faced the challenge of integrating legacy systems with modern frontend requirements while ensuring zero downtime."}
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} style={{ marginTop: '3rem' }}>
                            <h2>Our Solution</h2>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
                                {data.solution || "We implemented a microservices architecture that decoupled the frontend from the monolithic backend, allowing for independent scaling and faster deployment cycles."}
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {(data.outcomes || ['React Frontend', 'Node.js Middleware', 'AWS Infrastructure', 'CI/CD Pipelines']).map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                                        <CheckCircle size={18} color="var(--color-accent)" style={{ marginRight: '10px' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    </div>

                    <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                        <div style={{
                            padding: '2rem',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-lg)',
                            backgroundColor: 'var(--color-bg-secondary)'
                        }}>
                            <h3 style={{ fontSize: '1.2rem' }}>Project Details</h3>
                            <dl style={{ marginTop: '1.5rem' }}>
                                <dt style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Industry</dt>
                                <dd style={{ fontWeight: '600', marginBottom: '1rem' }}>{data.industry || 'Technology / Retail'}</dd>

                                <dt style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Services</dt>
                                <dd style={{ fontWeight: '600', marginBottom: '1rem' }}>{data.servicesProvided || 'Development, Design, Strategy'}</dd>

                                <dt style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Year</dt>
                                <dd style={{ fontWeight: '600', marginBottom: '1rem' }}>{data.year || '2025'}</dd>
                            </dl>
                            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Visit Live Site <ExternalLink size={16} style={{ marginLeft: '8px' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {data.gallery && (
                <section style={{ padding: '0 0 5rem' }}>
                    <div className="container">
                        <AnimatedSection>
                            <div style={{ marginBottom: '3rem' }}>
                                <h2>Visual Impact</h2>
                            </div>
                        </AnimatedSection>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                            gap: '2rem'
                        }}>
                            {data.gallery.map((img, i) => (
                                <AnimatedSection key={i} delay={i * 0.1} scale>
                                    <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
                                        <ImageWithFallback src={img} alt={`Gallery image ${i + 1}`} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} />
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Default Image fallback if no gallery */}
            {!data.gallery && (
                <section style={{ padding: '0 0 5rem' }}>
                    <div className="container">
                        <AnimatedSection scale>
                            <ImageWithFallback
                                src={data.image}
                                alt="Project Showcase"
                                style={{
                                    width: '100%',
                                    height: '500px',
                                    objectFit: 'cover',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
                                }}
                            />
                        </AnimatedSection>
                    </div>
                </section>
            )}
        </div>
    );
};

export default CaseStudyLayout;
