import React from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 py-12 text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-gray-900 text-base mb-2">Los Angeles Catering Experts</h3>
            <p className="text-gray-600 max-w-md text-xs leading-relaxed mb-4">
              Helping Southern California event hosts and coordinators compare vetted caterers, tacos, private chefs,
              and accurate portion budgets across Los Angeles County without surprises.
            </p>
            <p className="text-xs text-gray-400">
              Listings are compiled from public information and verified provider submissions. They are not direct endorsements.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider mb-3">Directory & Tools</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('calculator')} className="text-gray-600 hover:text-amber-700 text-left">
                  Catering Cost Estimator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('taco-catering')} className="text-gray-600 hover:text-amber-700 text-left">
                  Taco Catering in Los Angeles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('companies')} className="text-gray-600 hover:text-amber-700 text-left">
                  LA Catering Companies Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('add-business')} className="text-gray-600 hover:text-amber-700 text-left">
                  List or Claim Your Business
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider mb-3">Company & Privacy</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-600 hover:text-amber-700 text-left">
                  About Us & Evaluation Standards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-600 hover:text-amber-700 text-left">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-gray-600 hover:text-amber-700 text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="text-gray-600 hover:text-amber-700 text-left">
                  Terms of Use
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('do-not-sell')} className="text-gray-600 hover:text-amber-700 text-left font-medium text-amber-800">
                  Do Not Sell My Personal Information (CCPA)
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Los Angeles Catering Experts. All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => onNavigate('privacy')} className="hover:text-gray-800">Privacy</button>
            <span>&middot;</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-gray-800">Terms</button>
            <span>&middot;</span>
            <button onClick={() => onNavigate('do-not-sell')} className="hover:text-gray-800">Do Not Sell</button>
            <span>&middot;</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-gray-800">Support</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
