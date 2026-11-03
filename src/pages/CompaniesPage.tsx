import React, { useState, useMemo } from 'react';
import { CATERING_COMPANIES } from '../data/caterers';
import { Search, MapPin, ExternalLink, ShieldCheck, Tag, Star } from 'lucide-react';

interface CompaniesPageProps {
  onNavigate: (view: string) => void;
  activeFilter?: string;
  searchQuery?: string;
  locationQuery?: string;
}

export const CompaniesPage: React.FC<CompaniesPageProps> = ({
  onNavigate,
  activeFilter = 'all',
  searchQuery = '',
  locationQuery = '',
}) => {
  const [filter, setFilter] = useState<string>(activeFilter);
  const [search, setSearch] = useState<string>(searchQuery);
  const [location, setLocation] = useState<string>(locationQuery);

  const filterTabs = [
    { id: 'all', label: 'All Caterers' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'tacos', label: 'Tacos' },
    { id: 'film', label: 'Film & TV Sets' },
    { id: 'charcuterie', label: 'Charcuterie' },
  ];

  const filteredCompanies = useMemo(() => {
    const q = search.trim().toLowerCase();
    const loc = location.trim().toLowerCase();

    return CATERING_COMPANIES.filter((company) => {
      // Category match
      const matchesCategory =
        filter === 'all' ||
        company.categories.includes(filter) ||
        company.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase()));

      if (!matchesCategory) return false;

      // Location match
      if (loc && !company.area.toLowerCase().includes(loc)) {
        return false;
      }

      // Query match
      if (!q) return true;
      const haystack = [
        company.name,
        company.area,
        company.description || '',
        ...company.tags,
        ...company.categories,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [filter, search, location]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xs text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          Los Angeles Catering Companies Directory
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
          Find caterers for weddings, corporate events, live taco bars, and film production crews across LA County.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by caterer name or cuisine..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            />
          </div>
          <div className="relative">
            <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Filter by city/area (e.g. Burbank, Beverly Hills)..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">
          Showing {filteredCompanies.length} Verified Listing{filteredCompanies.length === 1 ? '' : 's'}
        </h2>
        {(search || location || filter !== 'all') && (
          <button
            onClick={() => {
              setSearch('');
              setLocation('');
              setFilter('all');
            }}
            className="text-xs text-amber-700 hover:underline font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Grid of Company Cards */}
      {filteredCompanies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCompanies.map((company) => (
            <article
              key={company.id}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-amber-600 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{company.rating}</span>
                    <span className="text-gray-400 font-normal">({company.reviewCount})</span>
                  </div>
                  <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-sm">
                    {company.priceLevel || '$$'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {company.url ? (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-700 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{company.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                    </a>
                  ) : (
                    <span>{company.name}</span>
                  )}
                </h3>

                <p className="text-xs text-gray-500 flex items-center gap-1 mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{company.area}</span>
                </p>

                {company.description && (
                  <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                    {company.description}
                  </p>
                )}
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {company.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-sm text-[11px] font-medium bg-amber-50 text-amber-900 border border-amber-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-gray-100">
                  {company.url ? (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold transition"
                    >
                      <span>Visit Official Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onNavigate('add-business')}
                      className="w-full py-2 px-3 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold transition"
                    >
                      Claim or View Listing
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            No caterers found matching the selected criteria.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setLocation('');
              setFilter('all');
            }}
            className="px-4 py-2 bg-amber-600 text-white text-xs font-bold rounded-lg hover:bg-amber-700 transition"
          >
            Show All Caterers
          </button>
        </div>
      )}

      {/* Claim or Add notice */}
      <div className="bg-gray-100 rounded-xl p-6 text-center text-xs text-gray-600">
        <p className="font-semibold text-gray-800 mb-1">
          Are you a licensed Los Angeles caterer or food truck owner?
        </p>
        <p className="mb-3">
          Get discovered by thousands of party hosts, corporate coordinators, and wedding planners monthly.
        </p>
        <button
          onClick={() => onNavigate('add-business')}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition"
        >
          Submit or Claim Your Business &rarr;
        </button>
      </div>
    </div>
  );
};
