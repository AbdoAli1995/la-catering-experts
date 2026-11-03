import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (view: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <button
        onClick={() => onNavigate('calculator')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-xs space-y-6 text-sm text-gray-700 leading-relaxed">
        <header className="border-b border-gray-100 pb-6 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-800 mb-2">
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            Legal Agreement
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
            Terms of Use
          </h1>
          <p className="text-xs text-gray-500">Last updated: October 22, 2026</p>
        </header>

        <p>By using losangelescateringexperts.com you agree to these terms.</p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          What We Are
        </h2>
        <p>
          We provide a catering cost estimator and a directory of Los Angeles catering companies.
          We are not a caterer, and we do not prepare, sell, or deliver food or catering services.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          Estimates Are Not Quotes
        </h2>
        <p>
          Estimates come from planning rates and are for general guidance only. Actual prices depend on the menu, service style, location, date, and the specific company you choose. An estimate is not an offer, a quote, or a contract.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          Directory Listings
        </h2>
        <p>
          Listings are compiled from public information and are not endorsements or recommendations. We do not guarantee that any information is complete or current. Any agreement is strictly between you and the catering company, so check their details, licensing, and reviews yourself.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          Using the Site
        </h2>
        <p>
          Do not misuse the site, submit false information, send spam, or attempt to disrupt or scrape it.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          Disclaimers and Liability
        </h2>
        <p>
          The site is provided "as is" without warranties. To the fullest extent allowed by law, we are not liable for any loss arising from your use of the site or from dealings with catering companies.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          Governing Law
        </h2>
        <p>
          These terms are governed by California law. We may update them, and continued use means you accept the changes. See our{' '}
          <button onClick={() => onNavigate('privacy')} className="text-amber-700 underline font-medium">
            Privacy Policy
          </button>{' '}
          for how we handle information.
        </p>
      </div>
    </div>
  );
};
