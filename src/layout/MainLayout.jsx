import Header from './Header';
import Footer from './Footer';
import FloatingChat from '../components/FloatingChat';

const MainLayout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
            <FloatingChat />
        </div>
    );
};

export default MainLayout;
