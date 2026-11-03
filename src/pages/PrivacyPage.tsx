import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (view: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
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
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            Compliance & Privacy
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500">Effective Date: October 31, 2026</p>
        </header>

        <p>
          At <strong>Los Angeles Catering Experts</strong> (accessible from https://losangelescateringexperts.com),
          one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Los Angeles Catering Experts and how we use it.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          1. Information We Collect
        </h2>
        <p>
          We do not require users to create accounts or submit personal information to browse our site, use our catering calculator, explore event menus, or view catering directory listings. However, like most websites, we automatically collect certain non-personally identifiable information through server logs and analytics tools, such as IP addresses, browser types, Internet Service Providers (ISP), date/time stamps, and referring pages.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          2. Cookies and Web Beacons
        </h2>
        <p>
          Los Angeles Catering Experts uses 'cookies' to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          3. Third-Party Advertising & Cookie Management
        </h2>
        <p>
          Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Los Angeles Catering Experts. They automatically receive your IP address when this occurs.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          4. CCPA Privacy Rights (Do Not Sell My Personal Information)
        </h2>
        <p>
          Under the CCPA, California consumers have the right to request that a business disclose the categories and specific pieces of personal data collected, or request that a business delete or not sell their personal data. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please visit our{' '}
          <button
            onClick={() => onNavigate('do-not-sell')}
            className="text-amber-700 underline font-semibold"
          >
            Do Not Sell My Personal Information page
          </button>
          .
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          5. GDPR Data Protection Rights
        </h2>
        <p>
          Every user is entitled to access, rectification, erasure, restrict processing, and data portability rights in accordance with global data regulations.
        </p>

        <h2 className="text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
          6. Contact Us
        </h2>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at{' '}
          <a href="mailto:contact@losangelescateringexperts.com" className="text-amber-700 underline font-medium">
            contact@losangelescateringexperts.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};
