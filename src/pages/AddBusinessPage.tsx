import React, { useState } from 'react';
import { PlusCircle, CheckCircle2, ArrowLeft, Building2 } from 'lucide-react';

interface AddBusinessPageProps {
  onNavigate: (view: string) => void;
}

export const AddBusinessPage: React.FC<AddBusinessPageProps> = ({ onNavigate }) => {
  const [businessName, setBusinessName] = useState('');
  const [requestType, setRequestType] = useState('New listing');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [details, setDetails] = useState('');
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

      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-xs">
        <header className="border-b border-gray-100 pb-6 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-2">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            Caterer Partner Portal
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            List Your Catering Business in Los Angeles
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Get in front of people searching for caterers, taco carts, food trucks, and event chefs in Greater Los Angeles.
            Already listed? Use this form to claim or update your existing listing.
          </p>
        </header>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="biz-name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Business Name <span className="text-red-500">*</span>
              </label>
              <input
                id="biz-name"
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Sunset Taco Catering Co."
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label htmlFor="biz-req" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Request Type <span className="text-red-500">*</span>
              </label>
              <select
                id="biz-req"
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              >
                <option value="New listing">New listing</option>
                <option value="Claim my existing listing">Claim my existing listing</option>
                <option value="Update listing details">Update listing details</option>
                <option value="Remove my listing">Remove my listing</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-owner" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-owner"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Carlos Mendez"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="biz-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="biz-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="carlos@sunsettacos.com"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="biz-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="biz-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(213) 555-0144"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="biz-web" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Website URL
                </label>
                <input
                  id="biz-web"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://sunsettacos.com"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label htmlFor="biz-details" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Specialties and Areas Served in Greater LA
              </label>
              <textarea
                id="biz-details"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="e.g. On-site mesquite taco cart, handmade tortillas, serving Downtown LA, Glendale, Pasadena, and Hollywood."
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-gray-900 hover:bg-gray-800 transition shadow-xs text-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              {submitting ? 'Submitting Request...' : 'Send Listing Request'}
            </button>
          </form>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">Request Received!</h3>
            <p className="text-xs text-gray-600 mb-6 max-w-md mx-auto">
              Thank you for submitting <strong>{businessName}</strong>. Our editorial team will verify your website credentials and review your listing within 1-2 business days.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => onNavigate('companies')}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition"
              >
                View Directory Listings
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold transition"
              >
                Submit Another Business
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
