import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Approach from './pages/Approach';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import DynamicPage from './pages/DynamicPage';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import { setupGlobalObserver } from './hooks/useIntersectionObserver';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // We can now possibly remove this if we move entirely to GSAP ScrollTrigger
    // But keeping it for backward compat with CSS animations for now
    const timeoutId = setTimeout(() => {
      setupGlobalObserver();
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:slug" element={<DynamicPage />} />

              <Route path="/approach" element={<Approach />} />
              <Route path="/approach/:slug" element={<DynamicPage />} />

              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<DynamicPage />} />

              <Route path="/about" element={<About />} />
              <Route path="/about/:slug" element={<DynamicPage />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageWrapper>
        </MainLayout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
