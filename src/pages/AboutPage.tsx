import React from 'react';
import { ShieldCheck, DollarSign, Award, Star, Calculator, ArrowLeft, Mail } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (view: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <button
        onClick={() => onNavigate('calculator')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Calculator & Directory
      </button>

      {/* Main card */}
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-xs space-y-8">
        <header className="border-b border-gray-100 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            About Los Angeles Catering Experts
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Empowering event hosts with transparent data, verified reviews, and precision catering tools across Southern California.
          </p>
        </header>

        {/* Our story box */}
        <div className="bg-amber-50/60 border-l-4 border-amber-600 p-6 rounded-r-xl space-y-3">
          <h2 className="text-xl font-bold text-gray-900">Our Story</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            We are everyday party hosts, corporate coordinators, and event planners who know firsthand how exhausting it can be to organize an event in Los Angeles. Whenever we needed catering, we found ourselves spending countless hours visiting dozens of websites, cross-checking updated pricing, reading reviews, and struggling to compare options—whether planning an intimate family gathering or a large celebration.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            That hassle is exactly why we created <strong>Los Angeles Catering Experts</strong>. We built a comprehensive directory and resource hub that brings top-rated catering services across LA into one place, saving you time and eliminating guesswork.
          </p>
        </div>

        {/* Evaluation & Benchmark criteria */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            How We Evaluate & Benchmark LA Caterers
          </h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            To ensure our directory delivers unmatched utility, we maintain rigorous evaluation criteria for every listed provider and resource on our site:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200/80">
              <div className="flex items-center gap-2 mb-2 text-amber-700">
                <DollarSign className="w-5 h-5" />
                <h3 className="font-bold text-gray-900 text-sm">1. Price Transparency</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                We track current per-person pricing models across corporate, wedding, and casual catering sectors in Greater LA so you can plan with realistic budgets.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200/80">
              <div className="flex items-center gap-2 mb-2 text-amber-700">
                <Award className="w-5 h-5" />
                <h3 className="font-bold text-gray-900 text-sm">2. Food Quality & Standards</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                We evaluate caterers based on dietary flexibility (vegan, gluten-free, halal, kosher), freshness standards, and professional service setups.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200/80">
              <div className="flex items-center gap-2 mb-2 text-amber-700">
                <Star className="w-5 h-5" />
                <h3 className="font-bold text-gray-900 text-sm">3. Verified Client Feedback</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                We aggregate and cross-reference verified client ratings from multiple public platforms to give you an objective quality score.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200/80">
              <div className="flex items-center gap-2 mb-2 text-amber-700">
                <Calculator className="w-5 h-5" />
                <h3 className="font-bold text-gray-900 text-sm">4. Precision Calculation Tools</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our proprietary portion and cost calculators help hosts accurately estimate food and taco quantities, eliminating food waste and overspending.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="pt-4 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Our Commitment to Event Hosts</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We believe every event in Southern California deserves exceptional food without financial surprises. Whether you need taco bar catering in Pasadena, high-end wedding dining in Malibu, or corporate lunches in Downtown LA, our platform provides the exact data points you need to decide with confidence.
          </p>
        </div>

        {/* Editorial Team CTA */}
        <div className="pt-4 border-t border-gray-100 bg-gray-50 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">Connect With Our Editorial Team</h3>
            <p className="text-xs text-gray-500">
              Questions or interested in having your catering company featured?
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs rounded-lg transition"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigate('add-business')}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg transition"
            >
              List Your Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
