import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
  onViewPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onViewPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('cookiesAccepted');
      if (!accepted) {
        setVisible(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookiesAccepted', 'true');
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <Cookie className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-gray-200">
            We use cookies to enhance your experience and analyze event inquiry traffic in Greater Los Angeles.
            By continuing, you agree to our{' '}
            <button
              onClick={onViewPrivacy}
              className="text-amber-400 underline hover:text-amber-300 font-medium"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-md shadow-xs text-xs sm:text-sm transition cursor-pointer"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};
