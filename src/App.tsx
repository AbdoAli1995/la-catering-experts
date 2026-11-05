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
import {
  VIEW_PATHS,
  PAGE_META,
  SITE_URL,
  normalizeView,
  pathToView,
  type View,
} from './routes';

function setMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

function getInitialView(): View {
  const { pathname, hash } = window.location;
  // Support old shared links like /#/about or /#about
  if (hash && (pathname === '/' || pathname === '')) {
    const fromHash = normalizeView(hash);
    if (fromHash) return fromHash;
  }
  return pathToView(pathname);
}

export function App() {
  const [currentView, setCurrentView] = useState<View>(getInitialView);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [locationQuery, setLocationQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Browser back / forward, and any code that changes location.hash
  useEffect(() => {
    const onPop = () => setCurrentView(getInitialView());
    const onHash = () => {
      const v = normalizeView(window.location.hash);
      if (v) {
        setCurrentView(v);
        window.history.replaceState({}, '', VIEW_PATHS[v]);
      }
    };
    window.addEventListener('popstate', onPop);
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  // Title, description, robots, canonical and clean URL for every view
  useEffect(() => {
    const meta = PAGE_META[currentView];
    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('robots', currentView === 'not-found' ? 'noindex, follow' : 'index, follow');

    if (currentView !== 'not-found') {
      const path = VIEW_PATHS[currentView];
      setCanonical(SITE_URL + path);
      const hashIsRoute = window.location.hash
        ? normalizeView(window.location.hash) !== null
        : false;
      if (window.location.pathname !== path || hashIsRoute) {
        window.history.replaceState({}, '', path);
      }
    }
  }, [currentView]);

  const navigateTo = (target: string) => {
    const view = normalizeView(target);
    if (!view) {
      console.warn('Unknown view:', target);
      setCurrentView('not-found');
      return;
    }
    setCurrentView(view);
    const path = VIEW_PATHS[view];
    if (window.location.pathname !== path || window.location.hash) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Safety net: stops any leftover href="#" / href="#/page" link from putting # in the URL
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href[0] !== '#') return;
      if (href === '#') {
        e.preventDefault();
        return;
      }
      const target = href.startsWith('#/')
        ? normalizeView(href)
        : document.getElementById(href.slice(1))
        ? null
        : normalizeView(href);
      if (target) {
        e.preventDefault();
        navigateTo(target);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  });

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

        {currentView === 'not-found' && (
          <div className="max-w-3xl mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold mb-3">Page not found</h1>
            <p className="mb-6 text-gray-600">
              The page you are looking for does not exist.
            </p>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('calculator');
              }}
              className="text-amber-700 underline"
            >
              Back to home
            </a>
          </div>
        )}
      </main>

      <Footer onNavigate={navigateTo} />

      <CookieBanner onViewPrivacy={() => navigateTo('privacy')} />
    </div>
  );
}

export default App;
