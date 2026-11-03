import React from 'react';
import { DualSearchBar } from '../components/DualSearchBar';
import { CostEstimator } from '../components/CostEstimator';
import { TacoCalculator } from '../components/TacoCalculator';
import { CATERING_COMPANIES } from '../data/caterers';
import { HelpCircle, DollarSign, Award, ChevronRight, ShieldCheck, MapPin, Utensils } from 'lucide-react';

interface HomePageProps {
  onNavigate: (view: string) => void;
  onSearchTransfer: (query: string, location: string) => void;
  onCategoryFilterTransfer: (category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSearchTransfer,
  onCategoryFilterTransfer,
}) => {
  const handleSearch = (query: string, location: string) => {
    onSearchTransfer(query, location);
    onNavigate('companies');
  };

  const handleFilterClick = (filter: string) => {
    if (filter === 'tacos' || filter === 'truck') {
      onNavigate('taco-catering');
    } else {
      onCategoryFilterTransfer(filter);
      onNavigate('companies');
    }
  };

  const featuredCaterers = CATERING_COMPANIES.slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            Independent Greater LA Catering Guide & Estimator
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Find Local Catering in Greater Los Angeles
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Compare Vetted Caterers, Private Chefs, and Taco Bars Across LA County with transparent per-person pricing.
          </p>

          <DualSearchBar
            onSearch={handleSearch}
            onFilterClick={handleFilterClick}
          />
        </div>
      </section>

      {/* Main Estimator Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Instant Los Angeles Event Cost Calculator
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Calculate benchmark costs for weddings, corporate luncheons, private parties, and taco bars.
          </p>
        </div>

        <CostEstimator onNavigate={onNavigate} />
      </section>

      {/* Taco Calculator Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <TacoCalculator onExploreTacoCaterers={() => onNavigate('taco-catering')} />
      </section>

      {/* Featured Vetted Caterers */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-6 pb-2 border-b border-gray-200 gap-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Featured Los Angeles Caterers</h3>
            <p className="text-xs text-gray-500">Top-rated culinary providers across Greater LA</p>
          </div>
          <button
            onClick={() => onNavigate('companies')}
            className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1"
          >
            View all 20+ directory listings <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCaterers.map((caterer) => (
            <div
              key={caterer.id}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span className="font-semibold text-amber-700">{caterer.priceLevel || '$$'}</span>
                  <span className="text-gray-500 font-medium">★ {caterer.rating} ({caterer.reviewCount})</span>
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">{caterer.name}</h4>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span className="truncate">{caterer.area}</span>
                </p>
                <p className="text-xs text-gray-600 line-clamp-2 mb-4">
                  {caterer.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {caterer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-sm text-[10px] font-medium bg-amber-50 text-amber-900 border border-amber-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {caterer.url ? (
                  <a
                    href={caterer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 px-3 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold transition"
                  >
                    Visit Website ↗
                  </a>
                ) : (
                  <button
                    onClick={() => onNavigate('add-business')}
                    className="block w-full text-center py-2 px-3 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold transition"
                  >
                    Claim Listing
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Guide & FAQ Section (from original index.html) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xs space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-amber-600" />
              How Los Angeles Catering is Priced
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Most caterers quote per person, then add charges for service, staffing, rentals, delivery and taxes.
              The calculator above uses realistic planning rates by event type so you can budget before requesting formal quotes.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-gray-900 shrink-0">&bull; Guest count:</span>
                <span>Larger groups usually lower the per-person price, and many caterers set minimum order thresholds (e.g. 25-50 guests).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-gray-900 shrink-0">&bull; Menu & service style:</span>
                <span>Drop-off food trays cost significantly less than live taco bars, interactive buffet stations, or multi-course plated dinners with servers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-gray-900 shrink-0">&bull; Los Angeles logistics:</span>
                <span>Venue kitchen facilities, bartending permits, travel across LA traffic corridors (405, 101, 10), and venue breakdown/cleanup add to totals.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  How much does catering cost per person in Los Angeles?
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  It depends on the menu and service level. Casual taco carts average $18–$28 per guest, corporate lunches range $30–$45, and full-service wedding dinners range $65–$150+ per guest.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Is the estimate an official quote?
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  No. It is a benchmark planning tool. A caterer provides a binding quote after reviewing your custom menu, venue kitchen access, exact date, and guest count.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Do you provide the food or catering directly?
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  No. We are an independent directory, portion estimator, and resource hub. You work and contract directly with the catering company you choose.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  What questions should I ask an LA caterer before booking?
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Always confirm per-person price, minimum guest count, staffing charges, rental dinnerware provisions, travel fees, deposit cancellation policies, and allergy accommodations.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => onNavigate('companies')}
                className="px-6 py-2.5 rounded-lg bg-gray-900 text-white font-bold text-xs hover:bg-gray-800 transition"
              >
                Browse Full Los Angeles Catering Directory &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
