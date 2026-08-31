import { useState, useEffect } from 'react';
import { GiftBoxProvider } from './context/GiftBoxContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/common/Toast';
import { ProductDetailModal } from './components/common/ProductDetailModal';
import { FloatingWhatsAppButton } from './components/common/FloatingWhatsAppButton';
import { HomePage } from './pages/HomePage';
import { CataloguePage } from './pages/CataloguePage';
import { GiftBoxBuilderPage } from './pages/GiftBoxBuilderPage';
import { GiftBoxReviewPage } from './pages/GiftBoxReviewPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import type { CategorySlug } from './types';


function AppContent() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAdminRoute = currentPath.startsWith('/admin');

  const renderCurrentPage = () => {
    // Exact routes
    if (currentPath === '/' || currentPath === '') {
      return <HomePage navigate={navigate} />;
    }

    if (currentPath === '/build-your-gift-box') {
      return <GiftBoxBuilderPage navigate={navigate} />;
    }

    if (currentPath === '/gift-box') {
      return <GiftBoxReviewPage navigate={navigate} />;
    }

    if (currentPath === '/about') {
      return <AboutPage navigate={navigate} />;
    }

    if (currentPath === '/contact') {
      return <ContactPage navigate={navigate} />;
    }

    if (currentPath === '/admin/login') {
      return <AdminLoginPage navigate={navigate} />;
    }

    if (currentPath === '/admin') {
      return <AdminDashboard navigate={navigate} />;
    }

    // Catalogue routes: /catalogue or /catalogue/:slug
    if (currentPath.startsWith('/catalogue')) {
      const parts = currentPath.split('/').filter(Boolean);
      const categorySlug = (parts[1] as CategorySlug) || 'all';
      return <CataloguePage key={categorySlug} initialCategory={categorySlug} navigate={navigate} />;
    }

    // Fallback default to HomePage
    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2EC] text-[#585656]">
      {/* Global Header on public pages */}
      {!isAdminRoute && <Header currentPath={currentPath} navigate={navigate} />}

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer on public pages */}
      {!isAdminRoute && <Footer navigate={navigate} />}

      {/* Reusable Product Quick View Detail Modal */}
      <ProductDetailModal />

      {/* Floating WhatsApp Chat Button */}
      {!isAdminRoute && <FloatingWhatsAppButton />}

      {/* Global Toast Notifications */}
      <Toast />
    </div>
  );
}

export function App() {
  return (
    <AdminAuthProvider>
      <GiftBoxProvider>
        <AppContent />
      </GiftBoxProvider>
    </AdminAuthProvider>
  );
}

export default App;

