import { useParams, Navigate } from 'react-router-dom';
import { navData } from '../data/navigation';
import ServiceLayout from './layouts/ServiceLayout';
import CaseStudyLayout from './layouts/CaseStudyLayout';
import ProcessLayout from './layouts/ProcessLayout';
import { projects } from '../data/projects';

// Simple default layout if simple fallback is needed
import Hero3D from '../components/Hero3D';
import AnimatedSection from '../components/AnimatedSection';
const DefaultLayout = ({ data }) => (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container">
            <AnimatedSection>
                <h1>{data.title}</h1>
                <p>Content for {data.title} is being updated.</p>
            </AnimatedSection>
        </div>
    </div>
);

const DynamicPage = () => {
    const { slug } = useParams();

    // Flatten the navigation data to find the current route's data
    // In a real app, this would be a hash map or API lookup
    let pageData = null;

    // Search through columns and items
    navData?.forEach(section => {
        section.columns?.forEach(col => {
            col.items?.forEach(item => {
                const itemSlug = item.path.split('/').pop();
                if (itemSlug === slug) {
                    pageData = item;
                }
            });
        });
    });

    // Also search in projects if not found in navData
    if (!pageData) {
        const project = projects.find(p => p.id === slug);
        if (project) {
            pageData = project;
        }
    }

    if (!pageData) {
        // Fallback for "Core" pages if they match a top-level route handled by simple components
        // Or partial matches. For now, if not found, we could redirect or show 404.
        // But since we have specific main routes (Home, Solutions, etc.) handled in App.jsx,
        // this component only handles the deep links.

        // Let's create a fake pageData if checking purely by slug formatting for safety
        if (!pageData && slug) {
            const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            pageData = { title, layout: 'service', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200' };
        } else {
            return <Navigate to="/404" replace />;
        }
    }

    // Layout Resolver
    switch (pageData.layout) {
        case 'case-study':
            return <CaseStudyLayout data={pageData} />;
        case 'process':
            return <ProcessLayout data={pageData} />;
        case 'service':
            return <ServiceLayout data={pageData} />;
        default:
            return <ServiceLayout data={pageData} />; // Default to Service layout
    }
};

export default DynamicPage;
