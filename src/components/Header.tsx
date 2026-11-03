import React, { useState } from 'react';
import { Menu, X, UtensilsCrossed, PlusCircle } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'calculator', label: 'Cost Calculator' },
    { id: 'taco-catering', label: 'Taco Catering' },
    { id: 'companies', label: 'Catering Directory' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('calculator')}>
            <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold shadow-xs shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-gray-900 block leading-tight">
                Los Angeles Catering Experts
              </span>
              <span className="text-xs text-amber-700 font-medium tracking-wide">
                LA COUNTY CATERING & ESTIMATOR
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-amber-700 font-semibold border-b-2 border-amber-600 rounded-b-none'
                      : 'text-gray-700 hover:text-amber-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={() => handleNavClick('add-business')}
              className="ml-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-900 text-white hover:bg-gray-800 transition shadow-xs cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5 text-amber-400" />
              List Your Business
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentView === item.id
                  ? 'bg-amber-50 text-amber-800 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('add-business')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              List Your Business
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
