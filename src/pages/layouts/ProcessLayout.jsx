import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Check } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const ProcessLayout = ({ data }) => {
    const timelineRef = useRef();

    useGSAP(() => {
        const items = gsap.utils.toArray('.process-step');
        items.forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                x: i % 2 === 0 ? -50 : 50,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                }
            });
        });
    }, { scope: timelineRef });

    return (
        <div className="process-layout" style={{ paddingTop: '6rem' }}>
            <div className="container">
                <AnimatedSection style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h6 style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Our Methodology</h6>
                    <h1 style={{ fontSize: '3rem', maxWidth: '800px', margin: '0 auto' }}>A Proven Process for {data.title}</h1>
                </AnimatedSection>

                <div ref={timelineRef} style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Center Line inside the timeline container */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        backgroundColor: 'var(--color-border)',
                        transform: 'translateX(-50%)',
                        zIndex: -1
                    }} />

                    {(data.workflow || [
                        { step: '01', title: 'Discovery & Audit', desc: 'We analyze your current infrastructure and identify bottlenecks.' },
                        { step: '02', title: 'Strategy & Planning', desc: 'Developing a roadmap tailored to your specific business goals.' },
                        { step: '03', title: 'Implementation', desc: 'Agile development cycles with regular feedback loops.' },
                        { step: '04', title: 'Testing & QA', desc: 'Rigorous testing to ensure pixel-perfect, bug-free delivery.' },
                        { step: '05', title: 'Deployment', desc: 'Seamless launch with zero downtime strategies.' }
                    ]).map((item, i) => (
                        <div key={i} className="process-step" style={{
                            display: 'flex',
                            justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                            marginBottom: '4rem',
                            position: 'relative'
                        }}>
                            {/* Center Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                width: '20px',
                                height: '20px',
                                backgroundColor: 'var(--color-accent)',
                                borderRadius: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 1,
                                border: '4px solid white',
                                boxShadow: '0 0 0 1px var(--color-border)'
                            }} />

                            <div style={{
                                width: '45%',
                                textAlign: i % 2 === 0 ? 'right' : 'left',
                                padding: i % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem'
                            }}>
                                <div style={{ fontSize: '4rem', fontWeight: '900', color: 'rgba(0,0,0,0.05)', lineHeight: 0.5, marginBottom: '0.5rem' }}>
                                    {item.step}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>{item.desc || item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="section" style={{ backgroundColor: '#f8fafc', marginTop: '4rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <AnimatedSection scale>
                        <h2>Deliverables You Can Expect</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                            {['Documentation', 'Source Code', 'Training', '1 Year Support'].map((d, i) => (
                                <div key={i} style={{
                                    padding: '1rem 2rem',
                                    backgroundColor: 'white',
                                    borderRadius: '50px',
                                    border: '1px solid var(--color-border)',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <Check size={18} color="var(--color-accent)" /> {d}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default ProcessLayout;
