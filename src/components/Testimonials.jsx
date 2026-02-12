import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CTO, TechCorp",
        text: "Tiles It Solutions transformed our legacy ERP into a modern powerhouse. The transition was seamless and performance improved by 300%."
    },
    {
        name: "Michael Chen",
        role: "Director, GlobalRetail",
        text: "Their strategic approach to our ecommerce platform helped us unlock new revenue streams we didn't know existed. Truly a partner, not just a vendor."
    },
    {
        name: "Emily Davis",
        role: "COO, StartupX",
        text: "The scalability planning provided by the team ensured our launch went without a hitch, handling 50k concurrent users on day one."
    }
];

const Testimonials = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from('.testimonial-card', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="testimonials-grid">
            {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card" style={{
                    padding: '2rem',
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)'
                }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                        {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="#eab308" color="#eab308" />)}
                    </div>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        fontStyle: 'italic',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6'
                    }}>"{t.text}"</p>
                    <div>
                        <div style={{ fontWeight: '700', color: 'var(--color-text-primary)' }}>{t.name}</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-accent)' }}>{t.role}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
