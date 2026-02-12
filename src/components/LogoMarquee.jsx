import './LogoMarquee.css';

const logos = [
    'TechCorp', 'GlobalSystems', 'InnovateInc', 'FutureSoft', 'DataFlow',
    'CloudNine', 'SecureNet', 'AlphaWave', 'NextGen', 'SmartSolutions'
];

const LogoMarquee = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {logos.map((logo, index) => (
                    <div key={index} className="marquee-item">
                        {logo}
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {logos.map((logo, index) => (
                    <div key={`dup-${index}`} className="marquee-item">
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoMarquee;
