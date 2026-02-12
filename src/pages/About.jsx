import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Target, Shield, Coffee, Award, Linkedin, Twitter } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import AnimatedSection from '../components/AnimatedSection';
import ImageWithFallback from '../components/ImageWithFallback';
import './About.css';

const team = [
    {
        name: "Alex Morgan",
        role: "CEO & Founder",
        bio: "Visionary leader with 15+ years in digital transformation and ecommerce strategy.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Sarah Chen",
        role: "Chief Technology Officer",
        bio: "Expert architect specializing in scalable cloud solutions and enterprise integration.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Marcus Johnson",
        role: "Head of Product",
        bio: "Product strategist focused on user-centric design and market-fit solutions.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Elena Rodriguez",
        role: "Design Director",
        bio: "Award-winning designer bridging the gap between aesthetics and functionality.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
];

const values = [
    { icon: Target, title: "Precision", desc: "We believe in pixel-perfect execution and code quality." },
    { icon: Users, title: "Collaboration", desc: "We work as an extension of your internal team." },
    { icon: Shield, title: "Integrity", desc: "Transparent communication and deliverables you can trust." },
    { icon: Heart, title: "Passion", desc: "We genuinely love solving complex technical challenges." }
];

const About = () => {
    return (
        <div className="page-about">
            <section className="about-hero">
                <Hero3D />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <AnimatedSection>
                        <h1 className="hero-title">Architects of the <span className="highlight">Digital Future</span></h1>
                        <p className="hero-subtitle">We are a team of dreamers, doers, and creators dedicated to transforming the tile and surface industry through technology.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Company Story */}
            <section className="section">
                <div className="container">
                    <div className="story-grid">
                        <AnimatedSection animationType="slide-right">
                            <h2>Our Story</h2>
                            <p className="lead-text">
                                Founded in 2020, Tiles IT Solutions began with a simple observation: the tile industry was stuck in the past.
                            </p>
                            <p>
                                Legacy systems, manual processes, and outdated visuals were holding businesses back. We set out to change that using modern web technologies.
                                Today, we are the premier digital partner for manufacturers, distributors, and retailers worldwide.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection animationType="scale-up" delay={0.2}>
                            <div className="story-image">
                                <ImageWithFallback src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaborating" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-secondary">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center section-title">Our Core Values</h2>
                    </AnimatedSection>
                    <div className="values-grid">
                        {values.map((val, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="value-card">
                                    <div className="value-icon">
                                        <val.icon size={28} />
                                    </div>
                                    <h3>{val.title}</h3>
                                    <p>{val.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center section-title">Meet the Leadership</h2>
                        <p className="text-center section-desc">The minds behind our innovation.</p>
                    </AnimatedSection>

                    <div className="leadership-grid">
                        {team.map((member, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="team-member">
                                    <div className="member-image-wrapper">
                                        <ImageWithFallback src={member.image} alt={member.name} loading="lazy" />
                                        <div className="member-social">
                                            <a href="#"><Linkedin size={20} /></a>
                                            <a href="#"><Twitter size={20} /></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h3>{member.name}</h3>
                                        <span className="role">{member.role}</span>
                                        <p>{member.bio}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="section">
                <div className="container">
                    <div className="careers-cta">
                        <div className="careers-content">
                            <h2>Join Our Team</h2>
                            <p>We're always looking for talented individuals to join our mission.</p>
                        </div>
                        <div className="careers-actions">
                            <div className="perk"><Coffee size={16} /> Remote First</div>
                            <div className="perk"><Award size={16} /> Competitive Pay</div>
                            <Link to="/contact" className="btn btn-outline-white">View Openings</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
