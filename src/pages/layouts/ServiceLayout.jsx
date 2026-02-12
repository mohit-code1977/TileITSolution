import { ArrowRight, Zap, Shield, Cpu, Code } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import Hero3D from '../../components/Hero3D';
import ImageWithFallback from '../../components/ImageWithFallback';

const ServiceLayout = ({ data }) => {
    return (
        <div className="service-layout">
            <section className="hero" style={{ position: 'relative', overflow: 'hidden', paddingTop: '8rem', paddingBottom: '6rem' }}>
                <Hero3D />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <AnimatedSection animationType="slide-right">
                            <div style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                backgroundColor: 'white',
                                border: '1px solid var(--color-border)',
                                borderRadius: '50px',
                                marginBottom: '1.5rem',
                                fontWeight: '600',
                                color: 'var(--color-text-primary)'
                            }}>
                                {data.title}
                            </div>
                            <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                                Enterprise-Grade <span style={{ color: 'var(--color-accent)' }}>{data.title}</span> Solutions
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                                {data.description || "Accelerate your digital transformation with our proven methodologies and cutting-edge technology stack."}
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#features" className="btn btn-primary">Key Features</a>
                                <a href="/contact" className="btn btn-secondary">Talk to an Expert</a>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animationType="scale-up" delay={0.2}>
                            <div style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                                border: '4px solid white'
                            }}>
                                <ImageWithFallback src={data.image} alt={data.title} style={{ width: '100%', display: 'block' }} />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            {data.features && (
                <section id="features" className="section" style={{ backgroundColor: 'white' }}>
                    <div className="container">
                        <AnimatedSection>
                            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                <h2>Key Capabilities</h2>
                                <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--color-text-secondary)' }}>
                                    Specialized solutions designed for {data.title.toLowerCase()} success.
                                </p>
                            </div>
                        </AnimatedSection>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {data.features.map((feature, i) => (
                                <AnimatedSection key={i} delay={i * 0.1}>
                                    <div style={{
                                        padding: '2.5rem',
                                        borderRadius: '24px',
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        border: '1px solid var(--color-border)',
                                        height: '100%',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '16px',
                                            backgroundColor: 'white',
                                            color: 'var(--color-accent)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '1.5rem',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                                        }}>
                                            {feature.icon && <feature.icon size={28} />}
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Tech Stack Section */}
            {data.techStack && (
                <section className="section" style={{ backgroundColor: '#0f172a', color: 'white' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'center' }}>
                            <AnimatedSection animationType="slide-right">
                                <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>The Ecosystem</h2>
                                <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                    We leverage the best-in-class technologies to ensure your {data.title.toLowerCase()} solution is fast, secure, and future-proof.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {data.techStack.map((tech, i) => (
                                        <div key={i} style={{
                                            padding: '1rem 2rem',
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '12px',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: 'var(--color-accent)'
                                        }}>
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            )}

            {/* Generic Capabilities (if no specific features) */}
            {!data.features && (
                <section id="features" className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                    <div className="container">
                        <AnimatedSection>
                            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                <h2>Technical Capabilities</h2>
                                <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--color-text-secondary)' }}>
                                    Built for scale, security, and performance.
                                </p>
                            </div>
                        </AnimatedSection>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {[
                                { icon: Zap, title: 'High Performance', text: 'Optimized for sub-second load times.' },
                                { icon: Shield, title: 'Bank-Grade Security', text: 'End-to-end encryption and compliance.' },
                                { icon: Cpu, title: 'AI Integration', text: 'Smart automation and predictive analytics.' },
                                { icon: Code, title: 'Clean Architecture', text: 'Maintainable, scalable codebase.' }
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 0.1}>
                                    <div style={{
                                        backgroundColor: 'var(--color-bg-primary)',
                                        padding: '2rem',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid var(--color-border)',
                                        height: '100%'
                                    }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                                            color: 'var(--color-accent)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '1.5rem'
                                        }}>
                                            <item.icon size={24} />
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{item.text}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="section">
                <div className="container">
                    <div style={{ backgroundColor: '#0f172a', borderRadius: '24px', padding: '4rem', color: 'white', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to get started?</h2>
                            <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 2rem' }}>
                                Join hundreds of companies that trust us with their critical infrastructure.
                            </p>
                            <a href="/contact" className="btn btn-primary" style={{ border: 'none' }}>
                                Schedule Consultation <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceLayout;
