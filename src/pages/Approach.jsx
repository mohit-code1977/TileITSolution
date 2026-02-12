import { useRef } from 'react';
import { Search, Compass, Code, Rocket, ArrowRight, Target, Users, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';
import AnimatedSection from '../components/AnimatedSection';
import './Approach.css';

const Approach = () => {
    return (
        <div className="page-approach">
            <section className="approach-hero">
                <Hero3D />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <AnimatedSection>
                        <h1 className="hero-title">Our Methodology</h1>
                        <p className="hero-subtitle">
                            We don't just build software; we engineer digital transformation.
                            Our proven process ensures predictability, quality, and speed.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Methodology Steps */}
            <section className="section">
                <div className="container">
                    <div className="methodology-grid">
                        {[
                            {
                                icon: Target,
                                title: "Discovery",
                                desc: "We analyze your business goals, user needs, and market landscape to define a clear roadmap.",
                                color: "blue"
                            },
                            {
                                icon: Compass,
                                title: "Strategy",
                                desc: "Architecting a scalable technical solution that aligns with your long-term vision.",
                                color: "indigo"
                            },
                            {
                                icon: Code,
                                title: "Development",
                                desc: "Agile sprints with frequent deliverables, ensuring we build exactly what you need.",
                                color: "purple"
                            },
                            {
                                icon: Rocket,
                                title: "Launch & Scale",
                                desc: "Seamless deployment followed by continuous optimization and growth strategies.",
                                color: "green"
                            }
                        ].map((step, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="methodology-card">
                                    <div className={`step-number`}>0{i + 1}</div>
                                    <div className="icon-wrapper">
                                        <step.icon size={32} />
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack / Tools */}
            <section className="section bg-secondary">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center section-title">Technologies We Master</h2>
                        <p className="text-center section-desc">We use best-in-class tools to build future-proof solutions.</p>
                    </AnimatedSection>

                    <div className="tech-grid">
                        {[
                            { name: "Frontend", tools: ["React", "Vue.js", "Next.js", "GSAP"] },
                            { name: "Backend", tools: ["Node.js", "Python", "Go", "Laravel"] },
                            { name: "Cloud", tools: ["AWS", "Azure", "Google Cloud", "Docker"] },
                            { name: "Data", tools: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] }
                        ].map((stack, i) => (
                            <AnimatedSection key={i} delay={0.2 + (i * 0.1)}>
                                <div className="tech-card">
                                    <h4>{stack.name}</h4>
                                    <div className="tool-list">
                                        {stack.tools.map((tool, t) => (
                                            <span key={t} className="tool-badge">{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="approach-cta">
                        <div className="cta-content">
                            <h2>Ready to start your journey?</h2>
                            <p>Let's map out your path to digital success.</p>
                        </div>
                        <Link to="/contact" className="btn btn-primary">
                            Schedule Discovery <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Approach;
