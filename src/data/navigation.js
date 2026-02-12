import {
    ShoppingCart, Layers, Code, BarChart3, Users, FileText,
    Smartphone, Database, Shield, Globe, Cpu, Zap, Target, Phone,
    CheckCircle, Eye, Smile, Heart, Briefcase, MessageSquare, Handshake
} from 'lucide-react';

export const navData = [
    {
        title: 'Home',
        path: '/',
        columns: [
            {
                heading: 'Welcome',
                items: [
                    { title: 'Home Overview', path: '/', icon: Globe, layout: 'service', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Our Vision', path: '/about/mission', icon: Target, layout: 'service', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200' },
                ]
            },
            {
                heading: 'Quick Access',
                items: [
                    { title: 'Latest Work', path: '/work', icon: ShoppingCart, layout: 'service', image: 'https://images.unsplash.com/photo-1472851294608-41510530490b?auto=format&fit=crop&w=1200' },
                    { title: 'Contact Support', path: '/contact', icon: Phone, layout: 'service', image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200' }
                ]
            }
        ]
    },
    {
        title: 'Solutions',
        path: '/solutions',
        columns: [
            {
                heading: 'Core Architecture',
                items: [
                    {
                        title: 'Ecommerce & Catalog',
                        path: '/solutions/ecommerce-catalog',
                        icon: ShoppingCart,
                        layout: 'service',
                        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200',
                        description: 'High-performance ecommerce platforms built for global scale and conversion optimization.',
                        features: [
                            { title: 'Omnichannel Selling', description: 'Unified inventory and sales across web, mobile, and social marketplaces.', icon: Globe },
                            { title: 'AI Personalization', description: 'Dynamic product recommendations based on user behavior and intent.', icon: Cpu },
                            { title: 'Headless Architecture', description: 'Decoupled frontend for extreme performance and creative freedom.', icon: Layers }
                        ],
                        techStack: ['React', 'Next.js', 'Node.js', 'Shopify Plus', 'CommerceLayer'],
                        theme: 'blue'
                    },
                    {
                        title: 'B2B Dealer Portals',
                        path: '/solutions/b2b-portals',
                        icon: Layers,
                        layout: 'service',
                        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
                        description: 'Streamline your wholesale operations with secure, feature-rich partner portals.',
                        features: [
                            { title: 'Complex Pricing', description: 'Tiered pricing, contract rates, and volume-based discounting engines.', icon: Shield },
                            { title: 'Credit Management', description: 'In-portal credit limits, invoicing, and real-time payment tracking.', icon: FileText },
                            { title: 'Bulk Ordering', description: 'Quick-order interfaces and CSV upload capabilities for large catalogs.', icon: Zap }
                        ],
                        techStack: ['React', 'PostgreSQL', 'AWS Elastic Beanstalk', 'SAP Bridge'],
                        theme: 'slate'
                    },
                    {
                        title: 'ERP Integration',
                        path: '/solutions/erp-integration',
                        icon: Database,
                        layout: 'service',
                        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
                        description: 'Bridge the gap between your web operations and backend systems for seamless data flow.',
                        features: [
                            { title: 'Real-time Sync', description: 'Low-latency synchronization of inventory, orders, and customer data.', icon: Zap },
                            { title: 'Failure Resilience', description: 'Robust retry logic and error queues for guaranteed delivery.', icon: Shield }
                        ],
                        techStack: ['MuleSoft', 'Python', 'AWS Lambda', 'Azure Event Hubs']
                    }
                ]
            },
            {
                heading: 'Digital Innovation',
                items: [
                    {
                        title: 'Digital Growth',
                        path: '/solutions/digital-growth',
                        icon: BarChart3,
                        layout: 'service',
                        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200',
                        description: 'Data-driven strategies to outpace the competition and capture new market share.',
                        features: [
                            { title: 'A/B Testing', description: 'Scientific experimentation to optimize every stage of the user journey.', icon: Target },
                            { title: 'Funnel Optimization', description: 'Removing friction points to increase LTV and decrease CAC.', icon: BarChart3 }
                        ]
                    },
                    {
                        title: 'Product Configurators',
                        path: '/solutions/product-configurators',
                        icon: Cpu,
                        layout: 'service',
                        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
                        description: 'Engaging 3D and 2D visual tools that allow customers to build their perfect product.',
                        features: [
                            { title: '3D Visualizer', description: 'Performant Three.js based visualizers with realistic materials.', icon: Layers },
                            { title: 'Logic Engine', description: 'Rule-based validation for complex product dependencies.', icon: Code }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: 'Our Approach',
        path: '/approach',
        columns: [
            {
                heading: 'Strategy & Design',
                items: [
                    {
                        title: 'Discovery & Strategy',
                        path: '/approach/discovery',
                        icon: Target,
                        layout: 'process',
                        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
                        workflow: [
                            { step: '01', title: 'Stakeholder Interviews', desc: 'Gathering insights from key team members.' },
                            { step: '02', title: 'User Research', desc: 'Understanding your audience and their pain points.' },
                            { step: '03', title: 'Technical Audit', desc: 'Evaluating existing systems and infrastructure.' },
                            { step: '04', title: 'Roadmapping', desc: 'Defining clear milestones and success metrics.' }
                        ]
                    },
                    {
                        title: 'UX/UI Design',
                        path: '/approach/design',
                        icon: Layers,
                        layout: 'process',
                        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
                        workflow: [
                            { step: '01', title: 'Wireframing', desc: 'Low-fidelity layouts to define structure.' },
                            { step: '02', title: 'Visual Design', desc: 'Creating a high-fidelity, branded interface.' },
                            { step: '03', title: 'Prototyping', desc: 'Interactive mockups to test usability.' }
                        ]
                    },
                    { title: 'Agile Development', path: '/approach/agile', icon: Code, layout: 'process', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Scalability Planning', path: '/approach/scalability', icon: BarChart3, layout: 'process', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200' }
                ]
            },
            {
                heading: 'Engineering',
                items: [
                    { title: 'Performance Optimization', path: '/approach/performance', icon: Zap, layout: 'process', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Security & Compliance', path: '/approach/security', icon: Shield, layout: 'process', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Cloud Architecture', path: '/approach/cloud', icon: Globe, layout: 'process', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'QA & Testing', path: '/approach/testing', icon: CheckCircle, layout: 'process', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200' }
                ]
            },
            {
                heading: 'Growth',
                items: [
                    { title: 'Data Analytics', path: '/approach/analytics', icon: BarChart3, layout: 'process', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Post-Launch Support', path: '/approach/support', icon: Users, layout: 'process', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200' }
                ]
            }
        ]
    },
    {
        title: 'Work',
        path: '/work',
        columns: [
            {
                heading: 'Case Studies',
                items: [
                    {
                        title: 'Ecommerce Redesign',
                        path: '/work/ecommerce-case',
                        icon: ShoppingCart,
                        layout: 'case-study',
                        image: 'https://images.unsplash.com/photo-1472851294608-41510530490b?auto=format&fit=crop&q=80&w=1200',
                        client: 'FashionNova Inc',
                        industry: 'Fashion & Apparel',
                        servicesProvided: 'UI/UX Redesign, Next.js Development, AWS Migration',
                        year: '2024',
                        stats: [['230%', 'Sales Growth'], ['1.2s', 'Load Time'], ['45%', 'Conversion']],
                        challenge: 'The client faced massive bounce rates due to slow mobile performance and a confusing checkout flow during seasonal peaks.',
                        solution: 'We rebuilt the storefront using Next.js for SSR and implemented a one-click checkout system integrated with Stripe and PayPal.',
                        outcomes: ['Mobile conversion increased by 65%', 'Server costs reduced by 30%', 'Zero downtime during Black Friday peak'],
                        gallery: [
                            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
                            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200'
                        ]
                    },
                    { title: 'B2B Portal Launch', path: '/work/b2b-case', icon: Layers, layout: 'case-study', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Fintech Mobile App', path: '/work/mobile-case', icon: Smartphone, layout: 'case-study', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'SaaS Platform', path: '/work/saas-case', icon: Globe, layout: 'case-study', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200' },
                ]
            },
            {
                heading: 'More Success Stories',
                items: [
                    { title: 'CRM Implementation', path: '/work/crm-case', icon: Users, layout: 'case-study', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Analytics Dashboard', path: '/work/analytics-case', icon: BarChart3, layout: 'case-study', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Workflow Automation', path: '/work/automation-case', icon: Zap, layout: 'case-study', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'AI Content Tool', path: '/work/ai-case', icon: Cpu, layout: 'case-study', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200' },
                ]
            }
        ]
    },
    {
        title: 'About',
        path: '/about',
        columns: [
            {
                heading: 'Company',
                items: [
                    {
                        title: 'Company Overview',
                        path: '/about/overview',
                        icon: Globe,
                        layout: 'service',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
                        description: 'We are a team of passionate engineers and designers dedicated to building digital bridges for modern businesses.',
                        features: [
                            { title: 'Global Presence', description: 'Offices in London, New York, and Dubai.', icon: Globe },
                            { title: 'Technical Excellence', description: 'Over 150+ successful projects delivered.', icon: Code }
                        ]
                    },
                    { title: 'Leadership', path: '/about/leadership', icon: Users, layout: 'service', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Our Mission', path: '/about/mission', icon: Target, layout: 'service', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200' },
                    { title: 'Our Team', path: '/about/team', icon: Smile, layout: 'service', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200' }
                ]
            },
            {
                heading: 'Culture & Connect',
                items: [
                    {
                        title: 'Culture',
                        path: '/about/culture',
                        icon: Heart,
                        layout: 'service',
                        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
                        description: 'Innovation, Integrity, and Impact. Our culture is built on mutual respect and continuous learning.',
                        features: [
                            { title: 'Continuous Learning', description: 'Weekly workshops and $2000 annual learning stipend.', icon: Zap },
                            { title: 'Remote First', description: 'Flexible work environments with a focus on output.', icon: Globe }
                        ]
                    },
                    { title: 'Careers', path: '/about/careers', icon: Briefcase, layout: 'service', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200', description: 'Join us in shaping the future of enterprise technology.' },
                    { title: 'Contact', path: '/contact', icon: Phone, layout: 'service', image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200' }
                ]
            }
        ]
    }
];
