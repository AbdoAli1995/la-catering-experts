import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { HomePage } from './pages/HomePage';
import { TacoCateringPage } from './pages/TacoCateringPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AddBusinessPage } from './pages/AddBusinessPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { DoNotSellPage } from './pages/DoNotSellPage';

const SITE = 'https://losangelescateringexperts.com';

const SEO: Record<string, { path: string; title: string; description: string }> = {
  calculator: {
    path: '/',
    title: 'LA Catering Cost Calculator | Los Angeles Catering Experts',
    description: 'Get an instant catering quote for your Los Angeles event. Weddings, corporate events, private parties and taco bars.',
  },
  'taco-catering': {
    path: '/taco-catering',
    title: 'Taco Catering in Los Angeles | Los Angeles Catering Experts',
    description: 'Compare taco carts, food trucks and taco bar catering services across Los Angeles and Southern California.',
  },
  companies: {
    path: '/companies',
    title: 'LA Catering Companies Directory | Los Angeles Catering Experts',
    description: 'Browse Los Angeles caterers for weddings, corporate events, tacos and film sets. Visit their websites directly.',
  },
  about: {
    path: '/about',
    title: 'About Us | Los Angeles Catering Experts',
    description: 'Learn how Los Angeles Catering Experts helps event hosts compare caterers and estimate catering costs.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | Los Angeles Catering Experts',
    description: 'Contact Los Angeles Catering Experts with questions, feedback or listing requests.',
  },
};

const setMeta = (name: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

export function App() {
  const [currentView, setCurrentView] = useState<string>('calculator');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [locationQuery, setLocationQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Handle URL path mapping
  useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();

      if (path === 'taco-catering' || path === 'taco-catering-los-angeles.html') {
        setCurrentView('taco-catering');
      } else if (path === 'companies' || path === 'companies.html') {
        setCurrentView('companies');
      } else if (path === 'about') {
        setCurrentView('about');
      } else if (path === 'contact') {
        setCurrentView('contact');
      } else if (path === 'add-business' || path === 'add-business.html') {
        setCurrentView('add-business');
      } else if (path === 'privacy' || path === 'privacy-policy') {
        setCurrentView('privacy');
      } else if (path === 'terms' || path === 'terms.html') {
        setCurrentView('terms');
      } else if (path === 'do-not-sell' || path === 'do-not-sell.html') {
        setCurrentView('do-not-sell');
      } else {
        setCurrentView('calculator');
      }
    };

    // Run on initial load
    handlePathChange();

    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  // Update title, description and canonical per page (SEO)
  useEffect(() => {
    const seo = SEO[currentView];
    if (!seo) return;
    document.title = seo.title;
    setMeta('description', seo.description);
    setCanonical(SITE + seo.path);
  }, [currentView]);

  const navigateTo = (view: string) => {
    setCurrentView(view);
    const newPath = view === 'calculator' ? '/' : `/${view}`;
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchTransfer = (query: string, location: string) => {
    setSearchQuery(query);
    setLocationQuery(location);
    setActiveFilter('all');
  };

  const handleCategoryFilterTransfer = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f5f7] text-[#1a1a1a]">
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
      />

      <main className="flex-1">
        {currentView === 'calculator' && (
          <HomePage
            onNavigate={navigateTo}
            onSearchTransfer={handleSearchTransfer}
            onCategoryFilterTransfer={handleCategoryFilterTransfer}
          />
        )}

        {currentView === 'taco-catering' && (
          <TacoCateringPage onNavigate={navigateTo} />
        )}

        {currentView === 'companies' && (
          <CompaniesPage
            onNavigate={navigateTo}
            activeFilter={activeFilter}
            searchQuery={searchQuery}
            locationQuery={locationQuery}
          />
        )}

        {currentView === 'about' && <AboutPage onNavigate={navigateTo} />}

        {currentView === 'contact' && <ContactPage onNavigate={navigateTo} />}

        {currentView === 'add-business' && <AddBusinessPage onNavigate={navigateTo} />}

        {currentView === 'privacy' && <PrivacyPage onNavigate={navigateTo} />}

        {currentView === 'terms' && <TermsPage onNavigate={navigateTo} />}

        {currentView === 'do-not-sell' && <DoNotSellPage onNavigate={navigateTo} />}
      </main>

      <Footer onNavigate={navigateTo} />

      <CookieBanner onViewPrivacy={() => navigateTo('privacy')} />
    </div>
  );
}

export default App;
