import React, { useState, useId } from 'react';
import { Calculator, CheckCircle2, DollarSign, Users, Calendar, Sparkles } from 'lucide-react';

interface CostEstimatorProps {
  onNavigate: (view: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onNavigate }) => {
  const eventTypeId = useId();
  const guestsId = useId();
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const dateId = useId();

  const [rate, setRate] = useState<number>(35);
  const [eventTypeLabel, setEventTypeLabel] = useState<string>('Corporate Event ($35/guest)');
  const [guests, setGuests] = useState<number>(50);

  // Add-ons
  const [includeStaff, setIncludeStaff] = useState<boolean>(false);
  const [includeBar, setIncludeBar] = useState<boolean>(false);
  const [includeRentals, setIncludeRentals] = useState<boolean>(false);

  // Quote form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Rates
  const baseFoodTotal = rate * guests;
  const staffEstimate = includeStaff ? Math.max(1, Math.ceil(guests / 35)) * 250 : 0;
  const barEstimate = includeBar ? guests * 12 : 0;
  const rentalsEstimate = includeRentals ? guests * 8 : 0;
  const grandTotal = baseFoodTotal + staffEstimate + barEstimate + rentalsEstimate;

  const handleEventTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseFloat(e.target.value);
    setRate(val);
    const selectedOption = e.target.options[e.target.selectedIndex].text;
    setEventTypeLabel(selectedOption);
  };

  const handleGuestCountChange = (val: number) => {
    setGuests(Math.max(10, val));
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-xl mx-auto">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-5 text-white">
        <div className="flex items-center gap-2 mb-1">
          <Calculator className="w-5 h-5 text-amber-200" />
          <h2 className="text-xl font-bold tracking-tight">LA Catering Cost Estimator</h2>
        </div>
        <p className="text-amber-100 text-xs">
          Instant transparent planning estimate for Greater Los Angeles events
        </p>
      </div>

      <div className="p-6">
        {/* Event Type Select */}
        <div className="mb-5">
          <label htmlFor={eventTypeId} className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Event Type & Service Style
          </label>
          <select
            id={eventTypeId}
            value={rate}
            onChange={handleEventTypeChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
          >
            <option value="35">Corporate Event ($35/guest)</option>
            <option value="65">Wedding Reception ($65/guest)</option>
            <option value="45">Private Party ($45/guest)</option>
            <option value="25">Taco Bar / Casual ($25/guest)</option>
          </select>
        </div>

        {/* Guest Count */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor={guestsId} className="text-xs font-bold uppercase tracking-wider text-gray-700">
              Number of Guests
            </label>
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-sm">
              Min. 10 guests
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input
                id={guestsId}
                type="number"
                min="10"
                max="2000"
                value={guests}
                onChange={(e) => handleGuestCountChange(parseInt(e.target.value, 10) || 10)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-base font-semibold text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden pl-10"
              />
              <Users className="w-4 h-4 text-gray-400 absolute left-3.5 top-4" />
            </div>
            {/* Quick Guest Count Buttons */}
            <div className="flex gap-1.5 flex-wrap">
              {[25, 50, 100, 150].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleGuestCountChange(num)}
                  className={`px-2.5 py-2 text-xs font-semibold rounded-lg border transition ${
                    guests === num
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Add-ons */}
        <div className="mb-6 pt-3 border-t border-gray-100">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
            Optional Event Enhancements (LA Average)
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <label className={`flex items-center p-2 rounded-lg border text-xs cursor-pointer transition ${includeStaff ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
              <input
                type="checkbox"
                checked={includeStaff}
                onChange={(e) => setIncludeStaff(e.target.checked)}
                className="mr-2 accent-amber-600"
              />
              <span>Waitstaff (+${staffEstimate})</span>
            </label>
            <label className={`flex items-center p-2 rounded-lg border text-xs cursor-pointer transition ${includeBar ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
              <input
                type="checkbox"
                checked={includeBar}
                onChange={(e) => setIncludeBar(e.target.checked)}
                className="mr-2 accent-amber-600"
              />
              <span>Bar Setup (+${barEstimate})</span>
            </label>
            <label className={`flex items-center p-2 rounded-lg border text-xs cursor-pointer transition ${includeRentals ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
              <input
                type="checkbox"
                checked={includeRentals}
                onChange={(e) => setIncludeRentals(e.target.checked)}
                className="mr-2 accent-amber-600"
              />
              <span>Rentals (+${rentalsEstimate})</span>
            </label>
          </div>
        </div>

        {/* Price Result Box */}
        <div className="bg-amber-50/70 border border-amber-300 rounded-xl p-5 text-center mb-6 shadow-inner">
          <div className="text-xs uppercase font-bold text-amber-900 tracking-wider">
            Estimated Planning Total:
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-amber-800 my-1 tracking-tight">
            ${grandTotal.toLocaleString('en-US')}
          </div>
          <div className="text-xs text-amber-900 font-medium">
            ≈ ${(grandTotal / guests).toFixed(2)} per guest &bull; {guests} guests
          </div>
          <p className="text-[11px] text-gray-500 mt-2 italic leading-tight">
            This is an estimate for budgeting. Final quotes vary by menu customization, venue kitchen access, and travel distance across LA.
          </p>
        </div>

        {/* Inquiry / Quote Request Form */}
        {!submitted ? (
          <form onSubmit={handleQuoteSubmit} className="space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
              Lock In Your Free Customized Quote
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={nameId} className="block text-xs font-medium text-gray-700 mb-1">
                  Your Full Name
                </label>
                <input
                  id={nameId}
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor={phoneId} className="block text-xs font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id={phoneId}
                  type="tel"
                  required
                  placeholder="(310) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={emailId} className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id={emailId}
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor={dateId} className="block text-xs font-medium text-gray-700 mb-1">
                  Estimated Event Date
                </label>
                <div className="relative">
                  <input
                    id={dateId}
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                  <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-gray-900 hover:bg-gray-800 transition shadow-sm text-sm cursor-pointer flex items-center justify-center gap-2 mt-4"
            >
              <DollarSign className="w-4 h-4 text-amber-400" />
              {isSubmitting ? 'Calculating Best Matches...' : 'Get My Instant Quote & Compare Caterers'}
            </button>

            <p className="text-[10px] text-gray-500 text-center leading-relaxed mt-2">
              By clicking Get My Quote, you agree to our{' '}
              <button
                type="button"
                onClick={() => onNavigate('terms')}
                className="text-amber-700 underline font-medium"
              >
                Terms
              </button>{' '}
              and{' '}
              <button
                type="button"
                onClick={() => onNavigate('privacy')}
                className="text-amber-700 underline font-medium"
              >
                Privacy Policy
              </button>
              . You may opt out anytime at our{' '}
              <button
                type="button"
                onClick={() => onNavigate('do-not-sell')}
                className="text-amber-700 underline font-medium"
              >
                opt-out page
              </button>
              .
            </p>
          </form>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-gray-900 mb-1">
              Quote Request Generated Successfully!
            </h4>
            <p className="text-xs text-gray-600 mb-4 max-w-sm mx-auto">
              We’ve prepared your estimate of <strong>${grandTotal.toLocaleString()}</strong> for{' '}
              <strong>{guests} guests</strong> ({eventTypeLabel}). Top matched Los Angeles providers in your area will contact you with specific menu proposals.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={() => onNavigate('companies')}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition"
              >
                Browse Catering Companies Now
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold transition"
              >
                Recalculate
              </button>
            </div>
          </div>
        )}

        {/* Link to browse companies */}
        <div className="text-center mt-5 pt-4 border-t border-gray-100">
          <button
            onClick={() => onNavigate('companies')}
            className="text-xs text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Browse all Los Angeles catering companies directory &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
