import React, { useState, useMemo } from 'react';
import { TACO_PROVIDERS } from '../data/caterers';
import type { TacoProvider } from '../types';
import { Search, Flame, Truck, Utensils, MapPin, ExternalLink } from 'lucide-react';

interface TacoCateringPageProps {
  onNavigate: (view: string) => void;
}

// طريقة الخدمة: كيف يصل الأكل للحدث
const SERVICE_TYPES = [
  { id: 'mobile', label: 'Taco Carts (Live On-Site)' },
  { id: 'truck', label: 'Food Trucks' },
  { id: 'event', label: 'Taco Bars & Buffets (Staffed)' },
  { id: 'dropoff', label: 'Drop-Off Taco Trays' },
] as const;

type ServiceId = (typeof SERVICE_TYPES)[number]['id'];

// التخصص: ماذا يقدّم المزود
const SPECIALTIES = [
  { id: 'birria', label: 'Birria & Quesabirria', pattern: /birria|quesabirria/i },
  { id: 'al-pastor', label: 'Al Pastor & Trompo', pattern: /pastor|trompo/i },
  { id: 'carne-asada-carnitas', label: 'Carne Asada & Carnitas', pattern: /carne asada|carnitas/i },
  { id: 'seafood-baja', label: 'Seafood & Baja', pattern: /seafood|shrimp|fish|baja/i },
  { id: 'vegan', label: 'Vegan & Vegetarian', pattern: /vegan|vegetarian|plant-based/i },
  { id: 'breakfast', label: 'Breakfast Tacos', pattern: /breakfast/i },
  { id: 'gourmet-fusion', label: 'Gourmet & Fusion', pattern: /gourmet|fusion/i },
];

// لا يظهر زر تخصص إلا إذا ضم هذا العدد من المزودين على الأقل
const MIN_PROVIDERS_FOR_CHIP = 3;

// إن وُجد tags في بيانات المزود تُستخدم كما هي، وإلا تُستنتج من الوصف والتخصص
const getSpecialties = (provider: TacoProvider): string[] => {
  if (provider.tags) return provider.tags;
  const text = [provider.description, provider.specialty || ''].join(' ');
  return SPECIALTIES.filter((s) => s.pattern.test(text)).map((s) => s.id);
};

const specialtyLabel = (id: string) => SPECIALTIES.find((s) => s.id === id)?.label ?? id;

export const TacoCateringPage: React.FC<TacoCateringPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceFilter, setServiceFilter] = useState<'all' | ServiceId>('all');
  const [specialtyFilter, setSpecialtyFilter] = useState<string>('all');

  const providers = useMemo(
    () => TACO_PROVIDERS.map((provider) => ({ provider, specialties: getSpecialties(provider) })),
    []
  );

  const serviceOptions = useMemo(
    () =>
      SERVICE_TYPES.map((s) => ({
        ...s,
        count: TACO_PROVIDERS.filter((p) => p.category.includes(s.id)).length,
      })).filter((s) => s.count > 0),
    []
  );

  const specialtyOptions = useMemo(
    () =>
      SPECIALTIES.map((s) => ({
        ...s,
        count: providers.filter((x) => x.specialties.includes(s.id)).length,
      })).filter((s) => s.count >= MIN_PROVIDERS_FOR_CHIP),
    [providers]
  );

  const filteredProviders = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return providers.filter(({ provider, specialties }) => {
      if (serviceFilter !== 'all' && !provider.category.includes(serviceFilter)) return false;
      if (specialtyFilter !== 'all' && !specialties.includes(specialtyFilter)) return false;
      if (!q) return true;
      const haystack = [
        provider.name,
        provider.area,
        provider.description,
        provider.specialty || '',
        ...provider.category,
        ...specialties.map(specialtyLabel),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [providers, searchTerm, serviceFilter, specialtyFilter]);

  const hasFilters = searchTerm !== '' || serviceFilter !== 'all' || specialtyFilter !== 'all';

  const resetFilters = () => {
    setSearchTerm('');
    setServiceFilter('all');
    setSpecialtyFilter('all');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Hero header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xs text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-900 mb-3">
          <Flame className="w-3.5 h-3.5 text-orange-600" />
          Los Angeles Catering Directory
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          Find Taco Catering in Los Angeles
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed mb-6">
          Compare mobile taco carts, food trucks, on-site taco bars and authentic Mexican event catering services across Southern California.
          Explore verified providers and contact them directly for custom menus, availability, and quotes.
        </p>

        {/* Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100">
          <div className="sm:col-span-2 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by provider, service, meat or neighborhood (e.g. Hollywood, truck, pastor)..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            />
          </div>

          <div>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value as 'all' | ServiceId)}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-medium text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            >
              <option value="all">All Service Types</option>
              {serviceOptions.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label} ({s.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Specialty chips */}
        {specialtyOptions.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">Specialty:</span>
            <button
              type="button"
              onClick={() => setSpecialtyFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                specialtyFilter === 'all'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              All
            </button>
            {specialtyOptions.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSpecialtyFilter(s.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                  specialtyFilter === s.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {s.label} ({s.count})
              </button>
            ))}
          </div>
        )}

        <p className="text-[11px] text-gray-400 mt-3 italic">
          Providers are independently listed, not ranked or endorsed. Always confirm service travel radius and food handler permits directly.
        </p>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-gray-800">
          {filteredProviders.length} Taco Catering Provider{filteredProviders.length === 1 ? '' : 's'} Found
        </h2>
        {hasFilters && (
          <button
            onClick={resetFilters}
            className="text-xs text-amber-700 hover:underline font-semibold"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Grid of Providers */}
      {filteredProviders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProviders.map(({ provider, specialties }) => {
            const { label, Icon } = provider.category.includes('truck')
              ? { label: 'Food Truck', Icon: Truck }
              : provider.category.includes('mobile')
              ? { label: 'Mobile Taco Cart', Icon: Flame }
              : provider.category.includes('dropoff')
              ? { label: 'Drop-Off Trays', Icon: Utensils }
              : { label: 'Taco Bar & Buffet', Icon: Utensils };

            return (
              <article
                key={provider.id}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-orange-50 text-orange-800 border border-orange-200">
                      <Icon className="w-3 h-3" />
                      {label}
                    </span>
                    {provider.startingPrice && (
                      <span className="text-xs font-semibold text-gray-500">
                        From {provider.startingPrice}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {provider.name}
                  </h3>

                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    {provider.description}
                  </p>

                  {provider.specialty && (
                    <div className="text-[11px] bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-gray-700 mb-3">
                      <span className="font-semibold text-gray-900">Signature:</span> {provider.specialty}
                    </div>
                  )}

                  {specialties.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {specialties.map((id) => (
                        <span
                          key={id}
                          className="px-2 py-0.5 rounded-sm text-[10px] font-medium bg-amber-50 text-amber-900 border border-amber-200/60"
                        >
                          {specialtyLabel(id)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-start gap-1 text-xs text-gray-500 mb-4 pt-2 border-t border-gray-100">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                    <span className="text-[11px]">{provider.area}</span>
                  </div>

                  <a
                    href={provider.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs transition"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
          <p className="text-gray-500 text-sm mb-3">
            No taco providers match your filters{searchTerm ? ` for "${searchTerm}"` : ''}.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-amber-600 text-white text-xs font-bold rounded-lg hover:bg-amber-700 transition"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Guide & Advice Section */}
      <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            How to Choose a Taco Caterer in Los Angeles
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ask whether your quote includes on-site taqueros, grilling setup, service window duration (typically 2–3 hours),
            travel fees, cleanup, taxes, and gratuity. For food trucks, verify parking footprint clearance and venue street permits.
            Ensure options for vegetarians (grilled nopales, rajas con crema, mushrooms) and confirm minimum guest guarantees.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Areas Served Across LA County</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            These independent providers advertise service across Greater Los Angeles. Coverage in Hollywood, Downtown LA (DTLA),
            the San Fernando Valley, Pasadena, Santa Monica, Beverly Hills, South Bay, Long Beach, and Glendale varies by company and event date.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Operate an LA taco catering business?</h4>
            <p className="text-xs text-gray-500">
              Submit your company for listing consideration or claim your listing.
            </p>
          </div>
          <button
            onClick={() => onNavigate('list-your-business')}
            className="shrink-0 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs rounded-lg transition"
          >
            Submit Your Business &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
