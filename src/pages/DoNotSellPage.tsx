import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface DoNotSellPageProps {
  onNavigate: (view: string) => void;
}

export const DoNotSellPage: React.FC<DoNotSellPageProps> = ({ onNavigate }) => {
  const [request, setRequest] = useState('Do not sell or share my information');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <button
        onClick={() => onNavigate('calculator')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-xs space-y-6">
        <header className="border-b border-gray-100 pb-6 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            California Consumer Privacy Act (CCPA)
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            Do Not Sell or Share My Personal Information
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            California residents can opt out of the sale or sharing of their personal information, and can ask to access, correct, or delete it. Fill in the form and we will respond to your request within 30 days. See our{' '}
            <button onClick={() => onNavigate('privacy')} className="text-amber-700 underline font-medium">
              Privacy Policy
            </button>{' '}
            for full details.
          </p>
        </header>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="ccpa-request" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Privacy Request Type <span className="text-red-500">*</span>
              </label>
              <select
                id="ccpa-request"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              >
                <option value="Do not sell or share my information">Do not sell or share my information</option>
                <option value="Delete my information">Delete my information</option>
                <option value="Access my information">Access my information</option>
                <option value="Correct my information">Correct my information</option>
              </select>
            </div>

            <div>
              <label htmlFor="ccpa-name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="ccpa-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Legal Name"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label htmlFor="ccpa-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Email Address Used on Site <span className="text-red-500">*</span>
              </label>
              <input
                id="ccpa-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label htmlFor="ccpa-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Phone Number Used on Site (Optional)
              </label>
              <input
                id="ccpa-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(310) 555-0199"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-gray-900 hover:bg-gray-800 transition shadow-xs text-sm cursor-pointer mt-4"
            >
              {submitting ? 'Recording CCPA Request...' : 'Send Request'}
            </button>
          </form>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">Request Recorded</h3>
            <p className="text-xs text-gray-600 mb-6 max-w-md mx-auto">
              Your CCPA request ({request}) for <strong>{email}</strong> has been logged. Our privacy compliance team will process it in accordance with California statutory requirements.
            </p>
            <button
              onClick={() => onNavigate('calculator')}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition"
            >
              Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
