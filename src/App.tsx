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
