import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ children, className = '', delay = 0, animationType = 'fade-up' }) => {
    const compRef = useRef(null);

    useGSAP(() => {
        const element = compRef.current;

        let fromVars = { opacity: 0, y: 50 };
        if (animationType === 'fade-in') fromVars = { opacity: 0, y: 0 };
        if (animationType === 'slide-right') fromVars = { opacity: 0, x: -50 };
        if (animationType === 'slide-left') fromVars = { opacity: 0, x: 50 };
        if (animationType === 'scale-up') fromVars = { opacity: 0, scale: 0.9 };
        if (animationType === 'zoom-out') fromVars = { opacity: 0, scale: 1.1 };
        if (animationType === 'blur-in') fromVars = { opacity: 0, filter: 'blur(10px)', y: 20 };

        gsap.fromTo(element,
            fromVars,
            {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                duration: 0.8,
                delay: delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, { scope: compRef });

    return (
        <div ref={compRef} className={className}>
            {children}
        </div>
    );
};

export default AnimatedSection;
