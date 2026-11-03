import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle2, ArrowLeft } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (view: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <button
        onClick={() => onNavigate('calculator')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-xs">
        <header className="border-b border-gray-100 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Contact Los Angeles Catering Experts
          </h1>
          <p className="text-sm text-gray-600">
            Have questions about catering services in Los Angeles or need assistance finding the perfect culinary provider for your event? Get in touch with us.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Direct Details Box */}
          <div className="bg-amber-50/50 border-l-4 border-amber-600 p-6 rounded-r-xl space-y-5">
            <h3 className="text-base font-bold text-gray-900 border-b border-amber-200/60 pb-2">
              Direct Contact Details
            </h3>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase block">Email</span>
                <a
                  href="mailto:contact@losangelescateringexperts.com"
                  className="text-sm font-semibold text-amber-800 hover:underline break-all"
                >
                  contact@losangelescateringexperts.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase block">Service Area</span>
                <p className="text-sm font-medium text-gray-800">
                  Greater Los Angeles County, CA &bull; All 88 cities
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase block">Editorial Hours</span>
                <p className="text-sm font-medium text-gray-800">
                  Monday – Friday: 9:00 AM – 5:00 PM (PST)
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-amber-200/60 text-xs text-gray-500">
              For business claims or adding a new catering service to our directory, you can also use our{' '}
              <button
                onClick={() => onNavigate('add-business')}
                className="text-amber-800 font-semibold underline"
              >
                List Your Business form
              </button>
              .
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jessica Miller"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jessica@example.com"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Message / Inquiry Details
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can our LA team help you plan or locate catering?"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-4 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 transition shadow-xs text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-base font-bold text-gray-900 mb-1">Message Sent!</h4>
                <p className="text-xs text-gray-600 mb-4">
                  Thank you, {name}. Our Los Angeles editorial team has received your message and will respond to <strong>{email}</strong> within 1 business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-4 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
